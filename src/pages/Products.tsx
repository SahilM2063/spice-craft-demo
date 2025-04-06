
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Filter, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || '');
  
  // Effect to handle URL category parameter
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);
  
  // Product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Premium Turmeric Powder',
      category: 'Ground Spices',
      urlCategory: 'ground-spices',
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
      urlCategory: 'whole-spices',
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
      urlCategory: 'oil-seeds',
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
      urlCategory: 'ground-spices',
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
      urlCategory: 'whole-spices',
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
      urlCategory: 'whole-spices',
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
      urlCategory: 'oil-seeds',
      price: 4.99,
      rating: 4.5,
      image: '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png',
      isOrganic: false,
      origin: 'Ethiopia'
    },
    {
      id: 8,
      name: 'Garam Masala',
      category: 'Ground Spices',
      urlCategory: 'ground-spices',
      price: 9.99,
      rating: 4.9,
      image: '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      isOrganic: true,
      origin: 'India'
    }
  ];

  // Filter products based on search term, price range and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = !selectedCategory || product.urlCategory === selectedCategory;
    return matchesSearch && matchesPrice && matchesCategory;
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
  
  const handleWhatsAppEnquiry = (product) => {
    const message = encodeURIComponent(`I'm interested in your ${product.name}. Can you provide more details?`);
    window.open(`https://wa.me/+918888888888?text=${message}`, '_blank');
  };

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
                <Input 
                  type="search"
                  placeholder="Search for products..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                    {['Whole Spices', 'Ground Spices', 'Oil Seeds'].map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox 
                          id={`category-${category}`} 
                          className="mr-2"
                          checked={selectedCategory === category.toLowerCase().replace(' ', '-')}
                          onCheckedChange={() => {
                            if (selectedCategory === category.toLowerCase().replace(' ', '-')) {
                              setSelectedCategory('');
                            } else {
                              setSelectedCategory(category.toLowerCase().replace(' ', '-'));
                            }
                          }}
                        />
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
                      setSelectedCategory('');
                    }}>
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map(product => (
                      <div key={product.id} className="product-card group">
                        <div className="p-4">
                          <div className="bg-muted rounded-lg p-6 mb-4">
                            <Link to={`/products/${product.id}`}>
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-48 object-contain transition-transform group-hover:scale-105"
                              />
                            </Link>
                          </div>
                          <div>
                            <span className="text-sm text-spice-green font-medium">{product.category}</span>
                            <h3 className="text-lg font-bold mt-1 mb-1">{product.name}</h3>
                            
                            <div className="flex items-center mb-2">
                              <Star size={16} className="text-spice-yellow fill-spice-yellow" />
                              <span className="ml-1 text-sm font-medium">{product.rating}</span>
                            </div>
                            
                            <div className="flex items-center justify-between mb-4">
                              <p className="text-spice-dark-brown font-semibold">${product.price.toFixed(2)}</p>
                              {product.isOrganic && (
                                <span className="text-xs bg-spice-green/10 text-spice-green px-2 py-1 rounded-full">
                                  Organic
                                </span>
                              )}
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Link to={`/products/${product.id}`} className="flex-1">
                                <Button className="w-full bg-spice-green hover:bg-spice-dark-green text-white">
                                  View Details
                                </Button>
                              </Link>
                              <Button 
                                variant="outline"
                                className="border-spice-green text-spice-green hover:bg-spice-green/10"
                                onClick={() => handleWhatsAppEnquiry(product)}
                              >
                                Enquire
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
