
import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'PROJETS', href: '/projects' },
    { name: 'QUI SOMMES-NOUS', href: '/about' },
    { name: 'EVENEMENTS', href: '/events' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-charity-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-playfair text-2xl font-semibold text-charity-darkGray">Charius</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-charity-orange transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-charity-orange cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-gray-600 hover:text-charity-orange cursor-pointer transition-colors" />
            <Link to="/donate">
              <Button className="bg-charity-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
                Faire un Don
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-charity-orange transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-gray-700 hover:text-charity-orange transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-charity-orange hover:bg-orange-600 text-white py-3 rounded-full font-medium">
                  Faire un Don
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
