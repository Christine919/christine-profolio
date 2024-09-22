import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'CSS', level: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-5xl font-bold text-black mb-9">MY SKILLS</h3>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-lg font-semibold text-gray-600">{skill.level}%</span>
              </div>

              <div className="bg-gray-300 rounded h-4 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="bg-blue-500 h-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
