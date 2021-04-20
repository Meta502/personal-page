import Navbar from '../components/base/navbar';
import '../styles/globals.css';
import propTypes from 'prop-types';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.object.isRequired,
};

export default MyApp;
