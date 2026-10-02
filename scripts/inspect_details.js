const fs = require('fs');

function inspect(file) {
  console.log('====================================');
  console.log('FILE:', file);
  const content = fs.readFileSync(file, 'utf8');
  
  // Find types section
  const startIdx = content.indexOf('<section class="types-section') !== -1 ? 
    content.indexOf('<section class="types-section') : 
    (content.indexOf('Types We') !== -1 ? content.lastIndexOf('<section', content.indexOf('Types We')) : -1);
    
  if (startIdx !== -1) {
    const endIdx = content.indexOf('</section>', startIdx);
    const sectionHtml = content.slice(startIdx, endIdx + 10);
    console.log('--- SECTION HEADER ---');
    console.log(sectionHtml.slice(0, 300));
    console.log('--- FIRST CARD ---');
    const cardMatch = sectionHtml.match(/<div class="type-card"[\s\S]*?<\/div>\s*<\/div>/);
    if (cardMatch) {
      console.log(cardMatch[0]);
    } else {
      console.log('No type-card regex match, printing first 1000 chars:');
      console.log(sectionHtml.slice(0, 1000));
    }
  } else {
    console.log('Types section not found');
  }
}

inspect('washing-machine/samsung-washing-machine-repair-service-in-karur.html');
inspect('ac/daikin-ac-repair-service-in-karur.html');
inspect('fridge/whirlpool-refrigerator-repair-service-in-karur.html');
inspect('tv/sony-tv-repair-service-in-karur.html');
