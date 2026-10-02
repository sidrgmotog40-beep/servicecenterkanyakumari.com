const fs = require('fs');

const testFiles = [
  'service-center/lloyd-service-center-kanyakumari.html',
  'service-center/hitachi-service-center-kanyakumari.html',
  'service-center/panasonic-service-center-kanyakumari.html',
  'service-center/bosch-service-center-kanyakumari.html'
];

for (const file of testFiles) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n================== ${file} ==================`);

  // Match all section headers and their first paragraph in the intro box
  const sections = [...content.matchAll(/<section class="section" id="([^"]+)"[\s\S]*?<div class="section-header">\s*<h2>([^<]+)<\/h2>[\s\S]*?<p style="margin-bottom: 0\.85rem; font-weight: 500; color: var\(--primary-color\);">\s*([\s\S]*?)\s*<\/p>/gi)];

  console.log(`Found ${sections.length} appliance sections with SEO intros:`);
  sections.forEach((s, i) => {
    console.log(`\n${i+1}. [${s[1]}] ${s[2]}`);
    console.log(`   INTRO: "${s[3].trim()}"`);
  });
}
