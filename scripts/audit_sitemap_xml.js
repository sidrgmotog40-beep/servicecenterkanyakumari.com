// audit_sitemap_xml.js
const fs = require('fs');
const path = require('path');

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

const htmlFiles = getAllHtml('.').map(f => f.replace(/\\/g, '/').replace(/^\.\//, ''));
console.log('Total HTML files in repo:', htmlFiles.length);

const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log('Total <loc> URLs in sitemap.xml:', locMatches.length);

const locSet = new Set(locMatches);
console.log('Unique <loc> URLs:', locSet.size);

// Check differences
const missingFromSitemap = [];
const missingFromFileSystem = [];

const domain = 'https://servicecenterkanyakumari.com/';

htmlFiles.forEach(file => {
  let expectedUrl;
  if (file === 'index.html') {
    expectedUrl = domain;
  } else {
    expectedUrl = domain + file;
  }

  if (!locSet.has(expectedUrl)) {
    missingFromSitemap.push({ file, expectedUrl });
  }
});

locMatches.forEach(url => {
  if (!url.startsWith(domain)) {
    missingFromFileSystem.push({ url, reason: 'Does not start with production domain' });
    return;
  }
  const rel = url.slice(domain.length);
  const localFile = rel === '' ? 'index.html' : rel;
  if (!fs.existsSync(localFile)) {
    missingFromFileSystem.push({ url, localFile, reason: 'File does not exist' });
  }
});

console.log('Missing from sitemap count:', missingFromSitemap.length);
if (missingFromSitemap.length > 0) {
  console.log('Missing items:', missingFromSitemap);
}

console.log('Invalid/Nonexistent URLs in sitemap count:', missingFromFileSystem.length);
if (missingFromFileSystem.length > 0) {
  console.log('Invalid items in sitemap:', missingFromFileSystem);
}
