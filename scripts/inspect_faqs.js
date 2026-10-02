const fs = require('fs');

const testFiles = [
  'washing-machine/samsung-washing-machine-repair-service-in-karur.html',
  'ac/daikin-ac-repair-service-in-karur.html',
  'fridge/whirlpool-refrigerator-repair-service-in-karur.html',
  'tv/sony-tv-repair-service-in-karur.html',
  'service-center/samsung-service-center-karur.html'
];

testFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== FAQ IN:', f, '===');
  const faqHeading = content.search(/<h2>[^<]*(?:Frequently Asked Questions|FAQ)[^<]*<\/h2>/i);
  if (faqHeading !== -1) {
    const faqSec = content.slice(faqHeading, faqHeading + 2500);
    // Print questions
    const questions = [...faqSec.matchAll(/<(?:summary|h3|button|div class=["']faq-question["'])[^>]*>(.*?)<\/(?:summary|h3|button|div)>/gi)]
      .map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`Questions found (${questions.length}):`);
    questions.slice(0, 6).forEach((q, i) => console.log(`  ${i+1}. ${q}`));
    console.log('Markup snippet:');
    console.log(faqSec.slice(0, 500).replace(/\s+/g, ' '));
  } else {
    console.log('No FAQ heading found');
  }
});
