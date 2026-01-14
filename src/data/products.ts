export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory: string;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: 'wall-decor',
    name: 'Wall Decor',
    icon: '🖼️',
    subcategories: ['Wall Art', 'Framed Photos', 'Wall Decals', 'Tapestries', 'Decorative Mirrors', 'Floating Shelves'],
  },
  {
    id: 'plants-greenery',
    name: 'Plants & Greenery',
    icon: '🪴',
    subcategories: ['Potted Plants', 'Faux Plants', 'Hanging Planters', 'Terrariums', 'Succulent Pots', 'Wall Planters'],
  },
  {
    id: 'lighting-ambience',
    name: 'Lighting & Ambience',
    icon: '🕯️',
    subcategories: ['Table Lamps', 'Floor Lamps', 'String Lights', 'LED Candles', 'Lanterns', 'Salt Lamps'],
  },
  {
    id: 'soft-accessories',
    name: 'Soft Accessories',
    icon: '🛋️',
    subcategories: ['Throw Pillows', 'Cushions', 'Throws & Blankets', 'Decorative Rugs'],
  },
  {
    id: 'decor-accents',
    name: 'Decor Accents',
    icon: '🕯️',
    subcategories: ['Vases', 'Candle Holders', 'Decorative Bowls', 'Sculptures', 'Bookends', 'Ceramic Pieces'],
  },
  {
    id: 'functional-decor',
    name: 'Functional Decor',
    icon: '🧼',
    subcategories: ['Storage Baskets', 'Wall Clocks', 'Decorative Hooks', 'Diffusers', 'Wall Pockets'],
  },
  {
    id: 'tabletop-decor',
    name: 'Tabletop Decor',
    icon: '🍽️',
    subcategories: ['Centerpieces', 'Decorative Plates', 'Mini Sculptures'],
  },
  {
    id: 'entryway',
    name: 'Entryway & Walls',
    icon: '🚪',
    subcategories: ['Welcome Signs', 'Decorative Doormats', 'Wall Organizers'],
  },
  {
    id: 'atmosphere',
    name: 'Atmosphere & Comfort',
    icon: '🧘',
    subcategories: ['Aromatherapy Diffusers', 'Essential Oil Burners', 'Relaxation Decor'],
  },
];

export const products: Product[] = [
  // Wall Decor
  {
    id: 'wd-001',
    name: 'Abstract Canvas Art',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
      'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500',
    ],
    category: 'Wall Decor',
    subcategory: 'Wall Art',
    isSale: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 'wd-002',
    name: 'Vintage Gold Mirror',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500',
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500',
    ],
    category: 'Wall Decor',
    subcategory: 'Decorative Mirrors',
    isNew: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 'wd-003',
    name: 'Macrame Wall Hanging',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500',
    images: [
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500',
      'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=500',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500',
    ],
    category: 'Wall Decor',
    subcategory: 'Tapestries',
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 'wd-004',
    name: 'Floating Shelf Set',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=500',
    images: [
      'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=500',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500',
    ],
    category: 'Wall Decor',
    subcategory: 'Floating Shelves',
    rating: 4.6,
    reviews: 78,
  },

  // Plants & Greenery
  {
    id: 'pg-001',
    name: 'Monstera in Ceramic Pot',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1614594975525-e45c8f8e6ac4?w=500',
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45c8f8e6ac4?w=500',
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500',
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500',
    ],
    category: 'Plants & Greenery',
    subcategory: 'Potted Plants',
    isNew: true,
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 'pg-002',
    name: 'Faux Olive Tree',
    price: 3499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500',
    images: [
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?w=500',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500',
    ],
    category: 'Plants & Greenery',
    subcategory: 'Faux Plants',
    isSale: true,
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 'pg-003',
    name: 'Geometric Terrarium',
    price: 999,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
    ],
    category: 'Plants & Greenery',
    subcategory: 'Terrariums',
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 'pg-004',
    name: 'Hanging Macrame Planter',
    price: 799,
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500',
    images: [
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?w=500',
    ],
    category: 'Plants & Greenery',
    subcategory: 'Hanging Planters',
    rating: 4.6,
    reviews: 89,
  },

  // Lighting & Ambience
  {
    id: 'la-001',
    name: 'Brass Table Lamp',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    category: 'Lighting & Ambience',
    subcategory: 'Table Lamps',
    isNew: true,
    rating: 4.9,
    reviews: 178,
  },
  {
    id: 'la-002',
    name: 'Himalayan Salt Lamp',
    price: 1499,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1478827387698-1527781a4887?w=500',
    category: 'Lighting & Ambience',
    subcategory: 'Salt Lamps',
    isSale: true,
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 'la-003',
    name: 'Fairy String Lights',
    price: 499,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500',
    category: 'Lighting & Ambience',
    subcategory: 'String Lights',
    rating: 4.7,
    reviews: 456,
  },
  {
    id: 'la-004',
    name: 'Moroccan Lantern Set',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500',
    category: 'Lighting & Ambience',
    subcategory: 'Lanterns',
    rating: 4.8,
    reviews: 134,
  },

  // Soft Accessories
  {
    id: 'sa-001',
    name: 'Velvet Throw Pillow Set',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500',
    category: 'Soft Accessories',
    subcategory: 'Throw Pillows',
    isNew: true,
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 'sa-002',
    name: 'Chunky Knit Blanket',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    category: 'Soft Accessories',
    subcategory: 'Throws & Blankets',
    isSale: true,
    rating: 4.9,
    reviews: 189,
  },
  {
    id: 'sa-003',
    name: 'Bohemian Area Rug',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500',
    category: 'Soft Accessories',
    subcategory: 'Decorative Rugs',
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 'sa-004',
    name: 'Embroidered Cushion Cover',
    price: 699,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
    category: 'Soft Accessories',
    subcategory: 'Cushions',
    rating: 4.6,
    reviews: 98,
  },

  // Decor Accents
  {
    id: 'da-001',
    name: 'Ceramic Vase Collection',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=500',
    category: 'Decor Accents',
    subcategory: 'Vases',
    isNew: true,
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 'da-002',
    name: 'Gold Candle Holders',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1602523961358-f9f03a97d2e7?w=500',
    category: 'Decor Accents',
    subcategory: 'Candle Holders',
    isSale: true,
    rating: 4.7,
    reviews: 167,
  },
  {
    id: 'da-003',
    name: 'Abstract Sculpture',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=500',
    category: 'Decor Accents',
    subcategory: 'Sculptures',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 'da-004',
    name: 'Marble Decorative Bowl',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=500',
    category: 'Decor Accents',
    subcategory: 'Decorative Bowls',
    rating: 4.6,
    reviews: 112,
  },

  // Functional Decor
  {
    id: 'fd-001',
    name: 'Woven Storage Basket Set',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500',
    category: 'Functional Decor',
    subcategory: 'Storage Baskets',
    isNew: true,
    rating: 4.8,
    reviews: 198,
  },
  {
    id: 'fd-002',
    name: 'Minimalist Wall Clock',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500',
    category: 'Functional Decor',
    subcategory: 'Wall Clocks',
    isSale: true,
    rating: 4.7,
    reviews: 234,
  },
  {
    id: 'fd-003',
    name: 'Reed Diffuser Set',
    price: 799,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
    category: 'Functional Decor',
    subcategory: 'Diffusers',
    rating: 4.9,
    reviews: 567,
  },

  // Tabletop Decor
  {
    id: 'td-001',
    name: 'Floral Centerpiece',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500',
    category: 'Tabletop Decor',
    subcategory: 'Centerpieces',
    isNew: true,
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 'td-002',
    name: 'Decorative Plate Set',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500',
    category: 'Tabletop Decor',
    subcategory: 'Decorative Plates',
    rating: 4.6,
    reviews: 78,
  },

  // Entryway & Walls
  {
    id: 'ew-001',
    name: 'Brass Welcome Sign',
    price: 899,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Entryway & Walls',
    subcategory: 'Welcome Signs',
    isNew: true,
    rating: 4.7,
    reviews: 123,
  },
  {
    id: 'ew-002',
    name: 'Natural Jute Doormat',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Entryway & Walls',
    subcategory: 'Decorative Doormats',
    isSale: true,
    rating: 4.5,
    reviews: 234,
  },

  // Atmosphere & Comfort
  {
    id: 'ac-001',
    name: 'Electric Aromatherapy Diffuser',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
    category: 'Atmosphere & Comfort',
    subcategory: 'Aromatherapy Diffusers',
    isNew: true,
    rating: 4.9,
    reviews: 345,
  },
  {
    id: 'ac-002',
    name: 'Ceramic Oil Burner',
    price: 699,
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=500',
    category: 'Atmosphere & Comfort',
    subcategory: 'Essential Oil Burners',
    rating: 4.7,
    reviews: 189,
  },
];

export const getProductsByCategory = (categoryName: string): Product[] => {
  return products.filter((p) => p.category === categoryName);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.reviews && p.reviews > 150).slice(0, 8);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew).slice(0, 8);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((p) => p.isSale);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.subcategory.toLowerCase().includes(lowerQuery)
  );
};
