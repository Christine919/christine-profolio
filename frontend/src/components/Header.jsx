import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from "../assets/logo.png"; 

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track the scroll position

  const handleClick = () => setNav(!nav);

  const handleScroll = () => {
    setScrollY(window.pageYOffset); // Update scrollY with current scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen to scroll events
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Set the background opacity based on the scroll position
  const bgOpacity = scrollY > 100 ? Math.min(1, scrollY / 300) : 0; // Change opacity between 0 and 1

  return (
    <header
      className="fixed w-full shadow-md z-50 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`, // Gradually make background white
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8" /> 
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-6 h-6" /> : <XIcon className="w-6 h-6" />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {nav && (
        <nav
          className="md:hidden shadow-md transition-all duration-500 ease-in-out"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`, // Apply the same fade effect for mobile menu
          }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link to="hero" smooth={true} duration={500} onClick={handleClick} className="cursor-pointer hover:text-blue-500">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} onClick={handleClick} className="cursor-pointer hover:text-blue-500">
              About
            </Link>
            <Link to="projects" smooth={true} duration={500} onClick={handleClick} className="cursor-pointer hover:text-blue-500">
              Projects
            </Link>
            <Link to="skills" smooth={true} duration={500} onClick={handleClick} className="cursor-pointer hover:text-blue-500">
              Skills
            </Link>
            <Link to="contact" smooth={true} duration={500} onClick={handleClick} className="cursor-pointer hover:text-blue-500">
              Contact
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
