const fs = require('fs');

const content = fs.readFileSync('servicecenter/lloyd-service-center-kanyakumari.html', 'utf8');

const appEndRegex = /<!-- Appliances We Service -->[\s\S]*?<\/section>/i;
const appMatch = content.match(appEndRegex);

const howRegex = /<!-- How [^>]*Works -->|<section[^>]*id=["']how-it-works["']|<div[^>]*class=["']container["'][^>]*>\s*<div[^>]*class=["']section-header["'][^>]*>\s*<h2>How /i;
const howMatch = content.match(howRegex);

if (appMatch && howMatch) {
  const startIndex = appMatch.index + appMatch[0].length;
  const endIndex = howMatch.index;
  console.log('App end at:', startIndex, 'How start at:', endIndex);
  const block = content.substring(startIndex, endIndex);
  console.log('Block length:', block.length);
  console.log('First 200 chars of block:\n', block.substring(0, 200));
  console.log('Last 200 chars of block:\n', block.substring(block.length - 200));
}
