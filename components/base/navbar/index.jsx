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

  useEffect(() => {
    console.log(scrolled);
  }, [scrolled]);

  return (
    <motion.div
      className={`
        transition-all
        fixed
        z-50
        w-full
        py-4
        px-8
        ${scrolled > 50 && 'bg-gray-dark'}
      `}
      initial="hidden"
      animate="show"
      variants={navAnimation}
    >
      <div className="flex justify-between items-center mx-auto text-white">
        <Link href="/">
          <h1 className="text-lg font-semibold cursor-pointer select-none">
            adrian.ardizza
          </h1>
        </Link>
        <div className="flex font-light text-md">
          <Item href="/">
            <a className="mr-5">home</a>
          </Item>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
