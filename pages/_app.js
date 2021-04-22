import {ContentfulClient, ContentfulProvider} from 'react-contentful';
import Navbar from '../components/base/navbar';
import Hero from '../components/home/hero';
import {motion} from 'framer-motion';
import '../styles/globals.css';
import propTypes from 'prop-types';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
});

function MyApp({Component, pageProps}) {
  return (
    <ContentfulProvider client={contentfulClient}>
      <Navbar />
      <Hero />
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.25}}
      >
        <Component {...pageProps} />
      </motion.div>
    </ContentfulProvider>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired,
};

export default MyApp;
