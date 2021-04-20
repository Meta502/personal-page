import Head from 'next/head';
import Hero from '../components/home/hero';
import About from '../components/home/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian Ardizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
