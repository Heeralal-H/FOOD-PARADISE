export const DISHES = [
  {
    id: 'dp-001',
    name: 'Saffron Truffle Risotto',
    description: 'Creamy arborio rice with saffron, parmesan, and a delicate truffle aroma.',
    price: 129,
    rating: 4.8,
    category: 'Italian',
    image: new URL('../assets/dishes/risotto.jpg', import.meta.url).href
  },
  {
    id: 'dp-002',
    name: 'Charcoal Pepperoni Pizza',
    description: 'Stone-baked thin crust topped with roasted pepperoni and black pepper glaze.',
    price: 149,
    rating: 4.7,
    category: 'Italian',
    image: new URL('../assets/dishes/pizza.jpg', import.meta.url).href
  },

  {
    id: 'dp-003',
    name: 'Wild Mushroom Pappardelle',
    description: 'Hand-cut pasta with wild mushrooms, thyme, and silky cream reduction.',
    price: 139,
    rating: 4.6,
    category: 'Italian',
    image: new URL('../assets/dishes/pasta.jpg', import.meta.url).href
  },

  {
    id: 'dp-004',
    name: 'Aged Cheddar Burger',
    description: 'Smash patty, aged cheddar, caramelized onions, and house gold sauce.',
    price: 159,
    rating: 4.7,
    category: 'Burgers',
    image: new URL('../assets/dishes/burger.jpg', import.meta.url).href
  },

  {
    id: 'dp-005',
    name: 'Truffle Fries with Gold Dust',
    description: 'Crisp fries tossed with truffle salt and a subtle parmesan finish.',
    price: 69,
    rating: 4.5,
    category: 'Sides',
    image: new URL('../assets/dishes/fries.jpg', import.meta.url).href
  },

  {
    id: 'dp-006',
    name: 'Smoked BBQ Chicken Wings',
    description: 'Slow-smoked wings with tangy BBQ glaze and a hint of char.',
    price: 109,
    rating: 4.6,
    category: 'Starters',
    image: new URL('../assets/dishes/wings.jpg', import.meta.url).href
  },

  {
    id: 'dp-007',
    name: 'Citrus Salmon Tartare',
    description: 'Fresh salmon with lemon zest, capers, and a whisper of sea salt.',
    price: 179,
    rating: 4.7,
    category: 'Seafood',
    image: new URL('../assets/dishes/tartare.jpg', import.meta.url).href
  },

  {
    id: 'dp-008',
    name: 'Pan-Seared Sea Bass',
    description: 'Golden-brown sea bass with herb butter and light citrus broth.',
    price: 229,
    rating: 4.8,
    category: 'Seafood',
    image: new URL('../assets/dishes/sea-bass.jpg', import.meta.url).href
  },

  {
    id: 'dp-009',
    name: 'Sultan’s Lamb Kofta',
    description: 'Juicy kofta with pomegranate glaze and warm cumin-spiced flatbread.',
    price: 199,
    rating: 4.6,
    category: 'Middle Eastern',
    image: new URL('../assets/dishes/kofta.jpg', import.meta.url).href
  },

  {
    id: 'dp-010',
    name: 'Rose Harissa Chicken',
    description: 'Rose-infused harissa chicken with roasted peppers and fragrant rice.',
    price: 189,
    rating: 4.5,
    category: 'Middle Eastern',
    image: new URL('../assets/dishes/harissa.jpg', import.meta.url).href
  },

  {
    id: 'dp-011',
    name: 'Korean Gochujang Short Ribs',
    description: 'Slow-braised short ribs with gochujang sweetness and sesame finish.',
    price: 259,
    rating: 4.8,
    category: 'Asian',
    image: new URL('../assets/dishes/ribs.jpg', import.meta.url).href
  },

  {
    id: 'dp-012',
    name: 'Lemongrass Coconut Curry',
    description: 'Velvety coconut curry with lemongrass, vegetables, and jasmine rice.',
    price: 159,
    rating: 4.6,
    category: 'Asian',
    image: new URL('../assets/dishes/curry.jpg', import.meta.url).href
  },

  {
    id: 'dp-013',
    name: 'Spiced Shrimp Tempura',
    description: 'Light tempura with shrimp, smoked spice blend, and wasabi-lime dip.',
    price: 179,
    rating: 4.5,
    category: 'Seafood',
    image: new URL('../assets/dishes/tempura.jpg', import.meta.url).href
  },

  {
    id: 'dp-014',
    name: 'Basil Tomato Bruschetta',
    description: 'Toasted sourdough with vine tomatoes, fresh basil, and olive oil shimmer.',
    price: 89,
    rating: 4.4,
    category: 'Starters',
    image: new URL('../assets/dishes/bruschetta.jpg', import.meta.url).href
  },

  {
    id: 'dp-015',
    name: 'Classic Margherita',
    description: 'San Marzano tomatoes, fresh mozzarella, basil leaves, and olive oil.',
    price: 139,
    rating: 4.6,
    category: 'Italian',
    image: new URL('../assets/dishes/margherita.jpg', import.meta.url).href
  },

  {
    id: 'dp-016',
    name: 'Garden Caesar Salad',
    description: 'Crisp greens with parmesan snow, garlic croutons, and Caesar dressing.',
    price: 99,
    rating: 4.5,
    category: 'Salads',
    image: new URL('../assets/dishes/caesar.jpg', import.meta.url).href
  },

  {
    id: 'dp-017',
    name: 'Golden Caesar Chicken',
 description: 'Charred chicken over classic Caesar with a warm lemon pepper finish.',
    price: 139,
    rating: 4.7,
    category: 'Salads',
    image: new URL('../assets/dishes/caesar-chicken.jpg', import.meta.url).href
  },

  {
    id: 'dp-019',
    name: 'Gold Coast Steak',
    description: 'Prime steak with herb crust, roasted garlic, and peppercorn sauce.',
    price: 319,
    rating: 4.9,
    category: 'Signature',
    image: new URL('../assets/dishes/steak.jpg', import.meta.url).href
  },

  {
    id: 'dp-020',
    name: 'Pistachio Baklava Slice',
    description: 'Flaky layers, pistachio filling, and rose-honey drizzle.',
    price: 79,
    rating: 4.6,
    category: 'Desserts',
    image: new URL('../assets/dishes/baklava.jpg', import.meta.url).href
  },


  // Remaining items (21-40)
  {
    id: 'dp-021',
    name: 'Crispy Panko Cod',
    description: 'Golden panko cod with lemon herb aioli and fresh greens.',
    price: 199,
    rating: 4.6,
    category: 'Seafood',
    image: new URL('../assets/dishes/cod.jpg', import.meta.url).href
  },

  {
    id: 'dp-022',
    name: 'Truffle Mushroom Bowl',
    description: 'Sautéed mushrooms, truffle oil, and parmesan with warm grains.',
    price: 149,
    rating: 4.5,
    category: 'Vegetarian',
    image: new URL('../assets/dishes/mushroom-bowl.jpg', import.meta.url).href
  },

  {
    id: 'dp-023',
    name: 'Spicy Tuna Crunch Roll',
    description: 'Crisp tuna roll with spicy mayo, cucumber, and sesame snap.',
    price: 169,
    rating: 4.6,
    category: 'Asian',
    image: new URL('../assets/dishes/sushi.jpg', import.meta.url).href
  },

  {
    id: 'dp-025',
    name: 'Harissa Shrimp Skewers',
    description: 'Charred shrimp skewers with harissa glaze and lemon sumac.',
    price: 189,
    rating: 4.5,
    category: 'Seafood',
    image: new URL('../assets/dishes/shrimp.jpg', import.meta.url).href
  },

  {
    id: 'dp-026',
    name: 'Velvet Chocolate Torte',
    description: 'Deep cocoa torte with silky ganache and gold cocoa dust.',
    price: 109,
    rating: 4.8,
    category: 'Desserts',
    image: new URL('../assets/dishes/torte.jpg', import.meta.url).href
  },

  {
    id: 'dp-027',
    name: 'Vanilla Bean Cheesecake',
    description: 'Creamy cheesecake with vanilla bean aroma and berry drizzle.',
    price: 99,
    rating: 4.6,
    category: 'Desserts',
    image: new URL('../assets/dishes/cheesecake.jpg', import.meta.url).href
  },

  {
    id: 'dp-028',
    name: 'Smoky Eggplant Dip',
    description: 'Roasted eggplant blended smooth with garlic and tahini.',
    price: 79,
    rating: 4.4,
    category: 'Starters',
    image: new URL('../assets/dishes/eggplant.jpg', import.meta.url).href
  },

  {
    id: 'dp-029',
    name: 'Garlic Butter Lobster',
    description: 'Lobster in garlic butter with lemon and herbs over warm bread.',
    price: 399,
    rating: 4.9,
    category: 'Seafood',
    image: new URL('../assets/dishes/lobster.jpg', import.meta.url).href
  },

  {
    id: 'dp-030',
    name: 'Golden Polenta Fries',
    description: 'Crisp polenta sticks with parmesan glaze and spicy aioli.',
    price: 89,
    rating: 4.5,
    category: 'Sides',
    image: new URL('../assets/dishes/polenta.jpg', import.meta.url).href
  },

  {
    id: 'dp-031',
    name: 'Roasted Veggie Mezze Platter',
    description: 'Hummus, baba ghanoush, marinated olives, and crisp flatbread.',
    price: 129,
    rating: 4.6,
    category: 'Middle Eastern',
    image: new URL('../assets/dishes/mezze.jpg', import.meta.url).href
  },

  {
    id: 'dp-032',
    name: 'Peri Peri Chicken Plate',
    description: 'Char-grilled peri peri chicken with lemon wedges and herb rice.',
    price: 179,
    rating: 4.5,
    category: 'Signature',
    image: new URL('../assets/dishes/peri.jpg', import.meta.url).href
  },

  {
    id: 'dp-033',
    name: 'Classic New York Cheeseburger',
    description: 'Double patties, Swiss cheese, pickles, and thousand island savor.',
    price: 189,
    rating: 4.7,
    category: 'Burgers',
    image: new URL('../assets/dishes/nyburger.jpg', import.meta.url).href
  },

  {
    id: 'dp-034',
    name: 'Spicy Chicken Quesadilla',
    description: 'Crisp tortilla stuffed with spiced chicken, cheese, and salsa verde.',
    price: 129,
    rating: 4.4,
    category: 'Starters',
    image: new URL('../assets/dishes/quesadilla.jpg', import.meta.url).href
  },

  {
    id: 'dp-035',
    name: 'Crisp Greek Salad Bowl',
    description: 'Tomatoes, cucumber, feta, olives, and oregano olive oil.',
    price: 109,
    rating: 4.5,
    category: 'Salads',
    image: new URL('../assets/dishes/greek.jpg', import.meta.url).href
  },

  {
    id: 'dp-036',
    name: 'Lemon Garlic Chicken Skillet',
 description: 'Tender chicken in lemon garlic sauce with buttery herbs.',
    price: 199,
    rating: 4.6,
    category: 'Signature',
    image: new URL('../assets/dishes/chicken.jpg', import.meta.url).href
  },

  {
    id: 'dp-037',
    name: 'Sicilian Lemon Sorbet',
    description: 'Refreshing sorbet with Sicilian lemon and sparkling citrus aroma.',
    price: 69,
    rating: 4.3,
    category: 'Desserts',
    image: new URL('../assets/dishes/sorbet.jpg', import.meta.url).href
  },

  {
    id: 'dp-038',
    name: 'Mediterranean Stuffed Peppers',
    description: 'Roasted peppers filled with spiced rice, herbs, and feta crumble.',
    price: 159,
    rating: 4.6,
    category: 'Vegetarian',
    image: new URL('../assets/dishes/peppers.jpg', import.meta.url).href
  },

  {
    id: 'dp-039',
    name: 'Black Pepper Tiramisu',
    description: 'Espresso-soaked layers with mascarpone and a subtle black pepper lift.',
    price: 119,
    rating: 4.8,
    category: 'Desserts',
    image: '/src/assets/dishes/tiramisu.jpg'
  },
];

