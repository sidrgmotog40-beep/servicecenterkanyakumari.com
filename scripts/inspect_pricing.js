const fs = require('fs');

function inspectPricing(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log('=== PRICING IN:', file, '===');
  const tableIdx = content.indexOf('<table');
  if (tableIdx !== -1) {
    const endTable = content.indexOf('</table>', tableIdx);
    console.log(content.slice(tableIdx, endTable + 8));
  } else {
    // Look for price-related headers
    const m = content.match(/<h2[^>]*>.*?(?:price|pricing|cost|charges).*?<\/h2>/i);
    if (m) {
      const idx = content.indexOf(m[0]);
      console.log(content.slice(idx, idx + 800));
    } else {
      console.log('No table or price h2 found');
    }
  }
}

inspectPricing('washing-machine/samsung-washing-machine-repair-service-in-karur.html');
inspectPricing('ac/daikin-ac-repair-service-in-karur.html');
inspectPricing('fridge/whirlpool-refrigerator-repair-service-in-karur.html');
inspectPricing('tv/sony-tv-repair-service-in-karur.html');
