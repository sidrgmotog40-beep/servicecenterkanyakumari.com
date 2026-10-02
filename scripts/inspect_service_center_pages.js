const fs = require('fs');

const scFiles = [
  'service-center/samsung-service-center-karur.html',
  'service-center/whirlpool-service-center-karur.html',
  'service-center/voltas-service-center-karur.html',
  'service-center/sony-service-center-karur.html'
];

scFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== SC FILE:', f, '===');
  const h2s = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)].map(m => m[1]);
  console.log('H2s:', h2s);
  const h3s = [...content.matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)].map(m => m[1]);
  console.log('H3s count:', h3s.length, 'Sample H3s:', h3s.slice(0, 8));
  // check if any pricing table exists
  const hasTable = content.indexOf('<table') !== -1;
  console.log('Has Table:', hasTable);
  const hasFaq = content.indexOf('faq') !== -1;
  console.log('Has FAQ:', hasFaq);
});
