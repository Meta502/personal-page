import {useContentful} from 'react-contentful';
import {useInView} from 'react-intersection-observer';
import Title from '@components/base/text/title';

const Skills = () => {
  const [ref] = useInView();
  const {data, loading} = useContentful({
    contentType: 'skills',
    query: {
      'order': 'fields.id',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-16 py-8
                    select-none">
      <div ref={ref}>
        <Title title='skills & technologies' subtitle='what i use to develop' inView={true} />
      </div>

      <div
        className="flex flex-col items-start justify-start mt-4"
        ref={ref}
      >
        <div
          className={`
            grid
            auto-cols-auto
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-5
            gap-16
            mt-4
            transition-all
            duration-1000
          `}
        >
          { !loading && data?.items.map((item) => (
            <div
              className="flex flex-col justify-center items-center"
              key={item.fields.id}>
              <img
                className="w-12 md:w-16 mx-4 md:mx-8 mt-5 mb-2 opacity-80"
                src={item.fields.image.fields.file.url}
              />
              <p className="font-light">{item.fields.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
