
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-spice-dark-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Spice<span className="text-spice-yellow">Craft</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Premium quality spices sourced directly from the finest farms across the globe, 
              delivering authentic flavor to your kitchen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-spice-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-spice-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-spice-yellow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/whole-spices" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Whole Spices
                </Link>
              </li>
              <li>
                <Link to="/categories/ground-spices" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Ground Spices
                </Link>
              </li>
              <li>
                <Link to="/categories/oil-seeds" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Oil Seeds
                </Link>
              </li>
              <li>
                <Link to="/categories/blends" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Spice Blends
                </Link>
              </li>
              <li>
                <Link to="/categories/herbs" className="text-gray-300 hover:text-spice-yellow transition-colors">
                  Herbs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-spice-yellow" />
                <span className="text-gray-300">
                  123 Spice Avenue, Flavor District,<br />Culinary City, 45678
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-spice-yellow" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-spice-yellow" />
                <span className="text-gray-300">info@spicecraft.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SpiceCraft. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-gray-400 hover:text-white text-sm transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
