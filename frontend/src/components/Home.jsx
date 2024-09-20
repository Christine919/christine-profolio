import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full opacity-30" // Background image
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white p-4 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">Hello, I'm Christine</h2>
        <p className="text-xl md:text-2xl mb-6">A Full-Stack Developer</p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          View My Work
        </a>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-lg"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
