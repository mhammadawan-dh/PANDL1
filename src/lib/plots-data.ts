export interface PlotListing {
  id: string;
  slug: string;
  title: string;
  subTitle: string;
  category: "Residential Plots" | "Commercial Land" | "Mixed Use" | "Villa Communities" | "Industrial Land" | "Development Projects";
  location: {
    community: string;
    sector?: string;
    subDistrict?: string;
    city: "Dubai";
    coordinates?: [number, number];
  };
  priceAED: number;
  pricePerSqFtGFA?: number;
  plotAreaSqFt: number;
  plotAreaSqM: number;
  maxGfaSqFt: number;
  far: number; // Floor Area Ratio
  heightAllowance: string;
  ownership: "Freehold" | "Leasehold";
  dldApproved: boolean;
  exclusiveMandate: boolean;
  cornerPlot?: boolean;
  waterfront?: boolean;
  metroProximity?: string;
  images: {
    hero: string;
    gallery: string[];
    masterPlan?: string;
  };
  description: string;
  feasibility: {
    projectedGDVAED: number;
    estimatedConstructionAED: number;
    developerMarginPercent: number;
    targetAssetClass: string;
    absorptionHorizon: string;
  };
  parameters: {
    label: string;
    value: string;
    verified: boolean;
  }[];
  dataStatus: "verified" | "demo";
}

export const PALC_COMPANY_INFO = {
  name: "Plots & Lands Company (PALC)",
  tagline: "A Company With 100% Laser Focus on Plots & Lands only in Dubai, UAE.",
  introduction: "Plots & Lands Company isn't a typical brokerage. We're a private land advisory operating exclusively in Dubai's most sought after communities where the real deals never make it to the public market. We work directly with landowners and developers, cutting through inflated margins and layers of middlemen to deliver genuine, high-value opportunities before they're seen by anyone else.",
  phone: "+971 56 890 4023",
  whatsapp: "+971568904023",
  email: "info@palc.ae",
  website: "www.palc.ae",
  address: "Office 2206, Single Business Tower, Business Bay, Dubai, UAE",
  stats: [
    { label: "Focus", value: "100% Dubai Plots & Lands" },
    { label: "Direct Sourcing", value: "0 DSPs / Middlemen" },
    { label: "Corridor Access", value: "20+ Years" },
    { label: "Verified Data", value: "FAR / GFA / DLD Cleared" },
  ],
  corePrinciples: [
    {
      title: "Direct Deals",
      description: "Full control. Verified access. Zero confusion. Every transaction is transparent and direct between owner and serious buyer without middleman inflation.",
    },
    {
      title: "Knowledge & Network",
      description: "Over 20 years of insider access across Dubai's strategic land corridors and off-market master development allocations.",
    },
    {
      title: "Value Engineering",
      description: "Every plot analyzed for its exact location, FAR, GFA optimization, and capital appreciation potential before term sheets are drafted.",
    },
  ],
  testimonials: [
    {
      author: "Developer",
      origin: "Pakistan, Bukadra Project",
      quote: "I've dealt with many intermediaries before, but PALC was different — no layers, no inflated numbers. Within days, I had direct owner access and full clarity on the plot documents with clear, transparent location & price.",
      tag: "Direct Owner Transaction"
    },
    {
      author: "Private Investor",
      origin: "Pakistani, Dubai Islands Sector A",
      quote: "They sourced a plot that wasn't even in circulation yet. Too much gossip & indirect offers in the market, but PALC secured the right corner plot. From due diligence to negotiation, every stage was handled with data and discipline. PALC feels less like a broker, more like a private land intelligence firm.",
      tag: "Off-Market Waterfront Corner Plot"
    },
    {
      author: "Developer",
      origin: "Indian, Al Furjan",
      quote: "Plots & Lands Company understands our requirements — we needed two plots next to each other and near to the metro station. They helped me secure a rare parcel ahead of the public market, and its valuation doubled within months. Precision, privacy, and profit — that's Plots & Lands Company.",
      tag: "Adjacent Urban Plots Near Metro"
    },
  ]
};

export const PLOT_CATEGORIES = [
  { id: "all", name: "All Opportunities", count: 28 },
  { id: "residential", name: "Residential Plots", count: 12, desc: "High-density & mid-rise freehold zoning for landmark developments" },
  { id: "commercial", name: "Commercial Land", count: 6, desc: "Prime office, medical, and hospitality corridor land parcels" },
  { id: "mixed-use", name: "Mixed Use", count: 5, desc: "Integrated retail, hotel, and luxury residential development land" },
  { id: "villa", name: "Villa Communities", count: 3, desc: "Exclusive beachfront and golf-estate luxury residential plots" },
  { id: "industrial", name: "Industrial Land", count: 2, desc: "High-spec logistics, warehouse, and light manufacturing acreage" },
];

export const PLOTS_DATA: PlotListing[] = [
  {
    id: "palc-plot-001",
    slug: "dubai-islands-waterfront-plot",
    title: "Dubai Islands Sector A Waterfront High-Rise Plot",
    subTitle: "Prime Waterfront Freehold Parcel with Direct Beachfront & Marina Frontage",
    category: "Residential Plots",
    location: {
      community: "Dubai Islands",
      sector: "Sector A",
      subDistrict: "Marina Coastal Strip",
      city: "Dubai",
      coordinates: [25.2974, 55.3093],
    },
    priceAED: 58000000,
    pricePerSqFtGFA: 980,
    plotAreaSqFt: 54200,
    plotAreaSqM: 5035,
    maxGfaSqFt: 227640,
    far: 4.2,
    heightAllowance: "G+P+24",
    ownership: "Freehold",
    dldApproved: true,
    exclusiveMandate: true,
    cornerPlot: true,
    waterfront: true,
    images: {
      hero: "/images/plots/dubai-islands-waterfront.png",
      gallery: [
        "/images/plots/dubai-islands-waterfront.png",
        "/images/plots/dubai-skyline-hero.png",
        "/images/plots/al-furjan-commercial.png"
      ],
      masterPlan: "/images/plots/dubai-south-industrial.png"
    },
    description: "An exceptional, off-market corner plot situated on the primary coastal boulevard of Dubai Islands Sector A. Offering unrestricted marine horizon views, private beach access, and immediate connection to the Deira Islands bridge corridor. Full title deed cleared, master developer NOC ready, and pre-concept architectural massing studies completed.",
    feasibility: {
      projectedGDVAED: 410000000,
      estimatedConstructionAED: 185000000,
      developerMarginPercent: 28.5,
      targetAssetClass: "Branded Ultra-Luxury Residences & Penthouses",
      absorptionHorizon: "24-30 Months"
    },
    parameters: [
      { label: "Permitted Use", value: "Residential High-Rise / Hotel Apartments", verified: true },
      { label: "Height Allowance", value: "Ground + Podium + 24 Floors", verified: true },
      { label: "Floor Area Ratio (FAR)", value: "4.20 Net Allowed", verified: true },
      { label: "Plot Coverage Ratio", value: "60% Ground / 45% Tower", verified: true },
      { label: "Setbacks", value: "6m Frontage / 4.5m Side Setbacks", verified: true },
      { label: "Title Deed Status", value: "Clean Title Deed / 100% Freehold", verified: true },
      { label: "Infrastructure Status", value: "DEWA, Sewage & Road Network Fully Connected", verified: true },
    ],
    dataStatus: "verified"
  },
  {
    id: "palc-plot-002",
    slug: "al-furjan-commercial-residential",
    title: "Al Furjan Metro Corridor Twin Adjacent Plots",
    subTitle: "Rare Adjacent Dual-Parcel Development Site 200m from Discovery Gardens Metro",
    category: "Commercial Land",
    location: {
      community: "Al Furjan",
      sector: "Zone 2",
      subDistrict: "Metro Link Corridor",
      city: "Dubai",
      coordinates: [25.0245, 55.1388],
    },
    priceAED: 42000000,
    pricePerSqFtGFA: 650,
    plotAreaSqFt: 62400,
    plotAreaSqM: 5797,
    maxGfaSqFt: 187200,
    far: 3.0,
    heightAllowance: "G+8",
    ownership: "Freehold",
    dldApproved: true,
    exclusiveMandate: true,
    cornerPlot: true,
    waterfront: false,
    metroProximity: "200m Walk to Dubai Metro Route 2020",
    images: {
      hero: "/images/plots/al-furjan-commercial.png",
      gallery: [
        "/images/plots/al-furjan-commercial.png",
        "/images/plots/dubai-skyline-hero.png"
      ],
      masterPlan: "/images/plots/dubai-south-industrial.png"
    },
    description: "Two prime contiguous urban plots situated directly on the Al Furjan arterial boulevard with direct walkable connectivity to the metro station. Designed for high-yield mid-market residential apartments or integrated medical/commercial suites. Both title deeds under single private beneficial ownership with zero financial encumbrances.",
    feasibility: {
      projectedGDVAED: 260000000,
      estimatedConstructionAED: 118000000,
      developerMarginPercent: 24.2,
      targetAssetClass: "High-Yield Urban Rental Residences & Retail Ground",
      absorptionHorizon: "18 Months"
    },
    parameters: [
      { label: "Permitted Use", value: "Residential G+8 with Retail Strip", verified: true },
      { label: "FAR Allowance", value: "3.00 with Basements", verified: true },
      { label: "Corner Frontage", value: "Double 40m Road Frontage", verified: true },
      { label: "Title Deed Status", value: "DLD Registered / Unencumbered", verified: true },
    ],
    dataStatus: "verified"
  },
  {
    id: "palc-plot-003",
    slug: "dubai-south-logistics-industrial",
    title: "Dubai South Freehold Logistics & Mixed Industrial Hub",
    subTitle: "Massive Freehold Acreage Facing Al Maktoum Airport Logistics Highway",
    category: "Industrial Land",
    location: {
      community: "Dubai South",
      sector: "Aviation & Logistics City",
      city: "Dubai",
      coordinates: [24.8967, 55.1611],
    },
    priceAED: 34500000,
    pricePerSqFtGFA: 275,
    plotAreaSqFt: 128500,
    plotAreaSqM: 11938,
    maxGfaSqFt: 154200,
    far: 1.2,
    heightAllowance: "G+M+2",
    ownership: "Freehold",
    dldApproved: true,
    exclusiveMandate: true,
    images: {
      hero: "/images/plots/dubai-south-industrial.png",
      gallery: [
        "/images/plots/dubai-south-industrial.png",
        "/images/plots/dubai-skyline-hero.png"
      ]
    },
    description: "Institutional logistics and industrial land parcel in Dubai South within immediate proximity to DWC Al Maktoum International Airport cargo gates. 100% Freehold classification permitting cold storage, e-commerce fulfillment, and bonded warehousing.",
    feasibility: {
      projectedGDVAED: 110000000,
      estimatedConstructionAED: 48000000,
      developerMarginPercent: 21.0,
      targetAssetClass: "Grade-A Logistics & Cold Storage Hub",
      absorptionHorizon: "Immediate"
    },
    parameters: [
      { label: "Zoning", value: "Industrial & Logistics Freehold", verified: true },
      { label: "FAR Allowance", value: "1.20 Expandable", verified: true },
      { label: "Heavy Vehicle Access", value: "Triple Access Gates Approved", verified: true },
      { label: "Power Allocation", value: "High-Voltage Grid Pre-Reserved", verified: true },
    ],
    dataStatus: "verified"
  },
  {
    id: "palc-plot-004",
    slug: "business-bay-canal-front",
    title: "Business Bay Canal-Facing High-Rise Commercial Plot",
    subTitle: "Ultra-Prime Marasi Canal Frontage with Unrestricted Downtown Skyline Views",
    category: "Commercial Land",
    location: {
      community: "Business Bay",
      sector: "Canal Front",
      city: "Dubai",
    },
    priceAED: 82000000,
    pricePerSqFtGFA: 1150,
    plotAreaSqFt: 38000,
    plotAreaSqM: 3530,
    maxGfaSqFt: 258400,
    far: 6.8,
    heightAllowance: "G+40",
    ownership: "Freehold",
    dldApproved: true,
    exclusiveMandate: true,
    waterfront: true,
    images: {
      hero: "/images/plots/dubai-skyline-hero.png",
      gallery: [
        "/images/plots/dubai-skyline-hero.png",
        "/images/plots/dubai-islands-waterfront.png"
      ]
    },
    description: "Rare unencumbered canal-front high-rise plot in Business Bay. Directly facing the boardwalk with panoramic Burj Khalifa angles. Ideally configured for flagship hotel development, corporate headquarters, or branded mixed-use residence.",
    feasibility: {
      projectedGDVAED: 520000000,
      estimatedConstructionAED: 235000000,
      developerMarginPercent: 27.8,
      targetAssetClass: "5-Star Branded Hotel & Residences",
      absorptionHorizon: "36 Months"
    },
    parameters: [
      { label: "Permitted Use", value: "Commercial / Hospitality / Residential", verified: true },
      { label: "FAR", value: "6.80 GFA", verified: true },
      { label: "Height", value: "Ground + 40 Floors", verified: true },
    ],
    dataStatus: "demo"
  },
  {
    id: "palc-plot-005",
    slug: "bukadra-meydan-horizon",
    title: "Bukadra / Meydan Horizon Mixed-Use Development Site",
    subTitle: "Strategic Highway Junction Plot Directly Connecting Ras Al Khor & Downtown",
    category: "Mixed Use",
    location: {
      community: "Bukadra",
      sector: "Meydan Horizon North",
      city: "Dubai",
    },
    priceAED: 49000000,
    pricePerSqFtGFA: 710,
    plotAreaSqFt: 75000,
    plotAreaSqM: 6968,
    maxGfaSqFt: 225000,
    far: 3.0,
    heightAllowance: "G+16",
    ownership: "Freehold",
    dldApproved: true,
    exclusiveMandate: true,
    images: {
      hero: "/images/plots/al-furjan-commercial.png",
      gallery: [
        "/images/plots/al-furjan-commercial.png",
        "/images/plots/dubai-south-industrial.png"
      ]
    },
    description: "Sourced directly from private family office ownership. Direct access off Ras Al Khor corridor with zero middleman markups. Clean title deed ready for immediate transfer.",
    feasibility: {
      projectedGDVAED: 320000000,
      estimatedConstructionAED: 140000000,
      developerMarginPercent: 25.0,
      targetAssetClass: "Urban Mixed-Use Residential & Community Retail",
      absorptionHorizon: "20 Months"
    },
    parameters: [
      { label: "FAR", value: "3.00", verified: true },
      { label: "Height", value: "G+16", verified: true },
    ],
    dataStatus: "demo"
  },
  {
    id: "palc-plot-006",
    slug: "palm-jumeirah-signature-frond",
    title: "Palm Jumeirah Signature Frond Ultra-Luxury Villa Plot",
    subTitle: "Exclusive Tip-Facing Beachfront Plot on Prestigious K-Frond",
    category: "Villa Communities",
    location: {
      community: "Palm Jumeirah",
      sector: "Frond K",
      city: "Dubai",
    },
    priceAED: 72000000,
    pricePerSqFtGFA: 4800,
    plotAreaSqFt: 22000,
    plotAreaSqM: 2043,
    maxGfaSqFt: 15400,
    far: 0.7,
    heightAllowance: "G+1+R",
    ownership: "Freehold",
    dldApproved: true,
    exclusiveMandate: true,
    waterfront: true,
    images: {
      hero: "/images/plots/dubai-islands-waterfront.png",
      gallery: [
        "/images/plots/dubai-islands-waterfront.png",
        "/images/plots/dubai-skyline-hero.png"
      ]
    },
    description: "Ultra-prime beachfront plot with private 120ft shoreline on Palm Jumeirah. Includes pre-approved modern mansion master plans with rooftop infinity pool and private yacht berth.",
    feasibility: {
      projectedGDVAED: 145000000,
      estimatedConstructionAED: 38000000,
      developerMarginPercent: 32.0,
      targetAssetClass: "Custom Super-Mansion",
      absorptionHorizon: "12 Months"
    },
    parameters: [
      { label: "Zoning", value: "Private Luxury Residential Villa", verified: true },
      { label: "Height", value: "Ground + 1 Floor + Rooftop Lounge", verified: true },
      { label: "Beach Frontage", value: "120 Feet Private Shoreline", verified: true },
    ],
    dataStatus: "demo"
  }
];

export const JV_MANDATES = [
  {
    id: "jv-01",
    title: "Dubai Islands Sector A Waterfront Hospitality JV",
    partnerNeed: "Tier-1 Construction & Branded Hotel Operator",
    landContribution: "Land Contributed at AED 65M Equity Value",
    structure: "50/50 Profit Participation with Preferred Return",
    location: "Dubai Islands, Sector A",
    badge: "Active Mandate"
  },
  {
    id: "jv-02",
    title: "Jumeirah Garden City Mixed-Use Residential G+8",
    partnerNeed: "Developer Equity & EPC Financing Partner",
    landContribution: "Unencumbered Freehold Land 42,000 sq ft",
    structure: "Turnkey Development with Pre-Agreed Buyout",
    location: "Al Satwa / Jumeirah Garden City",
    badge: "Negotiation Stage"
  },
  {
    id: "jv-03",
    title: "Dubai South Industrial Mega-Cold Storage Logistics",
    partnerNeed: "Institutional Infrastructure Fund / Asset Manager",
    landContribution: "Long-Term Freehold Acreage 150,000 sq ft",
    structure: "Build-to-Suit & 15-Year Institutional Triple-Net Lease",
    location: "Dubai South Aviation Corridor",
    badge: "Open for Bids"
  }
];
