
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const categories = [
    {
      id: 'whole-spices',
      title: 'Whole Spices',
      description: 'Complete, unground spices that preserve essential oils and flavors for longer periods.',
      image: '/lovable-uploads/93aecc3f-b24c-44ad-9b0b-778ed575a87f.png',
      products: [
        'Black Peppercorn',
        'Cinnamon Sticks',
        'Cloves',
        'Cardamom Pods',
        'Star Anise'
      ]
    },
    {
      id: 'ground-spices',
      title: 'Ground Spices',
      description: 'Finely milled spices for quick and easy integration into any recipe.',
      image: '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      products: [
        'Turmeric Powder',
        'Red Chili Powder',
        'Coriander Powder',
        'Cumin Powder',
        'Garam Masala'
      ]
    },
    {
      id: 'oil-seeds',
      title: 'Oil Seeds',
      description: 'Nutrient-dense seeds that add flavor, texture and health benefits to your meals.',
      image: '/lovable-uploads/8134bbda-0268-4eb5-8244-f946d380768b.png',
      products: [
        'Sesame Seeds',
        'Mustard Seeds',
        'Flax Seeds',
        'Poppy Seeds',
        'Pumpkin Seeds'
      ]
    },
    {
      id: 'spice-blends',
      title: 'Spice Blends',
      description: 'Expertly crafted spice mixes to enhance and simplify your cooking experience.',
      image: '/lovable-uploads/19b601f3-becf-45af-b7c5-13405a4f78de.png',
      products: [
        'Garam Masala',
        'Curry Powder',
        'Chaat Masala',
        'Tandoori Masala',
        'Biryani Spice Mix'
      ]
    },
    {
      id: 'herbs',
      title: 'Dried Herbs',
      description: 'Aromatic leaves that add depth and complexity to your culinary creations.',
      image: '/lovable-uploads/93aecc3f-b24c-44ad-9b0b-778ed575a87f.png',
      products: [
        'Bay Leaves',
        'Dried Fenugreek',
        'Oregano',
        'Thyme',
        'Rosemary'
      ]
    },
    {
      id: 'specialty-oils',
      title: 'Specialty Oils',
      description: 'Pure, aromatic oils to enhance flavors and add richness to your dishes.',
      image: '/lovable-uploads/1bebab7b-fc68-426a-b949-a0671bbe9859.png',
      products: [
        'Mustard Oil',
        'Sesame Oil',
        'Coconut Oil',
        'Infused Olive Oils',
        'Avocado Oil'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-spice-dark-brown text-white py-12 md:py-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Spice Categories</h1>
              <p className="text-lg text-gray-300 mb-8">
                Explore our wide range of premium spices, carefully sorted into categories to help you find exactly what you need for your culinary adventures.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid Section */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold mb-2">{category.title}</h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    
                    <h3 className="font-medium text-sm text-spice-green mb-2">Popular Products:</h3>
                    <ul className="mb-6 text-sm">
                      {category.products.slice(0, 3).map((product, index) => (
                        <li key={index} className="mb-1">• {product}</li>
                      ))}
                      <li className="text-muted-foreground">And more...</li>
                    </ul>
                    
                    <Link to={`/categories/${category.id}`}>
                      <Button className="btn-primary w-full">
                        View All {category.title}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-spice-green text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our spice experts are here to help you find the perfect spices for your recipes.
              Contact us for personalized recommendations.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-spice-green hover:bg-spice-yellow hover:text-white">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
