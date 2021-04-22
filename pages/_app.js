import {ContentfulClient, ContentfulProvider} from 'react-contentful';
import Navbar from '@components/base/navbar';
import Footer from '@components/base/footer';
import Scrollbar from '../components/base/scrollbar';
import '../styles/globals.css';
import propTypes from 'prop-types';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
});

function MyApp({Component, pageProps}) {
  return (
    <ContentfulProvider client={contentfulClient}>
      <Scrollbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ContentfulProvider>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired,
};

export default MyApp;
