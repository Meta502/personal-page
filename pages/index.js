import Head from 'next/head';
import About from '../components/home/about';
import Skills from '../components/home/skills';
import Experience from '../components/home/experience';

export default function Home() {
  return (
    <div>
      <Head>
        <title>adrian.ardizza | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center w-full">
        <main className="flex flex-col items-center max-w-6xl">
          <About />
          <Skills />
          <Experience />
        </main>
      </div>
    </div>
  );
}
