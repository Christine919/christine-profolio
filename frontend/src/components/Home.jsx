// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white p-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Your Name</h2>
        <p className="text-xl md:text-2xl">A Full-Stack Developer</p>
        <a href="#projects" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
