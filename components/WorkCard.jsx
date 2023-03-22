import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({
  img,
  description,
  github,
  projectLink,
  name,
  name2,
  alt,
}) => {
  return (
    <div className="h-72 md:w-[775px] w-[350px] flex justify-start items-center bg-white/10 rounded-sm bg-papyrus my-10">
      <img
        src={img}
        alt={alt}
        className="object-top md:h-80 md:w-80 h-24 w-24 rounded-sm object-cover brightness-50 hover:brightness-100 transition duration-150 ml-[-20px] mt-[-20px] self-start absolute md:static"
      />
      <div className="flex md:justify-center justify-evenly items-center flex-col sm:h-72 md:h-72 h-72">
        <div className="text-center">
          <h1 className="text-2xl">{name}</h1>
          <h1 className="text-2xl">{name2}</h1>
        </div>
        <div className="md:h-32 h-24">
          <p className="md:p-4 p-2 md:text-sm text-xs md:mx-10 mx-4 text-gray-300 text-center">
            {description}
          </p>
        </div>
        <div>
          <a href={projectLink} target="_blank">
            <motion.button
              whileHover={{
                y: -3,
                transition: { duration: 0.1 },
              }}
              type="button"
              className="border-black bg-[#1f1f1f] inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4 hover:border-solid hover:border-b-2 hover:border-green"
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
              className="border-[#1f1f1f] bg-black border-2 inline-block text-md rounded-sm text-white px-3 p-2 cursor-pointer mx-4 hover:border-solid hover:border-b-2 hover:border-b-green"
            >
              GitHub
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
