import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

import {
  LinkedinFilled,
  GithubFilled,
  CheckSquareFilled,
  CloseSquareFilled,
} from '@ant-design/icons';

const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [value, setValue] = useState({
    message: '',
    from_name: '',
    reply_to: '',
  });

  const validInputs = !value.message || !value.reply_to || !value.from_name;

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        'service_y6nk62r',
        'template_x4txktb',
        form.current,
        'user_vWTAWBnX7NXh9Uus1LXRE',
      )
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
        setValue({
          message: '',
          from_name: '',
          reply_to: '',
        });
      })
      .catch((err) => {
        console.log(err);
        setFailure(true);
        setTimeout(() => setFailure(false), 10000);
      });
  };

  return (
    <div
      id="contact"
      className="w-full h-[100vh] flex justify-end items-center flex-col"
    >
      <h1 className="text-2xl mb-4 ">Contact</h1>
      <div className="w-12 h-[4px] bg-green rounded mb-10 border-2 border-green" />
      <div className="lg:w-[550px] md:w-1/2 w-3/4 h-80">
        <motion.form
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          id="messageForm"
          className="w-full mt-10 h-[300px]"
          ref={form}
          autoComplete="nope"
        >
          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea
              className="p-4 outline-none w-full rounded-md focus:ring-2 focus:ring-green bg-gray-100/10 h-44 placeholder:text-sm"
              placeholder="Message"
              name="message"
              value={value.message}
              onChange={handleChange}
              autoComplete="nope"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                id="floating_name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100/10 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
                placeholder=" "
                name="from_name"
                value={value.from_name}
                onChange={handleChange}
                autoComplete="nope"
              />
              <label
                htmlFor="floating_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100/10 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
                placeholder=" "
                name="reply_to"
                value={value.reply_to}
                onChange={handleChange}
                autoComplete="nope"
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 cursor-text"
              >
                Email
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-center items-center">
            <motion.button
              whileHover={{
                scale: !validInputs ? 1.1 : 1,
                transition: { duration: 0.1 },
              }}
              type="button"
              onClick={sendEmail}
              disabled={validInputs}
              className={
                !validInputs
                  ? 'bg-green text-black px-6 py-2 m-4 rounded-sm font-bold text-md hover:border-green hover:text-white hover:bg-black hover:outline outline-green cursor-pointer'
                  : 'bg-zinc-400 text-black px-6 py-2 m-4 rounded-sm font-bold text-md outline-green cursor-not-allowed disabled:opacity-50'
              }
            >
              {!validInputs ? 'Send' : 'Missing Fields'}
            </motion.button>
          </div>
        </motion.form>
      </div>
      <div className="md:mt-48 mt-40 block md:mb-20 mb-20">
        <a href="https://github.com/JusticeMatthew" target="_blank">
          <GithubFilled
            style={{ fontSize: '60px' }}
            className="mr-10 hover:text-green"
          />
        </a>
        <a href="https://www.linkedin.com/in/justicematthew/" target="_blank">
          <LinkedinFilled
            style={{ fontSize: '60px' }}
            className="hover:text-green"
          />
        </a>
      </div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1.0 }}
        className={`${
          success ? 'visible' : 'invisible'
        } bg-[#262626] text-white text-sm flex items-center px-2 pr-4 absolute mb-[187px] md:mb-[216px] lg:mb-[280px]`}
        role="alert"
      >
        <CheckSquareFilled className="text-4xl p-1 pb-[7px] mr-2 text-green" />
        <p>Message sent</p>
      </motion.div>
      <div
        className={`${
          failure ? 'visible' : 'invisible'
        } bg-gray-100/10 text-white text-sm flex items-center px-2 pr-4 absolute`}
        role="alert"
      >
        <CloseSquareFilled className="text-4xl p-1 md:pb-[7px] mr-2 text-red-500" />
        <p className="text-center text-xs">
          There was a problem. Please contact me directly at
          matthewajustice@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
