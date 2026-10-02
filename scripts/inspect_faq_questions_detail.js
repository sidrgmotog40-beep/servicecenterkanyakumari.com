const fs = require('fs');

const testFiles = [
  'washing-machine/samsung-washing-machine-repair-service-in-karur.html',
  'washing-machine/lg-washing-machine-repair-service-in-karur.html',
  'ac/daikin-ac-repair-service-in-karur.html',
  'ac/voltas-ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'fridge/acer-refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'tv/samsung-tv-repair-service-in-karur.html',
  'servicecenter/samsung-service-center-karur.html'
];

testFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  const h2Idx = content.search(/<h2[^>]*>[^<]*(?:Frequently Asked Questions|FAQ)[^<]*<\/h2>/i);
  if (h2Idx === -1) return;
  const secEnd = content.indexOf('</section>', h2Idx);
  const sec = content.slice(h2Idx, secEnd !== -1 ? secEnd : h2Idx + 8000);
  
  // Extract all questions
  const qList = [];
  const qMatches1 = [...sec.matchAll(/<button class=["']faq-question["'][^>]*>\s*<span>(.*?)<\/span>/gi)];
  qMatches1.forEach(m => qList.push(m[1].trim()));
  
  const qMatches2 = [...sec.matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)];
  qMatches2.forEach(m => qList.push(m[1].replace(/<[^>]+>/g, '').trim()));
  
  console.log(`Questions (${qList.length}):`);
  qList.forEach((q, i) => console.log(`  ${i+1}. ${q}`));
});
