// src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid'; // Ensure Heroicons is installed

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show after 300px of scrolling
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-1 md:p-3 bg-transparent border-2 border-gray-500 text-gray-500 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-none transition-colors duration-300"

          aria-label="Back to Top"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
