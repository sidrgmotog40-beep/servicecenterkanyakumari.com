const fs = require('fs');

function walk(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'scripts'].includes(item)) continue;
    const full = dir + '/' + item;
    if (fs.statSync(full).isDirectory()) res.push(...walk(full));
    else if (item.endsWith('.html')) res.push(full);
  }
  return res;
}

const htmlFiles = walk('.');
const faqAnswers = new Map();
const dupeAnswers = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const faqRegex = /<div class="faq-item">[\s\S]*?<div class="faq-answer">\s*([\s\S]*?)\s*<\/div>/g;
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    const a = match[1].replace(/<[^>]+>/g, '').trim();
    if (faqAnswers.has(a)) {
      dupeAnswers.push({ a: a.slice(0, 80), file1: faqAnswers.get(a), file2: file });
    } else {
      faqAnswers.set(a, file);
    }
  }
});

console.log('Duplicate FAQ Answers count:', dupeAnswers.length);
dupeAnswers.slice(0, 10).forEach(d => {
  console.log(`A: "${d.a}..."`);
  console.log(`   Page 1: ${d.file1}`);
  console.log(`   Page 2: ${d.file2}\n`);
});
