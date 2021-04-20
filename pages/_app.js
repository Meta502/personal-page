import Navbar from '../components/base/navbar';
import Hero from '../components/home/hero';
import {motion} from 'framer-motion';
import '../styles/globals.css';
import propTypes from 'prop-types';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Navbar />
      <Hero />
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.25}}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired,
};

export default MyApp;
