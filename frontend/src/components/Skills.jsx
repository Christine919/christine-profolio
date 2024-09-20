// src/components/SkillsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'CSS', level: 75 },
  // Add more skills as needed
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">My Skills</h3>
        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-blue-500 h-4 rounded"
            >
              <span className="hidden">{skill.name}</span>
            </motion.div>
          ))}
          <ul className="mt-6 space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
