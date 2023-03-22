import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center items-center flex-col bg-papyrus bg-repeat h-[100vh] lg:pt-64 pb-72 pt-32"
    >
      <h1 className="text-2xl mb-4">About Me</h1>
      <div className="w-12 h-[4px] bg-green rounded mb-20 border-2 border-green" />
      <div className="flex justify-center items-center flex-col">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="lg:w-[850px] h-80 flex justify-between w-full lg:flex-row items-center flex-col"
        >
          <div className="w-[300px] h-[300px] bg-green z-0 rounded-full">
            <Image
              src="/matthew.jpg"
              alt="Matthew Justice"
              width="250"
              height="250"
              className="rounded-md z-50"
            />
          </div>
          <div className="flex justify-center items-center flex-col lg:mt-0 mt-12">
            <p className="text-center mb-8 scale-90 sm:scale-100">
              My name is Matthew Justice. I'm a US based
              <br /> web developer driven by learning and understanding.
              <br />I am wildly passionate about technology and <br />
              expanding my knowledge of web development.
            </p>
            <a
              href="https://docs.google.com/document/d/1-pl74vYx-sBlMQB3HYjuahthGufq4oMP7H0imVhgztI/edit?usp=sharing"
              target="_blank"
            >
              <button className="bg-green text-black px-6 py-2 m-4 rounded-sm font-bold text-md hover:border-green hover:text-white hover:bg-black  hover:outline outline-green cursor-pointer">
                Resume
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
