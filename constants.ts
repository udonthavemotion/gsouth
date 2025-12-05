import { HomeModel, Testimonial } from './types';
import HOMES from './data/homes';

export const COMPANY_INFO = {
  name: "Gulf South Homes Inc",
  tagline: "Delivered Fast. Built to Last.",
  founded: 1995,
  address: "1986 Highway 182, Houma, LA 70364",
  phone: "(985) 876-0222",
  fax: "(985) 580-4024",
  email: "info@gulfsouthhomesinc.com",
  hours: {
    weekdays: "Monday - Friday: 8:00 am – 5:00 pm",
    saturday: "Saturday: 9:00 am – 3:00 pm",
    sunday: "Sunday: Closed"
  },
  locationCoords: { lat: 29.5958, lng: -90.7195 }, // Approx for Houma
  owners: {
    owner: "Stephanie Duplantis",
    generalManager: "Tim Duplantis"
  },
  certifications: ["BBB Accredited", "LHMA Member"]
};

// Export real home data
export const MOCK_HOMES: HomeModel[] = HOMES;

// Legacy MOCK_HOMES data (now using real data from data/homes.ts)
const LEGACY_MOCK_HOMES: HomeModel[] = [
  {
    id: 'h1',
    name: "The Eden",
    manufacturer: "Champion",
    type: "Double Wide",
    beds: 3,
    baths: 2,
    sqft: 1800,
    description: "A spacious open-concept living area perfect for families. Features a modern kitchen island and a luxurious master suite.",
    features: ["Open Floorplan", "Kitchen Island", "Soaker Tub", "Energy Efficient Windows"],
    imageUrl: "https://picsum.photos/id/15/800/600",
    isFeatured: true
  },
  {
    id: 'h2',
    name: "King David 64",
    manufacturer: "Franklin",
    type: "Modular",
    beds: 4,
    baths: 3,
    sqft: 2200,
    description: "Our premium modular model offering unparalleled construction quality and high-end finishes throughout.",
    features: ["Granite Countertops", "Farmhouse Sink", "Walk-in Pantry", "Bonus Room"],
    imageUrl: "https://picsum.photos/id/18/800/600",
    isFeatured: true
  },
  {
    id: 'h3',
    name: "The Magnolia",
    manufacturer: "Sunshine",
    type: "Single Wide",
    beds: 2,
    baths: 2,
    sqft: 1100,
    description: "Perfect for starters or downsizers, the Magnolia maximizes every inch of space without sacrificing style.",
    features: ["Efficient Layout", "Modern Appliances", "Built-in Shelving"],
    imageUrl: "https://picsum.photos/id/20/800/600",
    isFeatured: false
  },
  {
    id: 'h4',
    name: "Bayou Classic",
    manufacturer: "BG",
    type: "Double Wide",
    beds: 3,
    baths: 2,
    sqft: 1650,
    description: "Designed with the Louisiana lifestyle in mind, featuring a large porch option and storm-ready construction.",
    features: ["Wind Zone III", "Large Porch Ready", "Utility Room"],
    imageUrl: "https://picsum.photos/id/24/800/600",
    isFeatured: false
  },
  {
    id: 'h5',
    name: "Southern Comfort",
    manufacturer: "Champion",
    type: "Modular",
    beds: 4,
    baths: 3.5,
    sqft: 2400,
    description: "The ultimate in luxury living. This expansive home offers a dedicated office, formal dining, and a chef's kitchen.",
    features: ["Chef's Kitchen", "Home Office", "Formal Dining", "Mud Room"],
    imageUrl: "https://picsum.photos/id/28/800/600",
    isFeatured: true
  },
  {
    id: 'h6',
    name: "The Cypress",
    manufacturer: "Sunshine",
    type: "Single Wide",
    beds: 3,
    baths: 2,
    sqft: 1216,
    description: "Surprisingly spacious single wide with a smart split-bedroom floorplan for privacy.",
    features: ["Split Floorplan", "Walk-in Closets", "Crown Molding"],
    imageUrl: "https://picsum.photos/id/29/800/600",
    isFeatured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    location: "Houma, LA",
    text: "Tim and Stephanie treated us like family. They helped us find the perfect land package and the home setup was flawless.",
    rating: 5
  },
  {
    name: "Michael B.",
    location: "Thibodaux, LA",
    text: "Best prices in the parish. The service department fixed a small issue we had a week after moving in immediately.",
    rating: 5
  },
  {
    name: "The Guidry Family",
    location: "Morgan City, LA",
    text: "We were overwhelmed by the financing part, but Gulf South walked us through every step. Highly recommend.",
    rating: 5
  }
];
