const fs = require('fs');

const content = fs.readFileSync('service-center/samsung-service-center-karur.html', 'utf8');
const idx = content.indexOf('Samsung Washing Machine Service Center Karur');
console.log(content.slice(idx - 50, idx + 1000));
