import p0Image from '../assets/product/p0.jpeg';
import p1Image from '../assets/product/p1.jpeg';
import p2Image from '../assets/product/p2.jpeg';
import p3Image from '../assets/product/p3.jpeg';

export const products = [
  {
    id: 'leather-jacket',
    name: 'Jacket (Made to Order)',
    category: 'jackets',
    image: p0Image,
    price: '$350.00',
    description: 'Vintage and Classic Military -Inspired Bomber With Premium Top Grain Cow Leather. Furr Lining Ribbed Cuff , Sherline Detachable Coller and Relaxed Heritage Fit Modern Comfort Meets Vintage Aesthetic, 8 no.Ykk Brass  Zipper.',
    leatherType: ['Buffalo Leather', 'Cow Leather'],
    colors: ['Black', 'Brown'],
    features: [
      'Furr Lining',
      'Knit Ribbed Cuffs',
      'One Way Front Zipper',
      'Interior Both Side Pockets ',
      'Thickness Of Leather 1.2mm',
      'Ykk 8 Number Brass Zipper'
    ]
  },
  {
  id: 'military-jacket',
  name: 'Military Grade Heavy Canvas Workwear Jacket',
  category: 'jackets',
  image: p1Image,
  price: '$96.00',
  description: 'Built for the harshest environments and inspired by classic military field gear. Engineered from heavy-duty military-grade waxed canvas with premium full-grain leather accents. Features a naturally water-resistant and wind-resistant finish that develops a rich patina over time, giving every jacket unique character that reflects authentic wear.',
  materials: ['Military-Grade Waxed Canvas', 'Full-Grain Leather Collar', 'Full-Grain Leather Cuff Reinforcements', 'Corduroy Lining'],
  waxTreatment: ['Beeswax', 'Almond Oil', 'Paraffin Wax'],
  colors: ['Black', 'Tan', 'Olive', 'Brown'],
  hardware: ['Genuine YKK Brass Zipper', 'Solid Brass Snap Buttons'],
  features: [
    'Heavy-duty military-grade waxed canvas construction',
    'Naturally water-resistant and wind-resistant',
    'Premium full-grain leather collar',
    'Reinforced full-grain leather cuffs',
    'Soft corduroy-lined collar',
    'Genuine YKK solid brass zipper',
    'Heavy-duty solid brass snap buttons',
    'Develops distinctive vintage patina with age',
    'Reinforced construction for high-wear areas',
    'Suitable for outdoor adventures, workshop use, motorcycle riding, and everyday wear',
    'Built to last generations'
  ]
},{
  id: 'military-bags',
  name: 'Military Grade Heavy Canvas Roll-Top Backpack',
  category: 'canvas',
  image: p2Image,
  price: '$62.00',
  description: 'Built for extreme conditions and inspired by classic military field gear. Heavy-duty military-grade waxed canvas with premium leather shoulder straps and reinforced full-grain leather trim. Features an expandable roll-top closure for versatile storage and superior weather protection. Develops a rich vintage patina over time.',
  materials: ['Military-Grade Waxed Canvas', 'Top-Grain Crunch Leather Shoulder Straps', 'Full-Grain Leather Trim'],
  waxTreatment: ['Beeswax', 'Almond Oil', 'Paraffin Wax'],
  colors: ['Faded Black', 'Tobacco', 'Military Green'],
  hardware: ['Genuine YKK Zipper', 'Heavy-Duty Steel Buckles', 'Premium Metal Hardware'],
  features: [
    'Heavy-duty military-grade waxed canvas construction',
    'Naturally water-resistant, wind-resistant, and abrasion-resistant',
    'Expandable roll-top closure for versatile storage',
    'Superior protection against rain, dust, and elements',
    'Premium top-grain crunch leather shoulder straps',
    'Reinforced full-grain leather trim at high-stress areas',
    'Genuine YKK zipper',
    'Heavy-duty steel buckles and premium hardware',
    'Develops beautiful vintage patina with age',
    'Handcrafted precision engineering',
    'Ideal for travel, outdoor adventures, commuting, and work',
    'Built to last a lifetime'
  ]
},{
  id: 'leather-wallet',
  name: 'Calvin Buffalo Vegetable-Tanned Leather EDC Wallet & Card Holder',
  category: 'wallets',
  image: p3Image,
  price: '$45.00',
  description: 'A celebration of traditional craftsmanship and premium natural materials. Handcrafted from 100% buffalo vegetable-tanned leather using one of the oldest and most respected tanning methods. Features hand saddle stitching with premium waxed thread and develops a rich, unique patina with everyday use. Built to age beautifully and serve faithfully for decades.',
  materials: ['100% Premium Buffalo Vegetable-Tanned Leather'],
  tanningMethod: 'Traditional Vegetable Tanning with Natural Plant Extracts',
  craftingTechnique: 'Hand Saddle Stitching with Premium Waxed Thread',
  colors: ['Black', 'Cognac', 'Dark Tan', 'Natural'],
  features: [
    'Premium buffalo vegetable-tanned leather',
    'Completely handcrafted by skilled artisans',
    'Individually hand-dyed for unique finish',
    'Durable hand saddle stitching (two-needle technique)',
    'Stronger seams that remain secure if damaged',
    'Develops rich and beautiful natural patina over time',
    'Burnished and hand-finished edges',
    'Slim EDC design for cards, cash, and essentials',
    'Multiple card slots and storage compartments',
    'Environmentally conscious natural tanning process',
    'Strong, long-lasting construction for everyday use',
    'Unique natural grain patterns—no two pieces identical',
    'Gets better with age and use',
    'Built to last a lifetime'
  ]
}
];

export const categories = [
  {
    id: 'leather-jackets',
    name: 'Leather Jackets',
    description: 'Premium handcrafted jackets in iconic silhouettes',
    image: 'https://images.unsplash.com/photo-1495940903974-93db5e9f7388?w=600&q=80'
  },
  {
    id: 'biker-jackets',
    name: 'Biker Jackets',
    description: 'Heritage motorcycle styling meets timeless craftsmanship',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600&q=80'
  },
  {
    id: 'bomber-jackets',
    name: 'Bomber Jackets',
    description: 'Military-inspired comfort with premium leather',
    image: 'https://images.unsplash.com/photo-1591047990852-dc10a1f1f8a2?w=600&q=80'
  },
  {
    id: 'cafe-racer',
    name: 'Café Racer Jackets',
    description: 'Minimalist aesthetics, maximum impact',
    image: 'https://images.unsplash.com/photo-1551599810-d3c1dd4e6949?w=600&q=80'
  },
  {
    id: 'vintage-jackets',
    name: 'Vintage Jackets',
    description: 'Heritage designs built for generations',
    image: 'https://images.unsplash.com/photo-1528378394717-619efb374e2f?w=600&q=80'
  },
  {
    id: 'military-jackets',
    name: 'Military Jackets',
    description: 'Classic military heritage and authenticity',
    image: 'https://images.unsplash.com/photo-1516746307635-1d1b1e1cb3ba?w=600&q=80'
  },
  {
    id: 'canvas-jackets',
    name: 'Canvas Jackets',
    description: 'Heavy-duty canvas with leather details',
    image: 'https://images.unsplash.com/photo-1591047990852-dc10a1f1f8a2?w=600&q=80'
  },
  {
    id: 'leather-wallets',
    name: 'Leather Wallets',
    description: 'Hand-stitched wallets that age beautifully',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80'
  },
  {
    id: 'canvas-bags',
    name: 'Canvas Bags',
    description: 'Military-grade bags with leather accents',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'
  }
];

export const leatherTypes = [
  {
    id: 'buffalo',
    name: 'Buffalo Leather',
    description: 'Thick, durable full grain leather with a natural texture. Develops a beautiful patina over time. Perfect for jackets that age like fine wine.',
    characteristics: ['Extremely durable', 'Natural grain', 'Patina developing', 'Rich color depth'],
    weight: 'Heavy',
    ideal: 'Biker and Military Jackets'
  },
  {
    id: 'cow',
    name: 'Cow Leather',
    description: 'Premium full grain cow leather balances durability with flexibility. Takes on a distinguished character with age. Versatile across all styles.',
    characteristics: ['Balanced durability', 'Soft hand feel', 'Consistent grain', 'Excellent aging'],
    weight: 'Medium-Heavy',
    ideal: 'All Jacket Types'
  },
  {
    id: 'goat',
    name: 'Goat Leather',
    description: 'Fine grain, supple leather that\'s naturally soft yet tough. Perfect for tailored fits and refined aesthetics. Premium choice for those who appreciate subtlety.',
    characteristics: ['Soft and supple', 'Fine grain', 'Lightweight', 'Excellent drape'],
    weight: 'Medium',
    ideal: 'Bomber and Café Racer Jackets'
  },
  {
    id: 'veg-tanned',
    name: 'Vegetable-Tanned Leather',
    description: 'Traditional tanning method creates leather that ages dramatically. Develops rich patina, darkens beautifully, and improves with use. For the true enthusiast.',
    characteristics: ['Deep aging', 'Rich character', 'Premium feel', 'Investment piece'],
    weight: 'Variable',
    ideal: 'Heritage and Military Jackets'
  }
];