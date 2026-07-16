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
    name: 'Military Jacket',
    category: 'jackets',
    image: p1Image,
    price: '£1,100.00',
    description: 'Inspired by vintage military specs. Structured shoulders, authentic hardware, and that authoritative heritage presence. For those who understand quality.',
    leatherType: ['Buffalo Leather', 'Cow Leather', 'Vegetable-Tanned'],
    colors: ['Black', 'Brown', 'Sage Green'],
    features: [
      'Structured shoulder design',
      'Chest utility pockets',
      'Brass hardware',
      'Hand-stitched throughout',
      'Vintage hardware patina',
      'Built to last generations'
    ]
  },

  {
    id: 'military-bags',
    name: 'Military Bags',
    category: 'canvas',
    image: p2Image,
    price: '£690.00',
    description: 'Heavy-duty military canvas with genuine leather trim. Vintage buckles, reinforced stitching, and that authentic heritage aesthetic. Built for adventure.',
    leatherType: ['Buffalo Leather', 'Cow Leather'],
    colors: ['Olive', 'Khaki', 'Navy'],
    features: [
      'Military-grade canvas',
      'Leather trim',
      'Brass buckles',
      'Reinforced seams',
      'Multiple pockets',
      'Weather resistant'
    ]
  },
  {
    id: 'leather-wallet',
    name: 'Leather Wallet',
    category: 'wallets',
    image: p3Image,
    price: '£400.00',
    description: 'Hand-stitched full grain leather wallet. Slim design with multiple card slots and a coin pocket. Built for daily use and a lifetime of patina.',
    leatherType: ['Buffalo Leather', 'Vegetable-Tanned'],
    colors: ['Black', 'Cognac', 'Dark Tan'],
    features: [
      'Hand-stitched throughout',
      'Full grain leather',
      'Card slots',
      'Coin compartment',
      'Money pocket',
      'Develops character over time'
    ]
  },
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