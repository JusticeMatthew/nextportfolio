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
    <div className="w-[350px] h-[475px] bg-[#0f0f0f] border-2 border-black/0 hover:border-green rounded-3xl flex flex-col items-center justify-evenly">
      <img
        src={img}
        alt={alt}
        className="w-24 h-24 rounded-full border-2 border-whitesmoke"
      />
      <h1 className="text-3xl">{name}</h1>
      <div className="flex justify-center items-center w-full">
        {stack.map((tech, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-green/30 w-auto h-6 mx-[6px] rounded border-2 border-green cursor-default"
          >
            <p className="text-[10px] px-2 text-green font-bold">{tech}</p>
          </div>
        ))}
      </div>
      <p className="text-xs mx-8 text-center">{description}</p>
      <div className="flex justify-center items-center">
        <a href={projectLink} target="_blank" className="w-full">
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.1 },
            }}
            type="button"
            className="bg-[#1f1f1f] inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4 border-b-2 border-green"
          >
            Project
          </motion.button>
        </a>
        <a href={github} target="_blank">
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.1 },
            }}
            type="button"
            className="border-[#1f1f1f] bg-black border-2 inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4"
          >
            GitHub
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
