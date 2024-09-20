import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="h-96"> {/* Set the height to maintain aspect ratio */}
      <img
        className="w-full h-full object-contain"
        src={project.image}
        alt={project.title}
        style={{ maxHeight: '600px', maxWidth: '400px' }} // Ensure max size is 400x600
      />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{project.title}</div>
      <p className="text-gray-700 text-base">{project.description}</p>
    </div>
    <div className="px-6 pb-4">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
  
  );
};

export default ProjectCard;
