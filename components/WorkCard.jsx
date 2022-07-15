import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({ img, description, github, projectLink, name }) => {
  return (
    <div className='h-64 w-[800px] flex justify-start items-center bg-white/10 rounded-sm bg-papyrus my-10'>
      <img
        src={img}
        alt='budbud'
        className='object-top h-80 w-80 rounded-sm object-cover'
      />
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl'>{name}</h1>
        <div className='h-32'>
          <p className='p-4 text-sm mx-10 text-gray-300 text-center'>
            {description}
          </p>
        </div>
        <div>
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.3 },
            }}
            type='button'
            className='border-black bg-[#1f1f1f] inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4'
          >
            <a href={projectLink} target='_blank'>
              Project
            </a>
          </motion.button>
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.3 },
            }}
            type='button'
            className='border-[#1f1f1f] bg-black border-2 inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4'
          >
            <a href={github} target='_blank'>
              Github
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
