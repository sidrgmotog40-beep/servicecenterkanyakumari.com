// inspect_html_heads.js
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

const htmlFiles = getAllHtml('.');
console.log('Total HTML files:', htmlFiles.length);

const faviconPatterns = new Set();
let missingIconFileRefs = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const links = content.match(/<link[^>]+(icon|manifest)[^>]*>/gi) || [];
  links.forEach(l => faviconPatterns.add(l.trim()));
});

console.log('Unique icon/manifest link tags across project:');
faviconPatterns.forEach(p => console.log('  ', p));
