import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Events } from 'react-scroll';

const Header = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});
  }, []);

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='backdrop-blur-md w-full fixed p-8 z-10'
    >
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        <span className='cursor-pointer font-bold text-4xl uppercase'>
          <span className='text-green'>M.</span>Justice
        </span>
      </Link>

      <div className='flex justify-between items-center self-end float-right uppercase'>
        {['home', 'about', 'work', 'contact'].map((item, index) => (
          <div
            key={index}
            className='px-2 flex flex-col justify-center items-center hover:text-green transition ease duration-500 cursor-pointer'
          >
            <Link
              activeClass='active'
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;
