import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({
  img,
  description,
  github,
  projectLink,
  name,
  alt,
  stack,
}) => {
  return (
    <div className="w-[350px] h-[435px] bg-[#0f0f0f] border-[1px] border-black/0 rounded-3xl flex flex-col items-center justify-between bg-papyrus bg-repeat relative z-[1]">
      <div className="flex justify-center items-center flex-col">
        <img
          src={img}
          alt={alt}
          className="w-24 h-24 rounded-full border-2 border-gray-400 my-8"
        />
        <h1 className="text-3xl mb-3">{name}</h1>
        <div className="flex justify-center items-center w-auto h-auto mb-4">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-midGray w-auto h-6 rounded border-2 border-white/50 mx-1 cursor-default"
            >
              <p className="text-[9px] px-1 text-white/50 tracking-wider">
                {tech}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs mx-8 mb-4 text-center">{description}</p>
      </div>
      <div className="flex justify-center items-center mb-8">
        <a href={projectLink} target="_blank" className="w-full">
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.2 },
            }}
            type="button"
            className="bg-green inline-block font-bold text-md rounded-sm text-black px-3 p-2 cursor-pointer mx-4 border-2 border-green"
          >
            Project
          </motion.button>
        </a>
        <a href={github} target="_blank">
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.2 },
            }}
            type="button"
            className="border-midGray bg-black border-2 inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4 "
          >
            GitHub
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
