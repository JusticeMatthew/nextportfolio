import type { NextPage } from 'next';
import Head from 'next/head';

import { Landing, About, Work, Contact } from '../components';

const Home: NextPage = () => {
  return (
    <div className="mx-auto">
      <Head>
        <title>Matthew Justice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <Landing />
        <Work />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
