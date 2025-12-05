export interface Manufacturer {
  slug: string;
  displayName: string;
  description: string;
  shortTagline?: string;
  logoPath: string;
  logoAlt: string;
  singlesRoute: string;
  doublesRoute: string;
}

export const MANUFACTURERS: Manufacturer[] = [
  {
    slug: 'bg',
    displayName: 'BG Manufacturing',
    shortTagline: 'Quality Built for Louisiana',
    description: 'BG Manufacturing specializes in durable, storm-ready homes designed specifically for the Gulf Coast region. Their homes feature Wind Zone III construction and are built to withstand Louisiana\'s unique climate challenges. BG offers both single-wide and double-wide models with customizable floor plans to fit your family\'s needs.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/bg-homes-1920w.jpg',
    logoAlt: 'BG Manufacturing logo',
    singlesRoute: '/single-wide?manufacturer=BG',
    doublesRoute: '/double-wide?manufacturer=BG'
  },
  {
    slug: 'sunshine',
    displayName: 'Sunshine Homes',
    shortTagline: 'Bright Living, Smart Design',
    description: 'Sunshine Homes brings over 50 years of manufacturing excellence to every home they build. Known for their innovative floor plans and energy-efficient construction, Sunshine offers a wide range of single-wide and double-wide models. Their homes feature modern amenities, quality craftsmanship, and thoughtful design that maximizes living space.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/SUNSHINE-LOGO-2880w.jpg',
    logoAlt: 'Sunshine Homes logo',
    singlesRoute: '/single-wide?manufacturer=Sunshine',
    doublesRoute: '/double-wide?manufacturer=Sunshine'
  },
  {
    slug: 'franklin',
    displayName: 'Franklin Homes',
    shortTagline: 'Built to Last, Designed to Live',
    description: 'Franklin Homes has been a trusted name in manufactured housing for decades, combining traditional craftsmanship with modern design. Their homes are known for superior construction quality, attention to detail, and beautiful interior finishes. Franklin offers an extensive selection of single-wide and double-wide models, many available for immediate delivery.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/FRANKLIN-HOMES-2880w.jpg',
    logoAlt: 'Franklin Homes logo',
    singlesRoute: '/single-wide?manufacturer=Franklin',
    doublesRoute: '/double-wide?manufacturer=Franklin'
  },
  {
    slug: 'champion',
    displayName: 'Champion Homes',
    shortTagline: 'America\'s Home Builder',
    description: 'As one of the nation\'s largest manufactured home builders, Champion Homes offers exceptional value and quality. Their homes feature contemporary designs, energy-efficient features, and durable construction. Champion provides a diverse range of single-wide and double-wide floor plans, from starter homes to luxury models.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/CHAMPION-LOGO-2880w.jpg',
    logoAlt: 'Champion Homes logo',
    singlesRoute: '/single-wide?manufacturer=Champion',
    doublesRoute: '/double-wide?manufacturer=Champion'
  },
  {
    slug: 'southern',
    displayName: 'Southern Energy Homes',
    shortTagline: 'Energy Efficient Living',
    description: 'Southern Energy Homes specializes in energy-efficient manufactured homes designed to reduce utility costs while maintaining comfort. Their homes feature advanced insulation, high-performance windows, and efficient HVAC systems. Southern Energy offers both single-wide and double-wide models with a focus on sustainability and cost savings.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/SOUTHERN-HOMES-LOGO-2880w.jpg',
    logoAlt: 'Southern Energy Homes logo',
    singlesRoute: '/single-wide?manufacturer=Southern',
    doublesRoute: '/double-wide?manufacturer=Southern'
  },
  {
    slug: 'cavalier',
    displayName: 'Cavalier Homes',
    shortTagline: 'Quality You Can Trust',
    description: 'Cavalier Homes has been building quality manufactured homes since 1973, focusing on durability, value, and customer satisfaction. Their homes feature solid construction, attractive designs, and reliable performance. Cavalier offers a variety of single-wide and double-wide models suitable for first-time buyers and growing families.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/CAVALIER-HOMES-LOGO-2880w.jpg',
    logoAlt: 'Cavalier Homes logo',
    singlesRoute: '/single-wide?manufacturer=Cavalier',
    doublesRoute: '/double-wide?manufacturer=Cavalier'
  },
  {
    slug: 'tru',
    displayName: 'Tru Homes',
    shortTagline: 'True Value, True Quality',
    description: 'Tru Homes delivers exceptional value with well-designed, affordable manufactured homes. Their models feature modern layouts, quality materials, and efficient use of space. Tru Homes offers both single-wide and double-wide options, making homeownership accessible without compromising on quality or style.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/TRU-LOGO-2880w.jpg',
    logoAlt: 'Tru Homes logo',
    singlesRoute: '/single-wide?manufacturer=Tru',
    doublesRoute: '/double-wide?manufacturer=Tru'
  },
  {
    slug: 'buccaneer',
    displayName: 'Buccaneer Homes',
    shortTagline: 'Coastal Living, Built Strong',
    description: 'Buccaneer Homes specializes in homes designed for coastal and hurricane-prone areas. Their construction meets or exceeds Wind Zone III standards, making them ideal for Louisiana\'s Gulf Coast. Buccaneer offers single-wide and double-wide models built to withstand severe weather while providing comfortable, attractive living spaces.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/BUCCANEER-LOGO-2880w.jpg',
    logoAlt: 'Buccaneer Homes logo',
    singlesRoute: '/single-wide?manufacturer=Buccaneer',
    doublesRoute: '/double-wide?manufacturer=Buccaneer'
  },
  {
    slug: 'patriot',
    displayName: 'Patriot Homes',
    shortTagline: 'Proudly Built in America',
    description: 'Patriot Homes combines American craftsmanship with modern design to create quality manufactured homes. Their homes feature durable construction, attractive exteriors, and well-planned interiors. Patriot offers a range of single-wide and double-wide models designed to meet diverse needs and budgets.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/PATRIOT-HOMES-LOGO-2880w.jpg',
    logoAlt: 'Patriot Homes logo',
    singlesRoute: '/single-wide?manufacturer=Patriot',
    doublesRoute: '/double-wide?manufacturer=Patriot'
  },
  {
    slug: 'clayton-epic',
    displayName: 'Clayton Epic',
    shortTagline: 'Epic Living, Epic Value',
    description: 'Clayton Epic represents the premium line from Clayton Homes, featuring upgraded features, modern designs, and superior construction. These homes offer luxury amenities, spacious floor plans, and high-end finishes. Clayton Epic provides both single-wide and double-wide models for buyers seeking premium quality and style.',
    logoPath: '/Modular Homes Page/modular home pics/man logos/CLAYTON-EPIC-LOGO-2880w.jpg',
    logoAlt: 'Clayton Epic logo',
    singlesRoute: '/single-wide?manufacturer=Clayton Epic',
    doublesRoute: '/double-wide?manufacturer=Clayton Epic'
  }
];
