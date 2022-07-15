import React from 'react';
import { motion } from 'framer-motion';

import WorkCard from './WorkCard';
import projects from '../data/projects';

const Work = () => {
  return (
    <div
      id='work'
      className='w-full h-[100vh] flex justify-center items-center flex-col mt-4'
    >
      <h1 className='text-2xl mb-4 mt-20'>Projects</h1>
      <div className='w-12 h-2 bg-green rounded mb-24' />
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='flex justify-center items-center flex-col gap-10'
      >
        {projects.map((project, index) => (
          <WorkCard
            key={index}
            img={project.img}
            description={project.description}
            github={project.github}
            projectLink={project.projectLink}
            name={project.name}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
