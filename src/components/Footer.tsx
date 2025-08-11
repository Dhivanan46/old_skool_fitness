import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black text-yellow-400 mb-4">
              OLD SKOOL
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Where strength meets tradition. Join our community of fitness enthusiasts 
              and transform your body the OLD SKOOL way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/oldskoolfitnessstudio/" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Plans', 'Results', 'Gallery'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Dhivanan S</li>
              <li>Site is under Construction</li>
              <li>+91 9751900299</li>
              <li>info@oldskoolfit.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 OLD SKOOL Fitness. All rights reserved. Train Hard. Stay Strong. Be OLD SKOOL.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;