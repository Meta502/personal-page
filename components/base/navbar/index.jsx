import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
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
  const [height, setHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      setScrolled(scrolled);
    });
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <motion.div
      className={`
        fixed
        z-50
        w-full
        py-4
        px-8
        ${(scrolled > height - 150 || router.pathname != '/') && 'bg-gray-darker'}
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
              whileHover={{y: -2}}
            >
              home
            </motion.a>
          </Item>
          <Item href="/blog">
            <motion.a
              className="mr-5 cursor-pointer"
              whileHover={{y: -2}}
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
