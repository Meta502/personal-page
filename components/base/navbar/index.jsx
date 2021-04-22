import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Item from './MenuItem';

const navAnimation = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      setScrolled(scrolled);
    });
  }, []);

  return (
    <motion.div
      className={`
        transition-all
        fixed
        z-50
        w-full
        py-4
        px-8
        duration-200
        ${scrolled > 200 && 'bg-gray-darker'}
      `}
      initial="hidden"
      animate="show"
      variants={navAnimation}
    >
      <div className="flex justify-between items-center mx-auto text-white">
        <Link href="/">
          <h1 className="text-lg cursor-pointer select-none flex">
            <img src="/icons/logo.png" className="h-6 mr-2" />
            <span className="font-semibold">Adrian</span>Ardizza
          </h1>
        </Link>
        <div className="flex font-light text-md">
          <Item href="/">
            <motion.a
              className="mr-5 cursor-pointer"
              whileHover={{scale: 1.1}}
            >
              home
            </motion.a>
          </Item>
          <Item href="/blog">
            <motion.a
              className="mr-5 cursor-pointer"
              whileHover={{scale: 1.1}}
            >
              blog
            </motion.a>
          </Item>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
