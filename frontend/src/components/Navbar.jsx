import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Twitter, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-black border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-32">
            <Link to="/home" className="block">
              <img src="/logo1.png" alt="logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center italic">
            <nav className="flex space-x-8">
              <Link 
                to="/home"
                className="text-gray-300 hover:text-white px-3 py-2 text font-medium transition-colors duration-150 ease-in-out"
              >
                Home
              </Link>
              <Link 
                to="/coin"
                className="text-gray-300 hover:text-white px-3 py-2 text font-medium transition-colors duration-150 ease-in-out"
              >
                All Coins
              </Link>
              <Link 
                to="/team"
                className="text-gray-300 hover:text-white px-3 py-2 text font-medium transition-colors duration-150 ease-in-out"
              >
                Team
              </Link>
            </nav>
          </div>

          {/* Right Section - Social Icons & Login */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-150 ease-in-out"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-150 ease-in-out"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-150 ease-in-out"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Login Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ease-in-out">
              Login
              {/* Connect wallet kit button */}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={handleNav}
              className="text-gray-400 hover:text-white p-2"
            >
              {nav ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        lg:hidden fixed inset-0 z-50 bg-black bg-opacity-95 transition-transform duration-300 ease-in-out
        ${nav ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
            <Link to="/home" className="block">
              <img src="/logo1.png" alt="logo" className="h-12 w-auto object-contain" />
            </Link>
            <button
              onClick={handleNav}
              className="text-gray-400 hover:text-white p-2"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-4">
            <Link 
              to="/home" 
              className="block text-lg text-gray-300 hover:text-white py-2"
              onClick={handleNav}
            >
              Home
            </Link>
            <Link 
              to="/coin" 
              className="block text-lg text-gray-300 hover:text-white py-2"
              onClick={handleNav}
            >
              All Coins
            </Link>
            <Link 
              to="/team" 
              className="block text-lg text-gray-300 hover:text-white py-2"
              onClick={handleNav}
            >
              Team
            </Link>
          </nav>

          <div className="px-4 py-6 border-t border-gray-800">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;