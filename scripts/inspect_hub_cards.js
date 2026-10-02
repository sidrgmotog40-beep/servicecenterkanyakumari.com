const fs = require('fs');

const hubFiles = [
  'washing-machine/washing-machine-repair-service-in-karur.html',
  'ac/ac-repair-service-in-karur.html',
  'fridge/refrigerator-repair-service-in-karur.html',
  'tv/tv-repair-service-in-karur.html'
];

hubFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== HUB FILE:', f, '===');
  const cards = content.split('<div class="type-card"');
  console.log(`Cards count: ${cards.length - 1}`);
  if (cards.length > 1) {
    console.log('Card 1 sample:');
    console.log(cards[1].slice(0, 500).replace(/\s+/g, ' '));
  }
});
