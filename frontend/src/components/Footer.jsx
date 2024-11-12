// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaInstagram , FaWhatsapp  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-6 shadow-inner">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Christine919" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://www.instagram.com/c_323_w/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://wa.link/uyev4d" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
        </div>
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Christine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
