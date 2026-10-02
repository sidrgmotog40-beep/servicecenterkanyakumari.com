const fs = require('fs');

const testFiles = [
  'washing-machine/bosch-washing-machine-repair-service-in-karur.html',
  'ac/carrier-ac-repair-service-in-karur.html',
  'fridge/haier-refrigerator-repair-service-in-karur.html',
  'tv/lg-tv-repair-service-in-karur.html',
  'service-center/bosch-service-center-karur.html'
];

testFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  let expIdx = content.indexOf('id="experiences"');
  if (expIdx === -1) {
    expIdx = content.search(/<h2[^>]*>[^<]*(?:Experiences|Real-Life|Customer Situations|Recent)[^<]*<\/h2>/i);
  }
  if (expIdx === -1) return;
  const secEnd = content.indexOf('</section>', expIdx);
  const sec = content.slice(expIdx, secEnd !== -1 ? secEnd : expIdx + 4000);
  const h4s = [...sec.matchAll(/<h[34][^>]*>(.*?)<\/h[34]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H4s:', h4s);
});
