import {useInView} from 'react-intersection-observer';
import {langEntries, databaseEntries, frontendEntries} from '../config';

const Skills = () => {
  const [ref, inView] = useInView();
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-16 py-8 select-none">
      <div ref={ref}>
        <h1
          className={`inline-flex items-center flex-col md:flex-row transition-all duration-500
                      ${!inView && 'opacity-0'}`}
        >
          <span className="text-2xl md:text-3xl font-semibold">Skills {'\&'} Technologies</span>
          <span className="hidden md:block text-2xl md:text-3xl text-blue-500">&nbsp;|&nbsp;</span>
          <span>what i use to develop</span>
        </h1>
      </div>

      <div
        className="flex flex-col items-center justify-center mt-4"
        ref={ref}
      >
        <div
          className={`flex flex-wrap justify-center mt-4 transition-all duration-1000
                      ${!inView && 'opacity-0'}`}>
          { langEntries.map((item) => (
            <img className="w-8 md:w-11 mx-4 md:mx-8 mt-5" src={item.src} key={item.src} />
          ))}
          { databaseEntries.map((item) => (
            <img className="w-8 md:w-11 mx-4 md:mx-8 mt-5" src={item.src} key={item.src} />
          ))}
          { frontendEntries.map((item) => (
            <img className="w-8 md:w-11 mx-4 md:mx-8 mt-5" src={item.src} key={item.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
