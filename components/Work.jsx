import React from 'react';
import { motion } from 'framer-motion';

import WorkCard from './WorkCard';
import projects from '../data/projects';

const Work = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-[100vh] flex justify-center items-center flex-col mb-32"
    >
      <h1 className="text-2xl mb-4 mt-20">Projects</h1>
      <div className="w-12 h-[4px] bg-green rounded mb-20 border-2 border-green" />
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center flex-wrap gap-10"
      >
        {projects.map((project, index) => (
          <WorkCard
            key={index}
            img={project.img}
            description={project.description}
            github={project.github}
            projectLink={project.projectLink}
            name={project.name}
            alt={project.alt}
            stack={project.stack}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
