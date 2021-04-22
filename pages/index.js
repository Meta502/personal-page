import Head from 'next/head';
import Scrollbar from '../components/base/scrollbar';
import About from '../components/home/about';
import Skills from '@components/home/skills';
import Experience from '../components/home/experience';
import Projects from '../components/home/projects';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>adrian.ardizza | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scrollbar />
      <div className="flex flex-col justify-center items-center w-full">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
