const fs = require('fs');

function inspectWmExp(file) {
  const c = fs.readFileSync(file, 'utf8');
  console.log('=== FILE:', file);
  const lines = c.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('Experience') || line.includes('Problems Customers Face') || line.includes('experiences-grid')) {
      console.log(`${idx+1}: ${line.trim().slice(0, 100)}`);
    }
  });
}

inspectWmExp('washing-machine/ifb-washing-machine-repair-service-in-kanyakumari.html');
inspectWmExp('washing-machine/voltas-washing-machine-repair-service-in-kanyakumari.html');
inspectWmExp('washing-machine/washing-machine-repair-service-in-kanyakumari.html');
inspectWmExp('washing-machine/whirlpool-washing-machine-repair-service-in-kanyakumari.html');
