import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const messageEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'service_4vtbmyk',
        'template_x4txktb',
        '#messageForm',
        'user_vWTAWBnX7NXh9Uus1LXRE',
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      id='contact'
      className='w-full h-[85vh] flex justify-center items-center flex-col'
    >
      <h1 className='text-2xl p-10 px-32 border-b-[1px] mb-16'>Contact Me</h1>
      <motion.form
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        id='messageForm'
        className='w-1/4'
      >
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea
            className='p-4 outline-none w-full rounded-md focus:ring-2 focus:ring-green bg-gray-100/10 h-44'
            placeholder='Message'
            name='message'
            ref={messageEl}
          />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
          <div class='relative'>
            <input
              type='text'
              id='floating_outlined'
              className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100/10 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              name='from_name'
              ref={nameEl}
            />
            <label
              for='floating_outlined'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
            >
              Name
            </label>
          </div>
          <div class='relative'>
            <input
              type='text'
              id='floating_outlined'
              className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100/10 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              name='reply_to'
              ref={emailEl}
            />
            <label
              for='floating_outlined'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
            >
              Email
            </label>
          </div>
        </div>

        <div className='mt-8 flex justify-center items-center'>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            type='button'
            onClick={sendEmail}
            className='bg-green inline-block text-lg rounded-md text-white px-8 py-3 cursor-pointer'
          >
            Send
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
