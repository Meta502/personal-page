import {motion} from 'framer-motion';

const cvLink = 'https://drive.google.com/file/d/1BBS2RWfitQq6VOhwzIbKCMW4IupplB3q/view?usp=sharing';
const emailLink = 'mailto:adrian.ardizza@gmail.com';

const About = () => (
  <div className="flex flex-col md:flex-row justify-center my-8">
    <div className="max-w-xs w-72 md:mr-10">
      <img className="rounded-lg" src="/images/me.jpg" />
    </div>
    <div className="m-8 md:m-0 md:w-1/2 self-center">
      <h1 className="text-3xl font-semibold mb-1 select-none">
        About Me.
      </h1>
      <p className="font-light text-justify">
        My name is Adrian Ardizza, an aspiring web developer and computer science student
        currently studying at Fasilkom UI (CHRONOS 2020).
        I have 4 years of experience in web development, with extensive knowledge of
        both frontend (React.js, Vue.js) and backend (Express.js, relational databases,
        document-based databases, Linux System Administration) technologies and
        how to use that knowledge in creating robust and functional applications.
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
