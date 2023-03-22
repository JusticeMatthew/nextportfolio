import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Events } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';

import styles from '../constants/bmStyles';

const Header = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});
  }, []);

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-md w-full fixed py-4 px-8 z-10 flex sm:justify-evenly justify-between items-center"
    >
      <div className="w-[950px] flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} offset={-100}>
          <span className="cursor-pointer font-bold text-4xl uppercase">
            <span className="text-green">M</span>Justice
          </span>
        </Link>

        <div className="sm:hidden self-center">
          <Menu
            right
            styles={styles}
            width={280}
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            {['home', 'projects', 'about', 'contact'].map((item, index) => (
              <div
                key={index}
                className="pl-[45px] flex flex-col justify-center items-center"
              >
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={closeSideBar}
                >
                  {item}
                </Link>
              </div>
            ))}
          </Menu>
        </div>

        <div className="sm:flex justify-between items-center float-right uppercase sm:visible hidden">
          {['home', 'projects', 'about', 'contact'].map((item, index) => (
            <div
              key={index}
              className="pl-8 flex flex-col justify-center items-center hover:text-green transition ease duration-500 cursor-pointer"
            >
              <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={500}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
