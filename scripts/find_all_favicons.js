const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(full));
      }
    } else {
      results.push(full);
    }
  }
  return results;
}

const allFiles = walk(process.cwd());

const faviconFiles = allFiles.filter(f => {
  const base = path.basename(f).toLowerCase();
  return base.includes('favicon') || base.includes('apple-touch') || base.includes('webmanifest') || base.includes('manifest.json');
});

console.log('Favicon-related files in project:');
faviconFiles.forEach(f => console.log(' - ' + path.relative(process.cwd(), f)));
