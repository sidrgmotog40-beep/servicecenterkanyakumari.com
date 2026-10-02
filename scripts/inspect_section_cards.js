const fs = require('fs');

const testFiles = [
  'washing-machine/samsung-washing-machine-repair-service-in-karur.html',
  'washing-machine/washing-machine-repair-service-in-karur.html',
  'ac/daikin-ac-repair-service-in-karur.html',
  'ac/ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'fridge/refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'tv/tv-repair-service-in-karur.html',
  'service-center/samsung-service-center-karur.html',
  'index.html'
];

testFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log('====================================');
  console.log('FILE:', file);
  
  // Find where Types We Service / Types We Repair is
  const idx = content.search(/<h2>[^<]*Types[^<]*<\/h2>/i);
  if (idx !== -1) {
    const secStart = content.lastIndexOf('<section', idx);
    const secEnd = content.indexOf('</section>', idx);
    const sec = content.slice(secStart, secEnd + 10);
    // Print container tag and first child tag
    console.log('Section snippet (first 600 chars):');
    console.log(sec.slice(0, 600).replace(/\s+/g, ' '));
  } else {
    console.log('No Types h2 found. Other h2s:');
    const h2s = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)].map(m => m[1]);
    console.log(h2s.slice(0, 5));
  }
});
