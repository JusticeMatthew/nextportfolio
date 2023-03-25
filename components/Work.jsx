import React from 'react';
import { motion } from 'framer-motion';

import WorkCard from './WorkCard';
import projects from '../data/projects';

const Work = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-[100vh] flex justify-center items-around"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="flex justify-center items-center flex-wrap gap-10 my-32 overflow-hidden w-full"
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
        <div className="absolute w-full h-full overflow-hidden flex items-center justify-center flex-col z-0 cursor-default invisible lg:visible lg:max-[1146px]:invisible">
          <p className="text-[22rem] opacity-[0.04] text-gray-500 font-bold">
            PROJECTS
          </p>
          <p className="text-[22rem] opacity-[0.04] text-gray-500 font-bold">
            PROJECTS
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
