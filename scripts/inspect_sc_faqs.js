const fs = require('fs');

const content = fs.readFileSync('service-center/samsung-service-center-karur.html', 'utf8');
const idx = content.indexOf('Frequently Asked Questions');
console.log(content.slice(idx, idx + 2500));
