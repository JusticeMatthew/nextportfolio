import Head from 'next/head';
import { Landing, About, Work, Contact } from '../containers';

export default function Home() {
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
}
