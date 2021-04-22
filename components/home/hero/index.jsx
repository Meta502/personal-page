import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {heroWords} from '../config';

import AnimatedText from './AnimatedText';

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((wordIndex + 1) % heroWords.length);
    }, 4000);
    return () => clearInterval(timer);
  });

  return (
    <div
      id="hero"
      className="flex flex-col relative h-screen w-full items-center justify-center
                 bg-hero bg-cover"
    >
      <div
        className={`
          absolute
          z-0
          w-full 
          h-full
          bg-hero-pattern
          bg-repeat
          animate-top-left-linear-infinite
          opacity-35
        `}
      />
      <motion.div
        className="flex z-10"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}>
        <div className="bg-blue-400 mr-2.5 w-0.5" />
        <div className="select-none">
          <h1 className="text-4xl md:text-5xl text-white">
            <span className="font-extralight">i&apos;m&nbsp;</span>
            <span>adrian ardizza</span>
          </h1>
          <h1 className="text-xl md:text-2xl text-white">
            <AnimatedText words={heroWords} index={wordIndex} />
          </h1>
          <div className="flex mt-2">
            <motion.a
              href="#about"
              className="border border-white text-white px-5 py-2 rounded-md"
              whileHover={{scale: 1.03}}
            >
              Find out more &nbsp;▼
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
