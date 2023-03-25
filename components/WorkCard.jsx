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
    <div className="w-[350px] h-[435px] bg-[#0f0f0f] border-[1px] border-black/0 rounded-3xl flex flex-col items-center justify-between bg-papyrus bg-repeat z-50 relative">
      <div className="flex justify-center items-center flex-col">
        <img
          src={img}
          alt={alt}
          className="w-24 h-24 rounded-full border-2 border-gray-400 my-8"
        />
        <h1 className="text-3xl mb-8">{name}</h1>
        <p className="text-xs mx-8 mb-4 text-center">{description}</p>
        <div className="flex justify-center items-end w-auto h-auto flex-col bottom absolute top-6 right-[-15px]">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-black w-auto h-6 my-[2px] rounded border-2 border-black cursor-default"
            >
              <p className="text-[10px] px-2 text-green font-bold">{tech}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-8">
        <a href={projectLink} target="_blank" className="w-full">
          <motion.button
            whileHover={{
              y: -3,
              transition: { duration: 0.1 },
            }}
            type="button"
            className="bg-midGray inline-block text-md rounded-sm text-whitesmoke px-3 p-2 cursor-pointer mx-4 border-2 border-b-green border-midGray"
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
            className="border-midGray bg-black border-2 inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4 hover:border-b-green"
          >
            GitHub
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
