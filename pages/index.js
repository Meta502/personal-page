import Head from 'next/head';
import About from '../components/home/about';
import Skills from '../components/home/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian Ardizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <About />
        <Skills />
      </main>
    </div>
  );
}
