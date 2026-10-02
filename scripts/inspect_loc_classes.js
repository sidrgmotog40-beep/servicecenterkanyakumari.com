const fs = require('fs');

function inspectLoc(file) {
  const content = fs.readFileSync(file, 'utf8');
  const locSectionMatch = content.match(/<section[^>]*id="localitiesSection"[^>]*>([\s\S]*?)<\/section>/i);
  if (!locSectionMatch) {
    console.log(file, 'NO localitiesSection');
    return;
  }
  const s = locSectionMatch[1];
  
  // Count how many Pin / Locality cards
  const pinCards = (s.match(/class="pin-locality-card"/g) || []).length;
  const locCards = (s.match(/class="locality-card"/g) || []).length;
  const areaCards = (s.match(/class="area-card"/g) || []).length;
  const serviceCards = (s.match(/class="service-card"/g) || []).length;
  const allCardDivs = (s.match(/<div class="[^"]*card[^"]*"/g) || []).length;
  const callButtons = (s.match(/tel:\+919211512088/g) || []).length;
  
  console.log(file, { pinCards, locCards, areaCards, serviceCards, allCardDivs, callButtons });
}

inspectLoc('servicecenter/lloyd-service-center-kanyakumari.html');
inspectLoc('fridge/godrej-refrigerator-repair-service-in-kanyakumari.html');
inspectLoc('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
inspectLoc('ac/daikin-ac-repair-service-in-kanyakumari.html');
inspectLoc('tv/sony-tv-repair-service-in-kanyakumari.html');
inspectLoc('index.html');
