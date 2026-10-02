const fs = require('fs');
const sample = fs.readFileSync('service-center/lloyd-service-center-kanyakumari.html', 'utf8');

const m = sample.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (m) {
  const json = JSON.parse(m[1]);
  console.log(JSON.stringify(json['@graph'].filter(item => item['@type'] === 'LocalBusiness'), null, 2));
}
