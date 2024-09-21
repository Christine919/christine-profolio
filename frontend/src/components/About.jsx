import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import profile1 from '../assets/profile1.png';
import profile3 from '../assets/profile3.png';

const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showAdditional, setShowAdditional] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      const timer = setTimeout(() => setShowAdditional(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grid grid-cols-3 grid-rows-10 gap-x-96 opacity-35">
          {Array(100).fill('ABOUTME').map((text, index) => (
            <span key={index} className="text-7xl font-poppins font-semibold text-indigo-200 md:text-9xl">
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <div className="flex flex-col md:flex-row items-center">
          <ul className="grid gap-2 grid-cols-5 auto-rows-[14vh]">
            {/* Title Section */}
            <li className="col-span-3 bg-[#211951] flex justify-center items-center p-8">
              <h1 className="font-modak text-[7.5vh] md:text-[21vh] text-white font-semibold">HELLO!</h1>
            </li>

            {/* Greeting Section */}
            <li className="col-span-2 row-span-2 bg-[#15F5BA] flex justify-center items-center p-8">
              <p className="text-center font-carter text-[2.5vh] md:text-[7vh] text-[#836FFF]">👋 <br />Little introduction!</p>
            </li>

              {/* Self-description Section */}
              <li className="col-span-2 row-span-3 bg-[#F4FF61] flex justify-center items-center p-8">
              <p className="text-center font-carter text-[2vh] md:text-[3.5vh] text-[#086972]">“I'm a self-taught full-stack developer from Malaysia.”</p>
            </li>

             {/* Profile Image Section */}
             <li className="col-span-1 row-span-1 bg-[#252A34] flex justify-center items-center ">
              <img src={profile1} alt="Christine" className="w-full h-full object-cover  shadow-lg" />
            </li>

            {/* Description Section */}
            <li className="col-span-3 bg-white flex justify-center items-center p-8 shadow-lg">
              <motion.div initial="hidden" animate="visible" variants={textVariants} transition={{ duration: 1 }}>
                <p className="text-[#211951] text-sm sm:text-base font-poppins">
                  <Typewriter
                    words={['My journey into web development began with a passion for design and a desire to understand the technology behind the scenes.']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </motion.div>
            </li>

            {/* Profile Image Section */}
            <li className="col-span-3 row-span-4 bg-[#252A34] flex justify-center items-center ">
              <img src={profile3} alt="Christine" className="w-full h-full shadow-lg object-cover" />
            </li>

               {/* Title Section */}
               <li className="col-span-1 bg-[#211951] flex justify-center items-center p-8">
              <h1 className="font-modak text-[5.5vh] md:text-[16vh] text-white text-centre font-semibold">嗨!</h1>
            </li>

            {/* Subheading Section */}
            <li className="col-span-2 row-span-2 bg-[#836FFF] flex justify-center items-center p-8">
            <motion.div initial="hidden" animate="visible" variants={textVariants} transition={{ duration: 1 }}>
                <p className="text-white text-sm sm:text-base font-poppins">
                  <Typewriter
                    words={['A lover of the outdoors, I enjoy exploring nature and observing the fascinating behaviors of female creatures.']}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
