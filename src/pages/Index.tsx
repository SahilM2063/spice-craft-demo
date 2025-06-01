import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import MapSection from "@/components/MapSection";
import hero from "./../../public/assets/hero.png";
import { products } from "@/data/product";

const scrollToProductSection = () => {
  const productSection = document.getElementById("products");
  if (productSection) {
    // Using only valid ScrollIntoViewOptions properties
    productSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

    // If you need an offset, you can adjust the scroll position after scrolling
    window.scrollBy(0, -100);
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const HeroSection = () => {
  return (
    <section className="hero-pattern text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Premium quality <span className="text-spice-yellow">cumin seeds </span>{" "}
              for your business and daily needs
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Directly sourced from farms across the india to deliver the most
              authentic flavors to your recipes.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src={hero}
              className="w-[80%"
              alt="Various spices in wooden bowls"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container-custom">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-spice-dark-brown mb-3">
          Why Choose Us?
        </h2>
        <p className="text-center text-lg mb-12">
          Experience excellence in every aspect of our service
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-spice-green mb-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 5L40.3882 10V30L30 35L19.6118 30V10L30 5Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 35V55"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.3882 30L48.7764 35V45L40.3882 50L32 45V35L40.3882 30Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6118 30L11.2236 35V45L19.6118 50L28 45V35L19.6118 30Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
            <p className="text-muted-foreground">
              Rigorous quality control at every step
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-spice-green mb-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.3333 25H38.3333V13.3333H53.3333V25Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.3333 41.6667H53.3333V30H38.3333V41.6667Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6667 53.3333C21.2691 53.3333 25 49.6024 25 45C25 40.3976 21.2691 36.6667 16.6667 36.6667C12.0643 36.6667 8.33334 40.3976 8.33334 45C8.33334 49.6024 12.0643 53.3333 16.6667 53.3333Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.3333 19.1667H25V30H38.3333V19.1667Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 30V36.6667"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 45H33.3333"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Global Shipping</h3>
            <p className="text-muted-foreground">
              Fast and reliable worldwide delivery
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-spice-green mb-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 50H50"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6667 36.6667V50"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 36.6667V50"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.3333 36.6667V50"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33334 16.6667L30 10L51.6667 16.6667"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 16.6667V33.3333C50 33.3333 41.6667 36.6667 30 36.6667C18.3333 36.6667 10 33.3333 10 33.3333V16.6667"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Packaging</h3>
            <p className="text-muted-foreground">
              Tailored packaging solutions
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-spice-green mb-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 33.3333C35.5228 33.3333 40 28.8562 40 23.3333C40 17.8105 35.5228 13.3333 30 13.3333C24.4772 13.3333 20 17.8105 20 23.3333C20 28.8562 24.4772 33.3333 30 33.3333Z"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 48.3333C15 42.1667 21.6667 36.6667 30 36.6667C38.3333 36.6667 45 42.1667 45 48.3333"
                  stroke="#0A8738"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Support</h3>
            <p className="text-muted-foreground">Dedicated customer service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isMobile = window.innerWidth < 640; // sm breakpoint

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };



  const handleWhatsAppEnquiry = (product: any) => {
    const message = encodeURIComponent(
      `I'm interested in your ${product.name}. Can you provide more details?`
    );

    const phone = "917572893358";
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-spice-dark-brown to-spice-brown" id="products">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-lg uppercase tracking-wider text-spice-yellow font-medium mb-2">
            Our Best Selling Products
          </h2>
          <h3 className="section-title text-white mb-4">Our Products</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of spices, herbs, seeds and oils to elevate
            your culinary creations
          </p>
        </div>

        {/* Mobile Slider with Touch/Drag */}
        <div className="sm:hidden relative">
          <div
            className="flex items-center justify-center w-full"
            onTouchStart={(e) => {
              (window as any)._touchStartX = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
              (window as any)._touchMoveX = e.touches[0].clientX;
            }}
            onTouchEnd={() => {
              const startX = (window as any)._touchStartX;
              const endX = (window as any)._touchMoveX;
              if (startX !== undefined && endX !== undefined) {
                const diff = endX - startX;
                if (Math.abs(diff) > 50) {
                  if (diff < 0) {
                    // Swipe left
                    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
                  } else {
                    // Swipe right
                    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
                  }
                }
              }
              (window as any)._touchStartX = undefined;
              (window as any)._touchMoveX = undefined;
            }}
          >
            <div className="w-full">
              {products.length > 0 && (
                <div key={products[currentIndex].id} className="product-card group bg-white rounded-lg shadow-md ">
                  <div className="p-4">
                    <h3 className="text-lg font-bold mt-1 mb-4">
                      {products[currentIndex].name}
                    </h3>
                    <div className="bg-muted rounded-lg mb-4">
                      <img
                        src={products[currentIndex].image}
                        alt={products[currentIndex].name}
                        className="w-full h-48 object-cover transition-transform lg:group-hover:scale-105 rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="flex flex-col gap-2">
                        <Link
                          to={`/products/${products[currentIndex].id}`}
                          onClick={scrollToTop}
                          className="flex-1"
                        >
                          <Button className="w-full bg-spice-green hover:bg-spice-dark-green text-white">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="border-spice-green text-spice-green hover:bg-spice-green/10"
                          onClick={() => handleWhatsAppEnquiry(products[currentIndex])}
                        >
                          Enquire
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Indicator Dots */}
          <div className="flex justify-center mt-4 gap-2 sm:hidden">
            {products.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 border border-spice-green focus:outline-none ${currentIndex === idx
                  ? 'bg-spice-green scale-125'
                  : 'bg-gray-300'
                  }`}
                style={{ outline: 'none' }}
              />
            ))}
          </div>
        </div>

        {/* Grid for sm and up */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card group bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h3 className="text-lg font-bold mt-1 mb-4">
                  {product.name}
                </h3>
                <div className="bg-muted rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105 rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/products/${product.id}`}
                      onClick={scrollToTop}
                      className="flex-1"
                    >
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
      </div>
    </section>
  );
};

// Stats section commented out as requested but kept for future use
/*
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
*/

const ContactSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-spice-dark-brown mb-3">
            Contact Us
          </h2>
          <p className="subtitle mb-8">
            Reach out to us for any queries or assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-spice-green/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-spice-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+917572893358" className="text-muted-foreground">
                    +91 75728 93358{" "}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-spice-green/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-spice-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:mbagro.info@gmail.com"
                    className="text-muted-foreground"
                  >
                    {" "}
                    mbagro.info@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-spice-green/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-spice-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Address</h4>
                  <a
                    href="https://maps.app.goo.gl/TBr5E5svG2VBL1AQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground"
                  >
                    MB Agro, Ahmedabad-Palanpur Highway, Near Shanidev Temple
                    <br />
                    Unava, Gujarat, India{" "}
                  </a>
                </div>
              </div>
            </div>
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
        <ProductsSection />
        <WhyChooseUsSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
