import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({ img, description, github, projectLink }) => {
  return (
    <div className='h-80 w-80 flex justify-start items-center flex-col bg-white/10 rounded-md'>
      <img
        src={img}
        alt='budbud'
        className='object-top h-20 w-full rounded-t-md object-cover'
      />
      <div className='h-44'>
        <p className='p-4 text-sm'>{description}</p>
      </div>
      <div>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          type='button'
          className='bg-green inline-block text-lg rounded-md text-white px-2 p-1 cursor-pointer mx-2'
        >
          <a href={github} target='_blank'>
            Github
          </a>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          type='button'
          className='bg-green inline-block text-lg rounded-md text-white px-2 py-1 cursor-pointer mx-2'
        >
          <a href={projectLink} target='_blank'>
            Project
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default WorkCard;
