import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import w1 from "./../../public/assets/w1.jpg";
import w2 from "./../../public/assets/w2.avif";
import w3 from "./../../public/assets/w3.avif";
import g1 from "./../../public/assets/g1.jpg";
import g2 from "./../../public/assets/g2.jpg";
import g3 from "./../../public/assets/g3.jpg";
import o1 from "./../../public/assets/o1.jpg";
import o2 from "./../../public/assets/o2.jpg";
import o3 from "./../../public/assets/o3.jpg";

// Placeholder product data - in a real app this would come from an API
const products = [
  {
    id: "1",
    name: "Premium Turmeric Powder",
    description:
      "Our premium turmeric powder is sourced from the finest farms in India, carefully processed to maintain its vibrant color and potent flavor. This versatile spice adds a warm, earthy flavor and golden color to curries, rice dishes, and more.",
    longDescription:
      "Turmeric has been used in cooking and traditional medicine for thousands of years. Our premium grade turmeric powder is grown using sustainable farming practices and harvested at peak maturity to ensure maximum flavor and nutritional benefits. The roots are carefully cleaned, dried, and ground to a fine powder, preserving the essential oils and curcumin content.\n\nWith its vibrant golden-orange color and distinctive earthy aroma, this turmeric powder adds depth and warmth to a wide variety of dishes. It's a staple in Indian, Middle Eastern, and Southeast Asian cuisines, commonly used in curries, rice dishes, soups, and marinades.\n\nBeyond its culinary applications, turmeric is celebrated for its potential health benefits, including anti-inflammatory and antioxidant properties.",
    category: "Ground Spices",
    urlCategory: "ground-spices",
    price: 6.99,
    rating: 4.8,
    reviews: 127,
    image: g1,
    images: [g1, g1, g1],
    isOrganic: true,
    origin: "India",
    weight: "100g",
    stock: 25,
    ingredients: "100% Pure Turmeric (Curcuma longa)",
    usages:
      "Ideal for curries, rice dishes, soups, marinades, and golden milk.",
    nutritionFacts: {
      calories: 29,
      totalFat: "0.7g",
      saturatedFat: "0.2g",
      sodium: "3mg",
      totalCarbs: "5.3g",
      fiber: "1.4g",
      sugars: "0.3g",
      protein: "0.9g",
    },
    relatedProducts: [2, 8],
  },
  {
    id: "2",
    name: "Organic Black Pepper",
    description:
      "Our organic black pepper is carefully harvested from the highlands of Vietnam, known for producing some of the world's finest peppercorns. These whole peppercorns deliver an intense, complex flavor with woody, piney notes and a sharp, biting heat.",
    longDescription:
      "Black pepper is often called the 'king of spices' and has been one of the world's most valued seasonings for thousands of years. Our organic black peppercorns are harvested when the berries are still green, then fermented and sun-dried until they develop their characteristic dark, wrinkled appearance.\n\nThese premium peppercorns are grown using traditional farming methods without chemical pesticides or fertilizers. The result is a bold, aromatic spice with complex flavor notes that range from floral and fruity to woody and spicy.\n\nFor the best flavor, grind these peppercorns just before use. They can be used in virtually any savory dish, from simple eggs to elaborate sauces and marinades. The whole peppercorns are also perfect for pepper mills, pickling brines, and making bouquet garni.",
    category: "Whole Spices",
    urlCategory: "whole-spices",
    price: 7.49,
    rating: 4.9,
    reviews: 203,
    image: w1,
    images: [
      w1,
      w1,
      w1,
    ],
    isOrganic: true,
    origin: "Vietnam",
    weight: "80g",
    stock: 42,
    ingredients: "100% Organic Black Peppercorns (Piper nigrum)",
    usages:
      "Use in pepper mills, pickling, marinades, rubs, and all savory dishes.",
    nutritionFacts: {
      calories: 7,
      totalFat: "0.1g",
      saturatedFat: "0g",
      sodium: "0mg",
      totalCarbs: "1.7g",
      fiber: "0.7g",
      sugars: "0g",
      protein: "0.3g",
    },
    relatedProducts: [1, 4],
  },
  {
    id: "3",
    name: "Cumin Seeds",
    description:
      "These premium cumin seeds from Turkey offer a distinctive warm, earthy flavor with subtle citrus notes. A staple in cuisines worldwide, our cumin seeds are carefully selected for their superior aroma and taste profile.",
    longDescription:
      "Cumin is one of the oldest cultivated herbs in human history, dating back over 5,000 years. Our cumin seeds are grown in the fertile soils of Turkey, where the climate and growing conditions produce seeds with exceptional flavor intensity.\n\nThese whole cumin seeds have a distinctive warm, earthy aroma with hints of lemon and pepper. The seeds are harvested when fully matured and carefully cleaned to ensure the highest quality. Their robust flavor profile makes them essential in countless dishes across Middle Eastern, Indian, Mexican, and Mediterranean cuisines.\n\nFor maximum flavor, lightly toast the seeds before using them whole or grinding. Cumin adds depth to curries, stews, rice dishes, bean dishes, and is a key component in many spice blends like garam masala, chili powder, and taco seasoning.",
    category: "Oil Seeds",
    urlCategory: "oil-seeds",
    price: 5.99,
    rating: 4.7,
    reviews: 96,
    image: o1,
    images: [
      o1,
      o1, 
      o1,
    ],
    isOrganic: false,
    origin: "Turkey",
    weight: "90g",
    stock: 38,
    ingredients: "100% Cumin Seeds (Cuminum cyminum)",
    usages:
      "Perfect for curries, stews, rice dishes, meat rubs, and spice blends.",
    nutritionFacts: {
      calories: 22,
      totalFat: "1.3g",
      saturatedFat: "0.1g",
      sodium: "4mg",
      totalCarbs: "2.7g",
      fiber: "0.6g",
      sugars: "0.1g",
      protein: "1.1g",
    },
    relatedProducts: [7, 8],
  },
  {
    id: "4",
    name: "Red Chili Powder",
    description:
      "Our red chili powder from Mexico delivers moderate heat with rich, fruity undertones. Made from premium quality chilies that are sun-dried and ground to perfection, this versatile spice adds vibrant color and warmth to any dish.",
    longDescription:
      "Our red chili powder is crafted from select varieties of Mexican chilies, known for their balanced heat level and complex flavor profile. The peppers are harvested at peak ripeness, then carefully sun-dried to concentrate their flavor before being ground into a fine powder.\n\nThis premium chili powder offers a moderate heat level with rich, fruity undertones and a subtle smokiness. It's more flavorful and complex than generic cayenne powder, making it ideal for dishes where you want both heat and depth of flavor.\n\nIt's a versatile kitchen staple that can be used in countless dishes across many cuisines. Use it to add warmth and color to stews, soups, marinades, rubs, and sauces. It's an essential ingredient in chili con carne, enchilada sauce, and many Mexican, Southwestern, and Indian dishes.",
    category: "Ground Spices",
    urlCategory: "ground-spices",
    price: 6.49,
    rating: 4.6,
    reviews: 112,
    image: g2,
    images: [
      g2,
      g2,
      g2,
    ],
    isOrganic: false,
    origin: "Mexico",
    weight: "85g",
    stock: 30,
    ingredients: "100% Ground Dried Red Chili Peppers (Capsicum annuum)",
    usages: "Use in stews, soups, marinades, rubs, sauces, and spice blends.",
    nutritionFacts: {
      calories: 17,
      totalFat: "0.9g",
      saturatedFat: "0.1g",
      sodium: "2mg",
      totalCarbs: "3.1g",
      fiber: "1.6g",
      sugars: "0.7g",
      protein: "0.6g",
    },
    relatedProducts: [1, 8],
  },
  {
    id: "5",
    name: "Cinnamon Sticks",
    description:
      "Our organic cinnamon sticks from Sri Lanka (true Ceylon cinnamon) offer a delicate, sweet flavor with subtle notes of citrus. These artisanally harvested sticks have a thin, flaky texture and are perfect for infusing beverages, desserts, and savory dishes.",
    longDescription:
      "Sri Lanka is renowned for producing the world's finest true cinnamon, known as Ceylon cinnamon. Unlike the more common Cassia cinnamon, Ceylon cinnamon has a delicate, complex flavor with notes of citrus and a gentle sweetness, without the harsh bite or bitterness.\n\nOur organic cinnamon sticks are harvested by skilled artisans who carefully peel the inner bark from young shoots of the cinnamon tree. The bark naturally curls into the characteristic 'quills' as it dries. These sticks have a distinctive light brown color and a thin, flaky texture.\n\nCinnamon sticks add wonderful aroma and flavor to hot beverages like tea, coffee, cider, and mulled wine. They can also be used in poaching liquids for fruits, in stews, curries, and rice dishes, or as a decorative and flavorful stirrer for hot drinks. For a more intense flavor, grind the sticks into powder using a spice grinder.",
    category: "Whole Spices",
    urlCategory: "whole-spices",
    price: 8.99,
    rating: 4.8,
    reviews: 156,
    image: w2,
    images: [
      w2,
      w2,
      w2,
    ],
    isOrganic: true,
    origin: "Sri Lanka",
    weight: "50g",
    stock: 23,
    ingredients: "100% Organic Ceylon Cinnamon Sticks (Cinnamomum verum)",
    usages:
      "Ideal for infusing beverages, desserts, stews, curries, and rice dishes.",
    nutritionFacts: {
      calories: 6,
      totalFat: "0.1g",
      saturatedFat: "0g",
      sodium: "1mg",
      totalCarbs: "2g",
      fiber: "1.2g",
      sugars: "0.1g",
      protein: "0.1g",
    },
    relatedProducts: [6, 8],
  },
  {
    id: "6",
    name: "Cardamom Pods",
    description:
      "These organic green cardamom pods from Guatemala are prized for their intense, aromatic flavor with notes of eucalyptus, mint, and lemon. Each pod contains tiny black seeds that deliver a warm, sweet-spicy taste essential to many sweet and savory dishes.",
    longDescription:
      "Often referred to as the 'queen of spices,' cardamom is one of the world's most expensive spices by weight, second only to saffron and vanilla. Our organic green cardamom pods are sourced from the highlands of Guatemala, which has become renowned for producing cardamom that rivals traditional Indian varieties.\n\nThese pods are harvested just before full ripeness to ensure maximum flavor and carefully dried to preserve their bright green color and potent essential oils. The result is an intensely aromatic spice with a complex flavor profile that includes notes of eucalyptus, mint, citrus, and a hint of sweetness.\n\nCardamom is incredibly versatile, used in both sweet and savory dishes across many cuisines. The whole pods can be used to infuse rice dishes, curries, and stews with their fragrant essence. For baking and spice blends, the seeds can be removed from the pods and ground fresh. Cardamom is also wonderful in coffee, tea, and other beverages.",
    category: "Whole Spices",
    urlCategory: "whole-spices",
    price: 12.99,
    rating: 4.9,
    reviews: 178,
    image: w3,
    images: [
      w3,
      w3,
      w3,
    ],
    isOrganic: true,
    origin: "Guatemala",
    weight: "40g",
    stock: 20,
    ingredients: "100% Organic Green Cardamom Pods (Elettaria cardamomum)",
    usages:
      "Perfect for curries, rice dishes, baked goods, coffee, tea, and spice blends.",
    nutritionFacts: {
      calories: 6,
      totalFat: "0.2g",
      saturatedFat: "0g",
      sodium: "0mg",
      totalCarbs: "1.4g",
      fiber: "0.6g",
      sugars: "0g",
      protein: "0.2g",
    },
    relatedProducts: [5, 8],
  },
  {
    id: "7",
    name: "Sesame Seeds",
    description:
      "Our premium white sesame seeds from Ethiopia have a mild, nutty flavor and satisfying crunch. These versatile seeds add texture and subtle flavor to a wide range of dishes, from baked goods to savory meals.",
    longDescription:
      "Sesame is one of the oldest cultivated plants in the world, prized for thousands of years for its flavorful seeds and oil. Our premium white sesame seeds are grown in the fertile soils of Ethiopia, which produces some of the world's highest quality sesame.\n\nThese small, flat seeds have a delicate, nutty flavor that intensifies wonderfully when toasted. Their high oil content gives them a rich taste and makes them an excellent source of healthy fats and nutrients, including calcium, iron, and protein.\n\nSesame seeds are incredibly versatile in the kitchen. They add visual appeal, texture, and flavor to breads, rolls, crackers, and baked goods. They're essential for making tahini paste and halvah, and are perfect for coating fish, chicken, or tofu before cooking. Toasted sesame seeds make an excellent garnish for stir-fries, salads, vegetable dishes, rice, and noodle bowls.",
    category: "Oil Seeds",
    urlCategory: "oil-seeds",
    price: 4.99,
    rating: 4.5,
    reviews: 87,
    image: o2,
    images: [
      o2,
      o2,
      o2,
    ],
    isOrganic: false,
    origin: "Ethiopia",
    weight: "120g",
    stock: 45,
    ingredients: "100% White Sesame Seeds (Sesamum indicum)",
    usages:
      "Great for baking, coating, garnishing, making tahini, and adding to many dishes.",
    nutritionFacts: {
      calories: 52,
      totalFat: "4.5g",
      saturatedFat: "0.6g",
      sodium: "1mg",
      totalCarbs: "2.3g",
      fiber: "1.1g",
      sugars: "0g",
      protein: "1.6g",
    },
    relatedProducts: [3, 9],
  },
  {
    id: "8",
    name: "Garam Masala",
    description:
      "Our organic garam masala is a premium spice blend from India, crafted from freshly ground whole spices. This aromatic mixture combines warm, sweet spices with pungent, savory ones to create a complex flavor profile essential to Indian cuisine.",
    longDescription:
      "Garam masala, which translates to 'warm spice mix,' is a cornerstone of Indian cooking. Our organic blend is crafted in small batches using traditional methods to ensure maximum flavor and aroma. Each component spice is carefully selected, toasted to bring out its essential oils, and then ground together in the perfect proportion.\n\nThis premium blend typically includes cardamom, cinnamon, cloves, cumin, coriander, black pepper, and other spices, though the exact recipe is our master blender's secret. The result is a harmonious mixture with a complex flavor profile that's warming, aromatic, and subtly sweet with a gentle heat.\n\nUnlike many commercial blends that may sit on shelves for months, our garam masala is made frequently in small batches to ensure freshness. This versatile spice blend can be used to add depth and complexity to curries, lentil dishes, vegetable preparations, rice dishes, and marinades for meat, fish, or plant-based proteins.",
    category: "Ground Spices",
    urlCategory: "ground-spices",
    price: 9.99,
    rating: 4.9,
    reviews: 214,
    image: g3,
    images: [
      g3,
      g3,
      g3,
    ],
    isOrganic: true,
    origin: "India",
    weight: "75g",
    stock: 32,
    ingredients:
      "Organic Coriander, Cumin, Cardamom, Cinnamon, Black Pepper, Cloves, Nutmeg",
    usages: "Essential for Indian curries, lentil dishes, rice, and marinades.",
    nutritionFacts: {
      calories: 8,
      totalFat: "0.4g",
      saturatedFat: "0.1g",
      sodium: "1mg",
      totalCarbs: "1.5g",
      fiber: "0.5g",
      sugars: "0.1g",
      protein: "0.3g",
    },
    relatedProducts: [1, 5, 6],
  },
  {
    id: "9",
    name: "Sesame Seeds",
    description:
      "Our premium black sesame seeds from Ethiopia boast a richer, more pronounced nutty flavor than their white counterparts. These distinctive seeds add dramatic visual contrast and a delightful crunch to both sweet and savory dishes.",
    longDescription:
      "Black sesame seeds have been treasured in Asian cuisines for centuries for their distinctive appearance and robust flavor profile. Our premium black sesame seeds are grown in Ethiopia's mineral-rich soils, which contribute to their exceptional taste and nutritional content.\n\nCompared to white sesame seeds, black varieties offer a stronger, more pronounced nutty flavor with subtle bitter notes that add complexity to dishes. They're packed with nutrients, including calcium, iron, magnesium, and healthy fats.\n\nThese versatile seeds make a stunning visual statement when used as a garnish on light-colored dishes. They're perfect for adding texture and flavor to sushi, noodle dishes, salads, and stir-fries. In sweet applications, they shine in ice creams, pastries, and traditional Asian desserts. For maximum flavor, lightly toast them before use to enhance their nutty characteristics. Black sesame seeds can also be ground into paste for sauces or traditional black sesame soup.",
    category: "Oil Seeds",
    urlCategory: "oil-seeds",
    price: 4.99,
    rating: 4.5,
    reviews: 92,
    image: o3,
    images: [
      o3,
      o3,
      o3,
    ],
    isOrganic: false,
    origin: "Ethiopia",
    weight: "100g",
    stock: 38,
    ingredients: "100% Black Sesame Seeds (Sesamum indicum)",
    usages:
      "Ideal for garnishing, baking, Asian cuisine, desserts, and making black sesame paste.",
    nutritionFacts: {
      calories: 52,
      totalFat: "4.5g",
      saturatedFat: "0.6g",
      sodium: "1mg",
      totalCarbs: "2.3g",
      fiber: "1.1g",
      sugars: "0g",
      protein: "1.6g",
    },
    relatedProducts: [3, 7],
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find the product by ID
  const product = products.find((p) => p.id === id) || products[0]; // Fallback to first product if not found

  // Related products
  const relatedProductIds = product.relatedProducts || [];
  const relatedProducts = products.filter((p) =>
    relatedProductIds.includes(Number(p.id))
  );

  const handleWhatsAppEnquiry = () => {
    const message = encodeURIComponent(
      `I'm interested in your ${product.name}. Can you provide more details?`
    );
    window.open(`https://wa.me/+918888888888?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-muted py-3">
          <div className="container-custom">
            <div className="flex items-center text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <Link
                to="/products"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <Link
                to={`/products?category=${product.category
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {product.category}
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <span className="text-foreground font-medium">
                {product.name}
              </span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="bg-muted rounded-lg p-8 mb-4 flex items-center justify-center">
                  <img
                    src={product.images[activeImageIndex]}
                    alt={product.name}
                    className="max-h-80 object-contain"
                  />
                </div>

                {/* Thumbnail Gallery */}
                {product.images.length > 1 && (
                  <div className="flex gap-4 justify-center">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`border-2 rounded-md overflow-hidden w-16 h-16 flex items-center justify-center ${
                          index === activeImageIndex
                            ? "border-spice-green"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} - view ${index + 1}`}
                          className="object-contain max-h-full max-w-full"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-1">
                  <span className="text-sm text-spice-green font-medium">
                    {product.category}
                  </span>
                  {product.isOrganic && (
                    <span className="ml-2 text-xs bg-spice-green/10 text-spice-green px-2 py-1 rounded-full">
                      Organic
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-serif font-bold mb-2">
                  {product.name}
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(product.rating)
                            ? "text-spice-yellow fill-spice-yellow"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium w-20">Origin:</span>
                    <span>{product.origin}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium w-20">Weight:</span>
                    <span>{product.weight}</span>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppEnquiry}
                  className="bg-spice-green hover:bg-spice-dark-green text-white w-full sm:w-auto"
                >
                  Enquire on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-8 bg-muted">
          <div className="container-custom">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="usage">Usage & Tips</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
              </TabsList>

              <TabsContent
                value="description"
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="mb-4 whitespace-pre-line">
                  {product.longDescription}
                </p>
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-medium mb-2">Ingredients</h4>
                  <p>{product.ingredients}</p>
                </div>
              </TabsContent>

              <TabsContent
                value="usage"
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4">Usage & Cooking Tips</h3>
                <p className="mb-6">{product.usages}</p>

                <h4 className="font-medium mb-3">Recommended Uses:</h4>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Add to soups, stews, and sauces for depth of flavor</li>
                  <li>Use in marinades for meat, poultry, or tofu</li>
                  <li>Sprinkle over roasted vegetables before serving</li>
                  <li>Incorporate into rice dishes for color and flavor</li>
                  <li>
                    Mix with honey and warm milk for a comforting beverage
                  </li>
                </ul>

                <h4 className="font-medium mb-3">Storage Tips:</h4>
                <p>
                  Store in a cool, dry place away from direct sunlight. Keep
                  container tightly sealed to maintain freshness and prevent
                  moisture from entering.
                </p>
              </TabsContent>

              <TabsContent
                value="nutrition"
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4">
                  Nutrition Information
                </h3>
                <p className="text-sm mb-4">Serving Size: 1 tsp (2g)</p>

                <div className="border rounded-md overflow-hidden">
                  <div className="bg-muted p-3 border-b">
                    <h4 className="font-bold">Nutrition Facts</h4>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between border-b pb-2">
                      <span>Calories</span>
                      <span className="font-medium">
                        {product.nutritionFacts.calories}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Fat</span>
                      <span className="font-medium">
                        {product.nutritionFacts.totalFat}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2 pl-4">
                      <span className="text-sm">Saturated Fat</span>
                      <span className="font-medium">
                        {product.nutritionFacts.saturatedFat}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Sodium</span>
                      <span className="font-medium">
                        {product.nutritionFacts.sodium}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Carbohydrates</span>
                      <span className="font-medium">
                        {product.nutritionFacts.totalCarbs}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2 pl-4">
                      <span className="text-sm">Dietary Fiber</span>
                      <span className="font-medium">
                        {product.nutritionFacts.fiber}
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2 pl-4">
                      <span className="text-sm">Sugars</span>
                      <span className="font-medium">
                        {product.nutritionFacts.sugars}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">
                        {product.nutritionFacts.protein}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  * Percent Daily Values are based on a 2,000 calorie diet. Your
                  daily values may be higher or lower depending on your calorie
                  needs.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12">
            <div className="container-custom">
              <h2 className="text-2xl font-serif font-bold mb-8">
                You May Also Like
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="product-card group"
                  >
                    <div className="p-4">
                      <div className="bg-muted rounded-lg mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-36 object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-spice-green font-medium">
                          {product.category}
                        </span>
                        <h3 className="text-lg font-bold mt-1 mb-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
