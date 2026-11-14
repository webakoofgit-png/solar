import type { Project, Solution, Testimonial, FaqItem, TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'SANMITRA SOLAR',
  tagline: 'Powering a Brighter Tomorrow',
  subheading: 'Smarter Solar Solutions for Homes, Businesses & a Sustainable Future.',
  phone: '+91 (0) 98765 43210',
  whatsappNumber: '919876543210',
  email: 'connect@sanmitrasolar.com',
  supportEmail: 'care@sanmitrasolar.com',
  address: 'Level 4, Solar Innovation Hub, Senapati Bapat Road, Pune, Maharashtra 411016',
  workingHours: 'Mon - Sat: 9:00 AM - 6:30 PM (IST)',
  disclaimer: 'All project figures, generation stats, savings calculations, and customer testimonials displayed are illustrative demo placeholders. Actual solar energy yields and tariffs vary by geographic solar irradiance, roof orientation, shadowing, and local DISCOM net-metering regulations.'
};

export const DEMO_STATS = [
  {
    id: 'installations',
    value: 500,
    suffix: '+',
    label: 'Solar Installations',
    description: 'Precision engineered rooftop & ground-mount systems',
  },
  {
    id: 'capacity',
    value: 10,
    suffix: ' MW+',
    label: 'Solar Capacity Installed',
    description: 'Delivering gigawatt-hours of clean green power',
  },
  {
    id: 'customers',
    value: 1000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Across residential, commercial, and enterprise domains',
  },
  {
    id: 'experience',
    value: 10,
    suffix: '+',
    label: 'Years of Engineering',
    description: 'Pioneering Tier-1 solar technologies & EPC expertise',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'panoramic-villa-rooftop-solar',
    title: 'Highland Luxury Villa Solar Array',
    category: 'residential',
    categoryLabel: 'Residential Rooftop',
    capacity: '15 kWp',
    location: 'Bavdhan Hills, Pune',
    completionYear: '2024',
    image: '/images/home/residential-solar.jpg',
    gallery: [
      '/images/home/residential-solar.jpg',
      '/images/home/residential-solar.jpg',
      '/images/home/industrial-solar.jpg'
    ],
    summary: 'A bespoke high-efficiency bi-facial rooftop installation architecturally integrated into an ultra-modern contemporary villa.',
    clientRequirement: 'The client desired a net-zero residential footprint to offset heavy HVAC and EV fast-charging consumption while preserving the contemporary architectural aesthetic of their hillside residence without visible cabling.',
    solutionProvided: 'Engineered a sleek 15 kWp rooftop system utilizing black-frame TopCon half-cut solar modules, paired with dual smart string inverters and integrated battery storage backup for uninterrupted luxury living.',
    highlights: [
      'Zero-penetration elevated structure preserving roof waterproofing',
      '92% reduction in peak summer electricity utility bills',
      'Smartphone app remote monitoring with real-time solar yield telemetry',
      'Bi-directional Net Metering clearance completed in 21 working days'
    ],
    specs: {
      systemCapacity: '15.4 kWp (DC) / 12 kW (AC)',
      solarPanels: '34x Tier-1 Mono PERC 450W High-Efficiency Modules',
      inverterModel: '12kW 3-Phase Smart Hybrid Inverter with Cloud Gateway',
      mountingStructure: 'Anodized Aluminium Elevated Pergola Mount',
      estimatedAnnualGeneration: '23,100 kWh / Year',
      co2OffsetAnnual: '18.9 Metric Tons / Year'
    },
    demoDisclaimer: 'Demo project case study for portfolio demonstration.'
  },
  {
    id: '2',
    slug: 'apex-corporate-tech-park-solar',
    title: 'Apex Tech Towers Corporate Solar Roof',
    category: 'commercial',
    categoryLabel: 'Commercial Rooftop',
    capacity: '185 kWp',
    location: 'Hinjawadi Infotech Zone, Pune',
    completionYear: '2024',
    image: '/images/home/commercial-solar.jpg',
    gallery: [
      '/images/home/commercial-solar.jpg',
      '/images/home/commercial-solar.jpg',
      '/images/home/industrial-solar.jpg'
    ],
    summary: 'Turnkey commercial rooftop solar plant installed on twin 14-story corporate office towers, meeting stringent ESG clean energy compliance.',
    clientRequirement: 'Corporate facility managers needed to slash heavy daylight operational tariffs, meet green building LEED Gold certification thresholds, and monetize idle reinforced concrete rooftop area.',
    solutionProvided: 'Turnkey engineering, procurement, and construction (EPC) including 185 kWp multi-directional solar arrays, high-voltage HT liaisoning, rapid shutdown safety protocols, and automated robotic dry-cleaning setup.',
    highlights: [
      'Accelerated 40% tax depreciation utilized within FY24',
      'Estimated project payback within 3.4 years',
      'Generates over 275,000 units of clean electricity annually',
      'Certified under ISO 45001 safety guidelines during installation'
    ],
    specs: {
      systemCapacity: '185 kWp (DC) / 160 kW (AC)',
      solarPanels: '342x Tier-1 Bifacial N-Type Modules (540W)',
      inverterModel: '3x 50kW & 1x 20kW Tier-1 String Inverters with AFCI Protection',
      mountingStructure: 'HDG Hot-Dip Galvanized Walkway Integrated Structure',
      estimatedAnnualGeneration: '277,500 kWh / Year',
      co2OffsetAnnual: '228.4 Metric Tons / Year'
    },
    demoDisclaimer: 'Demo project case study for portfolio demonstration.'
  },
  {
    id: '3',
    slug: 'precision-automotive-industrial-solar',
    title: 'Precision Forge Industrial Solar Plant',
    category: 'industrial',
    categoryLabel: 'Industrial Solar Plant',
    capacity: '850 kWp',
    location: 'Chakan Industrial Corridor, Maharashtra',
    completionYear: '2023',
    image: '/images/home/industrial-solar.jpg',
    gallery: [
      '/images/home/industrial-solar.jpg',
      '/images/home/climate-energy.jpg',
      '/images/home/industrial-solar.jpg'
    ],
    summary: 'A heavy-duty industrial metal shed rooftop solar powerhouse reducing operational power costs by over 45% for a manufacturing leader.',
    clientRequirement: 'Heavy manufacturing plant experiencing steep commercial power tariffs during daytime shift hours wanted energy independence and power factor stabilization.',
    solutionProvided: 'Implemented a 850 kWp solar array across 65,000 sq.ft of industrial metal profile roof with custom clamp fixtures that avoid roof penetration, connected directly to 11kV factory substation.',
    highlights: [
      'Over 1.25 Million kWh generated annually',
      'Custom leak-proof non-penetrative standing seam clamps',
      'SCADA cloud data logging with automated solar irradiance sensors',
      'Seamless synchronization with heavy inductive machinery loads'
    ],
    specs: {
      systemCapacity: '850 kWp',
      solarPanels: '1,574x Tier-1 Mono PERC 545W Panels',
      inverterModel: '7x 110kW Industrial Centralized String Inverters',
      mountingStructure: 'Custom engineered non-penetrating SS304 Clamps',
      estimatedAnnualGeneration: '1,275,000 kWh / Year',
      co2OffsetAnnual: '1,045 Metric Tons / Year'
    },
    demoDisclaimer: 'Demo project case study for portfolio demonstration.'
  },
  {
    id: '4',
    slug: 'vidyapeeth-university-campus-green-grid',
    title: 'Vidyapeeth Green Campus Solar Project',
    category: 'institutional',
    categoryLabel: 'Institutional Solar',
    capacity: '320 kWp',
    location: 'Kothrud Academic Hub, Pune',
    completionYear: '2023',
    image: '/images/home/climate-energy.jpg',
    gallery: [
      '/images/home/climate-energy.jpg',
      '/images/home/commercial-solar.jpg'
    ],
    summary: 'Distributed solar network spanning university lecture halls, library rooftops, and solar-covered parking canopies.',
    clientRequirement: 'University needed a self-sustaining green energy transition to offset hostel heating and campus lighting costs while educating engineering students on live solar analytics.',
    solutionProvided: 'Engineered a 320 kWp campus-wide solar system featuring architectural solar carports with integrated EV chargers and an open educational SCADA dashboard for faculty research.',
    highlights: [
      'Dual utility: vehicle shading + 480,000 kWh green electricity',
      'Installed 6 level-2 EV charging bays powered directly by the sun',
      'Public dashboard in central campus foyer showing live trees saved'
    ],
    specs: {
      systemCapacity: '320 kWp',
      solarPanels: '592x Tier-1 High-Density Monocrystalline Modules',
      inverterModel: '4x 75kW Commercial Inverters with Cloud Monitoring',
      mountingStructure: 'Solar Carport Steel Structure + Rooftop Ballast Mounts',
      estimatedAnnualGeneration: '480,000 kWh / Year',
      co2OffsetAnnual: '394 Metric Tons / Year'
    },
    demoDisclaimer: 'Demo project case study for portfolio demonstration.'
  },
  {
    id: '5',
    slug: 'eco-residence-net-zero-retreat',
    title: 'Serene Haven Sustainable Farmhouse',
    category: 'residential',
    categoryLabel: 'Residential Rooftop',
    capacity: '10 kWp',
    location: 'Mulshi Valley, Maharashtra',
    completionYear: '2024',
    image: '/images/home/residential-solar.jpg',
    gallery: [
      '/images/home/residential-solar.jpg',
      '/images/home/residential-solar.jpg'
    ],
    summary: 'Off-grid hybrid solar power plant ensuring 100% self-reliance for an eco-retreat situated in an area prone to grid outages.',
    clientRequirement: 'Eco-conscious homeowner required total resilience from recurring rural grid outages, silent operation without diesel generators, and automated water pumping.',
    solutionProvided: 'Installed a 10 kWp high-efficiency solar array paired with a 20 kWh lithium iron phosphate (LiFePO4) energy storage system with instantaneous switchover.',
    highlights: [
      'Zero diesel generator fuel consumption',
      '15-millisecond UPS grade emergency backup switchover',
      'Weather-resistant galvanized structure engineered for high valley wind loads'
    ],
    specs: {
      systemCapacity: '10 kWp Solar + 20 kWh Storage',
      solarPanels: '22x Tier-1 Bi-facial 460W Modules',
      inverterModel: '10kW Hybrid All-in-One Inverter with Smart BMS',
      mountingStructure: 'Elevated HDG Truss System',
      estimatedAnnualGeneration: '15,000 kWh / Year',
      co2OffsetAnnual: '12.3 Metric Tons / Year'
    },
    demoDisclaimer: 'Demo project case study for portfolio demonstration.'
  },
  {
    id: '6',
    slug: 'aerospace-logistics-solar-roof',
    title: 'TransLogistics Global Warehousing Hub',
    category: 'commercial',
    categoryLabel: 'Commercial Rooftop',
    capacity: '420 kWp',
    location: 'Talegaon Logistics Park, Pune',
    completionYear: '2023',
    image: '/images/home/commercial-solar.jpg',
    gallery: [
      '/images/home/commercial-solar.jpg',
      '/images/home/industrial-solar.jpg'
    ],
    summary: 'Vast warehouse rooftop solar canopy powering automated temperature-controlled pharmaceutical cold storage chain.',
    clientRequirement: 'Temperature-critical pharmaceutical supply chain facility required massive daylight baseload electricity to run multi-megawatt refrigeration compressors.',
    solutionProvided: 'Engineered a 420 kWp distributed solar power system with lightning suppression, integrated fire protection sensors, and remote power throttling.',
    highlights: [
      'Critical cold storage operating costs reduced by 52%',
      'Payback calculated under 3.1 years',
      'Zero production interruption during the 4-week fast-track installation'
    ],
    specs: {
      systemCapacity: '420 kWp',
      solarPanels: '778x Tier-1 Monocrystalline 540W Panels',
      inverterModel: '4x 100kW Multi-MPPT Inverters',
      mountingStructure: 'Lightweight Non-Penetrative Aluminium Clamping',
      estimatedAnnualGeneration: '630,000 kWh / Year',
      co2OffsetAnnual: '516 Metric Tons / Year'
    },
    demoDisclaimer: 'Demo project case study for portfolio demonstration.'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'residential',
    slug: 'residential',
    category: 'residential',
    title: 'Residential Rooftop Solar',
    shortDesc: 'Turn your roof into an independent power plant. Slash electricity bills by up to 90% while adding sustainable value to your home.',
    fullDesc: 'Sanmitra Solar delivers precision-crafted residential solar solutions tailored to villas, row houses, and residential housing societies. From architectural 3D shadow analysis to net-metering liaison and subsidy paperwork, we handle every detail so you enjoy effortless, zero-maintenance clean energy for decades.',
    image: '/images/home/residential-solar.jpg',
    features: [
      'Custom 3D CAD roof layout and shadow simulation',
      'Tier-1 Monocrystalline & Bi-facial high-yield panels',
      'Elevated structures to retain usable rooftop terrace space',
      'Seamless Bi-directional Net Metering clearance support',
      'Mobile app telemetry for live daily generation tracking',
      'Battery energy storage integration for 24/7 backup'
    ],
    benefits: [
      {
        title: 'Up to 90% Bill Reduction',
        description: 'Generate your own power during peak daytime hours and feed surplus electricity back into the grid.'
      },
      {
        title: 'Attractive Capital Subsidies',
        description: 'Eligible for national and state rooftop solar capital subsidies where applicable.'
      },
      {
        title: '25-Year Performance Warranty',
        description: 'Backed by tier-1 manufacturer linear generation warranties guaranteeing reliable output for decades.'
      },
      {
        title: 'Zero Leakage Guarantee',
        description: 'Engineered with specialized non-penetrative or chemically anchored fasteners that preserve waterproofing.'
      }
    ],
    idealFor: [
      'Independent Bungalows & Villas',
      'Row Houses & Duplexes',
      'Gated Communities & Residential Societies',
      'Farmhouses & Weekend Retreats'
    ],
    roiTimeline: '3.5 - 4.5 Years average payback period',
    warranty: '25-Year Panel Linear Warranty | 10-Year Inverter Warranty | 5-Year Workmanship'
  },
  {
    id: 'commercial',
    slug: 'commercial',
    category: 'commercial',
    title: 'Commercial & Corporate Solar',
    shortDesc: 'Accelerate corporate profitability, achieve ESG targets, and hedge against rising commercial grid tariffs with zero downtime.',
    fullDesc: 'Commercial buildings and corporate tech parks face some of the highest peak utility tariffs. Sanmitra Solar engineers custom commercial solar rooftop and solar carport installations that transform idle roofs and parking lots into high-yield financial assets with rapid return on investment.',
    image: '/images/home/commercial-solar.jpg',
    features: [
      'High-voltage HT interconnection & regulatory compliance',
      'CAPEX & OPEX (PPA) financing models available',
      'Accelerated 40% income tax depreciation advantages',
      'Architectural solar carports with integrated EV charging',
      'Comprehensive SCADA & building management integration',
      'Dedicated operations & preventive maintenance teams'
    ],
    benefits: [
      {
        title: 'Hedge Commercial Tariffs',
        description: 'Lock in your electricity costs for the next 25 years against unpredictable tariff hikes.'
      },
      {
        title: 'Significant Tax Advantages',
        description: 'Businesses can claim accelerated tax depreciation under IT section 32 in the first year.'
      },
      {
        title: 'LEED & ESG Compliance',
        description: 'Meet sustainability covenants, carbon disclosure ratings, and corporate ESG objectives.'
      },
      {
        title: 'Under 3.5 Year Payback',
        description: 'High commercial tariff offsets deliver exceptional internal rate of return (IRR 25-35%).'
      }
    ],
    idealFor: [
      'IT & Business Tech Parks',
      'Corporate Headquarters & Office Towers',
      'Malls, Hotels & Retail Complexes',
      'Hospitals & Healthcare Facilities'
    ],
    roiTimeline: '3.0 - 3.8 Years average payback period',
    warranty: '25-Year Panel Warranty | 5-Year Inverter Extended | Comprehensive AMC'
  },
  {
    id: 'industrial',
    slug: 'industrial',
    category: 'industrial',
    title: 'Industrial Solar Plants',
    shortDesc: 'Heavy-duty megawatts for manufacturing plants, cold storage, and processing factories with high energy baseloads.',
    fullDesc: 'Energy is often one of the top three manufacturing costs. Sanmitra Solar designs robust industrial solar plants engineered for heavy industrial roofs, metal trapezoidal profiles, and open ground-mount acreage. We balance structural integrity, electrical harmonics, and non-disruptive installation.',
    image: '/images/home/industrial-solar.jpg',
    features: [
      'Engineered for pre-engineered building (PEB) metal roofs',
      'Zero-penetration standing seam clamps prevent leaks',
      'Harmonic filtration & power factor stabilization',
      'Robotic water-less cleaning solutions for dusty zones',
      '11kV / 22kV / 33kV HT substation sync engineering',
      'Industrial-grade remote SCADA telemetry & weather station'
    ],
    benefits: [
      {
        title: 'Massive Operational Savings',
        description: 'Generate millions of units right at the point of consumption, eliminating wheeling charges.'
      },
      {
        title: 'Custom Metal Roof Fixtures',
        description: 'Aviation-grade aluminium clamps customized to exact trapezoidal or standing seam sheet profiles.'
      },
      {
        title: 'Zero Downtime Deployment',
        description: 'Scheduled execution so your manufacturing lines run uninterrupted during installation.'
      },
      {
        title: 'Industrial Safety Standards',
        description: 'Strict adherence to OHSAS 18001 / ISO 45001 workplace and high-voltage safety.'
      }
    ],
    idealFor: [
      'Manufacturing & Automotive Plants',
      'Pharmaceutical & Chemical Units',
      'Warehousing & Cold Chain Logistics',
      'Textile Mills & Heavy Engineering'
    ],
    roiTimeline: '2.8 - 3.5 Years average payback period',
    warranty: '25-Year Performance Warranty | Tier-1 Components | Industrial SLAs'
  },
  {
    id: 'services',
    slug: 'operations-maintenance',
    category: 'services',
    title: 'Operations, Maintenance & Audit',
    shortDesc: 'Maximize solar uptime, prevent generation degradation, and ensure peak kilowatt-hour generation year-round.',
    fullDesc: 'Solar systems are long-term 25-year financial assets. Dust, hot spots, string faults, and micro-cracks can cause up to 25% energy loss if neglected. Sanmitra Solar provides comprehensive operations, preventive maintenance (O&M), drone thermography, and health audit services.',
    image: '/images/home/industrial-solar.jpg',
    features: [
      'Preventive scheduled electrical & mechanical audits',
      'Thermal imaging & drone inspections for micro-cracks',
      'Module de-soiling and gentle chemical cleaning',
      'Inverter diagnostic testing & firmware updates',
      'Rapid breakdown response with spare parts inventory',
      'Monthly performance ratio (PR) analytical reports'
    ],
    benefits: [
      {
        title: 'Up to 20% Yield Restoration',
        description: 'Regular professional cleaning and hotspot elimination restore lost power generation.'
      },
      {
        title: '99.5% Guaranteed System Uptime',
        description: 'Real-time telemetry alerts our field engineers the moment any inverter string drops output.'
      },
      {
        title: 'Prolong Equipment Lifespan',
        description: 'Detect minor degradation before it damages expensive string inverters or switchgear.'
      },
      {
        title: 'Complete Compliance Audit',
        description: 'Ensure statutory CEA electrical safety compliance and insurance validity.'
      }
    ],
    idealFor: [
      'Existing Solar Plant Owners',
      'Commercial Facilities & Societies',
      'Under-performing Solar Installations',
      'Industrial Rooftops & Ground Arrays'
    ],
    roiTimeline: 'Immediate ROI through restored energy yields',
    warranty: 'Annual Service Level Agreements with 24-Hour Ticket Resolution'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh K. Deshmukh',
    role: 'Villa Owner',
    location: 'Bavdhan, Pune',
    projectType: '12 kWp Residential Rooftop',
    capacity: '12 kWp',
    rating: 5,
    quote: 'Sanmitra Solar exceeded our expectations. Our summer electricity bills plunged from ₹16,000 down to less than ₹900. Their team completed net metering liaison smoothly and the elevated pergola looks like an architectural feature.',
    image: '/images/people/person-1.jpg'
  },
  {
    id: '2',
    name: 'Ananya Singhania',
    role: 'VP Infrastructure, Horizon Tech Labs',
    location: 'Hinjawadi, Pune',
    projectType: '185 kWp Commercial Rooftop',
    capacity: '185 kWp',
    rating: 5,
    quote: 'From detailed 3D shadow modeling to safety during installation on our live office building, Sanmitra demonstrated world-class engineering. The project reached commercial operation a week ahead of schedule.',
    image: '/images/people/person-2.jpg'
  },
  {
    id: '3',
    name: 'Vikram Joshi',
    role: 'Director of Operations, Precision Auto Components',
    location: 'Chakan MIDC',
    projectType: '650 kWp Industrial Plant',
    capacity: '650 kWp',
    rating: 5,
    quote: 'Power cost is our largest operational overhead. Sanmitra’s non-penetrating clamps preserved our factory metal shed warranty, and the system has yielded over 105% of the projected simulation figures in year one.',
    image: '/images/people/person-3.jpg'
  },
  {
    id: '4',
    name: 'Dr. Meera Iyer',
    role: 'Secretary, Green Meadows Cooperative Society',
    location: 'Kothrud, Pune',
    projectType: '45 kWp Society Common Load',
    capacity: '45 kWp',
    rating: 5,
    quote: 'Our society lift, water pumping, and garden lighting common meter bills were a constant headache. Sanmitra installed a central system that pays for itself. Their transparency and patience with society committee meetings were exemplary.',
    image: '/images/people/person-4.jpg'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'general',
    question: 'How does grid-tied rooftop solar work with Net Metering?',
    answer: 'Grid-tied solar systems generate direct current (DC) electricity from sunlight, which a smart inverter converts into alternating current (AC) matching your home appliances. Power is consumed directly on-site first. Any surplus electricity you do not use is automatically exported to the utility grid through a bi-directional Net Meter. At the end of your billing cycle, your local power company deducts your exported units from your imported units, charging you only for the net difference.'
  },
  {
    id: 'f2',
    category: 'financial',
    question: 'Are government subsidies available, and how are they processed?',
    answer: 'Yes, residential rooftop systems are often eligible for government subsidies under central and state renewable schemes (such as the PM Surya Ghar Muft Bijli Yojana in India). Sanmitra Solar handles end-to-end documentation, vendor portal registration, and DISCOM meter inspection paperwork to ensure eligible subsidies are credited directly to your bank account. Note: Subsidy values, eligibility criteria, and discom rules are governed by prevailing government policies and local utility guidelines.'
  },
  {
    id: 'f3',
    category: 'residential',
    question: 'How much roof space is required for a residential solar system?',
    answer: 'As a rule of thumb, modern high-efficiency monocrystalline solar panels require approximately 80 to 100 square feet of shadow-free rooftop space per kilowatt (kW) of system capacity. For instance, a typical 3 kW home system requires roughly 250 - 300 sq.ft, while a 5 kW system requires 400 - 500 sq.ft. We also offer elevated pergola structures that allow you to continue using your terrace for recreation, gardening, or social gatherings.'
  },
  {
    id: 'f4',
    category: 'general',
    question: 'What is the expected lifespan and warranty on solar panels?',
    answer: 'Tier-1 solar panels are engineered to last 25 to 30+ years with minimal degradation. Our installations come backed by a 25-Year Manufacturer Linear Performance Warranty (guaranteeing at least 80-85% original power output after 25 years), along with 5 to 10-year manufacturer warranties on string inverters, and our comprehensive 5-year workmanship warranty.'
  },
  {
    id: 'f5',
    category: 'maintenance',
    question: 'How much maintenance do solar panels need?',
    answer: 'Solar systems have no moving mechanical parts, making them extremely low-maintenance. In most urban and semi-urban conditions, a gentle rinse with plain water every 15 to 20 days to remove surface dust is all that is required. Sanmitra Solar also offers automated cleaning sprinkler systems and annual maintenance contracts (AMC) that include string testing, inverter health checks, and thermal scans.'
  },
  {
    id: 'f6',
    category: 'commercial',
    question: 'What financial incentives exist for commercial and industrial clients?',
    answer: 'Commercial and industrial entities can leverage Accelerated Depreciation (currently up to 40% under Section 32 of the Income Tax Act in India), significantly lowering taxable corporate income. Coupled with solar electricity tariffs that are often 40-60% cheaper than commercial grid power, most commercial projects achieve an attractive payback period within 3 to 4 years and an IRR exceeding 25%.'
  },
  {
    id: 'f7',
    category: 'residential',
    question: 'What happens to solar generation during cloudy, monsoon, or rainy days?',
    answer: 'Solar panels generate power from ambient light (diffused solar irradiance), not heat. During cloudy, rainy, or monsoon conditions, panels continue to produce electricity, typically between 20% to 50% of their peak capacity depending on cloud density. Because your system is connected to the grid, the utility automatically supplies any deficit seamlessly without any flicker or interruption.'
  },
  {
    id: 'f8',
    category: 'commercial',
    question: 'Will solar installation damage our existing roof or cause water leakage?',
    answer: 'Not with Sanmitra Solar. We strictly engineer roof attachments based on the roof type. For flat concrete roofs, we use elevated structural hot-dip galvanized columns with specialized chemical anchor chemical bolts, backed by water-tight sealants and pedestal civil grouting. For industrial PEB metal sheds, we use non-penetrative aluminium standing-seam clamps that grip the ribs of the sheet with zero holes drilled into the metal.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Sanjeev Wagh',
    role: 'Founder & Managing Director',
    experience: '18+ Years Renewable Leadership',
    bio: 'Pioneered solar EPC practices across western India, steering over 50 MW of solar deployment with an unwavering commitment to engineering rigor and ethics.',
    image: '/images/people/person-5.jpg'
  },
  {
    id: '2',
    name: 'Priyanka Kulkarni',
    role: 'Head of Solar Engineering & Design',
    experience: '12+ Years System Architect',
    bio: 'Specialist in 3D solar irradiance modeling, HT interconnection design, and high-efficiency bi-facial rooftop system optimization.',
    image: '/images/people/person-2.jpg'
  },
  {
    id: '3',
    name: 'Vikramaditya Shinde',
    role: 'Chief of Project Execution & Safety',
    experience: '14+ Years Industrial EPC',
    bio: 'Oversees on-site construction standards, certified ISO 45001 safety compliance, and rapid liaisoning with state electrical inspectorates and DISCOMs.',
    image: '/images/people/person-6.jpg'
  },
  {
    id: '4',
    name: 'Neha Deshmukh',
    role: 'Director of Customer Experience',
    experience: '10+ Years CleanTech Operations',
    bio: 'Leads consumer subsidy processing, remote IoT monitoring desks, and guarantees responsive after-sales service for over 1,000+ satisfied clients.',
    image: '/images/people/person-4.jpg'
  }
];

export const COMPARISON_POINTS = [
  {
    feature: 'Solar Panel Selection',
    sanmitra: 'Strictly Tier-1 Monocrystalline & Bi-facial Half-Cut modules with positive power tolerance',
    others: 'Generic or multi-crystalline panels with unverified origin and high degradation rates'
  },
  {
    feature: 'Roof Structural Integrity',
    sanmitra: 'Custom hot-dip galvanized & anodized aluminium with certified 150 km/h wind resilience & zero leakage guarantees',
    others: 'Mild steel painted structures prone to corrosion, roof water seepage, and rust stains'
  },
  {
    feature: 'Net Metering & Subsidies',
    sanmitra: '100% end-to-end liaisoning handled by in-house regulatory team with tracking updates',
    others: 'Customer forced to handle complex DISCOM approvals, inspector visits, and portal applications'
  },
  {
    feature: 'System Safety & Protection',
    sanmitra: 'Dedicated Type-2 Surge Protection Devices (SPD), DC isolators, class-A earthing & lightning arresters',
    others: 'Bare minimum protective switchgear, often omitting DC isolators or proper earth pits'
  },
  {
    feature: 'Remote Monitoring & IoT',
    sanmitra: 'Cloud telemetry smartphone app with automated generation loss alerts & string-level analytics',
    others: 'No live telemetry or basic inverter screen check requiring manual physical inspection'
  },
  {
    feature: 'After-Sales Service (O&M)',
    sanmitra: 'Dedicated service engineers with guaranteed 24-48 hr site turnaround and 5-yr workmanship warranty',
    others: 'Disappearing installers after payment with no technical support when inverters trigger faults'
  }
];

export const MODULE_SERIES = [
  {
    id: 'solaris-n-type',
    name: 'SOLARIS N-Type TOPCon Dual-Glass',
    badge: 'Flagship Technology (580W - 710W)',
    category: 'Commercial & Utility Scale',
    wattageRange: '580W - 710W',
    maxEfficiency: '22.8%',
    temperatureCoeff: '-0.30% / °C',
    degradationFirstYear: '< 1.0%',
    degradationAnnual: '< 0.40% / year',
    warrantyProduct: '12 Years',
    warrantyPerformance: '30 Years Linear Output',
    bifaciality: 'Up to 80% ± 5%',
    image: '/images/home/industrial-solar.jpg',
    description: 'Engineered with cutting-edge N-Type TOPCon 16BB cell architecture. Dual 2.0mm tempered glass ensures extreme mechanical resistance and superior low-light early morning/overcast performance.',
    features: [
      'Zero Light Induced Degradation (LID) & LeTID immunity',
      'Dual 2.0mm anti-reflective coated heat-strengthened glass',
      'Up to 80% bifaciality harvesting rear-side reflected albedo power',
      'Lower Levelized Cost of Energy (LCOE) and optimized BOS costs',
      'Certified for 5400 Pa mechanical snow load and 2400 Pa wind load'
    ]
  },
  {
    id: 'terra-mono-perc',
    name: 'TERRA Mono PERC Half-Cut Series',
    badge: 'High-Density Residential (450W - 550W)',
    category: 'Residential Rooftops & Societies',
    wattageRange: '450W - 550W',
    maxEfficiency: '21.4%',
    temperatureCoeff: '-0.35% / °C',
    degradationFirstYear: '< 2.0%',
    degradationAnnual: '< 0.55% / year',
    warrantyProduct: '12 Years',
    warrantyPerformance: '25 Years Linear Output',
    bifaciality: 'Monofacial High-Density',
    image: '/images/home/residential-solar.jpg',
    description: 'High-power monocrystalline half-cut cells designed to maximize kilowatt generation on constrained urban rooftops. Lower internal resistance minimizes hot-spot risk and ensures higher shade tolerance.',
    features: [
      'Multi-busbar half-cut layout reduces internal resistive losses',
      'Superior performance under partial shadow conditions',
      'Anodized black aluminium alloy frame for architectural elegance',
      'IP68 rated junction box with bypass diodes for heat dissipation',
      'Positive power tolerance guarantee of +0 to +4.99W'
    ]
  },
  {
    id: 'aero-pergola',
    name: 'AERO Architectural Pergola Series',
    badge: 'Dual-Glass Terrace Gazebo (440W - 500W)',
    category: 'Villas & Architectural Living Spaces',
    wattageRange: '440W - 500W',
    maxEfficiency: '20.8%',
    temperatureCoeff: '-0.32% / °C',
    degradationFirstYear: '< 1.2%',
    degradationAnnual: '< 0.45% / year',
    warrantyProduct: '15 Years',
    warrantyPerformance: '30 Years Linear Output',
    bifaciality: 'Semi-Transparent Bi-facial',
    image: '/images/home/residential-solar.jpg',
    description: 'Semi-transparent bifacial frameless or sleek-framed modules engineered for luxury elevated pergolas, carports, and terrace canopies. Combines natural daylighting with active clean energy generation.',
    features: [
      'Transforms idle terrace into a shaded luxury outdoor lounge',
      'Frameless aesthetic with custom waterproof aluminium mounting',
      'Dual-glass fire-class A safety rating',
      'Harvests direct overhead sun and ambient terrace lighting',
      'Zero roof leakage guaranteed through structural perimeter gutters'
    ]
  }
];

export const QUALITY_STANDARDS = [
  {
    step: '01',
    title: 'Triple-Stage EL Crack Detection',
    description: '100% Electroluminescence (EL) infrared optical screening performed before and after lamination to detect micro-cracks, soldering defects, and inactive cell regions.',
    metric: '100% Inspected'
  },
  {
    step: '02',
    title: 'Severe Mechanical Load (5400 Pa)',
    description: 'Certified to withstand 5400 Pa snow/downward pressure and 2400 Pa high-velocity wind loads (equivalent to 150 km/h cyclone storms).',
    metric: '5400 Pa / 2400 Pa'
  },
  {
    step: '03',
    title: 'Anti-PID & Salt-Mist Resistance',
    description: 'Extensive testing in harsh humid, coastal, and chemical environments conforming to IEC 61701 (Salt Mist Severity 6) and IEC 62716 (Ammonia Corrosion).',
    metric: 'Severity Class 6'
  },
  {
    step: '04',
    title: 'Extreme Thermal Cycling (-40°C to +85°C)',
    description: 'Modules undergo 200 accelerated thermal freeze-thaw cycles and 1000 hours of damp heat (85°C and 85% relative humidity) to guarantee 30-year field longevity.',
    metric: '200 Cycles'
  },
  {
    step: '05',
    title: 'Hail Impact & Dynamic Stress Testing',
    description: 'Tested against 25mm ice hail balls fired at 23 m/s (82.8 km/h) velocity to ensure unbreakable front tempered glass integrity.',
    metric: '25mm @ 83 km/h'
  },
  {
    step: '06',
    title: 'Positive Power Tolerance (+0 to +5W)',
    description: 'Every panel is factory flash-tested under Standard Test Conditions (STC) with positive power sorting, ensuring you never receive less than rated nameplate wattage.',
    metric: '+0 to +4.99W'
  }
];

export const RESOURCE_DOWNLOADS = [
  {
    id: 'res-1',
    title: 'Solar PV Module Technical Master Catalog',
    category: 'Product Specifications',
    size: '4.2 MB',
    format: 'PDF',
    description: 'Comprehensive electrical data sheets, I-V curves, mechanical dimensions, and temperature coefficients for N-Type TOPCon and Mono PERC series.'
  },
  {
    id: 'res-2',
    title: '30-Year Linear Warranty & Performance Charter',
    category: 'Warranty & Quality',
    size: '1.8 MB',
    format: 'PDF',
    description: 'Official manufacturer warranty terms, degradation limits, replacement procedures, and Tier-1 quality assurance guarantees.'
  },
  {
    id: 'res-3',
    title: 'Rooftop Structural Engineering & Safety Manual',
    category: 'Installation Guide',
    size: '3.5 MB',
    format: 'PDF',
    description: 'Detailed instructions on structural chemical anchoring, zero-penetration standing seam metal clamps, and IEC earthing safety guidelines.'
  },
  {
    id: 'res-4',
    title: 'PM Surya Ghar & Net-Metering State Policy Handbook',
    category: 'Subsidies & Regulatory',
    size: '2.9 MB',
    format: 'PDF',
    description: 'Step-by-step guide on central capital subsidies, discom application procedures, and state-wise net-metering interconnection rules.'
  }
];

