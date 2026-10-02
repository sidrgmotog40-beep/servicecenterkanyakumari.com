const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'scripts') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) results = results.concat(getHtmlFiles(fullPath));
    else if (file.endsWith('.html')) results.push(fullPath);
  });
  return results;
}

const all = getHtmlFiles('.');
const topBarFiles = [];

all.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('class="top-bar"')) {
    const match = content.match(/<!--\s*Top Information Bar\s*-->[\s\S]*?<\/div>\s*<\/div>/i) ||
                  content.match(/<div class=["']top-bar["'][\s\S]*?<\/div>\s*<\/div>/i);
    topBarFiles.push({ file: f, snippet: match ? match[0] : 'no-regex-match' });
  }
});

console.log('Total files with class="top-bar":', topBarFiles.length);
topBarFiles.slice(0, 5).forEach(t => {
  console.log('---', t.file, '---');
  console.log(t.snippet);
});
