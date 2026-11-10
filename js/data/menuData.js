/**
 * THAPAS CAFE - MENU DATA SOURCE
 * 
 * NOTE FOR CAFE OWNER / DEVELOPER:
 * As actual dishes, prices, and recipes are verified with Thapas Cafe,
 * you can directly edit, add, or replace the items in this file.
 * All entries are structured with categories, pricing, dietary indicators,
 * and high-definition photography placeholders.
 */

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: 'utensils' },
  { id: 'coffee', label: 'Coffee & Beverages', icon: 'coffee' },
  { id: 'cold-drinks', label: 'Cold Drinks', icon: 'cup-soda' },
  { id: 'snacks', label: 'Snacks', icon: 'cookie' },
  { id: 'fast-food', label: 'Fast Food', icon: 'pizza' },
  { id: 'main-course', label: 'Main Course', icon: 'soup' },
  { id: 'desserts', label: 'Desserts', icon: 'cake' }
];

export const MENU_ITEMS = [
  // --- Coffee & Beverages ---
  {
    id: 'cb-1',
    category: 'coffee',
    name: 'Artisan Espresso / Americano',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Rich freshly extracted espresso brewed from roasted beans with velvety crema and deep aromatic notes.',
    price: 90,
    currency: '₹',
    dietary: 'veg', // 'veg' | 'non-veg' | 'vegan'
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    prepTime: '5-7 mins',
    isPlaceholder: true
  },
  {
    id: 'cb-2',
    category: 'coffee',
    name: 'Velvet Cappuccino & Latte',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Freshly ground espresso topped with silky textured micro-foam and subtle dusting of cocoa.',
    price: 130,
    currency: '₹',
    dietary: 'veg',
    badge: "Barista's Choice",
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80',
    prepTime: '6-8 mins',
    isPlaceholder: true
  },
  {
    id: 'cb-3',
    category: 'coffee',
    name: 'Desi Masala Chai & Herbal Tea',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Traditional slow-brewed tea infused with green cardamom, fresh ginger, cloves, and premium spices.',
    price: 60,
    currency: '₹',
    dietary: 'veg',
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
    prepTime: '5 mins',
    isPlaceholder: true
  },
  {
    id: 'cb-4',
    category: 'coffee',
    name: 'Caramel Macchiato Brew',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Layered freshly steamed milk with vanilla, crowned with intense espresso and golden caramel drizzle.',
    price: 160,
    currency: '₹',
    dietary: 'veg',
    badge: 'Customer Fav',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=700&q=80',
    prepTime: '8 mins',
    isPlaceholder: true
  },

  // --- Cold Drinks ---
  {
    id: 'cd-1',
    category: 'cold-drinks',
    name: 'Classic Thick Cold Coffee',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Chilled rich coffee blended creamy with vanilla ice-cream scoop and dark chocolate swirl.',
    price: 140,
    currency: '₹',
    dietary: 'veg',
    badge: 'Must Try',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80',
    prepTime: '6 mins',
    isPlaceholder: true
  },
  {
    id: 'cd-2',
    category: 'cold-drinks',
    name: 'Mint Mojito & Lime Sparkler',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Muddled fresh garden mint leaves, crushed lime wedges, bubbly sparkling soda, and light cane sugar.',
    price: 120,
    currency: '₹',
    dietary: 'veg',
    badge: 'Refreshing',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    prepTime: '5 mins',
    isPlaceholder: true
  },
  {
    id: 'cd-3',
    category: 'cold-drinks',
    name: 'Berry & Fruit Smoothie Bowl/Shake',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Luscious wholesome fruit puree blended chilled with Greek yogurt and chia seed touch.',
    price: 160,
    currency: '₹',
    dietary: 'veg',
    badge: 'Healthy',
    image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80',
    prepTime: '7 mins',
    isPlaceholder: true
  },
  {
    id: 'cd-4',
    category: 'cold-drinks',
    name: 'Blue Curacao Summer Cooler',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Vibrant citrus-infused mocktail layered with lemon zest and cooling soda on crushed ice.',
    price: 130,
    currency: '₹',
    dietary: 'veg',
    badge: 'Cooler',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    prepTime: '5 mins',
    isPlaceholder: true
  },

  // --- Snacks ---
  {
    id: 'sn-1',
    category: 'snacks',
    name: 'Gourmet Grilled Cheese Sandwich',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Crispy toasted artisanal bread packed with melted mozzarella, cheddar, herb seasonings, and house dip.',
    price: 150,
    currency: '₹',
    dietary: 'veg',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    prepTime: '10-12 mins',
    isPlaceholder: true
  },
  {
    id: 'sn-2',
    category: 'snacks',
    name: 'Cheesy Garlic Breadsticks',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Oven-baked warm sourdough baguette rubbed with roasted garlic butter, topped with bubbling cheese.',
    price: 130,
    currency: '₹',
    dietary: 'veg',
    badge: 'Favorite',
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=700&q=80',
    prepTime: '10 mins',
    isPlaceholder: true
  },
  {
    id: 'sn-3',
    category: 'snacks',
    name: 'Loaded Nachos Grande',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Crispy corn tortilla chips blanketed in warm queso cheese sauce, fresh pico de gallo, and jalapeños.',
    price: 170,
    currency: '₹',
    dietary: 'veg',
    badge: 'Sharing',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=80',
    prepTime: '10 mins',
    isPlaceholder: true
  },
  {
    id: 'sn-4',
    category: 'snacks',
    name: 'Crispy Peri-Peri French Fries',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Golden double-fried potato fries tossed generously in spicy piquant peri-peri seasoning with creamy dip.',
    price: 110,
    currency: '₹',
    dietary: 'veg',
    badge: 'Crispy',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80',
    prepTime: '8 mins',
    isPlaceholder: true
  },

  // --- Fast Food ---
  {
    id: 'ff-1',
    category: 'fast-food',
    name: 'Thapas Signature Cafe Burger',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Handcrafted seasoned patty layered with fresh lettuce, garden tomatoes, melted cheddar, and secret sauce.',
    price: 180,
    currency: '₹',
    dietary: 'veg',
    badge: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    prepTime: '12-15 mins',
    isPlaceholder: true
  },
  {
    id: 'ff-2',
    category: 'fast-food',
    name: 'Wood-Fired Style Cafe Pizza',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Crisp hand-tossed crust with rich San Marzano tomato reduction, stringy mozzarella, and fresh basil.',
    price: 240,
    currency: '₹',
    dietary: 'veg',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    prepTime: '15 mins',
    isPlaceholder: true
  },
  {
    id: 'ff-3',
    category: 'fast-food',
    name: 'Creamy Penne Alfredo / Arrabiata',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Al dente pasta tossed in velvety garlic parmesan sauce with sautéed mushrooms, bell peppers, and herbs.',
    price: 210,
    currency: '₹',
    dietary: 'veg',
    badge: 'Delight',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=700&q=80',
    prepTime: '12-15 mins',
    isPlaceholder: true
  },
  {
    id: 'ff-4',
    category: 'fast-food',
    name: 'Crispy Paneer / Veg Frankie Wrap',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Warm tortilla wrapped with spiced cottage cheese cubes, crunchy onions, and tangy mint mayo.',
    price: 140,
    currency: '₹',
    dietary: 'veg',
    badge: 'Quick Bite',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80',
    prepTime: '10 mins',
    isPlaceholder: true
  },

  // --- Main Course ---
  {
    id: 'mc-1',
    category: 'main-course',
    name: 'Chef Special Sizzler Platter',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Steaming hot sizzler bed of herbed rice, grilled patties, buttered vegetables, and smoky pepper sauce.',
    price: 320,
    currency: '₹',
    dietary: 'veg',
    badge: 'House Sizzler',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    prepTime: '18 mins',
    isPlaceholder: true
  },
  {
    id: 'mc-2',
    category: 'main-course',
    name: 'Signature Paneer Makhani Bowl with Rice',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Tender paneer simmered in aromatic cashew butter gravy, paired with fragrant jeera basmati rice.',
    price: 260,
    currency: '₹',
    dietary: 'veg',
    badge: 'Comfort Food',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    prepTime: '15 mins',
    isPlaceholder: true
  },
  {
    id: 'mc-3',
    category: 'main-course',
    name: 'Pan-Asian Wok Hakka Noodles / Fried Rice',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Wok-tossed noodles with crisp seasonal vegetables, garlic, scallions, and light soy reduction.',
    price: 190,
    currency: '₹',
    dietary: 'veg',
    badge: 'Wok Master',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
    prepTime: '12 mins',
    isPlaceholder: true
  },

  // --- Desserts ---
  {
    id: 'ds-1',
    category: 'desserts',
    name: 'Sizzling Hot Brownie with Ice Cream',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Fudgy dark chocolate walnut brownie served on a smoking hot iron plate with vanilla bean ice cream.',
    price: 180,
    currency: '₹',
    dietary: 'veg',
    badge: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    prepTime: '8 mins',
    isPlaceholder: true
  },
  {
    id: 'ds-2',
    category: 'desserts',
    name: 'New York Style Cheesecake Slice',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Velvety smooth cream cheese filling baked on a golden buttery graham crust with wild berry compote.',
    price: 210,
    currency: '₹',
    dietary: 'veg',
    badge: 'Sweet Luxury',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    prepTime: '5 mins',
    isPlaceholder: true
  },
  {
    id: 'ds-3',
    category: 'desserts',
    name: 'Crispy Belgian Waffle with Nutella',
    tagline: 'Sample Menu Entry • Customizable',
    description: 'Golden iron-pressed Belgian waffle smothered in warm hazelnut Nutella spread and toasted almonds.',
    price: 190,
    currency: '₹',
    dietary: 'veg',
    badge: 'Indulgent',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80',
    prepTime: '10 mins',
    isPlaceholder: true
  }
];
