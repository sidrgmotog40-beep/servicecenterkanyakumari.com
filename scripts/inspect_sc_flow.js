const fs = require('fs');

const content = fs.readFileSync('service-center/lloyd-service-center-kanyakumari.html', 'utf8');
const lines = content.split('\n');

let targetLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Home Appliances We Service')) {
    targetLine = i;
    break;
  }
}

console.log('Target line:', targetLine);
if (targetLine !== -1) {
  for (let i = Math.max(0, targetLine - 5); i < Math.min(lines.length, targetLine + 50); i++) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}
