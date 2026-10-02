const fs = require('fs');

const files = [
  'washing-machine/samsung-washing-machine-repair-service-in-karur.html',
  'washing-machine/washing-machine-repair-service-in-karur.html',
  'ac/daikin-ac-repair-service-in-karur.html',
  'ac/ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'fridge/refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'tv/tv-repair-service-in-karur.html',
  'service-center/samsung-service-center-karur.html',
  'service-center/home-appliance-service-center-karur.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log('FILE:', f);
  // Find types section
  const m = c.match(/<section[^>]*id=["']typesSection["'][^>]*>[\s\S]*?<\/section>/i) ||
            c.match(/<section[^>]*>[\s\S]*?<h2[^>]*>.*?(?:Types|Categories We Service|Models).*?<\/h2>[\s\S]*?<\/section>/i);
  if (m) {
    const cardMatches = m[0].match(/<div class=["'](?:type-card|service-card)["'][\s\S]*?<\/div>\s*(?=<div class=["'](?:type-card|service-card)["']|<\/div>\s*<\/section>|<\/div>\s*<\/div>\s*<\/section>)/gi) || [];
    console.log('  Types section found! Length:', m[0].length, 'Cards count:', cardMatches.length);
    if (cardMatches.length > 0) {
      const h3s = cardMatches.map(card => {
        const h3 = card.match(/<h[34][^>]*>(.*?)<\/h[34]>/i);
        return h3 ? h3[1].replace(/<[^>]+>/g, '').trim() : 'no heading';
      });
      console.log('  Card headings:', h3s.slice(0, 6));
    }
  } else {
    console.log('  No types section found.');
  }
});
