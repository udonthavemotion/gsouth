import { HomeModel } from '../types';
import analysisData from './double-wide-homes-analysis.json';

// Helper function to get correct gallery paths from analysis data
const getGalleryPaths = (modelId: string): string[] => {
  const model = analysisData.models.find(m => m.id === modelId);
  if (model && model.images) {
    return model.images.map(img => img.path);
  }
  return [];
};

export const DOUBLE_WIDE_HOMES: HomeModel[] = [
  {
    id: 'boujee',
    name: 'The Boujee',
    manufacturer: 'Champion',
    type: 'Double Wide',
    beds: 4,
    baths: 2,
    sqft: 2016,
    description: 'Sophisticated luxury in every detail. The Boujee features an open-concept living space with premium finishes, a gourmet kitchen with oversized island, and a spacious master suite with walk-in closet.',
    features: ['Open Floor Plan', 'Gourmet Kitchen', 'Master Suite', 'Walk-in Closets', 'Luxury Vinyl Flooring'],
    imageUrl: '/assets/images/Double Wide Homes/boujee/gulf_south_homes_boujee_gallery_03-600h.jpg',
    gallery: getGalleryPaths('boujee'),
    isFeatured: true,
  },
  {
    id: 'boujeexl',
    name: 'The Boujee XL',
    manufacturer: 'Champion',
    type: 'Double Wide',
    beds: 5,
    baths: 3,
    sqft: 2376,
    description: 'Elevated luxury with extra space. An expanded version of our popular Boujee model with an additional bedroom, bathroom, and bonus room perfect for a home office or entertainment space.',
    features: ['Expanded Layout', 'Bonus Room', 'Premium Appliances', 'Double Vanities', 'Vaulted Ceilings'],
    imageUrl: '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-01-600h.jpg',
    gallery: ['/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-01-600h.jpg', '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-02-600h.jpg', '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-03-600h.jpg'],
    isFeatured: true,
  },
  {
    id: 'burton',
    name: 'The Burton',
    manufacturer: 'Sunshine',
    type: 'Double Wide',
    beds: 3,
    baths: 2,
    sqft: 1680,
    description: 'Classic elegance meets modern comfort. The Burton offers a thoughtfully designed layout with spacious living areas, a well-appointed kitchen, and a private master retreat.',
    features: ['Split Bedroom Design', 'Open Kitchen', 'Covered Porch', 'Energy Efficient', 'Pantry Storage'],
    imageUrl: '/assets/images/Double Wide Homes/burton/gulf_south_homes_burton_gallery_04-600h.jpg',
    gallery: getGalleryPaths('burton'),
  },
  {
    id: 'dauphine',
    name: 'The Dauphine',
    manufacturer: 'Franklin',
    type: 'Double Wide',
    beds: 4,
    baths: 2,
    sqft: 1856,
    description: 'French-inspired charm with Southern comfort. The Dauphine features elegant details, a flowing floor plan, and generous bedrooms perfect for growing families.',
    features: ['French Doors', 'Formal Dining', 'Tray Ceilings', 'Garden Tub', 'Cedar Closets'],
    imageUrl: '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-12-600h.jpg',
    gallery: getGalleryPaths('dauphine').length > 0 ? getGalleryPaths('dauphine') : ['/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-12-600h.jpg', '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-13-600h.jpg'],
  },
  {
    id: 'orleans',
    name: 'The Orleans',
    manufacturer: 'Franklin',
    type: 'Double Wide',
    beds: 4,
    baths: 2.5,
    sqft: 2244,
    description: 'Big Easy living with sophisticated style. The Orleans brings Louisiana charm to life with its spacious layout, high ceilings, and elegant architectural details.',
    features: ['High Ceilings', 'French Quarter Style', 'Half Bath', 'Butler Pantry', 'Covered Patio Ready'],
    imageUrl: '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-10-0h.jpg',
    gallery: getGalleryPaths('orleans').length > 0 ? getGalleryPaths('orleans') : ['/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-10-0h.jpg', '/assets/images/Double Wide Homes/gulf-south-homes-content-double-wide-home-models-11-0h.jpg'],
    isFeatured: true,
  },
  {
    id: 'washington',
    name: 'The Washington',
    manufacturer: 'Franklin',
    type: 'Double Wide',
    beds: 5,
    baths: 3,
    sqft: 2448,
    description: 'Monumental design for grand living. The Washington is our most spacious double-wide, featuring multiple living areas, five bedrooms, and luxury finishes throughout.',
    features: ['5 Bedrooms', '3 Full Baths', 'Multiple Living Areas', 'Gourmet Kitchen', 'Master Suite with Sitting Area'],
    imageUrl: '/assets/images/Double Wide Homes/washington/gulf_south_homes_washington_gallery_01-0h.jpg',
    gallery: getGalleryPaths('washington'),
    isFeatured: true,
  },
];
