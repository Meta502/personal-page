import {motion} from 'framer-motion';
import Title from '@components/base/text/title';

const cvLink = 'https://drive.google.com/file/d/1BBS2RWfitQq6VOhwzIbKCMW4IupplB3q/view?usp=sharing';
const emailLink = 'mailto:adrian.ardizza@gmail.com';

const About = () => (
  <div className="flex flex-col md:flex-row items-center justify-center my-8 select-none">
    <div className="max-w-xs w-64 md:mr-10">
      <img className="rounded-lg" src="/images/me.jpg" />
    </div>
    <div className="m-8 md:m-0 sm:max-w-62.5">
      <Title title='about me' subtitle='full-stack web developer' className="mb-1" />
      <p className="font-light text-justify">
        My name is Adrian Ardizza, an aspiring web developer and computer science student
        currently studying at Fasilkom UI. I have 4 years of experience in web development,
        with extensive knowledge in using both frontend and backend technologies to build robust
        and functional applications.
      </p>
      <div className="flex mt-5">
        <motion.a
          href={cvLink}
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2.5 rounded-md mr-4 font-light"
          whileHover={{scale: 1.03}}
        >
          Curriculum Vitae
        </motion.a>
        <motion.a
          href={emailLink}
          target="_blank"
          className="border border-blue-600 text-black px-4 py-2.5 rounded-md
                     font-light"
          whileHover={{scale: 1.03}}
        >
          Email Me
        </motion.a>
      </div>
    </div>
  </div>
);

export default About;
