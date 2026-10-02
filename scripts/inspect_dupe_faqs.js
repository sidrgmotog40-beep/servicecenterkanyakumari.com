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
const faqQuestions = new Map();
const duplicates = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const faqRegex = /<div class="faq-item">[\s\S]*?<button class="faq-question"[^>]*>\s*<span>([\s\S]*?)<\/span>/g;
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim();
    if (faqQuestions.has(q)) {
      duplicates.push({ q, file1: faqQuestions.get(q), file2: file });
    } else {
      faqQuestions.set(q, file);
    }
  }
});

console.log('Duplicate FAQ count:', duplicates.length);
console.log('First 10 duplicates:');
duplicates.slice(0, 10).forEach(d => {
  console.log(`Q: "${d.q}"`);
  console.log(`   Page 1: ${d.file1}`);
  console.log(`   Page 2: ${d.file2}\n`);
});
