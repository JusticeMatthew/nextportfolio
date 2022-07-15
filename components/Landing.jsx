import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const hello = [
  { letter: 'h', y: [-100, 0], duration: 0.3 },
  { letter: 'e', y: [-200, 0], duration: 0.5 },
  { letter: 'l', y: [-150, 0], duration: 0.7 },
  { letter: 'l', y: [-450, 0], duration: 0.4 },
  { letter: 'o', y: [-600, 0], duration: 0.3 },
  { letter: '_', y: [-220, 0], duration: 0.2 },
  { letter: 't', y: [-190, 0], duration: 0.8 },
  { letter: 'h', y: [-110, 0], duration: 0.5 },
  { letter: 'e', y: [-500, 0], duration: 0.9 },
  { letter: 'r', y: [-340, 0], duration: 0.4 },
  { letter: 'e', y: [-420, 0], duration: 0.6 },
];

const Landing = () => {
  return (
    <div
      id='home'
      className='flex justify-center items-center flex-col pt-64 bg-papyrus bg-repeat h-[100vh] pb-72'
    >
      <div className='w-full flex justify-center items-center'>
        {hello.map((item, index) => (
          <motion.span
            key={index}
            animate={{ y: item.y, color: '#15db95' }}
            transition={{ duration: item.duration }}
            className='uppercase text-2xl'
          >
            {item.letter}
          </motion.span>
        ))}
      </div>
      <div className='mt-10 flex justify-center items-center flex-col'>
        <motion.h1
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-6xl text-center mb-6 font-semibold'
        >
          Lets build a functional
          <br /> modern user experience
        </motion.h1>
        <motion.p
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-sm text-center text-gray-300'
        >
          Hello I'm Matthew. I'm a full stack developer and I love
          <br /> building beautiful user-centric web experiences.
        </motion.p>
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className='flex justify-center items-center mt-16'
        >
          <Link
            activeClass='active'
            to='work'
            spy={true}
            smooth={true}
            duration={500}
            className='bg-green text-black px-6 py-2 m-4 rounded-sm font-bold text-md hover:border-green hover:text-white hover:bg-black transition ease-in-out duration-300 hover:outline outline-green cursor-pointer'
          >
            My Work
          </Link>

          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            className='hover:bg-green hover:text-black transition duration-300 border-b-2 border-green px-6 py-2 rounded-sm m-4 text-md cursor-pointer'
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
