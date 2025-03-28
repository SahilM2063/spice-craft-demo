
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Truck, Package, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HeroSection = () => {
  return (
    <section className="hero-pattern text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Premium Quality <span className="text-spice-yellow">Spices</span> for Your Kitchen
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Directly sourced from farms across the globe to deliver the most authentic flavors to your recipes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" size="lg">
                Explore Products
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-spice-green" size="lg">
                About Our Process
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/93aecc3f-b24c-44ad-9b0b-778ed575a87f.png" 
              alt="Various spices in wooden bowls" 
              className="rounded-lg shadow-2xl max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ 
  title, 
  image, 
  description,
  linkTo
}: {
  title: string;
  image: string;
  description: string;
  linkTo: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link to={linkTo}>
          <Button className="btn-primary">
            View Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

const SpecialFeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-spice-green" />,
      title: "100% Organic",
      description: "All our spices are naturally grown without chemicals or pesticides"
    },
    {
      icon: <Award className="w-10 h-10 text-spice-yellow" />,
      title: "Premium Quality",
      description: "We select only the finest spices from the best growing regions"
    },
    {
      icon: <Truck className="w-10 h-10 text-spice-green" />,
      title: "Fast Shipping",
      description: "Delivered to your doorstep with care and efficiency"
    },
    {
      icon: <Package className="w-10 h-10 text-spice-yellow" />,
      title: "Vacuum Sealed",
      description: "Maximum freshness preserved with vacuum sealed packaging"
    }
  ];

  return (
    <section className="bg-muted py-16">
      <div className="container-custom">
        <h2 className="section-title text-spice-dark-brown mb-3">Why Choose Our Spices</h2>
        <p className="subtitle mb-12">Discover what makes our spices stand out from the rest</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCardsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-spice-dark-brown to-spice-brown">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-lg uppercase tracking-wider text-spice-yellow font-medium mb-2">
            Best In Class
          </h2>
          <h3 className="section-title text-white mb-4">Our Categories</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of spices, herbs, seeds and oils to elevate your culinary creations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="category-card p-6 flex flex-col items-center text-center">
            <h3 className="text-3xl font-serif font-bold mb-1">WHOLE</h3>
            <h4 className="text-5xl font-serif font-bold mb-6">SPICES</h4>
            <div className="flex flex-wrap justify-center gap-2">
              <img 
                src="/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png" 
                alt="Whole Spices" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
              <img 
                src="/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png" 
                alt="Whole Spices" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
              <img 
                src="/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png" 
                alt="Whole Spices" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
            </div>
            <Button className="mt-6 bg-black hover:bg-opacity-80 text-white font-medium rounded-full">
              ENQUIRE NOW
            </Button>
          </div>
          
          <div className="category-card p-6 flex flex-col items-center text-center">
            <h3 className="text-3xl font-serif font-bold mb-1">OIL</h3>
            <h4 className="text-5xl font-serif font-bold mb-6">SEED</h4>
            <div className="flex flex-wrap justify-center gap-2">
              <img 
                src="/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png" 
                alt="Oil Seeds" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
              <img 
                src="/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png" 
                alt="Oil Seeds" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
              <img 
                src="/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png" 
                alt="Oil Seeds" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
            </div>
            <Button className="mt-6 bg-black hover:bg-opacity-80 text-white font-medium rounded-full">
              ENQUIRE NOW
            </Button>
          </div>
          
          <div className="category-card p-6 flex flex-col items-center text-center">
            <h3 className="text-3xl font-serif font-bold mb-1">GROUND</h3>
            <h4 className="text-5xl font-serif font-bold mb-6">SPICES</h4>
            <div className="flex flex-wrap justify-center gap-2">
              <img 
                src="/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png" 
                alt="Ground Spices" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
              <img 
                src="/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png" 
                alt="Ground Spices" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
              <img 
                src="/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png" 
                alt="Ground Spices" 
                className="w-24 h-24 object-cover rounded-full border-2 border-yellow-400"
              />
            </div>
            <Button className="mt-6 bg-black hover:bg-opacity-80 text-white font-medium rounded-full">
              ENQUIRE NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PopularProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Premium Turmeric Powder",
      image: "/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png",
      category: "Ground Spices",
      price: "$6.99",
      rating: 4.8
    },
    {
      id: 2,
      name: "Organic Black Pepper",
      image: "/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png",
      category: "Whole Spices",
      price: "$7.49",
      rating: 4.9
    },
    {
      id: 3,
      name: "Cumin Seeds",
      image: "/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png",
      category: "Oil Seeds",
      price: "$5.99",
      rating: 4.7
    },
    {
      id: 4,
      name: "Red Chili Powder",
      image: "/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png",
      category: "Ground Spices",
      price: "$6.49",
      rating: 4.6
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-spice-dark-brown mb-3">Popular Products</h2>
        <p className="subtitle mb-12">Our customers' favorite picks</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <Link to={`/products/${product.id}`} key={product.id} className="product-card group">
              <div className="p-4">
                <div className="bg-muted rounded-lg p-6 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <span className="text-sm text-spice-green font-medium">{product.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{product.name}</h3>
                  <p className="text-spice-dark-brown font-semibold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/products">
            <Button className="btn-primary inline-flex items-center" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Cooper",
      role: "Home Chef",
      quote: "The freshness and aroma of these spices have completely transformed my cooking. My family now looks forward to dinner every night!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Johnson",
      role: "Restaurant Owner",
      quote: "We've been using SpiceCraft products for our restaurant for over a year. The quality is consistently excellent and our customers notice the difference.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Food Blogger",
      quote: "I've tried many spice brands for my blog recipes, but SpiceCraft stands out for their authentic flavors and ethical sourcing practices.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <h2 className="section-title text-spice-dark-brown mb-3">What Our Customers Say</h2>
        <p className="subtitle mb-12">Real experiences from our valued customers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-spice-green text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <p className="text-white/80">Products Sold Monthly</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <p className="text-white/80">Countries Shipped To</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <p className="text-white/80">Spice Varieties</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <p className="text-white/80">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SpecialFeaturesSection />
        <CategoryCardsSection />
        <PopularProductsSection />
        <TestimonialsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
