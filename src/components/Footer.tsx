import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logow from "./../../public/assets/logow.png";

const Footer = () => {
  return (
    <footer className="bg-spice-dark-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Link to={"/"}>
              <img src={logow} className="h-12" alt="logo" />
            </Link>
            <p className="text-gray-300 mb-4">
              Premium quality spices sourced directly from the finest farms
              across the globe, delivering authentic flavor to your kitchen.
            </p>
            <div className="lg:flex space-x-4 hidden">
              <a
                href="https://www.facebook.com/61574966520231/posts/122097279110832217/"
                target="_blank"
                className="text-white hover:text-spice-yellow transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href=""
                target="_blank"
                className="text-white hover:text-spice-yellow transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/mbagro5654/profilecard/?igsh=MW84a3FjYnk3NTk3bg=="
                target="_blank"
                className="text-white hover:text-spice-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=whole-spices"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  Whole Spices
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=ground-spices"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  Ground Spices
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=oil-seeds"
                  className="text-gray-300 hover:text-spice-yellow transition-colors"
                >
                  Oil Seeds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <a
                  href="https://maps.app.goo.gl/o2ogieiF17PzPazr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-spice-yellow transition-colors"
                >
                  <MapPin
                    size={20}
                    className="mr-2 mt-1 text-spice-yellow size-10"
                  />
                  <span className="text-gray-300">
                    MB Agro, Ahmedabad-Palanpur Highway, Near Shanidev Temple
                    <br />
                    Unava, Gujarat, India
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="tel:+916351005903"
                  className="flex items-center hover:text-spice-yellow transition-colors"
                >
                  <Phone size={18} className="mr-2 text-spice-yellow" />
                  <span className="text-gray-300">+91 6351005903</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:mbagro5654@gmail.com"
                  className="flex items-center hover:text-spice-yellow transition-colors"
                >
                  <Mail size={18} className="mr-2 text-spice-yellow" />
                  <span className="text-gray-300">mbagro5654@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-center lg:hidden space-x-4 mt-8">
          <a
            href="https://www.facebook.com/61574966520231/posts/122097279110832217/"
            target="_blank"
            className="text-white hover:text-spice-yellow transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href=""
            target="_blank"
            className="text-white hover:text-spice-yellow transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/mbagro5654/profilecard/?igsh=MW84a3FjYnk3NTk3bg=="
            target="_blank"
            className="text-white hover:text-spice-yellow transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MB Agro. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
