import Head from 'next/head';
import {motion} from 'framer-motion';
import Hero from '../components/home/hero';
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
      <Hero />
      <motion.div
        className="flex flex-col justify-center items-center w-full"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.25}}
      >
        <About />
        <Skills />
        <Experience />
        <Projects />
      </motion.div>
    </div>
  );
}
