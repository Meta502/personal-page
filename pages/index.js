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
        <div className="flex items-center justify-center mt-8">
          <div className="max-w-xs w-64 mr-8">
            <img className="rounded-lg" src="https://via.placeholder.com/400x400" />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-semibold">About Me.</h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit,
              velit euismod elementum efficitur, arcu leo imperdiet nisi, sed imperdiet felis lacus
              et purus. Morbi velit turpis, rhoncus eget lectus ut, accumsan molestie risus.
              Donec eu libero non mi iaculis pretium. Vestibulum urna ligula, blandit at sodales et,
              molestie id dui. Fusce bibendum sapien sit amet elit tempor facilisis. Ut sed ante sed
               lacus laoreet euismod et ac magna. Sed neque tellus, ultrices sed consectetur a,
               eleifend vitae neque.
            </p>
            <div className="flex mt-5">
              <a href="#" className="bg-blue-500 text-white px-4 py-2.5 rounded-md mr-4 font-light">
                Curriculum Vitae
              </a>
              <a
                href="#"
                className="border border-blue-600 text-black px-4 py-2.5 rounded-md
                           font-light"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
