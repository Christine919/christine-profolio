// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Replace with your image path

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={profileImage} alt="Profile" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700 mb-4">
            [Your brief introduction goes here. Share your background, passion for web development, and any other relevant details.]
          </p>
          <p className="text-gray-700">
            [Additional information about your experience, projects, or interests.]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
