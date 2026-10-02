const fs = require('fs');

const files = [
  'washing-machine/samsung-washing-machine-repair-service-in-karur.html',
  'ac/daikin-ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'service-center/samsung-service-center-karur.html'
];

files.forEach(f => {
  console.log('====================================');
  console.log('FILE:', f);
  const content = fs.readFileSync(f, 'utf8');
  const typeHeadings = content.match(/<h2[^>]*>.*?Types.*?<\/h2>/gi) ||
                       content.match(/<h2[^>]*>.*?Models.*?<\/h2>/gi) ||
                       content.match(/<h2[^>]*>.*?Appliances We Service.*?<\/h2>/gi);
  console.log('Type Section Headings:', typeHeadings);

  const typeCards = content.match(/<div class=["']type-card["'][\s\S]*?<\/div>\s*<\/div>/gi) ||
                    content.match(/<div class=["']service-card["'][\s\S]*?<\/div>\s*<\/div>/gi);
  if (typeCards) {
    console.log('Type Cards count:', typeCards.length);
    console.log('Sample Card snippet:');
    console.log(typeCards[0].slice(0, 400).replace(/\s+/g, ' '));
  }
});
