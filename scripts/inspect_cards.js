const fs = require('fs');

function inspectCards(file) {
  console.log('====================================');
  console.log('FILE:', file);
  const content = fs.readFileSync(file, 'utf8');
  
  // Find all <div class="type-card"...
  // We can find by searching '<div class="type-card' and finding its balance or next type-card
  const matches = content.split('<div class="type-card');
  console.log('Found cards:', matches.length - 1);
  if (matches.length > 1) {
    for (let i = 1; i < Math.min(3, matches.length); i++) {
      console.log(`--- Card ${i} ---`);
      // take first 1200 characters of the card
      console.log(('<div class="type-card' + matches[i]).slice(0, 1000));
    }
  }
}

inspectCards('washing-machine/samsung-washing-machine-repair-service-in-karur.html');
inspectCards('ac/daikin-ac-repair-service-in-karur.html');
inspectCards('fridge/whirlpool-refrigerator-repair-service-in-karur.html');
inspectCards('tv/sony-tv-repair-service-in-karur.html');
