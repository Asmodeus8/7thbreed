export const site = {
  name: "SolarPro Lagos",
  phone: "+234 801 234 5678",
  phoneHref: "tel:+2348012345678",
  whatsapp: "https://wa.me/2348012345678",
  email: "info@solarprologos.com",
  address: ["12 Ganiu Eletu Way,", "Osapa London, Lekki,", "Lagos, Nigeria"],
};

export const heroImage =
  "https://img.rocket.new/generatedImages/rocket_gen_img_1b7312982-1784306483948.png";

export const stats = [
  { value: 500, suffix: "+", label: "Installations", sub: "Homes & businesses powered" },
  { value: 10, suffix: "+", label: "Years Experience", sub: "Trusted since 2014" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", sub: "Happy customers" },
  { value: 24, suffix: "/7", label: "Support", sub: "Always available for you" },
];

export const services = [
  {
    title: "Residential Solar",
    icon: "home",
    description:
      "Complete home solar solutions tailored for Lagos homes — from apartments to duplexes. Say goodbye to generator noise and fuel costs.",
    points: [
      "3.5KVA – 10KVA systems",
      "Battery backup included",
      "Smart monitoring app",
      "5-year warranty",
    ],
  },
  {
    title: "Commercial Solar",
    icon: "building",
    description:
      "Scalable solar systems for offices, plazas, and businesses across Lagos. Reduce operating costs by up to 80%.",
    points: [
      "10KVA – 100KVA+ systems",
      "ROI in 2–3 years",
      "Grid-tie options",
      "Dedicated account manager",
    ],
  },
  {
    title: "Solar Maintenance",
    icon: "wrench",
    description:
      "Keep your system running at peak efficiency. Our certified technicians provide scheduled and emergency maintenance.",
    points: [
      "Quarterly servicing",
      "Panel cleaning",
      "Battery health checks",
      "24/7 emergency response",
    ],
  },
  {
    title: "Energy Audit",
    icon: "gauge",
    description:
      "Not sure what size system you need? Our engineers assess your energy consumption and recommend the perfect setup.",
    points: [
      "Load analysis",
      "Custom recommendations",
      "Cost-benefit report",
      "Free for qualified leads",
    ],
  },
];

export type Product = {
  name: string;
  category: "Solar Panels" | "Inverters" | "Batteries" | "Complete Packages";
  badge?: string;
  price: string;
  image: string;
  specs: string[];
};

export const products: Product[] = [
  {
    name: "175W Monocrystalline Panel",
    category: "Solar Panels",
    price: "₦45,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_18370b9c4-1767450362454.png",
    specs: ["175W output", "Monocrystalline cells", "21% efficiency", "25-year warranty"],
  },
  {
    name: "350W Monocrystalline Panel",
    category: "Solar Panels",
    badge: "Popular",
    price: "₦85,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1db348e62-1766784558724.png",
    specs: ["350W output", "Half-cut cells", "22.5% efficiency", "Anti-reflective coating"],
  },
  {
    name: "540W High-Efficiency Panel",
    category: "Solar Panels",
    badge: "Premium",
    price: "₦120,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_106b7cfa2-1766560967700.png",
    specs: ["540W output", "Bifacial design", "23.8% efficiency", "Low-light performance"],
  },
  {
    name: "3.5KVA Off-Grid Inverter",
    category: "Inverters",
    price: "₦150,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_189cc8d3c-1772324432541.png",
    specs: ["3.5KVA capacity", "MPPT 40A controller", "LCD display", "Pure sine wave"],
  },
  {
    name: "5KVA Hybrid Inverter",
    category: "Inverters",
    badge: "Best Seller",
    price: "₦280,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e5c51458-1768557691373.png",
    specs: ["5KVA capacity", "Grid-tie capable", "MPPT 80A", "Remote monitoring"],
  },
  {
    name: "10KVA Hybrid Inverter",
    category: "Inverters",
    badge: "Commercial",
    price: "₦480,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_18b13ced5-1785853988522.png",
    specs: ["10KVA capacity", "Dual MPPT 120A", "Three-phase option", "App monitoring"],
  },
  {
    name: "200Ah Gel Battery",
    category: "Batteries",
    price: "₦95,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_169227d0d-1780099574395.png",
    specs: ["200Ah capacity", "Gel technology", "Maintenance-free", "3-year warranty"],
  },
  {
    name: "5KWH Lithium Battery",
    category: "Batteries",
    badge: "New",
    price: "₦320,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1f2b15be4-1773364213752.png",
    specs: ["5KWH capacity", "LiFePO4 chemistry", "6000+ cycles", "BMS protection"],
  },
  {
    name: "10KWH Lithium Battery",
    category: "Batteries",
    badge: "Premium",
    price: "₦580,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1f2b15be4-1773364213752.png",
    specs: ["10KWH capacity", "Stackable design", "10-year warranty", "Smart BMS"],
  },
  {
    name: "Starter Home Package 3.5KVA",
    category: "Complete Packages",
    price: "₦650,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1870012ec-1786055157562.png",
    specs: [
      "3.5KVA Off-Grid Inverter",
      "2× 200Ah Gel Battery",
      "4× 175W Panels",
      "Powers lights, fans, TV, small fridge",
    ],
  },
  {
    name: "Standard Home Package 5KVA",
    category: "Complete Packages",
    badge: "Most Popular",
    price: "₦950,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_118ccf65d-1781425196181.png",
    specs: [
      "5KVA Hybrid Inverter",
      "1× 5KWH Lithium",
      "6× 350W Panels",
      "Powers all home appliances + 1 AC",
    ],
  },
  {
    name: "Premium Home Package 10KVA",
    category: "Complete Packages",
    badge: "Premium",
    price: "₦1,800,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1db348e62-1766784558724.png",
    specs: [
      "10KVA Hybrid Inverter",
      "2× 5KWH Lithium",
      "10× 540W Panels",
      "Powers full home + 2 ACs",
    ],
  },
  {
    name: "Commercial Package 20KVA",
    category: "Complete Packages",
    badge: "Commercial",
    price: "₦3,500,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_125799c79-1786055157240.png",
    specs: [
      "20KVA Hybrid Inverter",
      "4× 5KWH Lithium",
      "20× 540W Panels",
      "For offices & businesses",
    ],
  },
];

export const featuredProducts = [
  {
    name: "Standard Home Package 5KVA",
    tag: "Complete Package",
    badge: "Most Popular",
    price: "₦950,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_116aefb96-1775946062334.png",
    specs: [
      "5KVA Hybrid Inverter",
      "200Ah Gel Battery",
      "4× 350W Panels",
      "Powers all home + 1 AC",
    ],
  },
  {
    name: "10KVA Hybrid Inverter",
    tag: "Inverter",
    badge: "Best Seller",
    price: "₦480,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_189cc8d3c-1772324432541.png",
    specs: ["10KVA capacity", "MPPT charge controller", "Grid-tie capable", "LCD touchscreen"],
  },
  {
    name: "5KWH Lithium Battery",
    tag: "Battery",
    badge: "New Arrival",
    price: "₦320,000",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b61fbae3-1782981824720.png",
    specs: ["5KWH capacity", "6000+ cycle life", "BMS protection", "Stackable design"],
  },
];

export const projects = [
  {
    location: "Osapa London",
    type: "Residential",
    size: "9.6 KWP System",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_118ccf65d-1781425196181.png",
  },
  {
    location: "Victoria Island",
    type: "Commercial",
    size: "20KVA Commercial",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1b7312982-1784306483948.png",
  },
  {
    location: "Lekki Phase 1",
    type: "Residential",
    size: "5KVA System",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_109afe2d8-1781425196201.png",
  },
  {
    location: "Ikoyi",
    type: "Residential",
    size: "10KVA Premium",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_160b5686e-1786055156343.png",
  },
];

export const testimonials = [
  {
    quote:
      "SolarPro Lagos transformed my life. I used to spend ₦80,000 monthly on diesel alone. Now my electricity is virtually free. The installation was professional and clean — took just 2 days.",
    name: "Chukwuemeka Obi",
    role: "Homeowner · Osapa London, Lagos",
    system: "9.6KWP System",
    avatar:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e083c2ac-1763294782132.png",
  },
  {
    quote:
      "My pharmacy used to lose products worth hundreds of thousands when NEPA took light. Since installing the 10KVA commercial system, zero downtime. Best investment I have made for my business.",
    name: "Adaeze Nwosu",
    role: "Business Owner · Lekki Phase 1, Lagos",
    system: "10KVA Commercial",
    avatar:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1d43dfc4c-1772296838517.png",
  },
  {
    quote:
      "We installed SolarPro systems across 8 units in our estate. The team was knowledgeable, prices were fair, and the after-sales support has been exceptional. Highly recommend.",
    name: "Babatunde Fashola",
    role: "Estate Manager · Chevron Drive, Lagos",
    system: "5KVA × 8 Units",
    avatar:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1998cdbb8-1766339897408.png",
  },
];

export const comparison = {
  packages: [
    { name: "Starter 3.5KVA", popular: false },
    { name: "Standard 5KVA", popular: true },
    { name: "Premium 10KVA", popular: false },
    { name: "Commercial 20KVA", popular: false },
  ],
  rows: [
    { feature: "Price", values: ["₦650,000", "₦950,000", "₦1,800,000", "₦3,500,000"] },
    {
      feature: "Inverter",
      values: ["3.5KVA Off-Grid", "5KVA Hybrid", "10KVA Hybrid", "20KVA Hybrid"],
    },
    {
      feature: "Battery",
      values: ["400Ah Gel", "5KWH Lithium", "10KWH Lithium", "20KWH Lithium"],
    },
    {
      feature: "Solar Panels",
      values: ["4× 175W (700W)", "6× 350W (2.1KW)", "10× 540W (5.4KW)", "20× 540W (10.8KW)"],
    },
    { feature: "ACs Supported", values: ["0", "1", "2", "4+"] },
    {
      feature: "Appliances",
      values: [
        "Lights, Fans, TV, Small Fridge",
        "All home appliances + 1 AC",
        "Full home + 2 ACs",
        "Full office/business",
      ],
    },
    {
      feature: "Ideal For",
      values: [
        "Budget homes, apartments",
        "Average Lagos home",
        "Large homes, duplexes",
        "Offices, plazas, schools",
      ],
    },
  ],
};

export const faqs = [
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed within 1–3 days depending on system size. Commercial projects typically take 3–7 days. We schedule around your convenience and clean up completely afterwards.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer flexible payment plans with an initial deposit and the balance spread across agreed milestones. Speak to our team for a plan that fits your budget.",
  },
  {
    q: "What areas in Lagos do you cover?",
    a: "We serve all of Lagos — Lekki, Osapa London, Ajah, Victoria Island, Ikoyi, Ikeja, Yaba, Surulere and beyond. Mainland and island coverage included.",
  },
  {
    q: "What warranty comes with the system?",
    a: "Every system comes with a 5-year system warranty. Panels carry up to 25-year performance warranties, and lithium batteries up to 10 years, backed by 24/7 after-sales support.",
  },
];
