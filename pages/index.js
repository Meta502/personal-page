import Head from 'next/head';
import Scrollbar from '../components/base/scrollbar';
import About from '../components/home/about';
import Skills from '../components/home/skills';
import Experience from '../components/home/experience';
import Projects from '../components/home/projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>adrian.ardizza | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scrollbar />
      <div className="flex justify-center w-full">
        <main className="flex flex-col items-center max-w-6xl">
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
