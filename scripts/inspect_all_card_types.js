const fs = require('fs');
const path = require('path');

const folders = ['washing-machine', 'ac', 'fridge', 'tv'];

folders.forEach(folder => {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  console.log(`\n=================== FOLDER: ${folder} ===================`);
  let totalCards = 0;
  let cardsWithParts = 0;
  let cardsWithPricing = 0;
  
  files.forEach(f => {
    const content = fs.readFileSync(path.join(folder, f), 'utf8');
    // Find types section
    let idx = content.search(/<h2[^>]*>[^<]*(?:Types|Models)[^<]*<\/h2>/i);
    if (idx === -1) return;
    const secEnd = content.indexOf('</section>', idx);
    const secHtml = content.slice(idx, secEnd !== -1 ? secEnd : idx + 8000);
    const cards = secHtml.split('<div class="type-card"');
    if (cards.length > 1) {
      for (let i = 1; i < cards.length; i++) {
        totalCards++;
        const card = cards[i];
        if (/Parts Checked|Parts involved|Parts Tested/i.test(card)) cardsWithParts++;
        if (/type-pricing-box|Estimated Service Charges|Estimated Price/i.test(card)) cardsWithPricing++;
      }
    }
  });
  console.log(`Total Cards: ${totalCards} | With Parts: ${cardsWithParts} | With Pricing: ${cardsWithPricing}`);
});
