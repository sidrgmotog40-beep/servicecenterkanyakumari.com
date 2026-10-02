const fs = require('fs');

const content = fs.readFileSync('tv/tv-repair-service-in-karur.html', 'utf8');
const start = content.indexOf('Television Types We Repair in Karur');
const end = content.indexOf('Why Regular TV Maintenance Matters');
const typesSec = content.slice(start, end);
const cards = typesSec.split('<div class="type-card"');
console.log('TV Hub Card 1:');
console.log(cards[1].slice(0, 1000));
