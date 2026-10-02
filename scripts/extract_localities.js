const fs = require('fs');
const content = fs.readFileSync('ac-repair-service-in-karur.html', 'utf8');
const locStart = content.indexOf('<div class="localities-grid-expanded">');
const locEnd = content.indexOf('</div>\n    </div>\n  </section>', locStart);
const inner = content.substring(locStart, locEnd);

const regex = /<div class="locality-card">[\s\S]*?<div class="loc-title">📍\s*([\s\S]*?)<\/div>[\s\S]*?<div class="loc-keyword">([\s\S]*?)<\/div>[\s\S]*?<p class="loc-desc">([\s\S]*?)<\/p>[\s\S]*?<\/div>/g;

let match;
const localities = [];
while ((match = regex.exec(inner)) !== null) {
  localities.push({
    title: match[1].trim(),
    keyword: match[2].trim(),
    desc: match[3].trim()
  });
}

console.log(`Found ${localities.length} localities.`);
console.log('Sample first 5:', localities.slice(0, 5));
console.log('Sample last 5:', localities.slice(-5));
fs.writeFileSync('scripts/karur_localities.json', JSON.stringify(localities, null, 2));
