const fs = require('fs');

const testFiles = [
  'ac/daikin-ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'servicecenter/samsung-service-center-karur.html'
];

testFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  let expIdx = content.indexOf('id="experiences"');
  if (expIdx === -1) {
    expIdx = content.search(/<h2[^>]*>[^<]*(?:Experiences|Real-Life|Customer Situations|Recent)[^<]*<\/h2>/i);
  }
  if (expIdx === -1) {
    console.log('No experiences section found');
    return;
  }
  const secEnd = content.indexOf('</section>', expIdx);
  const sec = content.slice(expIdx, secEnd !== -1 ? secEnd : expIdx + 4000);
  console.log('Section snippet (first 1200 chars):');
  console.log(sec.slice(0, 1200).replace(/\s+/g, ' '));
});
