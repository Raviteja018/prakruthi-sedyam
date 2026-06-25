// Products and categories dataset for Prakruthi Sedyam Store

export const CATEGORY_GROUPS = [
  {
    "id": "groceries",
    "name": "Groceries & Staples",
    "categories": [
      "COOKING OIL & GHEE",
      "DAL & PULSES",
      "ATTA,FLOURS&RAVVA",
      "RICE & RICE PRODUCTS",
      "MILLETS",
      "MILLET HOUSE & MIX",
      "IDLY & UPMA RAVVA",
      "JAGGERY,SUGAR&SALT"
    ]
  },
  {
    "id": "spices",
    "name": "Spices & Condiments",
    "categories": [
      "BRIYANI SPICES",
      "MASALAS & SPICES",
      "SPICY POWDERS & PICKLES",
      "PAPAD"
    ]
  },
  {
    "id": "snacks-drinks",
    "name": "Snacks & Beverages",
    "categories": [
      "SNACKS",
      "MILLET BISCUITS & RUSK",
      "COFFE & TEA",
      "Energy drink mix",
      "CANDY & AMLA",
      "ORGANIC JUICE",
      "CHYAWANPRASH & JAM",
      "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
      "NOODLES & PASTA",
      "HONEY"
    ]
  },
  {
    "id": "personal-care",
    "name": "Personal Care",
    "categories": [
      "SHAMPOO",
      "SOAP",
      "HAIR CARE",
      "SKIN CARE",
      "BODY CARE",
      "BAMBOO TOOTH BRUSH & PASTE"
    ]
  },
  {
    "id": "household-wellness",
    "name": "Household & Wellness",
    "categories": [
      "PRAKRUTHIVANAM WATER FILTER",
      "PRAKRUTHIVANAM RELIEF OILS",
      "CLEANERS (Floor,Fabric,Dishwash ...etc)",
      "CAST IRON COOKWARE",
      "CLAY COOKWARE",
      "Wooden products",
      "ROOM FRESHENERS",
      "Vegetable seeds",
      "POOJA ITEMS"
    ]
  }
];

export const PRODUCTS = [
  {
    "id": "wf1",
    "name": "Prakruthivanam Water Filter",
    "category": "PRAKRUTHIVANAM WATER FILTER",
    "description": "Traditional gravity-based double-chamber water purifier. Zero electricity, zero chemicals. Keeps water naturally cool and pure.",
    "rating": 4.8,
    "reviews": 124,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 13000
      }
    ],
    "inStock": true,
    "badge": "Top Seller",
    "type": "filter",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Qi4OZYEX-379-674.webp"
  },
  {
    "id": "wf2",
    "name": "Prakruthivanam Copper Plate",
    "category": "PRAKRUTHIVANAM WATER FILTER",
    "description": "Pure copper plate for water purification. Placing in filter tank adds Ayurvedic benefits of copper-infused water.",
    "rating": 4.6,
    "reviews": 48,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 300
      }
    ],
    "inStock": true,
    "type": "filter",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/fGfWuX38.jpeg"
  },
  {
    "id": "wf3",
    "name": "Prakruthivanam Water Filter Stand (Steel)",
    "category": "PRAKRUTHIVANAM WATER FILTER",
    "description": "Sturdy stainless steel stand designed for Prakruthivanam water filter. Rust-free, stable, and food-grade quality.",
    "rating": 4.5,
    "reviews": 36,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1250
      }
    ],
    "inStock": true,
    "type": "filter",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/VAJCGpX6-400-400.webp"
  },
  {
    "id": "oil1",
    "name": "Prakruthivanam Groundnut Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Cold-pressed wood-churned (Ganuga) groundnut oil. Unrefined, chemical-free, rich in natural nutrients and antioxidants.",
    "rating": 4.9,
    "reviews": 412,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 240
      }
    ],
    "inStock": true,
    "badge": "100% Pure",
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Oos7sBj0.webp"
  },
  {
    "id": "oil2",
    "name": "Prakruthivanam Coconut Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Pure cold-pressed coconut oil. Ideal for cooking, hair, and skin. Extracted without heat or chemicals.",
    "rating": 4.8,
    "reviews": 289,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 220
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/XKGQLtJr.webp"
  },
  {
    "id": "oil3",
    "name": "Prakruthivanam Black Gingelly Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Wood-pressed black sesame oil with a rich, nutty flavor. High in antioxidants and traditional medicinal value.",
    "rating": 4.8,
    "reviews": 176,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 300
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/h8gLj8SY.jpeg"
  },
  {
    "id": "oil4",
    "name": "Almond Oil Wood Pressed 110ml",
    "category": "COOKING OIL & GHEE",
    "description": "Premium wood-pressed almond oil for cooking and beauty care. Rich in Vitamin E and healthy fatty acids.",
    "rating": 4.7,
    "reviews": 94,
    "sizeOptions": [
      {
        "name": "110ml",
        "price": 499
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/LSuB8WiE.webp"
  },
  {
    "id": "oil5",
    "name": "Prakruthivanam White Gingelly Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Pure wood-pressed white sesame oil. Light flavor, high smoke point. Used in cooking and Ayurvedic therapies.",
    "rating": 4.7,
    "reviews": 143,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 400
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Vyv8SXTP.webp"
  },
  {
    "id": "oil6",
    "name": "Prakruthivanam Safflower Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Light and heart-healthy wood-pressed safflower (Kusuma) oil. High in Omega-6 fatty acids.",
    "rating": 4.6,
    "reviews": 87,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 400
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ies9o5EX.webp"
  },
  {
    "id": "oil7",
    "name": "Prakruthivanam Castor Oil 250ml",
    "category": "COOKING OIL & GHEE",
    "description": "Pure cold-pressed castor oil. Used for hair growth, skin moisturizing and digestive wellness.",
    "rating": 4.6,
    "reviews": 72,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/DKdazTaM.jpeg"
  },
  {
    "id": "oil8",
    "name": "Prakruthivanam Mustard Oil 500ml",
    "category": "COOKING OIL & GHEE",
    "description": "Pungent and flavorful cold-pressed mustard oil. Perfect for pickles, curries and traditional cooking.",
    "rating": 4.7,
    "reviews": 118,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/QeBoqwCk.jpeg"
  },
  {
    "id": "oil9",
    "name": "Prakruthivanam Virgin Coconut Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Cold-pressed virgin coconut oil from fresh coconuts. Unrefined, retains full nutritional value and aroma.",
    "rating": 4.8,
    "reviews": 205,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 250
      }
    ],
    "inStock": true,
    "badge": "Virgin Cold Pressed",
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/LVxjLHo6-400-400.webp"
  },
  {
    "id": "oil10",
    "name": "Pure & Sure Sunflower Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Organic cold-pressed sunflower oil. Light taste, high Vitamin E content, ideal for everyday cooking.",
    "rating": 4.5,
    "reviews": 63,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 460
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/dx9UDyU2.jpeg"
  },
  {
    "id": "oil11",
    "name": "Timbaktu Groundnut Oil",
    "category": "COOKING OIL & GHEE",
    "description": "Organic wood-pressed groundnut oil from Timbaktu Collective farms. Naturally rich in flavor and nutrients.",
    "rating": 4.8,
    "reviews": 156,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 375
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/GS4r5JT9.jpeg"
  },
  {
    "id": "oil12",
    "name": "Extra Virgin Coconut Oil 500ml",
    "category": "COOKING OIL & GHEE",
    "description": "Premium extra virgin coconut oil. Cold-pressed from fresh coconuts, with natural fragrance intact.",
    "rating": 4.7,
    "reviews": 132,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 549
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/MAVTTVYc-400-400.webp"
  },
  {
    "id": "oil13",
    "name": "Prakruthivanam Cow Ghee 200g",
    "category": "COOKING OIL & GHEE",
    "description": "Pure A2 desi cow ghee made using traditional Bilona method. Highly aromatic, digestive, and nourishing.",
    "rating": 4.9,
    "reviews": 328,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 850
      }
    ],
    "inStock": true,
    "badge": "Bilona Method",
    "type": "ghee",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Tr19TexS.webp"
  },
  {
    "id": "oil14",
    "name": "Surabhi Desi Cow Ghee",
    "category": "COOKING OIL & GHEE",
    "description": "Authentic desi cow ghee from Surabhi farms. Made from A2 milk with traditional hand-churning techniques.",
    "rating": 4.8,
    "reviews": 214,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 495
      }
    ],
    "inStock": true,
    "type": "ghee",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/koFLQToW.jpeg"
  },
  {
    "id": "oil15",
    "name": "Surabhi Buffalo Ghee 250g",
    "category": "COOKING OIL & GHEE",
    "description": "Rich and creamy buffalo ghee with a traditional taste. Great for making sweets and festive cooking.",
    "rating": 4.7,
    "reviews": 88,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 300
      }
    ],
    "inStock": true,
    "type": "ghee",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/uVTSWWLL.webp"
  },
  {
    "id": "oil16",
    "name": "Flax Seed Oil 250ml",
    "category": "COOKING OIL & GHEE",
    "description": "Cold-pressed flaxseed oil rich in Omega-3 ALA fatty acids. Ideal as a nutritional supplement or salad dressing.",
    "rating": 4.6,
    "reviews": 79,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 345
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/7RYPxHEq.webp"
  },
  {
    "id": "oil17",
    "name": "Extra Virgin Olive Oil 250ml",
    "category": "COOKING OIL & GHEE",
    "description": "Premium cold-pressed extra virgin olive oil. Heart-healthy, full of polyphenols. Perfect for salads and light cooking.",
    "rating": 4.7,
    "reviews": 102,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 549
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/rOww8E7y.webp"
  },
  {
    "id": "oil18",
    "name": "Tharani Wood Cold Coconut Oil 1L",
    "category": "COOKING OIL & GHEE",
    "description": "Premium wood-pressed coconut oil by Tharani. Cold-pressed to retain all natural goodness and coconut aroma.",
    "rating": 4.8,
    "reviews": 141,
    "sizeOptions": [
      {
        "name": "1 Litre",
        "price": 649
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/vyy9xIRu.webp"
  },
  {
    "id": "dal7",
    "name": "Prakruthivanam Red Gram Split (Toor Dal)",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Red Gram Split (Toor Dal) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 41,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/cXs9tBdP.webp",
    "badge": "Top Seller"
  },
  {
    "id": "dal8",
    "name": "Prakruthivanam Groundnuts (Peanut)",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Groundnuts (Peanut) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 42,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/UXkWd5pz.jpeg"
  },
  {
    "id": "dal9",
    "name": "Prakruthivanam Black Gram Without Husk (Urad Dal)",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Black Gram Without Husk (Urad Dal) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 43,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/IkWodvQY.jpeg"
  },
  {
    "id": "dal10",
    "name": "White Urad Dal Split 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality White Urad Dal Split 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 44,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 175
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Im68Occa.jpeg"
  },
  {
    "id": "dal11",
    "name": "Prakruthivanam Chana Black 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Chana Black 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 45,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/j0eMo022.jpeg"
  },
  {
    "id": "dal3",
    "name": "Prakruthivanam Chana Dal",
    "category": "DAL & PULSES",
    "description": "Unpolished split chickpeas with high protein and fiber. Perfect for curries and traditional snacks.",
    "rating": 4.6,
    "reviews": 62,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/eY6w29WO.jpeg"
  },
  {
    "id": "dal12",
    "name": "Prakruthivanam Black Gram Split (Urad Dal)",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Black Gram Split (Urad Dal) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 47,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/OVr8TKe4.jpeg"
  },
  {
    "id": "dal13",
    "name": "Prakruthivanam Black Gram Whole 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Black Gram Whole 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 48,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/XaPZLquo.jpeg"
  },
  {
    "id": "dal14",
    "name": "Prakruthivanam Horse Gram Whole 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Horse Gram Whole 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 49,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/N4k3MyPy.jpeg"
  },
  {
    "id": "dal15",
    "name": "Prakruthivanam Fried Chana Dal (Bengal Gram)",
    "category": "DAL & PULSES",
    "description": "Premium quality Prakruthivanam Fried Chana Dal (Bengal Gram) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 50,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/vfsx4kSb.jpeg"
  },
  {
    "id": "dal16",
    "name": "Green Gram Split (Moong Dal)",
    "category": "DAL & PULSES",
    "description": "Premium quality Green Gram Split (Moong Dal) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 51,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 220
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ixjdrOih.jpeg"
  },
  {
    "id": "dal17",
    "name": "Moong Dal 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Moong Dal 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 52,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/UrUFzTt5.jpeg"
  },
  {
    "id": "dal18",
    "name": "Masoor Dal 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Masoor Dal 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 53,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 145
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/nSniCsmi.jpeg"
  },
  {
    "id": "dal19",
    "name": "Green Gram Whole (Pesalu)",
    "category": "DAL & PULSES",
    "description": "Premium quality Green Gram Whole (Pesalu) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 54,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/N44NEBU5.jpeg"
  },
  {
    "id": "dal20",
    "name": "Cow Peas (Alasandalu)",
    "category": "DAL & PULSES",
    "description": "Premium quality Cow Peas (Alasandalu) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 55,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/4oT0QDkY.jpeg"
  },
  {
    "id": "dal21",
    "name": "Cow Peas Dal 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Cow Peas Dal 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 56,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/nsp2dpRH.webp"
  },
  {
    "id": "dal22",
    "name": "Red Cow Peas 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Red Cow Peas 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 57,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Q4C8yI57.jpeg"
  },
  {
    "id": "dal23",
    "name": "Chana White (Kabuli Chana) 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Chana White (Kabuli Chana) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 58,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/JPBRDz2E.jpeg"
  },
  {
    "id": "dal24",
    "name": "Soyabean 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Soyabean 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 59,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/hiOwWch0.jpeg"
  },
  {
    "id": "dal25",
    "name": "Pure & Sure Rajma Beans 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Pure & Sure Rajma Beans 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 60,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/7QCfzDDi.jpeg"
  },
  {
    "id": "dal26",
    "name": "Panchratana Dal (5 Mix) 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Panchratana Dal (5 Mix) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 61,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 170
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/mStvdwit.jpeg"
  },
  {
    "id": "dal27",
    "name": "Barley 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Barley 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 62,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/2cgZShtW.jpeg"
  },
  {
    "id": "dal28",
    "name": "Pure & Sure Green Dry Peas 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Pure & Sure Green Dry Peas 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 63,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 200
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/nk7r4sJW.webp"
  },
  {
    "id": "dal29",
    "name": "White Peas 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality White Peas 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 64,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 145
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Wge9MhGv.webp"
  },
  {
    "id": "dal30",
    "name": "Rajma Beans 250g",
    "category": "DAL & PULSES",
    "description": "Premium quality Rajma Beans 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 65,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/OmwGqPUe.webp"
  },
  {
    "id": "dal31",
    "name": "Horse Gram Dal 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Horse Gram Dal 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 66,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/yiJuxbTF.webp"
  },
  {
    "id": "dal32",
    "name": "Fried Groundnut 500g",
    "category": "DAL & PULSES",
    "description": "Premium quality Fried Groundnut 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 67,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 200
      }
    ],
    "inStock": true,
    "type": "dal",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/hxJG2uLp.webp"
  },
  {
    "id": "atta5",
    "name": "Multi Grain Atta 1kg",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Multi Grain Atta 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 68,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/l84iJTTP.jpeg",
    "badge": "Top Seller"
  },
  {
    "id": "atta6",
    "name": "Wheat Flour 1kg",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Wheat Flour 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 69,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/lNkqGVCi.jpeg"
  },
  {
    "id": "atta7",
    "name": "Sprouted Ragi Malt Powder 1kg",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Sprouted Ragi Malt Powder 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 70,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Y09ZHD3T.jpeg"
  },
  {
    "id": "atta8",
    "name": "Sprouted Malt Powder 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Sprouted Malt Powder 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 71,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/R9Xg843M.webp"
  },
  {
    "id": "atta9",
    "name": "Chana Flour (Besan) 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Chana Flour (Besan) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 72,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/HxfBq8eI.jpeg"
  },
  {
    "id": "atta10",
    "name": "Multimix Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Multimix Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 73,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/83nVNZoM.jpeg"
  },
  {
    "id": "atta11",
    "name": "Bajra (Sajja) Flour 1kg",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Bajra (Sajja) Flour 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 74,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/kPEzEPjv.jpeg"
  },
  {
    "id": "atta12",
    "name": "Sajja/Bajra Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Sajja/Bajra Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 75,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/KDJxX689.jpeg"
  },
  {
    "id": "atta13",
    "name": "Jonna Flour 1kg",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Jonna Flour 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 76,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/PWYC3gQr.jpeg"
  },
  {
    "id": "atta14",
    "name": "Jonna Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Jonna Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 77,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/XwMbF7R3.jpeg"
  },
  {
    "id": "atta15",
    "name": "Wheat Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Wheat Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 78,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/JThJnkhZ.jpeg"
  },
  {
    "id": "atta16",
    "name": "Ragulu Flour 1kg",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Ragulu Flour 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 79,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wVNA8HMa.jpeg"
  },
  {
    "id": "atta17",
    "name": "Ragi Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Ragi Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 80,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/TkMTGDx4.jpeg"
  },
  {
    "id": "atta18",
    "name": "Pacha Jonna Flour 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Pacha Jonna Flour 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 81,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Ea7A3goO.jpeg"
  },
  {
    "id": "atta19",
    "name": "Pacha Jonna Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Pacha Jonna Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 82,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/AXsHcbdA.jpeg"
  },
  {
    "id": "atta20",
    "name": "Andu Korra/Browntop Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Andu Korra/Browntop Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 83,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 145
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/5g2sPIcz.jpeg"
  },
  {
    "id": "atta21",
    "name": "Arikalu/Kodo Millet Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Arikalu/Kodo Millet Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 84,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/QPNHyzaO.jpeg"
  },
  {
    "id": "atta22",
    "name": "Korralu/Foxtail Millet Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Korralu/Foxtail Millet Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 85,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wzsJMZIe.jpeg"
  },
  {
    "id": "atta23",
    "name": "Samalu/Little Millet Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Samalu/Little Millet Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 86,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/JbP4vDHz.jpeg"
  },
  {
    "id": "atta24",
    "name": "Udalu/Barnyard Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Udalu/Barnyard Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 87,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Affu4OpJ.jpeg"
  },
  {
    "id": "atta25",
    "name": "Red Rice Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Red Rice Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 88,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/iA395i3S.jpeg"
  },
  {
    "id": "atta26",
    "name": "Multimix Flour 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Multimix Flour 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 89,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/kZ0G1CdO.jpeg"
  },
  {
    "id": "atta27",
    "name": "Barley Flour 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Barley Flour 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 90,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/9lPbOu6R.jpeg"
  },
  {
    "id": "atta28",
    "name": "Sooji Ravva 500g",
    "category": "ATTA,FLOURS&RAVVA",
    "description": "Premium quality Sooji Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 91,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 89
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/gr2ADCdO.webp"
  },
  {
    "id": "sh1",
    "name": "Prakruthivanam Shampoo 600ml",
    "category": "SHAMPOO",
    "description": "Premium quality Prakruthivanam Shampoo 600ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 92,
    "sizeOptions": [
      {
        "name": "600ml",
        "price": 420
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/3rYQQDWd.jpeg",
    "badge": "Top Seller"
  },
  {
    "id": "sh2",
    "name": "Prakruthivanam Shampoo 200ml",
    "category": "SHAMPOO",
    "description": "Premium quality Prakruthivanam Shampoo 200ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 93,
    "sizeOptions": [
      {
        "name": "200ml",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/zGISzYXH.jpeg"
  },
  {
    "id": "sh3",
    "name": "Hibiscus Herbal Shampoo 200ml",
    "category": "SHAMPOO",
    "description": "Premium quality Hibiscus Herbal Shampoo 200ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 94,
    "sizeOptions": [
      {
        "name": "200ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/5ZkRFsiP.webp"
  },
  {
    "id": "sh4",
    "name": "Amla Sekaya Herbal Shampoo 250ml",
    "category": "SHAMPOO",
    "description": "Premium quality Amla Sekaya Herbal Shampoo 250ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 95,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 170
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/a57nmSDH.webp"
  },
  {
    "id": "sh5",
    "name": "Anti Dandruff Shampoo 200ml",
    "category": "SHAMPOO",
    "description": "Premium quality Anti Dandruff Shampoo 200ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 96,
    "sizeOptions": [
      {
        "name": "200ml",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/kssgPKeO.webp"
  },
  {
    "id": "sh6",
    "name": "Mandhara Shampoo 200ml",
    "category": "SHAMPOO",
    "description": "Premium quality Mandhara Shampoo 200ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 97,
    "sizeOptions": [
      {
        "name": "200ml",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/q50Qbilr.webp"
  },
  {
    "id": "sh7",
    "name": "Hair Nourishing Shampoo 200ml",
    "category": "SHAMPOO",
    "description": "Premium quality Hair Nourishing Shampoo 200ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 98,
    "sizeOptions": [
      {
        "name": "200ml",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/vPyqdofO.webp"
  },
  {
    "id": "soap4",
    "name": "Baby Soap",
    "category": "SOAP",
    "description": "Premium quality Baby Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 99,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/xC4QM3Y1.webp"
  },
  {
    "id": "soap5",
    "name": "Cow Milk & Sandal Wood Soap",
    "category": "SOAP",
    "description": "Premium quality Cow Milk & Sandal Wood Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 100,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/KTCsnxew.jpeg"
  },
  {
    "id": "soap6",
    "name": "Gow Durbar Tulasi Soap",
    "category": "SOAP",
    "description": "Premium quality Gow Durbar Tulasi Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 101,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/NLseRQBi.webp"
  },
  {
    "id": "soap7",
    "name": "Neem & Aloevera Soap",
    "category": "SOAP",
    "description": "Premium quality Neem & Aloevera Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 102,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/uzyLy4gf.jpeg"
  },
  {
    "id": "soap8",
    "name": "Neem & Tulsi Soap",
    "category": "SOAP",
    "description": "Premium quality Neem & Tulsi Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 103,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wmmbYKwD.jpeg"
  },
  {
    "id": "soap9",
    "name": "Vetiver Soap",
    "category": "SOAP",
    "description": "Premium quality Vetiver Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 104,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/kNiMEMdL.jpeg"
  },
  {
    "id": "soap10",
    "name": "Panchagavya Soap 100g",
    "category": "SOAP",
    "description": "Premium quality Panchagavya Soap 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 105,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/vt2tvtCF.jpeg"
  },
  {
    "id": "soap11",
    "name": "Jasmine Soap",
    "category": "SOAP",
    "description": "Premium quality Jasmine Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 106,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Gy4i1YwV.jpeg"
  },
  {
    "id": "soap12",
    "name": "Palapack Multani Mitti Soap 100g",
    "category": "SOAP",
    "description": "Premium quality Palapack Multani Mitti Soap 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 107,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ZVoiNyot.jpeg"
  },
  {
    "id": "soap13",
    "name": "Gow Durbar Yuva Soap",
    "category": "SOAP",
    "description": "Premium quality Gow Durbar Yuva Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 108,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ieTj71co.webp"
  },
  {
    "id": "soap14",
    "name": "Gow Durbar Nara Soap",
    "category": "SOAP",
    "description": "Premium quality Gow Durbar Nara Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 109,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/OE6cNUi7.webp"
  },
  {
    "id": "soap15",
    "name": "Gow Durbar Sandal Soap",
    "category": "SOAP",
    "description": "Premium quality Gow Durbar Sandal Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 110,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/yHEiD4FB.webp"
  },
  {
    "id": "soap16",
    "name": "Kesar Face Soap",
    "category": "SOAP",
    "description": "Premium quality Kesar Face Soap from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 111,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 44
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/mdqU0L8S.webp"
  },
  {
    "id": "hon4",
    "name": "Honey Farm Collection",
    "category": "HONEY",
    "description": "Premium quality Honey Farm Collection from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 112,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 230
      }
    ],
    "inStock": true,
    "type": "honey",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/TUQQP5xd.jpeg"
  },
  {
    "id": "hon5",
    "name": "Rock Bee Honey (Wild Forest Honey) 500g",
    "category": "HONEY",
    "description": "Premium quality Rock Bee Honey (Wild Forest Honey) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 113,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 510
      }
    ],
    "inStock": true,
    "type": "honey",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/froulbcP.jpeg",
    "badge": "Top Seller"
  },
  {
    "id": "hon6",
    "name": "Raw Honey 500g",
    "category": "HONEY",
    "description": "Premium quality Raw Honey 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 114,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 449
      }
    ],
    "inStock": true,
    "type": "honey",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/jpgs3fKz.webp"
  },
  {
    "id": "hon7",
    "name": "Prakruthivanam Forest Honey 500g",
    "category": "HONEY",
    "description": "Premium quality Prakruthivanam Forest Honey 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 115,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 480
      }
    ],
    "inStock": true,
    "type": "honey",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/mDn3aT4M.webp"
  },
  {
    "id": "hon8",
    "name": "Prakruthivanam Tree Bark Honey",
    "category": "HONEY",
    "description": "Premium quality Prakruthivanam Tree Bark Honey from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 116,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 370
      }
    ],
    "inStock": true,
    "type": "honey",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ha7hS4hg.webp"
  },
  {
    "id": "jag5",
    "name": "Jaggery",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Jaggery from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 117,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/e8sIjOFO.jpeg",
    "badge": "Top Seller"
  },
  {
    "id": "jag6",
    "name": "Jaggery Fine Powder 500gm",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Jaggery Fine Powder 500gm from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 118,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/6Cr0uvCi.jpeg"
  },
  {
    "id": "jag7",
    "name": "Palm Sugar 250g",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Palm Sugar 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 119,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/4CpVqC8O.jpeg"
  },
  {
    "id": "jag8",
    "name": "Palm Jaggery (Taati Bellam)",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Palm Jaggery (Taati Bellam) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 120,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/VuRuMC0M.jpeg"
  },
  {
    "id": "jag9",
    "name": "Palm Jaggery (Small Cubes)",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Palm Jaggery (Small Cubes) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 121,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 125
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/gLxhymXB.webp"
  },
  {
    "id": "jag10",
    "name": "OH! Natural Brown Sugar 1kg",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality OH! Natural Brown Sugar 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 122,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/zkGhY1D2.jpeg"
  },
  {
    "id": "jag3",
    "name": "Himalayan Pink Salt",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Pure mineral-rich pink salt from the Himalayan ranges. Contains 84+ trace minerals, unprocessed and natural.",
    "rating": 4.7,
    "reviews": 165,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 98
      },
      {
        "name": "1kg",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "sugar",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/j9EcFRrb.jpeg"
  },
  {
    "id": "jag11",
    "name": "Rock Salt 1kg",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Rock Salt 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 124,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/P5FJwImM.jpeg"
  },
  {
    "id": "jag12",
    "name": "Rock Salt Granules 1kg",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Rock Salt Granules 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 125,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/77ObSKhS.jpeg"
  },
  {
    "id": "jag13",
    "name": "Mishri (Patika Bellam) 250g",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Mishri (Patika Bellam) 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 126,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/YcG5ENSN.webp"
  },
  {
    "id": "jag14",
    "name": "Palm Mishri 100g",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Palm Mishri 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 127,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/IsA7gr1b.webp"
  },
  {
    "id": "jag15",
    "name": "Khandsari Sugar",
    "category": "JAGGERY,SUGAR&SALT",
    "description": "Premium quality Khandsari Sugar from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 128,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "sweet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/GjqRKOMu.webp"
  },
  {
    "id": "sn1",
    "name": "Groundnut Chikki",
    "category": "SNACKS",
    "description": "Premium quality Groundnut Chikki from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 129,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/rxnaCmXv.jpeg",
    "badge": "Top Seller"
  },
  {
    "id": "sn2",
    "name": "Hot Sajja Vada",
    "category": "SNACKS",
    "description": "Premium quality Hot Sajja Vada from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 130,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/cS3EwfVn.jpeg"
  },
  {
    "id": "sn3",
    "name": "Sweet Sajja Vada",
    "category": "SNACKS",
    "description": "Premium quality Sweet Sajja Vada from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 131,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/KfhMdrBS.jpeg"
  },
  {
    "id": "sn4",
    "name": "Jonna Laddu",
    "category": "SNACKS",
    "description": "Premium quality Jonna Laddu from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 132,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/vR8w6f1m.jpeg"
  },
  {
    "id": "sn5",
    "name": "Nuvvulu Laddu 200g",
    "category": "SNACKS",
    "description": "Premium quality Nuvvulu Laddu 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 133,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/GfMcimAs.webp"
  },
  {
    "id": "sn6",
    "name": "Minapa Laddu",
    "category": "SNACKS",
    "description": "Premium quality Minapa Laddu from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 134,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/d8PlXgHr.jpeg"
  },
  {
    "id": "sn7",
    "name": "White Gingely Chikki",
    "category": "SNACKS",
    "description": "Premium quality White Gingely Chikki from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 135,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/no7yY67A.jpeg"
  },
  {
    "id": "sn8",
    "name": "Red Rice Ariselu",
    "category": "SNACKS",
    "description": "Premium quality Red Rice Ariselu from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 136,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/JvZOpXff.jpeg"
  },
  {
    "id": "sn9",
    "name": "Black Rice Ariselu 100g",
    "category": "SNACKS",
    "description": "Premium quality Black Rice Ariselu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 137,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/PoLa4wa5.webp"
  },
  {
    "id": "sn10",
    "name": "Chivada (Atukala Borugulu)",
    "category": "SNACKS",
    "description": "Premium quality Chivada (Atukala Borugulu) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 138,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/IUyiA1Pe.jpeg"
  },
  {
    "id": "sn11",
    "name": "Jonna Muruku",
    "category": "SNACKS",
    "description": "Premium quality Jonna Muruku from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 139,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Q9soMzaW.jpeg"
  },
  {
    "id": "sn12",
    "name": "Millet Muruku",
    "category": "SNACKS",
    "description": "Premium quality Millet Muruku from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 140,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/TOT0QmUJ.jpeg"
  },
  {
    "id": "sn13",
    "name": "Rice Nippatu",
    "category": "SNACKS",
    "description": "Premium quality Rice Nippatu from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 141,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/jl45w1tb.jpeg"
  },
  {
    "id": "sn14",
    "name": "Jonna Nippattu",
    "category": "SNACKS",
    "description": "Premium quality Jonna Nippattu from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 142,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Obo5wIXQ.jpeg"
  },
  {
    "id": "sn15",
    "name": "White Gingelly Laddu",
    "category": "SNACKS",
    "description": "Premium quality White Gingelly Laddu from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 143,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Jg7dMGbC.jpeg"
  },
  {
    "id": "sn16",
    "name": "Groundnut Laddu 100g",
    "category": "SNACKS",
    "description": "Premium quality Groundnut Laddu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 144,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/rcE9G5Lr.webp"
  },
  {
    "id": "sn17",
    "name": "Fried Groundnuts 500g",
    "category": "SNACKS",
    "description": "Premium quality Fried Groundnuts 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 145,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/jRS3yVTC.webp"
  },
  {
    "id": "sn18",
    "name": "Black Forest Fills",
    "category": "SNACKS",
    "description": "Premium quality Black Forest Fills from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 146,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 199
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ytCQ1yPE.jpeg"
  },
  {
    "id": "sn19",
    "name": "Chocolate Crunchy Fills",
    "category": "SNACKS",
    "description": "Premium quality Chocolate Crunchy Fills from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 147,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 199
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/nvctAIuw.jpeg"
  },
  {
    "id": "sn20",
    "name": "Strawberry Crunchy Fills",
    "category": "SNACKS",
    "description": "Premium quality Strawberry Crunchy Fills from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 148,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 199
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/KrqOkJBs.jpeg"
  },
  {
    "id": "sn21",
    "name": "Stars & Moons Chocolate Millet Delight 400g",
    "category": "SNACKS",
    "description": "Premium quality Stars & Moons Chocolate Millet Delight 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 149,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 249
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/bqTOaBs4.webp"
  },
  {
    "id": "sn22",
    "name": "Stars & Moons Strawberry 400g",
    "category": "SNACKS",
    "description": "Premium quality Stars & Moons Strawberry 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 150,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 249
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/YXWgf0Xk.webp"
  },
  {
    "id": "sn23",
    "name": "Prakruthivanam Borugulu Laddu 100g",
    "category": "SNACKS",
    "description": "Premium quality Prakruthivanam Borugulu Laddu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 151,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/0VtO4NHc.webp"
  },
  {
    "id": "sn24",
    "name": "Spicy Garlic 20g",
    "category": "SNACKS",
    "description": "Premium quality Spicy Garlic 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 152,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/zynYpZDb.webp"
  },
  {
    "id": "sn25",
    "name": "Chilli Chatka 20g",
    "category": "SNACKS",
    "description": "Premium quality Chilli Chatka 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 153,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/3m572e6g.webp"
  },
  {
    "id": "sn26",
    "name": "Borugulu Laddu 100g",
    "category": "SNACKS",
    "description": "Premium quality Borugulu Laddu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 154,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/MnTyYZ7K.webp"
  },
  {
    "id": "sn27",
    "name": "Ragi Elaichi Cookies 20g",
    "category": "SNACKS",
    "description": "Premium quality Ragi Elaichi Cookies 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 155,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 15
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ftGVh3YX.webp"
  },
  {
    "id": "sn28",
    "name": "Ragi Chocolate Cookies 20g",
    "category": "SNACKS",
    "description": "Premium quality Ragi Chocolate Cookies 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 156,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 10
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/11o9sy3v.webp"
  },
  {
    "id": "sn29",
    "name": "Little Millet Jaggery Cookies 20g",
    "category": "SNACKS",
    "description": "Premium quality Little Millet Jaggery Cookies 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 157,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 10
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/BEC8DuND.webp"
  },
  {
    "id": "sn30",
    "name": "Little Millet Jeera Cookies 20g",
    "category": "SNACKS",
    "description": "Premium quality Little Millet Jeera Cookies 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 158,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 10
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/dJqjl0ch.webp"
  },
  {
    "id": "sn31",
    "name": "Multi Millet Jaggery Cookies 20g",
    "category": "SNACKS",
    "description": "Premium quality Multi Millet Jaggery Cookies 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 159,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 10
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/m3YGro4s-400-400.webp"
  },
  {
    "id": "sn32",
    "name": "Multi Millet Tutti Cookies 20g",
    "category": "SNACKS",
    "description": "Premium quality Multi Millet Tutti Cookies 20g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 160,
    "sizeOptions": [
      {
        "name": "20g",
        "price": 15
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/006QNA7s-400-400.webp"
  },
  {
    "id": "sn33",
    "name": "Multi Millet Tutti Fruity Cookies 100g",
    "category": "SNACKS",
    "description": "Premium quality Multi Millet Tutti Fruity Cookies 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 161,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/hkGqM74O-400-400.webp"
  },
  {
    "id": "sn34",
    "name": "Ragi Elaichi Cookies 100g",
    "category": "SNACKS",
    "description": "Premium quality Ragi Elaichi Cookies 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 162,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/u6uuSZKZ.webp"
  },
  {
    "id": "sn35",
    "name": "Little Millet Jaggery Cookies 100g",
    "category": "SNACKS",
    "description": "Premium quality Little Millet Jaggery Cookies 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 163,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/32xiTHxt.webp"
  },
  {
    "id": "sn36",
    "name": "Moringa Papad 100g",
    "category": "SNACKS",
    "description": "Premium quality Moringa Papad 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 164,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/geE9ADYY.webp"
  },
  {
    "id": "sn37",
    "name": "Flaxi Masala Papad 100g",
    "category": "SNACKS",
    "description": "Premium quality Flaxi Masala Papad 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 165,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/7zBXLzem.webp"
  },
  {
    "id": "sn38",
    "name": "Millet Papad 100g",
    "category": "SNACKS",
    "description": "Premium quality Millet Papad 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 166,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/7zBXLzem.webp"
  },
  {
    "id": "mas2",
    "name": "Black Pepper",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Black Pepper from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 167,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas3",
    "name": "Cloves",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cloves from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 168,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas4",
    "name": "Cardamom",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cardamom from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 169,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 240
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas5",
    "name": "Turmeric Powder",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Turmeric Powder from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 20,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas6",
    "name": "Red Chilli Powder",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Red Chilli Powder from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 21,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas7",
    "name": "Coriander Powder",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Coriander Powder from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 22,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas8",
    "name": "Garam Masala",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Garam Masala from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 23,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas9",
    "name": "Sambar Powder",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Sambar Powder from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 24,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "mas10",
    "name": "Rasam Powder",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Rasam Powder from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 25,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 105
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "/products/default.png"
  },
  {
    "id": "spp1",
    "name": "Mango Pickle",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Mango Pickle from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 26,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "/products/default.png"
  },
  {
    "id": "spp2",
    "name": "Lemon Pickle",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Lemon Pickle from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 27,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 170
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "/products/default.png"
  },
  {
    "id": "spp3",
    "name": "Gongura Pickle",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Gongura Pickle from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 28,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "/products/default.png"
  },
  {
    "id": "cl2",
    "name": "Natural Fabric Wash 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Natural Fabric Wash 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 29,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 240
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Haxso2Q4.webp"
  },
  {
    "id": "cl3",
    "name": "Natural Fabric Wash 2L",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Natural Fabric Wash 2L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 30,
    "sizeOptions": [
      {
        "name": "2L",
        "price": 700
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/7IX6tM0l.webp"
  },
  {
    "id": "cl4",
    "name": "Dish Wash 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Dish Wash 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 31,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 170
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/GSCslLCe.webp"
  },
  {
    "id": "cl5",
    "name": "Dish Wash 2L",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Dish Wash 2L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 32,
    "sizeOptions": [
      {
        "name": "2L",
        "price": 595
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/d4r11o3L.webp"
  },
  {
    "id": "cl6",
    "name": "Floor Cleaner 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Floor Cleaner 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 33,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 116
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/hmuLukGE.webp"
  },
  {
    "id": "cl7",
    "name": "Floor Cleaner 2L",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Floor Cleaner 2L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 34,
    "sizeOptions": [
      {
        "name": "2L",
        "price": 380
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/DXlOdHEL.jpeg"
  },
  {
    "id": "cl8",
    "name": "Dish Wash Powder 500g",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Dish Wash Powder 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 35,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/zVFAPe94-400-400.webp"
  },
  {
    "id": "cl9",
    "name": "Phenyl 1L",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Phenyl 1L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 36,
    "sizeOptions": [
      {
        "name": "1L",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/U2uLyMDN.webp"
  },
  {
    "id": "cl10",
    "name": "Bathroom Cleaner 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Bathroom Cleaner 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 37,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/PK5AEUOw.webp"
  },
  {
    "id": "cl11",
    "name": "Glass Cleaner 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Glass Cleaner 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 38,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ZUoxHZjw.webp"
  },
  {
    "id": "cl12",
    "name": "Kitchen Cleaner 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Kitchen Cleaner 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 39,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/JcW58gr7.webp"
  },
  {
    "id": "cl13",
    "name": "Toilet Cleaner 500ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Toilet Cleaner 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 40,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 165
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/BcdzHilc.webp"
  },
  {
    "id": "cl14",
    "name": "Herbal Hand Wash 150ml",
    "category": "CLEANERS (Floor,Fabric,Dishwash ...etc)",
    "description": "Premium quality Herbal Hand Wash 150ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 41,
    "sizeOptions": [
      {
        "name": "150ml",
        "price": 220
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/nMiJrooI-400-400.webp"
  },
  {
    "id": "hc4",
    "name": "Castor Oil (Amudham) 250ml",
    "category": "HAIR CARE",
    "description": "Premium quality Castor Oil (Amudham) 250ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 42,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/GRHPHwPr-400-400.webp"
  },
  {
    "id": "hc5",
    "name": "Ayur Phala Mandhara Hair Oil 100ml",
    "category": "HAIR CARE",
    "description": "Premium quality Ayur Phala Mandhara Hair Oil 100ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 43,
    "sizeOptions": [
      {
        "name": "100ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/rh46GuFA.webp"
  },
  {
    "id": "hc6",
    "name": "27 Herbs Hair Oil 120ml",
    "category": "HAIR CARE",
    "description": "Premium quality 27 Herbs Hair Oil 120ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 44,
    "sizeOptions": [
      {
        "name": "120ml",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/TqKktebd.jpeg"
  },
  {
    "id": "hc7",
    "name": "Neem Oil 100ml",
    "category": "HAIR CARE",
    "description": "Premium quality Neem Oil 100ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 45,
    "sizeOptions": [
      {
        "name": "100ml",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/PhLlrL0h.webp"
  },
  {
    "id": "hc8",
    "name": "Henna Powder 250g",
    "category": "HAIR CARE",
    "description": "Premium quality Henna Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 46,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/jhHtVTa1.webp"
  },
  {
    "id": "hc9",
    "name": "Hibiscus Leaves Powder 100g (Mandhara)",
    "category": "HAIR CARE",
    "description": "Premium quality Hibiscus Leaves Powder 100g (Mandhara) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 47,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/zKmKSpml.webp"
  },
  {
    "id": "hc10",
    "name": "Reetha Fruit (Kunkudu Kaya) 100g",
    "category": "HAIR CARE",
    "description": "Premium quality Reetha Fruit (Kunkudu Kaya) 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 48,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/fNArPG0H.webp"
  },
  {
    "id": "hc11",
    "name": "Shikakai Powder 100g",
    "category": "HAIR CARE",
    "description": "Premium quality Shikakai Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 49,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/OelKV2Ql.webp"
  },
  {
    "id": "hc12",
    "name": "Indigo (Neeli Leaf) Powder 100g",
    "category": "HAIR CARE",
    "description": "Premium quality Indigo (Neeli Leaf) Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 50,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/qkbdMgv3.webp"
  },
  {
    "id": "hc13",
    "name": "Ayurvedic Hair Oil 100ml",
    "category": "HAIR CARE",
    "description": "Premium quality Ayurvedic Hair Oil 100ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 51,
    "sizeOptions": [
      {
        "name": "100ml",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ZaqzMoOi.webp"
  },
  {
    "id": "hc14",
    "name": "Prakruthivanam Soapnuts Kunkudkai 500g",
    "category": "HAIR CARE",
    "description": "Premium quality Prakruthivanam Soapnuts Kunkudkai 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 52,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/viNylbmo.webp"
  },
  {
    "id": "hc15",
    "name": "Prakruthivanam Sheekai 500g",
    "category": "HAIR CARE",
    "description": "Premium quality Prakruthivanam Sheekai 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 53,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/7ZMjaXb3.webp"
  },
  {
    "id": "hc16",
    "name": "Mandhara Hair Oil 100ml",
    "category": "HAIR CARE",
    "description": "Premium quality Mandhara Hair Oil 100ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 54,
    "sizeOptions": [
      {
        "name": "100ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/od0SwBvr.webp"
  },
  {
    "id": "hc17",
    "name": "Prakruthivanam Natural Hair Dye 25g",
    "category": "HAIR CARE",
    "description": "Premium quality Prakruthivanam Natural Hair Dye 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 55,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/h9YZ3RVc.webp"
  },
  {
    "id": "sk4",
    "name": "Rose Water 100ml",
    "category": "SKIN CARE",
    "description": "Premium quality Rose Water 100ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 56,
    "sizeOptions": [
      {
        "name": "100ml",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/tx4pNvYk-400-400.webp"
  },
  {
    "id": "sk5",
    "name": "Ayur Phala Herbal Face Pack",
    "category": "SKIN CARE",
    "description": "Premium quality Ayur Phala Herbal Face Pack from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 57,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ovQ1ZWCJ.webp"
  },
  {
    "id": "sk6",
    "name": "Multani Matti Face Pack 100g",
    "category": "SKIN CARE",
    "description": "Premium quality Multani Matti Face Pack 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 58,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 30
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/2uHUC25r.jpeg"
  },
  {
    "id": "sk7",
    "name": "Kasturi Pasupu 100g",
    "category": "SKIN CARE",
    "description": "Premium quality Kasturi Pasupu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 59,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/3jVKKKC9.webp"
  },
  {
    "id": "sk8",
    "name": "Rose Powder 50g",
    "category": "SKIN CARE",
    "description": "Premium quality Rose Powder 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 60,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/0AUv5tYW.webp"
  },
  {
    "id": "sk9",
    "name": "Lemon Peel Powder 100g",
    "category": "SKIN CARE",
    "description": "Premium quality Lemon Peel Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 61,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/IR2oRBUZ.webp"
  },
  {
    "id": "sk10",
    "name": "Orange Peel Powder 100g",
    "category": "SKIN CARE",
    "description": "Premium quality Orange Peel Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 62,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/tFZFZahK.webp"
  },
  {
    "id": "sk11",
    "name": "Pomegranate Bark Powder 100g",
    "category": "SKIN CARE",
    "description": "Premium quality Pomegranate Bark Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 63,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/VpaPecrw.webp"
  },
  {
    "id": "sk12",
    "name": "Aloe Vera Gel 150g",
    "category": "SKIN CARE",
    "description": "Premium quality Aloe Vera Gel 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 64,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wpQGASaT.webp"
  },
  {
    "id": "sk13",
    "name": "Prakruthivanam Kasturi Pasupu 100g",
    "category": "SKIN CARE",
    "description": "Premium quality Prakruthivanam Kasturi Pasupu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 65,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/4A9CSEZ0.webp"
  },
  {
    "id": "bam1",
    "name": "Bamboo Tooth Brush",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Bamboo Tooth Brush from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 66,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 69
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/1CE5D6IN.webp"
  },
  {
    "id": "bam2",
    "name": "Herbal Mouth Wash 250ml",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Herbal Mouth Wash 250ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 67,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/PicJoKVC-400-400.webp"
  },
  {
    "id": "bam3",
    "name": "Herbal Toothpaste 100g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Herbal Toothpaste 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 68,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/VKnAbp7M.webp"
  },
  {
    "id": "bam4",
    "name": "Bamboo Kids Tooth Brush Charcoal",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Bamboo Kids Tooth Brush Charcoal from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 69,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 69
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/8QAgjvqK.webp"
  },
  {
    "id": "bam5",
    "name": "Miswak Toothpaste 100g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Miswak Toothpaste 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 70,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/VHQZi8Z7.webp"
  },
  {
    "id": "bam6",
    "name": "Bamboo Tongue Cleaner",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Bamboo Tongue Cleaner from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 71,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/zkPovZp0.jpeg"
  },
  {
    "id": "bam7",
    "name": "Loofah",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Loofah from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 72,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ZD117goy.jpeg"
  },
  {
    "id": "bam8",
    "name": "Vazra Kanthi Tooth Powder 100g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Vazra Kanthi Tooth Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 73,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 195
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wxOPgkiv.jpeg"
  },
  {
    "id": "bam9",
    "name": "Mint Fresh Herbal Gel 80g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Mint Fresh Herbal Gel 80g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 74,
    "sizeOptions": [
      {
        "name": "80g",
        "price": 54
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/rgUI2m87.webp"
  },
  {
    "id": "bam10",
    "name": "Ayurvedic Tooth Powder (Mild) 80g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Ayurvedic Tooth Powder (Mild) 80g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 75,
    "sizeOptions": [
      {
        "name": "80g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/X4GINjpQ.webp"
  },
  {
    "id": "bam11",
    "name": "Tooth Powder (Strong)",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Tooth Powder (Strong) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 76,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/o6zjhN59.webp"
  },
  {
    "id": "bam12",
    "name": "Aloevera Tooth Paste 100g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Aloevera Tooth Paste 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 77,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/0Bj0x4AQ.webp"
  },
  {
    "id": "bam13",
    "name": "Natural Salt Toothpaste 100g",
    "category": "BAMBOO TOOTH BRUSH & PASTE",
    "description": "Premium quality Natural Salt Toothpaste 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 78,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/AmOeW6Li.webp"
  },
  {
    "id": "seed1",
    "name": "Vegetable Seeds",
    "category": "Vegetable seeds",
    "description": "Premium quality Vegetable Seeds from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 79,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 136
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/sDzXkRhp-400-400.webp"
  },
  {
    "id": "wd1",
    "name": "Vegetables Chopping Board",
    "category": "Wooden products",
    "description": "Premium quality Vegetables Chopping Board from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 80,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 350
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/AVxGV4aR.webp"
  },
  {
    "id": "mil8",
    "name": "Arikalu (Kodo) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Arikalu (Kodo) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 81,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 170
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6fG3flko.webp"
  },
  {
    "id": "mil9",
    "name": "Samalu (Little) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Samalu (Little) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 82,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 230
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/2DonYwx5.webp"
  },
  {
    "id": "mil10",
    "name": "Korralu (Foxtail) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Korralu (Foxtail) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 83,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Q2AUFDC2.webp"
  },
  {
    "id": "mil11",
    "name": "Udalu (Barnyard) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Udalu (Barnyard) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 84,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 230
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/xlrvXrR5.jpeg"
  },
  {
    "id": "mil12",
    "name": "Andu Korralu (Browntop) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Andu Korralu (Browntop) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 85,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 240
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/FyToQn59.jpeg"
  },
  {
    "id": "mil13",
    "name": "Bajra (Sajjalu) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Bajra (Sajjalu) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 86,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/QffKCBry.jpeg"
  },
  {
    "id": "mil14",
    "name": "Jonnalu (Jowar) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Jonnalu (Jowar) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 87,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/vSyKkZtU.jpeg"
  },
  {
    "id": "mil15",
    "name": "Pacha Jonnalu (Yellow Jowar) 1kg",
    "category": "MILLETS",
    "description": "Premium quality Pacha Jonnalu (Yellow Jowar) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 88,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wjgbqocA.jpeg"
  },
  {
    "id": "mil16",
    "name": "Ragulu 1kg",
    "category": "MILLETS",
    "description": "Premium quality Ragulu 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 89,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/EZaicgof.jpeg"
  },
  {
    "id": "mil17",
    "name": "Ragulu 500g",
    "category": "MILLETS",
    "description": "Premium quality Ragulu 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 90,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/cOJPShbV.jpeg"
  },
  {
    "id": "mil18",
    "name": "Quinoa Seeds 500g",
    "category": "MILLETS",
    "description": "Premium quality Quinoa Seeds 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 91,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/sAq6jN5W.jpeg"
  },
  {
    "id": "mil19",
    "name": "Varigalu Prosa Millet 1kg",
    "category": "MILLETS",
    "description": "Premium quality Varigalu Prosa Millet 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 92,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/m8sVKpFl.webp"
  },
  {
    "id": "mh1",
    "name": "Sprouted Millet House Malt 450g",
    "category": "MILLET HOUSE & MIX",
    "description": "Premium quality Sprouted Millet House Malt 450g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 93,
    "sizeOptions": [
      {
        "name": "450g",
        "price": 200
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/w9oAL2k9.jpeg"
  },
  {
    "id": "mh2",
    "name": "Millet House Women's Malt 500g",
    "category": "MILLET HOUSE & MIX",
    "description": "Premium quality Millet House Women's Malt 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 94,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/oODaEVKB.webp"
  },
  {
    "id": "mh3",
    "name": "Millet House Nutrition Powder 450g",
    "category": "MILLET HOUSE & MIX",
    "description": "Premium quality Millet House Nutrition Powder 450g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 95,
    "sizeOptions": [
      {
        "name": "450g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/72w1W6p4.webp"
  },
  {
    "id": "mh4",
    "name": "Millet House Baby Food 400g",
    "category": "MILLET HOUSE & MIX",
    "description": "Premium quality Millet House Baby Food 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 96,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 200
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/XOs4lgB6.webp"
  },
  {
    "id": "mh5",
    "name": "Chocolate Nuts & Seeds 50g",
    "category": "MILLET HOUSE & MIX",
    "description": "Premium quality Chocolate Nuts & Seeds 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 97,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 59
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/zTxamoZ7.webp"
  },
  {
    "id": "mh6",
    "name": "Milk Mix Chocolate 50g",
    "category": "MILLET HOUSE & MIX",
    "description": "Premium quality Milk Mix Chocolate 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 98,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 69
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/HHo1g2e4.webp"
  },
  {
    "id": "mb4",
    "name": "Millet Oats Chocolate Cookies",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Millet Oats Chocolate Cookies from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 99,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 89
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/bTcYsUWD.webp"
  },
  {
    "id": "mb5",
    "name": "Ragi Biscuits 150g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Ragi Biscuits 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 100,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/sojcRjVb.jpeg"
  },
  {
    "id": "mb6",
    "name": "Millet Peanut Butter Cookies",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Millet Peanut Butter Cookies from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 101,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 89
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Z9bP3bjo.webp"
  },
  {
    "id": "mb7",
    "name": "Sadda Biscuits 150g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Sadda Biscuits 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 102,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/L6aXa2Yn.jpeg"
  },
  {
    "id": "mb8",
    "name": "Millet Coconut Cookies",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Millet Coconut Cookies from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 103,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 89
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/WCdxbFim.webp"
  },
  {
    "id": "mb9",
    "name": "Jonna Biscuits 150g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Jonna Biscuits 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 104,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/caXWIc4X.jpeg"
  },
  {
    "id": "mb10",
    "name": "Penut Peda 150g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Penut Peda 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 105,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ZQenJG0Z.jpeg"
  },
  {
    "id": "mb11",
    "name": "Millet Chocolate",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Millet Chocolate from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 106,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 89
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/c3ZHS89L.webp"
  },
  {
    "id": "mb12",
    "name": "Browntop Biscuits 150g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Browntop Biscuits 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 107,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ACFmEnZD.jpeg"
  },
  {
    "id": "mb13",
    "name": "Rusk",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Rusk from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 108,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 35
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/MreVBZcC.jpeg"
  },
  {
    "id": "mb14",
    "name": "Millet Chips Tomato",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Millet Chips Tomato from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 109,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/hDN4DZao.webp"
  },
  {
    "id": "mb15",
    "name": "Little Millet Jeera Cookies 100g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Little Millet Jeera Cookies 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 110,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/FgLgdeei.webp"
  },
  {
    "id": "mb16",
    "name": "Multi Millet Jaggery Cookies 100g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Multi Millet Jaggery Cookies 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 111,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/LzkPYLTt.webp"
  },
  {
    "id": "mb17",
    "name": "Ragi Chocolate Cookies 100g",
    "category": "MILLET BISCUITS & RUSK",
    "description": "Premium quality Ragi Chocolate Cookies 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 112,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "millet",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/a48QsPAC.webp"
  },
  {
    "id": "cof1",
    "name": "Araku Valley Instant Coffee 100g",
    "category": "COFFE & TEA",
    "description": "Premium quality Araku Valley Instant Coffee 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 113,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 200
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/5Vx3TlAr.webp"
  },
  {
    "id": "cof2",
    "name": "Dawachay 50g",
    "category": "COFFE & TEA",
    "description": "Premium quality Dawachay 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 114,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/HhP0Iatg.webp"
  },
  {
    "id": "cof3",
    "name": "Nature Land Green Tea",
    "category": "COFFE & TEA",
    "description": "Premium quality Nature Land Green Tea from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 115,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 320
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/QopTKzrv.jpeg"
  },
  {
    "id": "cof4",
    "name": "Nature Land Organic CTC Tea Powder 250g",
    "category": "COFFE & TEA",
    "description": "Premium quality Nature Land Organic CTC Tea Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 116,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 325
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/6xJivNA3.webp"
  },
  {
    "id": "cof5",
    "name": "Pure & Sure Organic Green Tea 250g",
    "category": "COFFE & TEA",
    "description": "Premium quality Pure & Sure Organic Green Tea 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 117,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 350
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/MMx97oVv.jpeg"
  },
  {
    "id": "cof6",
    "name": "Pure & Sure Organic Tea Powder 250g",
    "category": "COFFE & TEA",
    "description": "Premium quality Pure & Sure Organic Tea Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 118,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 215
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/DWVoanwx.jpeg"
  },
  {
    "id": "cof7",
    "name": "Dawachay 100g",
    "category": "COFFE & TEA",
    "description": "Premium quality Dawachay 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 119,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 400
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/aeMvRSlM.jpeg"
  },
  {
    "id": "cof8",
    "name": "Prakruthivanam Coffee Powder 250g",
    "category": "COFFE & TEA",
    "description": "Premium quality Prakruthivanam Coffee Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 120,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Xe9cTxJ6.webp"
  },
  {
    "id": "poo2",
    "name": "Gomutra Ark 200ml",
    "category": "POOJA ITEMS",
    "description": "Premium quality Gomutra Ark 200ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 121,
    "sizeOptions": [
      {
        "name": "200ml",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/yCRZO3iA.webp"
  },
  {
    "id": "poo3",
    "name": "Deepam Oil 700ml",
    "category": "POOJA ITEMS",
    "description": "Premium quality Deepam Oil 700ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 122,
    "sizeOptions": [
      {
        "name": "700ml",
        "price": 195
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/90kHJDDf.jpeg"
  },
  {
    "id": "poo4",
    "name": "Moscup/Sambrani",
    "category": "POOJA ITEMS",
    "description": "Premium quality Moscup/Sambrani from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 123,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/DapySY2z.webp"
  },
  {
    "id": "poo5",
    "name": "Sambrani",
    "category": "POOJA ITEMS",
    "description": "Premium quality Sambrani from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 124,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 96
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/soOolTkG.webp"
  },
  {
    "id": "poo6",
    "name": "Yagnadhara Dhoop Cones",
    "category": "POOJA ITEMS",
    "description": "Premium quality Yagnadhara Dhoop Cones from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 125,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/3HN0fj3w.webp"
  },
  {
    "id": "poo7",
    "name": "Kumkum",
    "category": "POOJA ITEMS",
    "description": "Premium quality Kumkum from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 126,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/K1TWo32j.jpeg"
  },
  {
    "id": "poo8",
    "name": "Sree Chandan",
    "category": "POOJA ITEMS",
    "description": "Premium quality Sree Chandan from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 127,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/izz8ZMem.webp"
  },
  {
    "id": "poo9",
    "name": "Camphor 50g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Camphor 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 128,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 115
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/PfvCOYtN-400-400.webp"
  },
  {
    "id": "poo10",
    "name": "Bharatha Woods Incense Stick",
    "category": "POOJA ITEMS",
    "description": "Premium quality Bharatha Woods Incense Stick from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 129,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/07bl3fbp.webp"
  },
  {
    "id": "poo11",
    "name": "Kailash Flora Incense Sticks",
    "category": "POOJA ITEMS",
    "description": "Premium quality Kailash Flora Incense Sticks from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 130,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Js8n6PbF.webp"
  },
  {
    "id": "poo12",
    "name": "Kasthuri Incense Sticks",
    "category": "POOJA ITEMS",
    "description": "Premium quality Kasthuri Incense Sticks from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 131,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/DvG0f5jm.webp"
  },
  {
    "id": "poo13",
    "name": "Bilwapatra Incense Sticks",
    "category": "POOJA ITEMS",
    "description": "Premium quality Bilwapatra Incense Sticks from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 132,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/7nENg00j.webp"
  },
  {
    "id": "poo14",
    "name": "Ramayana Sandal Incense Sticks",
    "category": "POOJA ITEMS",
    "description": "Premium quality Ramayana Sandal Incense Sticks from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 133,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/m7Zkvq5a.webp"
  },
  {
    "id": "poo15",
    "name": "Citronella Incense Sticks",
    "category": "POOJA ITEMS",
    "description": "Premium quality Citronella Incense Sticks from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 134,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/iU0ryH0t.jpeg"
  },
  {
    "id": "poo16",
    "name": "Vetiver Incense Sticks",
    "category": "POOJA ITEMS",
    "description": "Premium quality Vetiver Incense Sticks from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 135,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/AMancUUm.jpeg"
  },
  {
    "id": "poo17",
    "name": "Pacha Karpuram 50g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Pacha Karpuram 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 136,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/JzoB5bDN.webp"
  },
  {
    "id": "poo18",
    "name": "Vakkalu (Betle Seeds) 50g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Vakkalu (Betle Seeds) 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 137,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/tunh4P4k.webp"
  },
  {
    "id": "poo19",
    "name": "Vibhoothi 100g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Vibhoothi 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 138,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 16
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/FMVyFydU.webp"
  },
  {
    "id": "poo20",
    "name": "Cup Dhoop 100g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Cup Dhoop 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 139,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 96
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/VWOcvcRj.webp"
  },
  {
    "id": "poo21",
    "name": "Yagnadhara Dhoop Cones 200g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Yagnadhara Dhoop Cones 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 140,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/N2VGbdrA.webp"
  },
  {
    "id": "poo22",
    "name": "Kumkum Red 50g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Kumkum Red 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 141,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/alMUxjFr.webp"
  },
  {
    "id": "poo23",
    "name": "Turmeric 50g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Turmeric 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 142,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/b16U9f7n.webp"
  },
  {
    "id": "poo24",
    "name": "Kumkum (Merun) 50g",
    "category": "POOJA ITEMS",
    "description": "Premium quality Kumkum (Merun) 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 143,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 25
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/NVzor3M5.webp"
  },
  {
    "id": "poo25",
    "name": "Punya Dheepam 1L",
    "category": "POOJA ITEMS",
    "description": "Premium quality Punya Dheepam 1L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 144,
    "sizeOptions": [
      {
        "name": "1L",
        "price": 260
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/GZP66JIm.webp"
  },
  {
    "id": "ed1",
    "name": "Nannari 750ml",
    "category": "Energy drink mix",
    "description": "Premium quality Nannari 750ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 145,
    "sizeOptions": [
      {
        "name": "750ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/bIUAZj9E-400-400.webp"
  },
  {
    "id": "ed2",
    "name": "Milk Mix Beetroot",
    "category": "Energy drink mix",
    "description": "Premium quality Milk Mix Beetroot from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 146,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 69
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/8jWJjjd9.webp"
  },
  {
    "id": "ed3",
    "name": "Karela Jamun Juice 1L",
    "category": "Energy drink mix",
    "description": "Premium quality Karela Jamun Juice 1L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 147,
    "sizeOptions": [
      {
        "name": "1L",
        "price": 399
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/TZYKSUiA.webp"
  },
  {
    "id": "can2",
    "name": "Tangy Imli 4 Pcs",
    "category": "CANDY & AMLA",
    "description": "Premium quality Tangy Imli 4 Pcs from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 148,
    "sizeOptions": [
      {
        "name": "4 Pcs",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/HevppMvi-400-400.webp"
  },
  {
    "id": "can3",
    "name": "Meetha Paan 4 Pcs",
    "category": "CANDY & AMLA",
    "description": "Premium quality Meetha Paan 4 Pcs from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 149,
    "sizeOptions": [
      {
        "name": "4 Pcs",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/g0mN6SRe-400-400.webp"
  },
  {
    "id": "can4",
    "name": "Sweet Amla",
    "category": "CANDY & AMLA",
    "description": "Premium quality Sweet Amla from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 150,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Hp5HMWT0-400-400.webp"
  },
  {
    "id": "can5",
    "name": "Sweet Amla 250g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Sweet Amla 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 151,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 165
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ORnc78cH-400-400.webp"
  },
  {
    "id": "can6",
    "name": "Chatpata Amla 250g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Chatpata Amla 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 152,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 165
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/cQst9pEi-400-400.webp"
  },
  {
    "id": "can7",
    "name": "Real Aam 4 Pcs",
    "category": "CANDY & AMLA",
    "description": "Premium quality Real Aam 4 Pcs from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 153,
    "sizeOptions": [
      {
        "name": "4 Pcs",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/EWLQfU1m.webp"
  },
  {
    "id": "can8",
    "name": "Meetha Pan Box 200g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Meetha Pan Box 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 154,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/CAykBI6K.webp"
  },
  {
    "id": "can9",
    "name": "Real Aam Box 400g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Real Aam Box 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 155,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/CMR10RNk.webp"
  },
  {
    "id": "can10",
    "name": "Peanut Chikki Bar Box 1kg",
    "category": "CANDY & AMLA",
    "description": "Premium quality Peanut Chikki Bar Box 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 156,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 440
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/xObraXFP-400-400.webp"
  },
  {
    "id": "can11",
    "name": "Sesames Chikki Bar Box 1kg",
    "category": "CANDY & AMLA",
    "description": "Premium quality Sesames Chikki Bar Box 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 157,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 500
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/dr0SRgHz.webp"
  },
  {
    "id": "can12",
    "name": "Kaccha Aam Box 400g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Kaccha Aam Box 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 158,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/RPEWuFCM.webp"
  },
  {
    "id": "can13",
    "name": "Tangy Imli Pop Box 400g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Tangy Imli Pop Box 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 159,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/jng1XTZM.webp"
  },
  {
    "id": "can14",
    "name": "Masala Jamun 400g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Masala Jamun 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 160,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/2ibuN5Pj.webp"
  },
  {
    "id": "can15",
    "name": "Chilli Guava Box 400g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Chilli Guava Box 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 161,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/FZvtc7VF.webp"
  },
  {
    "id": "can16",
    "name": "Chilli Orange Box 400g",
    "category": "CANDY & AMLA",
    "description": "Premium quality Chilli Orange Box 400g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 162,
    "sizeOptions": [
      {
        "name": "400g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/9RrXEaqy.webp"
  },
  {
    "id": "pap2",
    "name": "Rice Papad",
    "category": "PAPAD",
    "description": "Premium quality Rice Papad from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 163,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/f04G2GRG.jpeg"
  },
  {
    "id": "pap3",
    "name": "Ragi Papad 200g",
    "category": "PAPAD",
    "description": "Premium quality Ragi Papad 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 164,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 105
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Bb0hC8Uk.jpeg"
  },
  {
    "id": "pap4",
    "name": "Masala Papad",
    "category": "PAPAD",
    "description": "Premium quality Masala Papad from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 165,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Omzxl8QX.webp"
  },
  {
    "id": "rtc2",
    "name": "Millet Pancake Dates & Nuts 150g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Millet Pancake Dates & Nuts 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 166,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 139
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ccpJBjRS-400-400.webp"
  },
  {
    "id": "rtc3",
    "name": "Millet Pancake Vanilla & Mixed Seeds 150g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Millet Pancake Vanilla & Mixed Seeds 150g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 167,
    "sizeOptions": [
      {
        "name": "150g",
        "price": 139
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/i9imWyBv-400-400.webp"
  },
  {
    "id": "rtc4",
    "name": "Timbaktu Samalu Pongal Mix 250g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Timbaktu Samalu Pongal Mix 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 168,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/OnUL7LhX.webp"
  },
  {
    "id": "rtc5",
    "name": "Timbaktu Arikalu Pongal Mix 250g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Timbaktu Arikalu Pongal Mix 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 169,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/9JjEa72e.jpeg"
  },
  {
    "id": "rtc6",
    "name": "Timbaktu Korralu Pongal Mix 250g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Timbaktu Korralu Pongal Mix 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 20,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/JXTB0zh7.jpeg"
  },
  {
    "id": "rtc7",
    "name": "Ragi Flakes 250g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Ragi Flakes 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 21,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/BbNdAXx7.webp"
  },
  {
    "id": "rtc8",
    "name": "Bajra Flakes",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Bajra Flakes from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 22,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/S0T76pWM.jpeg"
  },
  {
    "id": "rtc9",
    "name": "Jowar Flakes",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Jowar Flakes from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 23,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/2Bzxn7tx.jpeg"
  },
  {
    "id": "rtc10",
    "name": "Barley Flakes 250g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Barley Flakes 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 24,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/24CskzfZ.webp"
  },
  {
    "id": "rtc11",
    "name": "Multi Millet Vermacelli 180g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Multi Millet Vermacelli 180g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 25,
    "sizeOptions": [
      {
        "name": "180g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/9C0uOSsm.webp"
  },
  {
    "id": "rtc12",
    "name": "Oat Flakes",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Oat Flakes from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 26,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/NUNYbHFF.webp"
  },
  {
    "id": "rtc13",
    "name": "Sago Seeds (Saggu Biyyam) 250g",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Sago Seeds (Saggu Biyyam) 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 27,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/4JqVdXVK.webp"
  },
  {
    "id": "rtc14",
    "name": "Corn Flakes",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Corn Flakes from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 28,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/of04TGam.jpeg"
  },
  {
    "id": "rtc15",
    "name": "Wheat Flakes",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Wheat Flakes from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 29,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 99
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/aaYo1AdC.webp"
  },
  {
    "id": "rtc16",
    "name": "Organic Saffron",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Organic Saffron from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 30,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 225
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/2BhBkjBV.webp"
  },
  {
    "id": "rtc17",
    "name": "Pure & Sure Coconut Milk",
    "category": "READY TO COOK (Dosa mix,Pongal,Flakes..etc)",
    "description": "Premium quality Pure & Sure Coconut Milk from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 31,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Li3UfocP.webp"
  },
  {
    "id": "noo2",
    "name": "Little Millet Noodles",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Little Millet Noodles from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 32,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/4qcSvsB2.webp"
  },
  {
    "id": "noo3",
    "name": "Multimillet Macaroni Pasta",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Multimillet Macaroni Pasta from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 33,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/c64Bv5gd-400-400.webp"
  },
  {
    "id": "noo4",
    "name": "Foxtail Millet Noodles",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Foxtail Millet Noodles from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 34,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/KRnuJBd7.jpeg"
  },
  {
    "id": "noo5",
    "name": "Foxtail Macaroni Pasta",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Foxtail Macaroni Pasta from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 35,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/WDgKibCf-400-400.webp"
  },
  {
    "id": "noo6",
    "name": "Multi Millet Noodles",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Multi Millet Noodles from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 36,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/aTMSCJRi.webp"
  },
  {
    "id": "noo7",
    "name": "Little Millet Macaroni Pasta",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Little Millet Macaroni Pasta from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 37,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/GtLjJc21-400-400.webp"
  },
  {
    "id": "noo8",
    "name": "Pearl Millet Noodles",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Pearl Millet Noodles from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 38,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/cY739Ium.webp"
  },
  {
    "id": "noo9",
    "name": "Pure & Sure Organic Pasta Fussili 200g",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Pure & Sure Organic Pasta Fussili 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 39,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/OI3G2g73.jpeg"
  },
  {
    "id": "noo10",
    "name": "Sorghum Noodles",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Sorghum Noodles from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 40,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/3j8AU0aS.webp"
  },
  {
    "id": "noo11",
    "name": "Pure & Sure Organic Pasta Penne 200g",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Pure & Sure Organic Pasta Penne 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 41,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/TiCnaNlC.webp"
  },
  {
    "id": "noo12",
    "name": "Pure & Sure Organic Pasta Macaroni 200g",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Pure & Sure Organic Pasta Macaroni 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 42,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/0lw9Kyu2.webp"
  },
  {
    "id": "noo13",
    "name": "Vermicelli 180g",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Vermicelli 180g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 43,
    "sizeOptions": [
      {
        "name": "180g",
        "price": 56
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/MjreT30U-400-400.webp"
  },
  {
    "id": "noo14",
    "name": "Multi Millet Pasta 175g",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Multi Millet Pasta 175g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 44,
    "sizeOptions": [
      {
        "name": "175g",
        "price": 99
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/41TNvdMu-400-400.webp"
  },
  {
    "id": "noo15",
    "name": "Multi Millet Instant Noodles 165g",
    "category": "NOODLES & PASTA",
    "description": "Premium quality Multi Millet Instant Noodles 165g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 45,
    "sizeOptions": [
      {
        "name": "165g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Kibrkl46-400-400.webp"
  },
  {
    "id": "rice1",
    "name": "Single Polished Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Single Polished Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 46,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/tgPh4h9n.webp"
  },
  {
    "id": "rice2",
    "name": "Prakruthivanam Chitti Muthyalu Rice Jeera Samba 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Prakruthivanam Chitti Muthyalu Rice Jeera Samba 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 47,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 280
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/gMTNTovw-400-400.webp"
  },
  {
    "id": "rice3",
    "name": "Unpolished Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Unpolished Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 48,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/RoUGPxpW.jpeg"
  },
  {
    "id": "rice4",
    "name": "Sidda Sana Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Sidda Sana Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 49,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/B6m1XJSM-400-400.webp"
  },
  {
    "id": "rice5",
    "name": "Baapatla (BPT) Brown Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Baapatla (BPT) Brown Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 50,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/zpS7SYLc-400-400.webp"
  },
  {
    "id": "rice6",
    "name": "Red Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Red Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 51,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/eG4Afmsl.webp"
  },
  {
    "id": "rice7",
    "name": "Rajmudi Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Rajmudi Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 52,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/qngAQerb.webp"
  },
  {
    "id": "rice8",
    "name": "Mysore Malliga",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Mysore Malliga from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 53,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/S8bADaEF-400-400.webp"
  },
  {
    "id": "rice9",
    "name": "Navara Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Navara Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 54,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 135
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/wjTMHbIu.webp"
  },
  {
    "id": "rice10",
    "name": "Black Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Black Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 55,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 230
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/bW1JZSdS.webp"
  },
  {
    "id": "rice11",
    "name": "Basmati Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Basmati Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 56,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 240
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/T8aaBn1O.webp"
  },
  {
    "id": "rice12",
    "name": "Rice Flour 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Rice Flour 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 57,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 126
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/XHxELp7Y.webp"
  },
  {
    "id": "rice13",
    "name": "Puffed Rice (Maramaralu) 500g",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Puffed Rice (Maramaralu) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 58,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 112
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/twsHTmc4.webp"
  },
  {
    "id": "rice14",
    "name": "Red Rice Poha 500g",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Red Rice Poha 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 59,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/AbDN8niv.webp"
  },
  {
    "id": "rice15",
    "name": "White Rice Poha 500g",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality White Rice Poha 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 60,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/3Bn1BSsC.webp"
  },
  {
    "id": "rice16",
    "name": "White Rice Poha 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality White Rice Poha 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 61,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/WCucvVi9.webp"
  },
  {
    "id": "rice17",
    "name": "Wheat 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Wheat 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 62,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/6sbKqVVf.jpeg"
  },
  {
    "id": "rice18",
    "name": "Sonamasoori Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Sonamasoori Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 63,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 126
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/J3r1mkd8-400-400.webp"
  },
  {
    "id": "rice19",
    "name": "Puffed Rice 200g",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Puffed Rice 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 64,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/JtLCkvWO-400-400.webp"
  },
  {
    "id": "rice20",
    "name": "Sonamasoori Brown Rice 1kg",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Sonamasoori Brown Rice 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 65,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 126
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/4MKsZ386-400-400.webp"
  },
  {
    "id": "rice21",
    "name": "Bahurupi",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Bahurupi from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 66,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/4Vmbj4Lb-400-400.webp"
  },
  {
    "id": "rice22",
    "name": "Indrani",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Indrani from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 67,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/tlhdSpCY-400-400.webp"
  },
  {
    "id": "rice23",
    "name": "Kuju Pattalia",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Kuju Pattalia from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 68,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/L7xsoGH5-400-400.webp"
  },
  {
    "id": "rice24",
    "name": "Kethri Maharaj",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Kethri Maharaj from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 69,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/yS6LzRNz-400-400.webp"
  },
  {
    "id": "rice25",
    "name": "Chinthaluri",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Chinthaluri from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 70,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/t7a6apia-400-400.webp"
  },
  {
    "id": "rice26",
    "name": "Dudeswar",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Dudeswar from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 71,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/kIJ4Soc9-400-400.webp"
  },
  {
    "id": "rice27",
    "name": "Bharath Burma Black",
    "category": "RICE & RICE PRODUCTS",
    "description": "Premium quality Bharath Burma Black from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 72,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/default_image.png"
  },
  {
    "id": "rav1",
    "name": "Multimillet Idly Ravva 500g",
    "category": "IDLY & UPMA RAVVA",
    "description": "Premium quality Multimillet Idly Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 73,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/crNhkilA.webp"
  },
  {
    "id": "rav2",
    "name": "Foxtail/Korralu Idly Ravva 500g",
    "category": "IDLY & UPMA RAVVA",
    "description": "Premium quality Foxtail/Korralu Idly Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 74,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 105
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/RUXSzoJZ.webp"
  },
  {
    "id": "rav3",
    "name": "Jowar Idly Ravva 500g",
    "category": "IDLY & UPMA RAVVA",
    "description": "Premium quality Jowar Idly Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 75,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/CKhn5PpP.webp"
  },
  {
    "id": "rav4",
    "name": "Wheat Suji (Upma Rava) 500g",
    "category": "IDLY & UPMA RAVVA",
    "description": "Premium quality Wheat Suji (Upma Rava) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 76,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/JNv4ovgm.webp"
  },
  {
    "id": "rav5",
    "name": "Idly Rava 1kg",
    "category": "IDLY & UPMA RAVVA",
    "description": "Premium quality Idly Rava 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 77,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 145
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/M1AuXZWj-400-400.webp"
  },
  {
    "id": "rav6",
    "name": "Prakruthivanam Jonna Idly Ravva 500g",
    "category": "IDLY & UPMA RAVVA",
    "description": "Premium quality Prakruthivanam Jonna Idly Ravva 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 78,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "flour",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/40aYzmkP-400-400.webp"
  },
  {
    "id": "bc1",
    "name": "Herbal Head Bath Powder 250g",
    "category": "BODY CARE",
    "description": "Premium quality Herbal Head Bath Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 79,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/4VasKs3h.webp"
  },
  {
    "id": "bc2",
    "name": "Sunni Pindi (Bath Powder) 200g",
    "category": "BODY CARE",
    "description": "Premium quality Sunni Pindi (Bath Powder) 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 80,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Bt1yPgTr.webp"
  },
  {
    "id": "bc3",
    "name": "Amla Powder 100g",
    "category": "BODY CARE",
    "description": "Premium quality Amla Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 81,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/jJEN0qnb.webp"
  },
  {
    "id": "bc4",
    "name": "Ashwagandha Powder 100g",
    "category": "BODY CARE",
    "description": "Premium quality Ashwagandha Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 82,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/R1BIpUFE.webp"
  },
  {
    "id": "bc5",
    "name": "Natural Henna Powder 250g",
    "category": "BODY CARE",
    "description": "Premium quality Natural Henna Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 83,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/f1Bpmzqn.webp"
  },
  {
    "id": "bc6",
    "name": "Neem Leaves Powder 100g",
    "category": "BODY CARE",
    "description": "Premium quality Neem Leaves Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 84,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/RthqMZpK.webp"
  },
  {
    "id": "bc7",
    "name": "Wheat Grass Powder 100g",
    "category": "BODY CARE",
    "description": "Premium quality Wheat Grass Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 85,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 225
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/syeScJf5.webp"
  },
  {
    "id": "bc8",
    "name": "Tulasi Powder 100g",
    "category": "BODY CARE",
    "description": "Premium quality Tulasi Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 86,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/SXMDw8oe-400-400.webp"
  },
  {
    "id": "bc9",
    "name": "Trifala Churn 200g",
    "category": "BODY CARE",
    "description": "Premium quality Trifala Churn 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 87,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 75
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/WkpupxCq-400-400.webp"
  },
  {
    "id": "bc10",
    "name": "Arjuna Churn 200g",
    "category": "BODY CARE",
    "description": "Premium quality Arjuna Churn 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 88,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Er9gGcQ7.webp"
  },
  {
    "id": "bc11",
    "name": "Harad Churn 200g",
    "category": "BODY CARE",
    "description": "Premium quality Harad Churn 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 89,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/bab8W2SD-400-400.webp"
  },
  {
    "id": "bc12",
    "name": "Brahmi Powder 200g",
    "category": "BODY CARE",
    "description": "Premium quality Brahmi Powder 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 90,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/v8B0BNgc.webp"
  },
  {
    "id": "bc13",
    "name": "Maha Beera Seeds 200g",
    "category": "BODY CARE",
    "description": "Premium quality Maha Beera Seeds 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 91,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "wellness",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/qVdsHGKQ.webp"
  },
  {
    "id": "bir1",
    "name": "Star Anas 25g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Star Anas 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 92,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/KkapByae.webp"
  },
  {
    "id": "bir2",
    "name": "Shah Jeera 50g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Shah Jeera 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 93,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/wyciaEdQ.jpeg"
  },
  {
    "id": "bir3",
    "name": "Marati Mogga 50g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Marati Mogga 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 94,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 30
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ScTGAlsU.webp"
  },
  {
    "id": "bir4",
    "name": "Japatri 25g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Japatri 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 95,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/kA21eU2d.webp"
  },
  {
    "id": "bir5",
    "name": "Khus Khus 50g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Khus Khus 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 96,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/A0TBaHpz.webp"
  },
  {
    "id": "bir6",
    "name": "Nutmeg 50g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Nutmeg 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 97,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/O5O1w8J0.webp"
  },
  {
    "id": "bir7",
    "name": "Biryani Phool 25g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Biryani Phool 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 98,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/AK9wmge6.webp"
  },
  {
    "id": "bir8",
    "name": "Bay Leaves 25g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Bay Leaves 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 99,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/HR8IEDCW-400-400.webp"
  },
  {
    "id": "bir9",
    "name": "Soya Chunks 200g",
    "category": "BRIYANI SPICES",
    "description": "Premium quality Soya Chunks 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 100,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 86
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/LtEAAsiP-400-400.webp"
  },
  {
    "id": "mas11",
    "name": "Tamarind 1kg",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Tamarind 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 101,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 230
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/O52fW8tR.webp"
  },
  {
    "id": "mas12",
    "name": "Tamarind 500g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Tamarind 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 102,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Zhcqhfjh.webp"
  },
  {
    "id": "mas13",
    "name": "Black Gingelly Seeds (Till) 1kg",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Black Gingelly Seeds (Till) 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 103,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 270
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/uYOYwSOh.webp"
  },
  {
    "id": "mas14",
    "name": "Black Gingelly Seeds (Till) 500g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Black Gingelly Seeds (Till) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 104,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/uYOYwSOh.webp"
  },
  {
    "id": "mas15",
    "name": "Chicken Dum Biryani Masala 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Chicken Dum Biryani Masala 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 105,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/RYRzyYkg-400-400.webp"
  },
  {
    "id": "mas16",
    "name": "White Gingelly Seeds 1kg",
    "category": "MASALAS & SPICES",
    "description": "Premium quality White Gingelly Seeds 1kg from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 106,
    "sizeOptions": [
      {
        "name": "1kg",
        "price": 350
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/81kZqy88.webp"
  },
  {
    "id": "mas17",
    "name": "White Gingelly Seeds (Sesame/Nuvvulu) 500g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality White Gingelly Seeds (Sesame/Nuvvulu) 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 107,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/yMfktylO.webp"
  },
  {
    "id": "mas18",
    "name": "Methi 250g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Methi 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 108,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Nzk04Dpg-390-390.webp"
  },
  {
    "id": "mas19",
    "name": "Methi 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Methi 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 109,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/a2E2EmLl.webp"
  },
  {
    "id": "mas20",
    "name": "Mustard 250g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Mustard 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 110,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Qr1ntcYz-400-400.webp"
  },
  {
    "id": "mas21",
    "name": "Mustard 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Mustard 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 111,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 20
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/DlzcTlZg.webp"
  },
  {
    "id": "mas22",
    "name": "Cloves 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cloves 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 112,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 110
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/iyLz3rQ0.webp"
  },
  {
    "id": "mas23",
    "name": "Cloves 25g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cloves 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 113,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6HyUjtm4.webp"
  },
  {
    "id": "mas24",
    "name": "Dhaniyalu 250g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Dhaniyalu 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 114,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/3pK2eA01.webp"
  },
  {
    "id": "mas25",
    "name": "Dhaniyalu Powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Dhaniyalu Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 115,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/pJF4LoGx.webp"
  },
  {
    "id": "mas26",
    "name": "Chilli Powder",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Chilli Powder from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 116,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/30b5FEFi.webp"
  },
  {
    "id": "mas27",
    "name": "Red Chillies 250g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Red Chillies 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 117,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 140
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/byEPq2IX.webp"
  },
  {
    "id": "mas28",
    "name": "Turmeric Powder 250g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Turmeric Powder 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 118,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/8dIuaUbD.webp"
  },
  {
    "id": "mas29",
    "name": "Turmeric Powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Turmeric Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 119,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/oiibaXsx.webp"
  },
  {
    "id": "mas30",
    "name": "Cumin/Jeera 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cumin/Jeera 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 120,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/k1LFTL6o.webp"
  },
  {
    "id": "mas31",
    "name": "Cumin/Jeera 250g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cumin/Jeera 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 121,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/wRH0J16B.webp"
  },
  {
    "id": "mas32",
    "name": "Black Jeera (Nalla Jeera) 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Black Jeera (Nalla Jeera) 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 122,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/mqZKA88v-400-400.webp"
  },
  {
    "id": "mas33",
    "name": "Cumin/Jeera Powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cumin/Jeera Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 123,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 180
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/mf6Kf86L.webp"
  },
  {
    "id": "mas34",
    "name": "Ginger Powder 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Ginger Powder 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 124,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/s62wMJpQ-400-400.webp"
  },
  {
    "id": "mas35",
    "name": "Cardamom (Yalakulu) 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cardamom (Yalakulu) 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 125,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 270
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Tl0hnosj-400-400.webp"
  },
  {
    "id": "mas36",
    "name": "Cardamom (Yalakulu) 25g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cardamom (Yalakulu) 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 126,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/9Psnkh7A.webp"
  },
  {
    "id": "mas37",
    "name": "Black Cardamom 25g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Black Cardamom 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 127,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/vGhLfntg-400-400.webp"
  },
  {
    "id": "mas38",
    "name": "Pepper 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pepper 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 128,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/dvzK3UwL.webp"
  },
  {
    "id": "mas39",
    "name": "Pepper",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pepper from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 129,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/cCedkF5Y.webp"
  },
  {
    "id": "mas40",
    "name": "Cinnamon (Dal China Chekka) 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Cinnamon (Dal China Chekka) 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 130,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ib5Zduru.webp"
  },
  {
    "id": "mas41",
    "name": "Pure & Sure Organic Cinnamon Powder 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pure & Sure Organic Cinnamon Powder 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 131,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/W1Z8VTYE-400-400.webp"
  },
  {
    "id": "mas42",
    "name": "Rasam Powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Rasam Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 132,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/lqdw35AH.webp"
  },
  {
    "id": "mas43",
    "name": "Mango Powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Mango Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 133,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/I5tj2QUR.jpeg"
  },
  {
    "id": "mas44",
    "name": "Kasuri Methi 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Kasuri Methi 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 134,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/M9GI3zTp.jpeg"
  },
  {
    "id": "mas45",
    "name": "Dry Coconut",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Dry Coconut from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 135,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/yDCPVmf7.webp"
  },
  {
    "id": "mas46",
    "name": "Carom Seeds/Ajwain/Vamu 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Carom Seeds/Ajwain/Vamu 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 136,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/DGb0v4qI.jpeg"
  },
  {
    "id": "mas47",
    "name": "Heeng/Hing Powder 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Heeng/Hing Powder 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 137,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/1ja8xcWD.webp"
  },
  {
    "id": "mas48",
    "name": "Pure & Sure Organic Fennel Seeds 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pure & Sure Organic Fennel Seeds 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 138,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/R9Q7adGs.webp"
  },
  {
    "id": "mas49",
    "name": "Pure & Sure Organic Garam Masala 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pure & Sure Organic Garam Masala 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 139,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/RrO9lrBT.webp"
  },
  {
    "id": "mas50",
    "name": "Pure & Sure Organic Sambar Powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pure & Sure Organic Sambar Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 140,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/lOcNYANI.webp"
  },
  {
    "id": "mas51",
    "name": "Pure & Sure Organic Pulav Masala 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pure & Sure Organic Pulav Masala 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 141,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/nmHUo5kq.webp"
  },
  {
    "id": "mas52",
    "name": "Matrika Garam Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Garam Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 142,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/IU26gO7S-400-400.webp"
  },
  {
    "id": "mas53",
    "name": "Matrika Sambar Powder 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Sambar Powder 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 143,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 55
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/IU26gO7S-400-400.webp"
  },
  {
    "id": "mas54",
    "name": "Matrika Chole Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Chole Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 144,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/HP3o4Pns-400-400.webp"
  },
  {
    "id": "mas55",
    "name": "Matrika Chat Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Chat Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 145,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/L0iUe6db-400-400.webp"
  },
  {
    "id": "mas56",
    "name": "Matrika Pav Bhaji Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Pav Bhaji Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 146,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/g9yONF2R-400-400.webp"
  },
  {
    "id": "mas57",
    "name": "Matrika Egg Burji Masala",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Egg Burji Masala from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 147,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/sZLBeUPk.webp"
  },
  {
    "id": "mas58",
    "name": "Matrika Chicken Dum Biriyani Masala",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Chicken Dum Biriyani Masala from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 148,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/jojgj1yV-400-400.webp"
  },
  {
    "id": "mas59",
    "name": "Matrika Mutton Dum Biryani Masala",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Mutton Dum Biryani Masala from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 149,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/brkPZy5R-400-400.webp"
  },
  {
    "id": "mas60",
    "name": "Matrika Veg Dum Biryani Masala",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Veg Dum Biryani Masala from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 150,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/fvosDDjk-400-400.webp"
  },
  {
    "id": "mas61",
    "name": "Matrika Rasam powder 50g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Rasam powder 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 151,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/V7IX5HP7-400-400.webp"
  },
  {
    "id": "mas62",
    "name": "Matrika Chicken fry masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Chicken fry masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 152,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/XLLmIUjo-400-400.webp"
  },
  {
    "id": "mas63",
    "name": "Matrika Egg Burji Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Egg Burji Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 153,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/J0kvdRWo-400-400.webp"
  },
  {
    "id": "mas64",
    "name": "Matrika Mutton Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Mutton Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 154,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/HmQvO9k5.webp"
  },
  {
    "id": "mas65",
    "name": "Matrika Chicken Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Chicken Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 155,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/mNO4Ro9T-400-400.webp"
  },
  {
    "id": "mas66",
    "name": "Matrika Fish Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Fish Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 156,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/nthtNeOP-400-400.webp"
  },
  {
    "id": "mas67",
    "name": "Matrika kadai paneer Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika kadai paneer Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 157,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/lzzoVXI8-400-400.webp"
  },
  {
    "id": "mas68",
    "name": "Matrika Masala Omelette 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Masala Omelette 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 158,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/cHwO8avj-400-400.webp"
  },
  {
    "id": "mas69",
    "name": "Matrika Masala Omelette 30g (Dup)",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Masala Omelette 30g (Dup) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 159,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/uRnUasAg-400-400.webp"
  },
  {
    "id": "mas70",
    "name": "Matrika sabji Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika sabji Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 160,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/vESTBfW1-400-400.webp"
  },
  {
    "id": "mas71",
    "name": "Matrika sabji Masala 30g (Dup)",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika sabji Masala 30g (Dup) from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 161,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6XQ7nBlz-400-400.webp"
  },
  {
    "id": "mas72",
    "name": "Matrika Pani poori Masala 30g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Matrika Pani poori Masala 30g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 162,
    "sizeOptions": [
      {
        "name": "30g",
        "price": 45
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/2IexAYro-400-400.webp"
  },
  {
    "id": "mas73",
    "name": "Prakruthivanam Verrinuvvula Karam 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Prakruthivanam Verrinuvvula Karam 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 163,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/8WhNrWmL-400-400.webp"
  },
  {
    "id": "mas74",
    "name": "Pulihora mix powder 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Pulihora mix powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 164,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 40
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/kKUo4T7r-400-400.webp"
  },
  {
    "id": "mas75",
    "name": "Anasa puvvu 25g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Anasa puvvu 25g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 165,
    "sizeOptions": [
      {
        "name": "25g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/4jE69xTX-400-400.webp"
  },
  {
    "id": "mas76",
    "name": "Turmeric Powder (Pasupu) 100g",
    "category": "MASALAS & SPICES",
    "description": "Premium quality Turmeric Powder (Pasupu) 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 166,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "spice",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/IuLjUASJ.webp"
  },
  {
    "id": "sn39",
    "name": "Flax Seeds 250g",
    "category": "SNACKS",
    "description": "Premium quality Flax Seeds 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 167,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/xNj08XSh.jpeg"
  },
  {
    "id": "sn40",
    "name": "Chia Seeds 100g",
    "category": "SNACKS",
    "description": "Premium quality Chia Seeds 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 168,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/SAcGCDEn.webp"
  },
  {
    "id": "sn41",
    "name": "Sabja Seeds 100g",
    "category": "SNACKS",
    "description": "Premium quality Sabja Seeds 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 169,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/MvAi63d3.webp"
  },
  {
    "id": "sn42",
    "name": "Kalonji Seeds 100g",
    "category": "SNACKS",
    "description": "Premium quality Kalonji Seeds 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 20,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 50
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/r6SfsUDY.webp"
  },
  {
    "id": "sn43",
    "name": "Prakruthivanam Date 500g",
    "category": "SNACKS",
    "description": "Premium quality Prakruthivanam Date 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 21,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 295
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/rHU1exfO-400-400.webp"
  },
  {
    "id": "sn44",
    "name": "Sunflower Seeds 250g",
    "category": "SNACKS",
    "description": "Premium quality Sunflower Seeds 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 22,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 95
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/grcaTStd.jpeg"
  },
  {
    "id": "sn45",
    "name": "Pumpkin Seeds 250g",
    "category": "SNACKS",
    "description": "Premium quality Pumpkin Seeds 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 23,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 185
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/gp3SZMtx.jpeg"
  },
  {
    "id": "sn46",
    "name": "Black Kismis 250g",
    "category": "SNACKS",
    "description": "Premium quality Black Kismis 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 24,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 175
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/xGL66I3O.jpeg"
  },
  {
    "id": "sn47",
    "name": "Yellow Kismis 250g",
    "category": "SNACKS",
    "description": "Premium quality Yellow Kismis 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 25,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 165
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/w0koTrSy.jpeg"
  },
  {
    "id": "sn48",
    "name": "Walnuts 250g",
    "category": "SNACKS",
    "description": "Premium quality Walnuts 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 26,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 410
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/F7lcQeJj.webp"
  },
  {
    "id": "sn49",
    "name": "Water Melon Seed 250g",
    "category": "SNACKS",
    "description": "Premium quality Water Melon Seed 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 27,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/hx950dnj-400-400.webp"
  },
  {
    "id": "sn50",
    "name": "Almonds 500g",
    "category": "SNACKS",
    "description": "Premium quality Almonds 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 28,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 560
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/i1O7KrYJ.webp"
  },
  {
    "id": "sn51",
    "name": "Almonds (Badam) 250g",
    "category": "SNACKS",
    "description": "Premium quality Almonds (Badam) 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 29,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 280
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/zPbbOAbW.webp"
  },
  {
    "id": "sn52",
    "name": "Cashew Whole 500g",
    "category": "SNACKS",
    "description": "Premium quality Cashew Whole 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 30,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 590
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/pW5fnUAZ.jpeg"
  },
  {
    "id": "sn53",
    "name": "Cashew (Kaju) Whole 250g",
    "category": "SNACKS",
    "description": "Premium quality Cashew (Kaju) Whole 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 31,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 300
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/pW5fnUAZ.jpeg"
  },
  {
    "id": "sn54",
    "name": "Salt Pista 250g",
    "category": "SNACKS",
    "description": "Premium quality Salt Pista 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 32,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 390
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/SQuN4FPh.jpeg"
  },
  {
    "id": "sn55",
    "name": "Anjeer 200g",
    "category": "SNACKS",
    "description": "Premium quality Anjeer 200g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 33,
    "sizeOptions": [
      {
        "name": "200g",
        "price": 400
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/PKCqIeGL.jpeg"
  },
  {
    "id": "sn56",
    "name": "Dry Yellow Dates 250g",
    "category": "SNACKS",
    "description": "Premium quality Dry Yellow Dates 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 34,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/6gNGxIQe.jpeg"
  },
  {
    "id": "sn57",
    "name": "Black Dry Dates 250g",
    "category": "SNACKS",
    "description": "Premium quality Black Dry Dates 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 35,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6J2ZRZKn.webp"
  },
  {
    "id": "sn58",
    "name": "Dates 250g",
    "category": "SNACKS",
    "description": "Premium quality Dates 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 36,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/7wwPZNZG.webp"
  },
  {
    "id": "sn59",
    "name": "Dates 500g",
    "category": "SNACKS",
    "description": "Premium quality Dates 500g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 37,
    "sizeOptions": [
      {
        "name": "500g",
        "price": 310
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/HiqmNqix.webp"
  },
  {
    "id": "sn60",
    "name": "Dry Kiwi 100g",
    "category": "SNACKS",
    "description": "Premium quality Dry Kiwi 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 38,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6uKgmcyD-400-400.webp"
  },
  {
    "id": "sn61",
    "name": "Dry Apricot 100g",
    "category": "SNACKS",
    "description": "Premium quality Dry Apricot 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 39,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 120
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/uxUyw1q3-400-400.webp"
  },
  {
    "id": "sn62",
    "name": "Makhana 50g",
    "category": "SNACKS",
    "description": "Premium quality Makhana 50g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 40,
    "sizeOptions": [
      {
        "name": "50g",
        "price": 125
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/uQEeTd7a-400-400.webp"
  },
  {
    "id": "sn63",
    "name": "Date Crown",
    "category": "SNACKS",
    "description": "Premium quality Date Crown from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 41,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/2ug99Vev-400-400.webp"
  },
  {
    "id": "sn64",
    "name": "Apricot 250g",
    "category": "SNACKS",
    "description": "Premium quality Apricot 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 42,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 250
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/KEiHcOP0-400-400.webp"
  },
  {
    "id": "sn65",
    "name": "Cherry 250g",
    "category": "SNACKS",
    "description": "Premium quality Cherry 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 43,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 100
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/uUXaw5Nl-400-400.webp"
  },
  {
    "id": "sn66",
    "name": "Phool Makhana 250g",
    "category": "SNACKS",
    "description": "Premium quality Phool Makhana 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 44,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 420
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/8mzWZomm.webp"
  },
  {
    "id": "sn67",
    "name": "Prakruthivanam Dry Dates Powder 100g",
    "category": "SNACKS",
    "description": "Premium quality Prakruthivanam Dry Dates Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 45,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/lzqakJrc-400-400.webp"
  },
  {
    "id": "spp4",
    "name": "Flax Seed Spicy Powder 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Flax Seed Spicy Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 46,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/wfTzccYd.webp"
  },
  {
    "id": "spp5",
    "name": "Kandi Spicy Powder 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Kandi Spicy Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 47,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 30
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/M1jNGvzU.webp"
  },
  {
    "id": "spp6",
    "name": "Moringa Powder Spicy 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Moringa Powder Spicy 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 48,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/rHyjftWX.webp"
  },
  {
    "id": "spp7",
    "name": "Curry Leaf Powder (Karivepaku Karam) 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Curry Leaf Powder (Karivepaku Karam) 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 49,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ZqZiG8KP.webp"
  },
  {
    "id": "spp8",
    "name": "Nuvvula Karam 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Nuvvula Karam 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 50,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/xYa3XBru.jpeg"
  },
  {
    "id": "spp9",
    "name": "Nalla Karam (Guntur Karam) 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Nalla Karam (Guntur Karam) 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 51,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/3J55OoW7.webp"
  },
  {
    "id": "spp10",
    "name": "Amla Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Amla Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 52,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/LdPG61CJ.webp"
  },
  {
    "id": "spp11",
    "name": "Lemon Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Lemon Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 53,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/YtwAiL8E.webp"
  },
  {
    "id": "spp12",
    "name": "Red Chilli Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Red Chilli Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 54,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/lz8JNjO7.webp"
  },
  {
    "id": "spp13",
    "name": "Ginger Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Ginger Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 55,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/jBnNGtRX.webp"
  },
  {
    "id": "spp14",
    "name": "Mango Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Mango Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 56,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/OEEtZdQf.webp"
  },
  {
    "id": "spp15",
    "name": "Gongura Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Gongura Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 57,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/yoTngB7m.webp"
  },
  {
    "id": "spp16",
    "name": "Tomato Pickle (Glass) 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Tomato Pickle (Glass) 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 58,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/L4t3EZPN.webp"
  },
  {
    "id": "spp17",
    "name": "Fish Fry Powder 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Fish Fry Powder 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 59,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 65
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/pmRJu2uH-400-400.webp"
  },
  {
    "id": "spp18",
    "name": "Coconut Powder Spicy 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Coconut Powder Spicy 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 60,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/GhoGUd25-400-400.webp"
  },
  {
    "id": "spp19",
    "name": "Red Chilly Whole 100g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Red Chilly Whole 100g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 61,
    "sizeOptions": [
      {
        "name": "100g",
        "price": 146
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/MnsgzLe9-400-400.webp"
  },
  {
    "id": "spp20",
    "name": "Matrika Chicken Fry Masala",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Matrika Chicken Fry Masala from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 62,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 60
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/HN8uws5I-400-400.webp"
  },
  {
    "id": "spp21",
    "name": "Prakruthivanam Chintha Thokku Pickle 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Prakruthivanam Chintha Thokku Pickle 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 63,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Y0fCEVO5-400-400.webp"
  },
  {
    "id": "spp22",
    "name": "Chintha Thokku Pickle 300g",
    "category": "SPICY POWDERS & PICKLES",
    "description": "Premium quality Chintha Thokku Pickle 300g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 64,
    "sizeOptions": [
      {
        "name": "300g",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/1qCGdW8u-400-400.webp"
  },
  {
    "id": "ro1",
    "name": "Citronella Oil 15ml",
    "category": "PRAKRUTHIVANAM RELIEF OILS",
    "description": "Premium quality Citronella Oil 15ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 65,
    "sizeOptions": [
      {
        "name": "15ml",
        "price": 80
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/9erD9yat.webp"
  },
  {
    "id": "ro2",
    "name": "Pain Relief Oil 25ml",
    "category": "PRAKRUTHIVANAM RELIEF OILS",
    "description": "Premium quality Pain Relief Oil 25ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 66,
    "sizeOptions": [
      {
        "name": "25ml",
        "price": 220
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/mu48nNys.webp"
  },
  {
    "id": "ro3",
    "name": "Eucalyptus Oil (Inhalation) 50ml",
    "category": "PRAKRUTHIVANAM RELIEF OILS",
    "description": "Premium quality Eucalyptus Oil (Inhalation) 50ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 67,
    "sizeOptions": [
      {
        "name": "50ml",
        "price": 150
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/Oas4g3KR.webp"
  },
  {
    "id": "ro4",
    "name": "Lemon Grass Oil 25ml",
    "category": "PRAKRUTHIVANAM RELIEF OILS",
    "description": "Premium quality Lemon Grass Oil 25ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 68,
    "sizeOptions": [
      {
        "name": "25ml",
        "price": 130
      }
    ],
    "inStock": true,
    "type": "oil",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/4hr7t2ff.webp"
  },
  {
    "id": "oj1",
    "name": "Nature Land Organic Amla Juice 500ml",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Nature Land Organic Amla Juice 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 69,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 155
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6q7DFaRK.jpeg"
  },
  {
    "id": "oj2",
    "name": "Alovera Juice 500ml",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Alovera Juice 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 70,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 190
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/2S5izRZS-400-400.webp"
  },
  {
    "id": "oj3",
    "name": "Ayur Phala Jamun Juice 500ml",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Ayur Phala Jamun Juice 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 71,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 160
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/YYE37Enn-400-400.webp"
  },
  {
    "id": "oj4",
    "name": "Nature Land Organic Aloevera Juice 500ml",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Nature Land Organic Aloevera Juice 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 72,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 225
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/USxQhFiE.jpeg"
  },
  {
    "id": "oj5",
    "name": "Apple Cider Vinegar 500ml",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Apple Cider Vinegar 500ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 73,
    "sizeOptions": [
      {
        "name": "500ml",
        "price": 299
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/gbFarrxT-400-400.webp"
  },
  {
    "id": "oj6",
    "name": "Nannari Sugar Free 1L",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Nannari Sugar Free 1L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 74,
    "sizeOptions": [
      {
        "name": "1L",
        "price": 260
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/TzGzcHHS-400-400.webp"
  },
  {
    "id": "oj7",
    "name": "Nannari Sharbath 1L",
    "category": "ORGANIC JUICE",
    "description": "Premium quality Nannari Sharbath 1L from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 75,
    "sizeOptions": [
      {
        "name": "1L",
        "price": 260
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/OdDImpAO-400-400.webp"
  },
  {
    "id": "cj1",
    "name": "Chyawanprash 250g",
    "category": "CHYAWANPRASH & JAM",
    "description": "Premium quality Chyawanprash 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 76,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 325
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/IPy43g5B.webp"
  },
  {
    "id": "cj2",
    "name": "Nature Land Organic Mix Fruit Jam 250g",
    "category": "CHYAWANPRASH & JAM",
    "description": "Premium quality Nature Land Organic Mix Fruit Jam 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 77,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/t2d04tkG.webp"
  },
  {
    "id": "cj3",
    "name": "Nature Land Organic Apple Jam 250g",
    "category": "CHYAWANPRASH & JAM",
    "description": "Premium quality Nature Land Organic Apple Jam 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 78,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/S8lmn4ry.webp"
  },
  {
    "id": "cj4",
    "name": "Nature Land Organic Mango Jam 250g",
    "category": "CHYAWANPRASH & JAM",
    "description": "Premium quality Nature Land Organic Mango Jam 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 79,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/rU5RbfHh.webp"
  },
  {
    "id": "cj5",
    "name": "Nature Land Organic Pine Apple Jam 250g",
    "category": "CHYAWANPRASH & JAM",
    "description": "Premium quality Nature Land Organic Pine Apple Jam 250g from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 80,
    "sizeOptions": [
      {
        "name": "250g",
        "price": 210
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/3qtPW5m0.webp"
  },
  {
    "id": "cj6",
    "name": "Apple Cider Vinegar",
    "category": "CHYAWANPRASH & JAM",
    "description": "Premium quality Apple Cider Vinegar from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 81,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 299
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/MQfeUYdz-400-400.webp"
  },
  {
    "id": "ci2",
    "name": "Cast Iron Double Handle Dosa Tawa 12\"",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Cast Iron Double Handle Dosa Tawa 12\" from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 82,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1200
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ZnmTMCpe.jpeg"
  },
  {
    "id": "ci3",
    "name": "Cast Iron Long Handle Tawa",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Cast Iron Long Handle Tawa from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 83,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1350
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/oHjlqG9o.jpeg"
  },
  {
    "id": "ci4",
    "name": "Cast Iron Skillet 12\"",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Cast Iron Skillet 12\" from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 84,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1700
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/ZyJKhyyP.jpeg"
  },
  {
    "id": "ci5",
    "name": "Cast Iron Kadai 12\"",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Cast Iron Kadai 12\" from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 85,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1700
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/tvnvzNtj.jpeg"
  },
  {
    "id": "ci6",
    "name": "Cast Iron Grill Pan 10\"",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Cast Iron Grill Pan 10\" from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 86,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1545
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/pCD2TwZn.jpeg"
  },
  {
    "id": "ci7",
    "name": "Cast Iron Single Handle Dosa Tawa 12\"",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Cast Iron Single Handle Dosa Tawa 12\" from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 87,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1100
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/9X8jAP80.jpeg"
  },
  {
    "id": "ci8",
    "name": "Skillet Cast Iron 8.5 Inches",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Skillet Cast Iron 8.5 Inches from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 88,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1200
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/hayJlo2m-400-400.webp"
  },
  {
    "id": "ci9",
    "name": "Skillet Cast Iron 9.5 Inches",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Skillet Cast Iron 9.5 Inches from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 89,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1296
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/qp1AYc9C-400-400.webp"
  },
  {
    "id": "ci10",
    "name": "Skillet 10.5 Inches",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Skillet 10.5 Inches from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 90,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 1386
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/AnFdU762-400-400.webp"
  },
  {
    "id": "ci11",
    "name": "Roti/Parota Tawa",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Roti/Parota Tawa from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 91,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 783
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Wbem3emk.webp"
  },
  {
    "id": "ci12",
    "name": "Chapathi Tawa",
    "category": "CAST IRON COOKWARE",
    "description": "Premium quality Chapathi Tawa from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 92,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 810
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/CbrL3hr2-400-400.webp"
  },
  {
    "id": "rf2",
    "name": "Herbal Strategi Lavender Natural Spray 250ml",
    "category": "ROOM FRESHENERS",
    "description": "Premium quality Herbal Strategi Lavender Natural Spray 250ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 93,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 225
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/CY5OF0hV.webp"
  },
  {
    "id": "rf3",
    "name": "Herbal Strategi Sandal Natural Spray 250ml",
    "category": "ROOM FRESHENERS",
    "description": "Premium quality Herbal Strategi Sandal Natural Spray 250ml from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 94,
    "sizeOptions": [
      {
        "name": "250ml",
        "price": 225
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/xiFzWUs6.jpeg"
  },
  {
    "id": "cc1",
    "name": "Clay Water Glass",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Clay Water Glass from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 95,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 70
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/store-items/4882616/Ubhc1Cxk.jpeg"
  },
  {
    "id": "cc2",
    "name": "Clay Tea Cups",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Clay Tea Cups from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 96,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 90
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/QDEZsEay.jpeg"
  },
  {
    "id": "cc3",
    "name": "Clay Plate",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Clay Plate from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 97,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 85
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/g50WxdNl.webp"
  },
  {
    "id": "cc4",
    "name": "Clay Kadai Small",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Clay Kadai Small from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 98,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 320
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/pm6N7mXG.webp"
  },
  {
    "id": "cc5",
    "name": "Clay Fry Pan Big",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Clay Fry Pan Big from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 99,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 470
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/YyFIZOSN.webp"
  },
  {
    "id": "cc6",
    "name": "Size 4 Clay Cookware",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Size 4 Clay Cookware from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.5,
    "reviews": 100,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 230
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/UEDOS97C.webp"
  },
  {
    "id": "cc7",
    "name": "Size 3 Clay Cookware",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Size 3 Clay Cookware from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.6,
    "reviews": 101,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 280
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6FaBVgbY.webp"
  },
  {
    "id": "cc8",
    "name": "Size 2 Clay Cookware",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Size 2 Clay Cookware from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.7,
    "reviews": 102,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 330
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/6FaBVgbY.webp"
  },
  {
    "id": "cc9",
    "name": "Size 1 Clay Cookware",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Size 1 Clay Cookware from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.8,
    "reviews": 103,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 380
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/c95uMW0B.webp"
  },
  {
    "id": "cc10",
    "name": "Clay Kuja / Jug",
    "category": "CLAY COOKWARE",
    "description": "Premium quality Clay Kuja / Jug from Prakruthivanam. Grown and processed naturally using traditional chemical-free methods.",
    "rating": 4.9,
    "reviews": 104,
    "sizeOptions": [
      {
        "name": "Standard",
        "price": 285
      }
    ],
    "inStock": true,
    "type": "groceries",
    "image": "https://cdn.dotpe.in/longtail/item_thumbnails/4882616/ltaYcAHg.webp"
  }
];
