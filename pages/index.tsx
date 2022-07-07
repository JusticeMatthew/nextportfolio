import type { NextPage } from 'next';
import Head from 'next/head';

import { Landing, About, Work, Contact } from '../components';

const Home: NextPage = () => {
  return (
    <div className='container mx-auto px-2 mb-8'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Landing />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
