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
      'order': '-fields.id',
    },
  });

  return (
    <div className="bg-gray-200 w-full overflow-visible mb-8">
      <div className="flex flex-col justify-center items-center py-16 w-full select-none
                    max-w-6xl mx-auto">
        <div className="mb-10">
          <div
            className="inline-flex flex-col"
            ref={ref}
          >
            <Title
              title='experiences'
              subtitle='organizations i have contributed to'
              inView={true}
            />
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
    </div>
  );
};

export default Experience;
