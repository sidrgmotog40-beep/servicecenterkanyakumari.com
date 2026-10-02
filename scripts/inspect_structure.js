const fs = require('fs');

function inspect(filePath) {
  console.log('=== Inspecting:', filePath, '===');
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    if (line.includes('<section') || line.includes('class="intro"') || line.includes('class="hero"') || 
        line.includes('Recent') || line.includes('Experience') || line.includes('FAQ') || line.includes('Frequently') ||
        line.includes('Appliance') || line.includes('Services') || line.includes('Problems')) {
      if (idx < 650) {
        console.log(`${idx + 1}: ${line.trim().slice(0, 110)}`);
      }
    }
  });
}

inspect('washing-machine/godrej-washing-machine-repair-service-in-kanyakumari.html');
inspect('servicecenter/lloyd-service-center-kanyakumari.html');
inspect('ac/daikin-ac-service-in-kanyakumari.html');
