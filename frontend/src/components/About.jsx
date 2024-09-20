// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center  px-6">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={profile} alt="Profile" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            I'm Christine, a self-taught full-stack developer from Malaysia. With over 4 years of experience in digital marketing and website management, I have honed my skills in creating visually appealing, user-friendly websites that drive results.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            My journey into web development began with a passion for design and a desire to understand the technology behind the scenes. I love transforming ideas into interactive experiences that engage users and solve real-world problems. 
          </p><br />
          <p className="text-gray-700 text-sm md:text-base">
          Whether it's coding a new feature, optimizing performance, or collaborating with clients, I approach every project with enthusiasm and a commitment to excellence.
          </p><br />
          <p className="text-gray-700 text-sm md:text-base">
            I am constantly learning and adapting to new technologies to stay ahead in this fast-paced field. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
