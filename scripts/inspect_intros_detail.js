const fs = require('fs');

function checkFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  // Match section after hero-section
  const heroEnd = html.indexOf('</section>');
  if (heroEnd === -1) return;
  const afterHero = html.slice(heroEnd + 10);
  const nextSectionMatch = afterHero.match(/<section[\s\S]*?<\/section>/);
  if (nextSectionMatch) {
    console.log('=== FILE:', file);
    console.log(nextSectionMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 350));
  }
}

checkFile('ac/daikin-ac-repair-service-in-kanyakumari.html');
checkFile('ac/voltas-ac-repair-service-in-kanyakumari.html');
checkFile('fridge/godrej-refrigerator-repair-service-in-kanyakumari.html');
checkFile('fridge/samsung-refrigerator-repair-service-in-kanyakumari.html');
checkFile('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
checkFile('washing-machine/bosch-washing-machine-repair-service-in-kanyakumari.html');
checkFile('tv/sony-tv-repair-service-in-kanyakumari.html');
checkFile('tv/samsung-tv-repair-service-in-kanyakumari.html');
checkFile('servicecenter/lloyd-service-center-kanyakumari.html');
checkFile('servicecenter/samsung-service-center-kanyakumari.html');
