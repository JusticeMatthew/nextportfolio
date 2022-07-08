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
          <input
            type='text'
            className='py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-green bg-gray-100/10'
            placeholder='Name'
            name='from_name'
            ref={nameEl}
          />
          <input
            type='text'
            className='py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-green bg-gray-100/10'
            placeholder='Email'
            name='reply_to'
            ref={emailEl}
          />
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
