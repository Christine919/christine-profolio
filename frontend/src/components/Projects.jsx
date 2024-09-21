import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; 
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';
import project_4 from '../assets/project_4.png';

const projects = [
  {
    title: 'Luxestay Hotel',
    description: 'A modern and elegant hotel booking platform with a sleek design, offering a seamless user experience for travelers.',
    image: project_4,
    link: 'https://luxestay-ten.vercel.app/',
  },
  {
    title: 'Customer Management System',
    description: 'This is a CMS web for managing customers, orders, appointments, and more for beauty businesses.',
    image: project_1,
    link: 'https://customer-management-system-livid.vercel.app/',
  },
  {
    title: 'Memory Melody ',
    description: 'This is a web-based memory game where players challenge their ability to remember and repeat musical patterns.',
    image: project_2,
    link: 'https://christine919.github.io/memory-melody/',
  },
  {
    title: 'Note Keeper',
    description: 'A simple note-keeping app built using React and Material-UI. This app allows users to create, view, and delete notes.',
    image: project_3,
    link: 'https://christine919.github.io/note-keeper/',
  },
];

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for mobile
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true, // Center the slides
    centerPadding: '50px', // No padding for mobile
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '20px', // Add some space between cards
        },
      },
      {
        breakpoint: 1280, // Laptop and larger screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '30px', // Extra space between cards
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-5xl font-bold text-white mb-9">MY PROJETCS</h3>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mx-4"> {/* Add margin around each card */}
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;
