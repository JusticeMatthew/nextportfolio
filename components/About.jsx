import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id='about'
      className='w-full h-[85vh] flex justify-center items-center flex-col'
    >
      <h1 className='text-2xl p-10 px-32 border-b-[1px] mb-16'>About Me</h1>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='w-full h-80 flex justify-evenly flex-row items-center flex-wrap'
      >
        <Image
          src='/matthew.jpg'
          alt='Matthew Justice'
          width='250'
          height='250'
          className='rounded-md'
        />
        <div className='flex justify-center items-center flex-col'>
          <p className='text-center mb-8'>
            My name is Matthew Justice. I'm a US based
            <br /> web developer driven by learning and understanding.
            <br />I am wildly passionate about technology and <br />
            expanding my knowledge of web development.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            type='button'
            className='bg-green inline-block text-lg rounded-md text-white px-8 py-2 cursor-pointer'
          >
            <a
              href='https://docs.google.com/document/d/1-pl74vYx-sBlMQB3HYjuahthGufq4oMP7H0imVhgztI/edit?usp=sharing'
              target='_blank'
            >
              Resume
            </a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
