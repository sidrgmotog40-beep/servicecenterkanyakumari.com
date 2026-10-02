const fs = require('fs');
const path = require('path');

function inspectFolderTypes(folder) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  console.log(`=== FOLDER: ${folder} (${files.length} files) ===`);
  const typeMap = {};
  
  files.forEach(f => {
    const content = fs.readFileSync(path.join(folder, f), 'utf8');
    // Find types section
    let idx = content.search(/<h2[^>]*>[^<]*Types[^<]*<\/h2>/i);
    if (idx === -1) idx = content.search(/<h2[^>]*>[^<]*Models[^<]*<\/h2>/i);
    if (idx !== -1) {
      const secEnd = content.indexOf('</section>', idx);
      const secHtml = content.slice(idx, secEnd !== -1 ? secEnd : idx + 8000);
      const h3s = [...secHtml.matchAll(/<h3[^>]*>(.*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      h3s.forEach(title => {
        typeMap[title] = (typeMap[title] || 0) + 1;
      });
    }
  });
  
  console.log(`Found ${Object.keys(typeMap).length} distinct h3 titles:`);
  console.log(Object.entries(typeMap).slice(0, 25));
}

inspectFolderTypes('washing-machine');
inspectFolderTypes('ac');
inspectFolderTypes('fridge');
inspectFolderTypes('tv');
