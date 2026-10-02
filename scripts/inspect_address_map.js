const fs = require('fs');
const path = require('path');

const sample = fs.readFileSync(path.join(__dirname, '..', 'service-center', 'lloyd-service-center-kanyakumari.html'), 'utf8');

const mapMatch = sample.match(/<iframe[^>]*src=["']([^"']+)["'][^>]*>/i);
if (mapMatch) console.log('Map src:', mapMatch[1]);

// Search for any address blocks or "Court Road" or "Cape Rd" or postalCode in sample
const lines = sample.split('\n');
console.log('\nAddress lines:');
lines.forEach((l, idx) => {
  if (l.includes('Court Road') || l.includes('Cape') || l.includes('629') || l.includes('639') || l.includes('RPM')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});

// Check JSON-LD
const jsonLdMatches = [...sample.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
console.log('\nJSON-LD scripts count:', jsonLdMatches.length);
jsonLdMatches.forEach((m, i) => {
  if (m[1].includes('Address') || m[1].includes('address') || m[1].includes('postalCode')) {
    console.log(`JSON-LD ${i}:`, m[1].substring(0, 300));
  }
});
