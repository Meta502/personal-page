import {useContentful} from 'react-contentful';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import Title from '@components/base/text/title';
import Entry from './entry';

const Experience = () => {
  const [ref] = useInView();
  const {data, loading} = useContentful({
    contentType: 'experience',
    query: {
      'order': 'fields.id',
    },
  });

  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-16 w-full select-none">
      <div className="mb-10">
        <div
          className="inline-flex flex-col"
          ref={ref}
        >
          <Title title='experience' subtitle='organizations i have contributed to' inView={true} />
          {/* <div className="h-0.5 bg-blue-400 mt-2" /> */}
        </div>
      </div>
      <motion.div
        className={`transition-all grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10`}
        ref={ref}
      >
        {!loading && data?.items.map((item) => (
          <div
            className={`transition-all duration-1000`}
            key={item.sys.id}
          >
            <Entry entry={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
