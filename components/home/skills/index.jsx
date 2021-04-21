import {useInView} from 'react-intersection-observer';
import {langEntries, databaseEntries, frontendEntries} from '../config';
import Title from '@components/base/text/title';

const skillEntries = [...langEntries, ...databaseEntries, ...frontendEntries];

const Skills = () => {
  const [ref] = useInView();
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-16 py-8 select-none">
      <div ref={ref}>
        <Title title='skills & technologies' subtitle='what i use to develop' inView={true} />
      </div>

      <div
        className="flex flex-col items-center justify-center mt-4"
        ref={ref}
      >
        <div
          className={`
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            gap-16
            mt-4
            transition-all
            duration-1000
          `}
        >
          { skillEntries.map((item) => (
            <div className="flex flex-col justify-center items-center" key={item.name}>
              <img className="w-12 md:w-16 mx-4 md:mx-8 mt-5 mb-2" src={item.src} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
