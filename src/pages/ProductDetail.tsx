import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/product";
import check from "../../public/assets/check.png";
import exMark from "../../public/assets/exM.png";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const productId = Number(id);

  // Find the product by ID
  const product = products.find((p) => p.id === productId) || products[0]; // Fallback to first product if not found

  // Related products
  const relatedProductIds = product.similarProducts || [];
  const relatedProducts = products.filter((p) =>
    relatedProductIds.includes(Number(p.id))
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
              <div className="flex flex-col items-start gap-4">
                <div
                  className="bg-muted lg:w-[500px] w-full lg:max-h-[500px] max-h-[300px]  mb-4 flex items-center justify-center"
                >
                  <img
                    src={product.images[activeImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>

                {product.images.length > 1 && (
                  <div className="flex gap-4 justify-center">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`border-2 rounded-md overflow-hidden w-16 h-16 flex items-center justify-center ${index === activeImageIndex
                          ? "border-spice-green"
                          : "border-transparent"
                          }`}
                      >
                        <img
                          src={image}
                          srcSet={image}
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
                <h1 className="text-3xl font-serif font-bold mb-2">
                  {product.name}
                </h1>

                <p className="text-muted-foreground mb-6">
                  {product.tagline}
                </p>

                <div className="mb-6"></div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={handleWhatsAppEnquiry}
                    className="bg-spice-green hover:bg-spice-dark-green text-white w-full sm:w-auto"
                  >
                    Enquire on WhatsApp
                  </Button>
                  <a
                    href={`mailto:mbagro.info@gmail.com?subject=Enquiry about ${encodeURIComponent(product.name)}&body=Hello,%0D%0A%0D%0AI am interested in your product: ${encodeURIComponent(product.name)}. Please provide more details.`}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      type="button"
                      className="bg-blue-600 hover:bg-blue-800 text-white w-full sm:w-auto"
                    >
                      Enquire by Mail
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-8 bg-muted">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="mb-4 whitespace-pre-line">
                {product.description}
              </p>
              <div className="border-t pt-4 mt-4">
                <div className="flex flex-col gap-2">
                  {product.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={check} className="w-6 h-6" alt="check" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <h4 className="font-medium mb-2">Note</h4>
                <div className="flex items-center gap-2">
                  <img src={exMark} className="w-6 h-6" alt="exMark" />
                  <p>{product.note}</p>
                </div>
              </div>
            </div>
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
                    onClick={scrollToTop}
                    key={product.id}
                    className="product-card group"
                  >
                    <div className="p-4">
                      <div className="bg-muted rounded-lg mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-52 object-cover transition-transform group-hover:scale-105 rounded-md"
                        />
                      </div>
                      <div className="text-left">

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
