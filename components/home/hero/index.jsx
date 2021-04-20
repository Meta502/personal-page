import {useState, useEffect} from 'react';

import AnimatedText from './AnimatedText';

const words = [
  'backend developer',
  'frontend developer',
  'computer science student',
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWordIndex((wordIndex + 1) % words.length);
    }, 4500);
  });

  return (
    <div
      id="hero"
      className="flex flex-col min-h-screen w-full items-center justify-center
                 bg-hero bg-cover"
    >
      <div className="flex">
        <div className="bg-blue-400 mr-2.5 w-0.5" />
        <div className="select-none">
          <h1 className="text-4xl text-white">
            <span className="font-extralight">i&apos;m&nbsp;</span>
            <span>adrian ardizza</span>
          </h1>
          <h1 className="text-xl text-white">
            <AnimatedText words={words} index={wordIndex} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
