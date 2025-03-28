
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  // Product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Premium Turmeric Powder',
      category: 'Ground Spices',
      price: 6.99,
      rating: 4.8,
      image: '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      isOrganic: true,
      origin: 'India'
    },
    {
      id: 2,
      name: 'Organic Black Pepper',
      category: 'Whole Spices',
      price: 7.49,
      rating: 4.9,
      image: '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      isOrganic: true,
      origin: 'Vietnam'
    },
    {
      id: 3,
      name: 'Cumin Seeds',
      category: 'Oil Seeds',
      price: 5.99,
      rating: 4.7,
      image: '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png',
      isOrganic: false,
      origin: 'Turkey'
    },
    {
      id: 4,
      name: 'Red Chili Powder',
      category: 'Ground Spices',
      price: 6.49,
      rating: 4.6,
      image: '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      isOrganic: false,
      origin: 'Mexico'
    },
    {
      id: 5,
      name: 'Cinnamon Sticks',
      category: 'Whole Spices',
      price: 8.99,
      rating: 4.8,
      image: '/lovable-uploads/93aecc3f-b24c-44ad-9b0b-778ed575a87f.png',
      isOrganic: true,
      origin: 'Sri Lanka'
    },
    {
      id: 6,
      name: 'Cardamom Pods',
      category: 'Whole Spices',
      price: 12.99,
      rating: 4.9,
      image: '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      isOrganic: true,
      origin: 'Guatemala'
    },
    {
      id: 7,
      name: 'Sesame Seeds',
      category: 'Oil Seeds',
      price: 4.99,
      rating: 4.5,
      image: '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png',
      isOrganic: false,
      origin: 'Ethiopia'
    },
    {
      id: 8,
      name: 'Garam Masala',
      category: 'Spice Blends',
      price: 9.99,
      rating: 4.9,
      image: '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      isOrganic: true,
      origin: 'India'
    },
    {
      id: 9,
      name: 'Oregano',
      category: 'Dried Herbs',
      price: 5.49,
      rating: 4.6,
      image: '/lovable-uploads/93aecc3f-b24c-44ad-9b0b-778ed575a87f.png',
      isOrganic: true,
      origin: 'Greece'
    },
    {
      id: 10,
      name: 'Mustard Seeds',
      category: 'Oil Seeds',
      price: 4.29,
      rating: 4.7,
      image: '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png',
      isOrganic: false,
      origin: 'Canada'
    },
    {
      id: 11,
      name: 'Cloves',
      category: 'Whole Spices',
      price: 7.99,
      rating: 4.8,
      image: '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      isOrganic: true,
      origin: 'Indonesia'
    },
    {
      id: 12,
      name: 'Nutmeg',
      category: 'Whole Spices',
      price: 8.49,
      rating: 4.7,
      image: '/lovable-uploads/93aecc3f-b24c-44ad-9b0b-778ed575a87f.png',
      isOrganic: false,
      origin: 'Indonesia'
    }
  ];

  // Filter products based on search term and price range
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0; // Keep original order for 'featured'
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-spice-dark-brown text-white py-12">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Products</h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover our premium range of spices, meticulously sourced and processed to maintain optimum flavor and freshness.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="search"
                  placeholder="Search for products..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 bg-muted">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters - Mobile Toggle */}
              <div className="md:hidden w-full mb-4">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-between"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <div className="flex items-center">
                    <Filter size={18} className="mr-2" />
                    Filters
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} 
                  />
                </Button>
              </div>
              
              {/* Filters Panel */}
              <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4 bg-white rounded-lg shadow-md p-6`}>
                <h3 className="font-bold text-lg mb-4">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {['Whole Spices', 'Ground Spices', 'Oil Seeds', 'Spice Blends', 'Dried Herbs'].map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={`category-${category}`} className="mr-2" />
                        <label htmlFor={`category-${category}`} className="text-sm">{category}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <Slider
                    defaultValue={[0, 50]}
                    max={50}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Product Type</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="organic" className="mr-2" />
                      <label htmlFor="organic" className="text-sm">Organic</label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="non-organic" className="mr-2" />
                      <label htmlFor="non-organic" className="text-sm">Conventional</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Origin</h4>
                  <div className="space-y-2">
                    {['India', 'Vietnam', 'Turkey', 'Indonesia', 'Mexico'].map((origin) => (
                      <div key={origin} className="flex items-center">
                        <Checkbox id={`origin-${origin}`} className="mr-2" />
                        <label htmlFor={`origin-${origin}`} className="text-sm">{origin}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <p className="text-muted-foreground mb-4 sm:mb-0">
                    Showing <span className="font-medium text-foreground">{sortedProducts.length}</span> products
                  </p>
                  <div className="w-full sm:w-48">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Top Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {sortedProducts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button onClick={() => {
                      setSearchTerm('');
                      setPriceRange([0, 50]);
                    }}>
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map(product => (
                      <Link 
                        to={`/products/${product.id}`} 
                        key={product.id} 
                        className="product-card group hover:shadow-lg"
                      >
                        <div className="p-4">
                          <div className="bg-muted rounded-lg p-6 mb-4">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-48 object-contain transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <span className="text-sm text-spice-green font-medium">{product.category}</span>
                            <h3 className="text-lg font-bold mt-1 mb-1">{product.name}</h3>
                            
                            <div className="flex items-center mb-2">
                              <Star size={16} className="text-spice-yellow fill-spice-yellow" />
                              <span className="ml-1 text-sm font-medium">{product.rating}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <p className="text-spice-dark-brown font-semibold">${product.price.toFixed(2)}</p>
                              {product.isOrganic && (
                                <span className="text-xs bg-spice-green/10 text-spice-green px-2 py-1 rounded-full">
                                  Organic
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
