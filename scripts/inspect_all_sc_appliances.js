const fs = require('fs');
const path = require('path');

const scDir = path.join(__dirname, '..', 'service-center');
const files = fs.readdirSync(scDir).filter(f => f.endsWith('.html'));

const brandAppMap = {};
const canonicalSet = new Set();

for (const file of files) {
  const content = fs.readFileSync(path.join(scDir, file), 'utf8');
  const appSectionMatch = content.match(/<section[^>]*id=["']appliances["'][^>]*>([\s\S]*?)<\/section>/i) 
    || content.match(/Home Appliances We Service[\s\S]*?<\/section>/i);
  
  const cards = [];
  if (appSectionMatch) {
    const cardMatches = [...appSectionMatch[0].matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)];
    for (const m of cardMatches) {
      const title = m[1].replace(/<[^>]+>/g, '').trim();
      cards.push(title);
    }
  }

  // Get brand name from file name or h1
  const brandSlug = file.replace('-service-center-kanyakumari.html', '');
  
  brandAppMap[brandSlug] = cards;
}

// Let's analyze all distinct card names and map them
const appTypeCounts = {};
for (const [brand, cards] of Object.entries(brandAppMap)) {
  for (const card of cards) {
    // remove brand prefix if card starts with brand name (case-insensitive)
    let clean = card;
    const regex = new RegExp(`^${brand}\\s*`, 'i');
    clean = clean.replace(regex, '').trim();
    appTypeCounts[clean] = (appTypeCounts[clean] || 0) + 1;
  }
}

console.log('Appliance Categories found across all 55 Service Centers:');
console.log(JSON.stringify(appTypeCounts, null, 2));

// Also let's print for each brand what cards they have
console.log('\n--- BRAND BY BRAND CARDS COUNT ---');
for (const [brand, cards] of Object.entries(brandAppMap)) {
  console.log(`${brand} (${cards.length}): ${cards.join(', ')}`);
}
