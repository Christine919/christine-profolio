// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Christine</h1>
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
        <nav className="md:hidden bg-white shadow-md">
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
