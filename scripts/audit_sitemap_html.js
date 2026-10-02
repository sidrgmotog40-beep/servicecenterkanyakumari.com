// audit_sitemap_html.js
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('sitemap.html', 'utf8');

// Find all hrefs inside sitemap.html
const hrefs = [...content.matchAll(/href="([^"#]+)"/g)].map(m => m[1]);
console.log('Total hrefs in sitemap.html:', hrefs.length);

const domain = 'https://servicecenterkanyakumari.com';
const internalHrefs = hrefs.filter(h => !h.startsWith('tel:') && !h.startsWith('mailto:') && !h.startsWith('http://') && !h.startsWith('https://') || h.startsWith(domain));

console.log('Internal links in sitemap.html:', internalHrefs.length);

const broken = [];
const nonExistent = [];
const karurReferences = [];

hrefs.forEach(h => {
  if (h.toLowerCase().includes('karur')) {
    karurReferences.push(h);
  }
  let localPath = h;
  if (localPath.startsWith(domain)) {
    localPath = localPath.slice(domain.length);
  }
  if (localPath.startsWith('/')) {
    localPath = localPath.slice(1);
  }
  if (localPath === '') {
    localPath = 'index.html';
  }

  // If it's a relative html or root link
  if (!h.startsWith('tel:') && !h.startsWith('mailto:') && !h.startsWith('http')) {
    if (!fs.existsSync(localPath)) {
      nonExistent.push({ href: h, resolved: localPath });
    }
  }
});

console.log('Karur references in hrefs:', karurReferences.length);
console.log('Non-existent file targets:', nonExistent.length);
if (nonExistent.length > 0) {
  console.log('Broken targets:', nonExistent);
}

// Check how many of the 175 files are linked in sitemap.html
function getAllHtml(dir) {
  let res = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const full = path.join(dir, d.name);
    if (d.isDirectory() && d.name !== 'node_modules' && d.name !== '.git') {
      res = res.concat(getAllHtml(full));
    } else if (d.isFile() && d.name.endsWith('.html')) {
      res.push(full);
    }
  });
  return res;
}
const allHtml = getAllHtml('.').map(f => f.replace(/\\/g, '/').replace(/^\.\//, ''));
const unlinked = allHtml.filter(f => {
  if (f === 'index.html' || f === 'sitemap.html') return false;
  return !content.includes(f);
});

console.log('Unlinked HTML pages in sitemap.html:', unlinked.length);
if (unlinked.length > 0) {
  console.log('Unlinked files:', unlinked);
}
