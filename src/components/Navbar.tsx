
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-spice-green font-serif font-bold text-2xl">
                Spice<span className="text-spice-yellow">Craft</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-spice-green font-medium transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-foreground hover:text-spice-green font-medium transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-foreground hover:text-spice-green font-medium transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-spice-green font-medium transition-colors">
                Contact
              </Link>
            </nav>
          )}

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-spice-dark-brown md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            <div className="hidden md:flex items-center">
              <Phone size={16} className="text-spice-green mr-2" />
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-spice-green font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-foreground hover:text-spice-green font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-spice-green font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-spice-green font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center px-4 py-2">
                <Phone size={16} className="text-spice-green mr-2" />
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
