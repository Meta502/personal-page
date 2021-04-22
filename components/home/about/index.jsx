import {motion} from 'framer-motion';
import {heroSocial} from '../config';
import Skills from '@components/home/skills';
import Title from '@components/base/text/title';

const cvLink = 'https://drive.google.com/file/d/1BBS2RWfitQq6VOhwzIbKCMW4IupplB3q/view?usp=sharing';
const emailLink = 'mailto:adrian.ardizza@gmail.com';

const About = () => (
  <>
    <div id="about" />
    <div
      className="flex flex-col items-center lg:items-start lg:grid grid-cols-4 my-8 select-none
                max-w-6xl"
    >
      <div className="max-w-xs w-64 md:mr-10">
        <img className="rounded-full" src="/images/me.jpg" />
      </div>
      <div className="col-span-3 flex flex-col justify-center m-8 md:m-0 lg:pt-8">
        <Title title='about me' subtitle='full-stack web developer' className="mb-1" />
        <p className="font-light text-justify">
        My name is Adrian Ardizza, an aspiring web developer and computer science student
        currently studying at Fasilkom UI. I have 4 years of experience in web development,
        with extensive knowledge in using both frontend and backend technologies to build robust
        and functional applications.
        </p>
        <div className="flex justify-center lg:justify-start my-6 md:my-5 opacity-80">
          {
            heroSocial.map((item) => {
              return (
                <motion.a
                  href={item.href}
                  key={item.href}
                  target="_blank" rel="noreferrer"
                  whileHover={{scale: 1.075}}
                >
                  <img src={item.src} className="w-8 mr-4 md:w-7" />
                </motion.a>
              );
            })
          }
        </div>
        <div className="flex justify-center md:justify-start">
          <motion.a
            href={cvLink}
            target="_blank"
            className="bg-blue-dark text-white px-6 py-2.5 rounded-md mr-4 font-light"
            whileHover={{scale: 1.03}}
          >
            Download CV
          </motion.a>
          <motion.a
            href={emailLink}
            target="_blank"
            className="border border-blue-dark text-black px-6 py-2.5 rounded-md
                     font-light"
            whileHover={{scale: 1.03}}
          >
            Email Me
          </motion.a>
        </div>
        {/* <Skills /> */}
      </div>
    </div>
  </>
);

export default About;
