const fs = require('fs');

function inspectCardsInFile(file) {
  console.log('=== FILE:', file, '===');
  const content = fs.readFileSync(file, 'utf8');
  const cards = content.split('<div class="type-card"');
  for (let i = 1; i < cards.length; i++) {
    const card = cards[i];
    const h3 = card.match(/<h[34][^>]*>(.*?)<\/h[34]>/i);
    const parts = card.match(/Common Parts Checked:<\/strong>(.*?)(?=<\/div>|<\/p>|<ul)/i) ||
                  card.match(/Parts involved:<\/strong>(.*?)(?=<\/div>|<\/p>|<ul)/i);
    const pricing = card.match(/Estimated Service Charges|price|₹/i);
    console.log(`Card ${i}: ${h3 ? h3[1].replace(/<[^>]+>/g, '').trim() : 'No H3'}`);
    console.log(`  Parts: ${parts ? parts[1].replace(/<[^>]+>/g, '').trim() : 'NONE'}`);
    console.log(`  Has Pricing: ${pricing ? 'YES' : 'NO'}`);
  }
}

inspectCardsInFile('washing-machine/samsung-washing-machine-repair-service-in-karur.html');
inspectCardsInFile('ac/daikin-ac-repair-service-in-karur.html');
inspectCardsInFile('fridge/whirlpool-refrigerator-repair-service-in-karur.html');
inspectCardsInFile('tv/sony-tv-repair-service-in-karur.html');
