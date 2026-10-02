const fs = require('fs');

const files = fs.readdirSync('service-center').filter(f => f.endsWith('.html'));
console.log('Count of SC pages:', files.length);

const summary = [];
files.forEach(f => {
  const content = fs.readFileSync('service-center/' + f, 'utf8');
  const sections = [];
  if (content.includes('id="washingMachineSection"')) sections.push('WM');
  if (content.includes('id="refrigeratorSection"')) sections.push('Fridge');
  if (content.includes('id="acSection"')) sections.push('AC');
  if (content.includes('id="tvSection"')) sections.push('TV');
  if (content.includes('id="microwaveSection"')) sections.push('MW');
  
  // Find all <section id="...">
  const idMatches = content.match(/<section[^>]+id="([^"]+)"/g) || [];
  const ids = idMatches.map(m => m.match(/id="([^"]+)"/)[1]);
  
  summary.push({
    file: f,
    brand: f.replace('-service-center-kanyakumari.html', ''),
    sections: sections.join(','),
    allIds: ids.filter(id => !['localitiesSection', 'faqSection', 'typesSection', 'problemsSection', 'pricingSection'].includes(id))
  });
});

console.log(JSON.stringify(summary, null, 2));
