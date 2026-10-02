const fs = require('fs');

function inspectPage(filePath) {
  console.log('====================================================');
  console.log('FILE:', filePath);
  console.log('====================================================');
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Find all sections and their headings
  const sectionRegex = /<section\b[^>]*>([\s\S]*?)<\/section>/g;
  let match;
  let idx = 0;
  while ((match = sectionRegex.exec(html)) !== null) {
    idx++;
    const full = match[0];
    const content = match[1];
    const idMatch = full.match(/id="([^"]+)"/);
    const classMatch = full.match(/class="([^"]+)"/);
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h2Match = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    
    console.log(`Section #${idx}: id="${idMatch ? idMatch[1] : ''}" class="${classMatch ? classMatch[1] : ''}"`);
    if (h1Match) console.log(`   H1: ${h1Match[1].replace(/<[^>]+>/g, '').trim()}`);
    if (h2Match) console.log(`   H2: ${h2Match[1].replace(/<[^>]+>/g, '').trim()}`);
    
    // First 150 chars of text
    const textSnippet = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);
    console.log(`   Text: ${textSnippet}...`);
  }
}

inspectPage('ac/daikin-ac-repair-service-in-kanyakumari.html');
inspectPage('fridge/godrej-refrigerator-repair-service-in-kanyakumari.html');
inspectPage('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
inspectPage('tv/sony-tv-repair-service-in-kanyakumari.html');
inspectPage('servicecenter/samsung-service-center-kanyakumari.html');
