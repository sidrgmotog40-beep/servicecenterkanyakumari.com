const fs = require('fs');

function inspectIntro(file) {
  const c = fs.readFileSync(file, 'utf8');
  console.log('\n=============================================');
  console.log('FILE:', file);
  console.log('=============================================');
  
  // Hero section snippet
  const heroMatch = c.match(/<section class="hero[^>]*>([\s\S]*?)<\/section>/);
  if (heroMatch) {
    const text = heroMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('HERO TEXT SNIPPET:\n', text.slice(0, 300));
  }
  
  // Next section after hero
  const sections = c.match(/<section[^>]*>([\s\S]*?)<\/section>/g);
  if (sections && sections.length > 1) {
    const text2 = sections[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('\nSECOND SECTION TEXT SNIPPET:\n', text2.slice(0, 300));
  }
}

inspectIntro('ac/daikin-ac-repair-service-in-kanyakumari.html');
inspectIntro('ac/voltas-ac-repair-service-in-kanyakumari.html');
inspectIntro('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
inspectIntro('washing-machine/lg-washing-machine-repair-service-in-kanyakumari.html');
inspectIntro('servicecenter/lloyd-service-center-kanyakumari.html');
inspectIntro('servicecenter/samsung-service-center-kanyakumari.html');
