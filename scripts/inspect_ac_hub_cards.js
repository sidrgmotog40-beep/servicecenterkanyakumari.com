const fs = require('fs');

const content = fs.readFileSync('ac/ac-repair-service-in-karur.html', 'utf8');
const start = content.indexOf('Air Conditioner Types We Service in Karur');
const end = content.indexOf('Why Regular AC Service Matters');
console.log(content.slice(start, end));
