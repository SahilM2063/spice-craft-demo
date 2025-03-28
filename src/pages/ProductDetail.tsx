import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ShoppingCart, Star, Truck, Shield, Package, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Placeholder product data - in a real app this would come from an API
const products = [
  {
    id: '1',
    name: 'Premium Turmeric Powder',
    description: 'Our premium turmeric powder is sourced from the finest farms in India, carefully processed to maintain its vibrant color and potent flavor. This versatile spice adds a warm, earthy flavor and golden color to curries, rice dishes, and more.',
    longDescription: "Turmeric has been used in cooking and traditional medicine for thousands of years. Our premium grade turmeric powder is grown using sustainable farming practices and harvested at peak maturity to ensure maximum flavor and nutritional benefits. The roots are carefully cleaned, dried, and ground to a fine powder, preserving the essential oils and curcumin content.\n\nWith its vibrant golden-orange color and distinctive earthy aroma, this turmeric powder adds depth and warmth to a wide variety of dishes. It's a staple in Indian, Middle Eastern, and Southeast Asian cuisines, commonly used in curries, rice dishes, soups, and marinades.\n\nBeyond its culinary applications, turmeric is celebrated for its potential health benefits, including anti-inflammatory and antioxidant properties.",
    category: 'Ground Spices',
    price: 6.99,
    rating: 4.8,
    reviews: 127,
    image: '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
    images: [
      '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png'
    ],
    isOrganic: true,
    origin: 'India',
    weight: '100g',
    stock: 25,
    ingredients: '100% Pure Turmeric (Curcuma longa)',
    usages: 'Ideal for curries, rice dishes, soups, marinades, and golden milk.',
    nutritionFacts: {
      calories: 29,
      totalFat: '0.7g',
      saturatedFat: '0.2g',
      sodium: '3mg',
      totalCarbs: '5.3g',
      fiber: '1.4g',
      sugars: '0.3g',
      protein: '0.9g'
    },
    relatedProducts: [2, 4, 8]
  },
  {
    id: '2',
    name: 'Organic Black Pepper',
    description: 'Organically grown black peppercorns with a bold, pungent flavor and aroma. Hand-picked at peak ripeness and carefully dried to preserve their essential oils.',
    longDescription: 'Known as the "King of Spices," black pepper has been one of the world\'s most valued spices throughout history. Our organic black peppercorns are grown in the ideal climate of Vietnam\'s central highlands, where the perfect combination of soil, temperature, and rainfall produces peppercorns with exceptional flavor and aroma.\n\nThese premium peppercorns are harvested by hand at peak ripeness, then sun-dried to develop their characteristic wrinkled appearance and concentrated flavor. The result is a bold, complex pepper with notes of wood, citrus, and spice that adds depth to any dish.\n\nFreshly grinding these peppercorns releases their essential oils, providing maximum flavor and aroma that pre-ground pepper simply cannot match.',
    category: 'Whole Spices',
    price: 7.49,
    rating: 4.9,
    reviews: 98,
    image: '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
    images: [
      '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png'
    ],
    isOrganic: true,
    origin: 'Vietnam',
    weight: '75g',
    stock: 42,
    ingredients: '100% Organic Black Peppercorns (Piper nigrum)',
    usages: 'Perfect for everyday seasoning, marinades, rubs, and sauces.',
    nutritionFacts: {
      calories: 20,
      totalFat: '0.4g',
      saturatedFat: '0.1g',
      sodium: '1mg',
      totalCarbs: '5g',
      fiber: '2g',
      sugars: '0.1g',
      protein: '0.8g'
    },
    relatedProducts: [1, 3, 6]
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { toast } = useToast();
  
  // Find the product by ID
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first product if not found
  
  // Related products
  const relatedProductIds = product.relatedProducts || [];
  const relatedProducts = products.filter(p => relatedProductIds.includes(Number(p.id)));
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-muted py-3">
          <div className="container-custom">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <Link to={`/categories/${product.category.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-foreground">
                {product.category}
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              <span className="text-foreground font-medium">{product.name}</span>
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
                          index === activeImageIndex ? 'border-spice-green' : 'border-transparent'
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
                  <span className="text-sm text-spice-green font-medium">{product.category}</span>
                  {product.isOrganic && (
                    <span className="ml-2 text-xs bg-spice-green/10 text-spice-green px-2 py-1 rounded-full">
                      Organic
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < Math.floor(product.rating) ? "text-spice-yellow fill-spice-yellow" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">{product.rating} ({product.reviews} reviews)</span>
                </div>
                
                <div className="text-2xl font-bold mb-4 text-spice-dark-brown">
                  ${product.price.toFixed(2)}
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
                  <div className="flex items-center">
                    <span className="text-sm font-medium w-20">Availability:</span>
                    <span className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
                      {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="px-3 py-2 text-spice-dark-brown hover:bg-muted"
                      disabled={quantity <= 1}
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="px-3 py-2 text-spice-dark-brown hover:bg-muted"
                      disabled={quantity >= product.stock}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  
                  <Button onClick={addToCart} className="bg-spice-green hover:bg-spice-dark-green text-white flex-1" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  
                  <Button variant="outline" className="p-3" title="Add to Wishlist">
                    <Heart size={20} className="text-spice-dark-brown" />
                  </Button>
                </div>
                
                {/* Shipping & Returns Info */}
                <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 mr-2 text-spice-green" />
                    <div>
                      <p className="text-sm font-medium">Free Shipping</p>
                      <p className="text-xs text-muted-foreground">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="h-5 w-5 mr-2 text-spice-green" />
                    <div>
                      <p className="text-sm font-medium">Secure Packaging</p>
                      <p className="text-xs text-muted-foreground">Preserves freshness</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 mr-2 text-spice-green" />
                    <div>
                      <p className="text-sm font-medium">30-Day Returns</p>
                      <p className="text-xs text-muted-foreground">Satisfaction guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Details Tabs */}
        <section className="py-8 bg-muted">
          <div className="container-custom">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="usage">Usage & Tips</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className="mb-4 whitespace-pre-line">{product.longDescription}</p>
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-medium mb-2">Ingredients</h4>
                  <p>{product.ingredients}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="usage" className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Usage & Cooking Tips</h3>
                <p className="mb-6">{product.usages}</p>
                
                <h4 className="font-medium mb-3">Recommended Uses:</h4>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Add to soups, stews, and sauces for depth of flavor</li>
                  <li>Use in marinades for meat, poultry, or tofu</li>
                  <li>Sprinkle over roasted vegetables before serving</li>
                  <li>Incorporate into rice dishes for color and flavor</li>
                  <li>Mix with honey and warm milk for a comforting beverage</li>
                </ul>
                
                <h4 className="font-medium mb-3">Storage Tips:</h4>
                <p>Store in a cool, dry place away from direct sunlight. Keep container tightly sealed to maintain freshness and prevent moisture from entering.</p>
              </TabsContent>
              
              <TabsContent value="nutrition" className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Nutrition Information</h3>
                <p className="text-sm mb-4">Serving Size: 1 tsp (2g)</p>
                
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-muted p-3 border-b">
                    <h4 className="font-bold">Nutrition Facts</h4>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between border-b pb-2">
                      <span>Calories</span>
                      <span className="font-medium">{product.nutritionFacts.calories}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Fat</span>
                      <span className="font-medium">{product.nutritionFacts.totalFat}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2 pl-4">
                      <span className="text-sm">Saturated Fat</span>
                      <span className="font-medium">{product.nutritionFacts.saturatedFat}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Sodium</span>
                      <span className="font-medium">{product.nutritionFacts.sodium}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Carbohydrates</span>
                      <span className="font-medium">{product.nutritionFacts.totalCarbs}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2 pl-4">
                      <span className="text-sm">Dietary Fiber</span>
                      <span className="font-medium">{product.nutritionFacts.fiber}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2 pl-4">
                      <span className="text-sm">Sugars</span>
                      <span className="font-medium">{product.nutritionFacts.sugars}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">{product.nutritionFacts.protein}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                </p>
              </TabsContent>
              
              <TabsContent value="reviews" className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={24} 
                          className={i < Math.floor(product.rating) ? "text-spice-yellow fill-spice-yellow" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">{product.rating} out of 5</span>
                  </div>
                  <p className="text-muted-foreground">{product.reviews} global ratings</p>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < 5 ? "text-spice-yellow fill-spice-yellow" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="font-medium">Exceptional Quality</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">By Sarah J. on May 12, 2023</p>
                    <p>This is the best turmeric I've ever used! The color is vibrant, the aroma is strong, and it adds such a rich flavor to my curries. Definitely worth the price.</p>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < 4 ? "text-spice-yellow fill-spice-yellow" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="font-medium">Great Product</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">By Michael T. on April 3, 2023</p>
                    <p>I've been using this turmeric for a few weeks now and am very impressed with the quality. The color and aroma are excellent. I would have given 5 stars but the packaging could be improved to keep it fresher longer.</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < 5 ? "text-spice-yellow fill-spice-yellow" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="font-medium">Amazing Flavor</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">By Rachel K. on March 17, 2023</p>
                    <p>I can really taste the difference compared to the grocery store brands. This turmeric has a much more complex flavor and the color is incredible. Will definitely be buying more when I run out!</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12">
            <div className="container-custom">
              <h2 className="text-2xl font-serif font-bold mb-8">You May Also Like</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <Link 
                    to={`/products/${product.id}`} 
                    key={product.id} 
                    className="product-card group"
                  >
                    <div className="p-4">
                      <div className="bg-muted rounded-lg p-6 mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-36 object-contain transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-spice-green font-medium">{product.category}</span>
                        <h3 className="text-lg font-bold mt-1 mb-2">{product.name}</h3>
                        <p className="text-spice-dark-brown font-semibold">${product.price.toFixed(2)}</p>
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
    </div>
  );
};

export default ProductDetail;
