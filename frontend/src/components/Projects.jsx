// src/components/ProjectSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // We'll create this component next

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: 'https://via.placeholder.com/400',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: 'https://via.placeholder.com/400',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">My Projects</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
