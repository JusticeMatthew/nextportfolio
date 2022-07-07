import React from 'react';
import { motion } from 'framer-motion';

const hello = [
  { letter: 'h', y: [-100, 0], duration: 0.3 },
  { letter: 'e', y: [-200, 0], duration: 0.5 },
  { letter: 'l', y: [-150, 0], duration: 0.7 },
  { letter: 'l', y: [-450, 0], duration: 0.4 },
  { letter: 'o', y: [-600, 0], duration: 0.3 },
  { letter: ' ', y: [-220, 0], duration: 0.2 },
  { letter: 't', y: [-190, 0], duration: 0.8 },
  { letter: 'h', y: [-110, 0], duration: 0.5 },
  { letter: 'e', y: [-500, 0], duration: 0.9 },
  { letter: 'r', y: [-340, 0], duration: 0.4 },
  { letter: 'e', y: [-420, 0], duration: 0.6 },
];

const Landing = () => {
  return (
    <div id='home' className='flex justify-center items-center flex-col'>
      <div className='w-full h-[40vh] flex justify-center items-end'>
        {hello.map((item, index) => (
          <motion.span
            key={index}
            animate={{ y: item.y, color: '#15db95' }}
            transition={{ duration: item.duration }}
            className='uppercase text-4xl px-1'
          >
            {item.letter}
          </motion.span>
        ))}
      </div>
      <div className='h-[40vh] flex justify-center items-center flex-col'>
        <motion.h1
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-8xl mb-10'
        >
          Im Matthew
        </motion.h1>
        <motion.p
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-lg uppercase'
        >
          Web Developer
        </motion.p>
      </div>
    </div>
  );
};

export default Landing;
