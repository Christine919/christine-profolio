import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.png'; 
import profile7 from '../assets/profile7.png';
import profile8 from '../assets/profile8.png';
import profile9 from '../assets/profile9.png';
import profile10 from '../assets/profile10.png';

const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [startTyping, setStartTyping] = useState(false); // State to trigger typewriter
  const [greeting, setGreeting] = useState('HELLO!');
  const images1 = [profile1, profile4, profile5, profile7, profile8, profile9];
  const images2 = [profile3, profile10, profile6,profile2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0); // For images2

  const handleClick = () => {
    setGreeting((prevGreeting) => (prevGreeting === 'HELLO!' ? '你好' : 'HELLO!'));
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setStartTyping(true); // Start typing when in view
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Auto-slide effect for images1 every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, [images1.length]);

  // Handlers to go to the next and previous slides for images1 (optional, auto-sliding)
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images1.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images1.length) % images1.length);
  };

  // Handlers for images2 (manual)
  const handleNext2 = () => {
    setCurrentIndex2((currentIndex2 + 1) % images2.length);
  };

  const handlePrev2 = () => {
    setCurrentIndex2((currentIndex2 - 1 + images2.length) % images2.length);
  };

  return (
    <section ref={ref} id="about" className="relative py-20 bg-gray-50 overflow-hidden">
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
            <li
              className="col-span-3 bg-[#211951] flex justify-center items-center p-8 cursor-pointer transition-all duration-300 hover:bg-[#614BDE] hover:scale-105 active:scale-95"
              onClick={handleClick}
            >
              <h1 className="font-modak text-[7.5vh] md:text-[21vh] text-white font-semibold">{greeting}</h1>
            </li>

            {/* Greeting Section */}
            <li className="col-span-2 row-span-2 bg-[#15F5BA] flex justify-center items-center p-8">
              <p className="text-center font-carter text-[2.5vh] md:text-[7vh] text-[#836FFF]">👋 <br />Quick Intro!</p>
            </li>

            {/* Self-description Section */}
            <li className="col-span-2 row-span-3 bg-[#F4FF61] flex justify-center items-center p-8">
              <p className="text-center font-carter text-[2vh] md:text-[3.5vh] text-[#086972]">“I'm a self-taught full-stack developer from Malaysia.”</p>
            </li>

            {/* Profile Image1 Carousel (Auto-Sliding) */}
            <li className="col-span-1 row-span-1 md:col-span-1 md:row-span-3 bg-[#252A34] flex justify-center items-center">
              <div className="w-full h-full">
                <img
                  src={images1[currentIndex]}
                  alt="profile1"
                  className="w-full h-full object-cover shadow-lg transition-opacity duration-1000 ease-in-out"
                />
              </div>
            </li>

            {/* Description Section with Typewriter */}
            <li className="col-span-3 md:col-span-2 bg-white flex justify-center items-center p-8 shadow-lg">
              <motion.div initial="hidden" animate={controls} variants={textVariants} transition={{ duration: 1 }}>
                {startTyping && (
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
                )}
              </motion.div>
            </li>

            {/* Another Profile Image1 Carousel */}
            <li className="col-span-3 md:col-span-3 md:row-span-4 bg-[#252A34] flex justify-center items-center">
            <div className="w-full h-full relative">
                <img
                  src={images2[currentIndex2]}
                  alt="profile2"
                  className="w-full h-full object-cover shadow-lg transition-opacity duration-1000 ease-in-out"
                />
                {/* Navigation Buttons */}
                <button
                  className="absolute top-1/2 left-2 transform -translate-y-1/2  text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                  onClick={handlePrev2}
                  aria-label="Previous Slide"
                >
                  &#10094; {/* Left Arrow */}
                </button>
                <button
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                  onClick={handleNext2}
                  aria-label="Next Slide"
                >
                  &#10095; {/* Right Arrow */}
                </button>
              </div>
            </li>

            {/* Another Title Section */}
            <li className="col-span-1 md:row-span-2 bg-[#211951] flex justify-center items-center p-8">
              <h1 className="font-modak text-[5.5vh] md:text-[24vh] text-white text-center font-semibold">嗨!</h1>
            </li>

            {/* Subheading Section with Typewriter */}
            <li className="col-span-4 md:col-span-2 md:row-span-2 bg-[#836FFF] flex justify-center items-center p-8">
              <motion.div initial="hidden" animate={controls} variants={textVariants} transition={{ duration: 1 }}>
                {startTyping && (
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
                )}
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
