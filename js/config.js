/**
 * Centralized Site Configuration for servicecenterkanyakumari.com
 * Single source of truth for contact details, domain, and service information.
 */
const SITE_CONFIG = {
  brandName: "Service Center Kanyakumari",
  tagline: "Local Home Appliance Repair & Service in Kanyakumari",
  domain: "servicecenterkanyakumari.com",
  siteUrl: "https://servicecenterkanyakumari.com",
  
  // Primary Contact Details (Consistent across all pages, calls, schemas, and floating buttons)
  phoneDisplay: "+91 92115 12088",
  phoneRaw: "+919211512088",
  phoneDigitsOnly: "9211512088",
  whatsappNumber: "919211512088",
  whatsappPrefillMessage: "Hello, I need home appliance repair service in Kanyakumari. Please share the service details.",
  email: "support@servicecenterkanyakumari.com",
  
  // Working Hours & Location Details
  workingHours: "Monday to Sunday: 8:00 AM - 8:30 PM",
  serviceLocation: {
    city: "Kanyakumari",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "629001",
    streetAddress: "Court Road Junction, Cape Road, Nagercoil",
    latitude: 8.1833,
    longitude: 77.4119
  },
  
  // 60 Verified Service Localities in and around Kanyakumari (Single Source of Truth)
  localities: [
    { name: "Gandhigramam", landmark: "Housing Board units, ESI Hospital area and collectorate link" },
    { name: "Pasupathipalayam", landmark: "Historic Pasupatheeswarar temple surroundings and bridge road" },
    { name: "Sanapiratti", landmark: "Textile manufacturing corridor and Sanapiratti railway gate" },
    { name: "Rayanur", landmark: "Rayanur ring road junction and school avenues" },
    { name: "Sellandipalayam", landmark: "Sellandiamman temple area and bypass connecting links" },
    { name: "Puliyur", landmark: "Cement factory township and Trichy Highway corridor" },
    { name: "Uppidamangalam", landmark: "Weekly cattle market circle and town panchayat residential streets" },
    { name: "Mayanur", landmark: "Cauvery barrage scenic area and Trichy Highway link" },
    { name: "Krishnarayapuram", landmark: "Taluk administrative office and railway feeder road" },
    { name: "Manmangalam", landmark: "Taluk headquarters and Salem bypass junction" },
    { name: "Min Nagar", landmark: "TNEB substation and residential layout cross streets" },
    { name: "Aachi Nagar", landmark: "Colony park and quiet family residential lanes" },
    { name: "Periyar Nagar", landmark: "Community hall surroundings and connecting avenues" },
    { name: "Jawahar Nagar", landmark: "Pasupathipalayam residential extension and water tank street" },
    { name: "Chinnandankovil East", landmark: "Riverbank approach road and community school street" },
    { name: "Inam Kanyakumari", landmark: "Municipal zone and textile export manufacturing units" },
    { name: "Chinna Andankovil", landmark: "Chinna Andankovil main road and bypass bridge area" },
    { name: "Periya Andankovil", landmark: "Riverfront residential layouts and community temple" },
    { name: "Thorakkalpatti", landmark: "Bypass junction and modern residential extensions" },
    { name: "Sukkaliyur", landmark: "Kovai Road tollway and heavy transport hub" },
    { name: "Kovai Road", landmark: "Major automobile showrooms and commercial retail complexes" },
    { name: "Thanthoni", landmark: "Thanthoni main road and college residential colony" },
    { name: "Andankovil West", landmark: "West river bund and calm residential farm avenues" },
    { name: "Paramathi Road", landmark: "Bridge connector road and wholesale market godowns" },
    { name: "Aravakurichi", landmark: "Town panchayat bus stand and taluk court circle" },
    { name: "Pugalur Road", landmark: "Industrial estate corridor and godown complexes" },
    { name: "Thavittupalayam", landmark: "Cauvery bridge check-post and river road residential belt" },
    { name: "Sengunthapuram", landmark: "Main banking avenue, textile market and financial hub" },
    { name: "Kamarajapuram", landmark: "Kamarajapuram library street and residential cross roads" },
    { name: "LGB Nagar", landmark: "Kovai Road approach avenues and gated housing layout" },
    { name: "Vengamedu", landmark: "Railway flyover, weekly market and textile hub" },
    { name: "Vennaimalai", landmark: "Balasubramaniaswamy hilltop temple and bypass layouts" },
    { name: "Vangal", landmark: "Cauvery river bridge and Mohanur connecting highway" },
    { name: "Nerur", landmark: "Sadashiva Brahmendra Jeeva Samadhi and Cauvery canal stretch" },
    { name: "Velayuthampalayam", landmark: "Chettipalayam junction and town bus terminus" },
    { name: "Pugalur", landmark: "Pugalur railway station and industrial paper mill corridor" },
    { name: "Kagithapuram", landmark: "TNPL main gate and model residential township" },
    { name: "Thiru Manilayur", landmark: "Amaravathi check-dam and peaceful residential layouts" },
    { name: "Salem Bypass Road", landmark: "North bypass 4-lane circle and logistics terminal" },
    { name: "Somur", landmark: "Somur Shiva temple and riverbank agricultural hamlets" },
    { name: "Koyampalli", landmark: "Primary health centre and canal road settlements" },
    { name: "Punjai Thottakurichi", landmark: "Town panchayat office and school road neighborhood" },
    { name: "Nanparappu", landmark: "Riverside bus stop and local temple street" },
    { name: "Kombupalayam", landmark: "Highway link road and weavers cooperative society" },
    { name: "Pavithram", landmark: "Manmangalam link road and village lake bund" },
    { name: "Thanthonimalai", landmark: "District Collectorate, Kalyana Venkataramanaswamy Temple and administrative zone" },
    { name: "Arts College Road", landmark: "Government Arts College campus and sports ground" },
    { name: "Vaiyapuri Nagar", landmark: "Upscale residential avenues, private schools and colony park" },
    { name: "Chettipalayam", landmark: "South bypass junction and growing suburban corridor" },
    { name: "Edayathumangalam", landmark: "Canal road agricultural and peaceful residential dwellings" },
    { name: "Emur", landmark: "Emur lake surroundings and traditional temple circle" },
    { name: "South Highway Corridor", landmark: "Southern highway corridor and commercial transport godowns" },
    { name: "Kothur", landmark: "Thanthonimalai approach and community water tank road" },
    { name: "Sanjeevi Nagar", landmark: "Collectorate staff housing and peaceful layout avenues" },
    { name: "Ramakrishnapuram", landmark: "Central-south town school and residential cross streets" },
    { name: "Anna Nagar South", landmark: "Established housing layout with independent family houses" },
    { name: "Light House Corner", landmark: "Historic Light House junction and commercial market circle" },
    { name: "Bus Stand Area", landmark: "Kanyakumari Central Bus Stand and transport commercial hub" },
    { name: "Jawahar Bazaar", landmark: "Historic central textile bazaar and electronics retail market" },
    { name: "Azad Road", landmark: "Old clock tower commercial street and textile trading hub" }
  ],

  // 5 Main Appliance Categories
  services: [
    {
      id: "ac",
      title: "AC Repair & Service",
      tamilPrompt: "AC cooling kammiya irukka? Water leak aagudha?",
      url: "ac-repair-service-in-kanyakumari.html",
      shortDesc: "Split & window AC cooling issues, water leakage, gas inspection, startup faults & servicing."
    },
    {
      id: "fridge",
      title: "Refrigerator / Fridge Repair",
      tamilPrompt: "Fridge cooling proper-ah illa? Ice overflow aagudha?",
      url: "refrigerator-repair-service-in-kanyakumari.html",
      shortDesc: "Single door, double door & frost-free fridge cooling problems, thermostat check & compressor startup."
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      tamilPrompt: "Washing machine-la water drain aagala? Drum rotate aagala?",
      url: "washing-machine/washing-machine/washing-machine-repair-service-in-kanyakumari.html",
      shortDesc: "Front load, top load & semi-automatic machine spin issues, drainage failure, noise & error codes."
    },
    {
      id: "tv",
      title: "TV Repair & Service",
      tamilPrompt: "TV display problem irukka? Sound varudhu picture varala?",
      url: "tv-repair-service-in-kanyakumari.html",
      shortDesc: "LED, LCD & Smart TV sound but no picture, blank screen, backlight issue, power failure & HDMI faults."
    },
    {
      id: "microwave",
      title: "Microwave Oven Repair",
      tamilPrompt: "Microwave on aagudhu aana heat aagala?",
      url: "microwave-repair-service-in-kanyakumari.html",
      shortDesc: "Solo, grill & convection microwave heating issues, turntable not rotating, sparking & touch pad problem."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
