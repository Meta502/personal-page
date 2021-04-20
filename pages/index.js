import Head from 'next/head';
import Hero from '../components/home/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian Ardizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
