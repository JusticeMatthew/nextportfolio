import React from 'react';
import { motion } from 'framer-motion';

import WorkCard from './WorkCard';
import projects from '../data/projects';

const Work = () => {
  return (
    <div
      id='work'
      className='w-full h-[85vh] flex justify-center items-center flex-col'
    >
      <h1 className='text-2xl p-10 px-32 border-b-[1px] mb-24'>My Projects</h1>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='grid grid-cols-2 gap-4 text-center'
      >
        {projects.map((project, index) => (
          <WorkCard
            key={index}
            img={project.img}
            description={project.description}
            github={project.github}
            projectLink={project.projectLink}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
