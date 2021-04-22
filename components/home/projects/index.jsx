import {useContentful} from 'react-contentful';
import {useInView} from 'react-intersection-observer';
import Title from '@components/base/text/title';
import Entry from './entry';

const Projects = () => {
  const [ref] = useInView();
  const {data, loading} = useContentful({
    contentType: 'projects',
    query: {
      'order': 'fields.id',
    },
  });

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-16 w-full select-none">
      <div ref={ref}>
        <Title title='projects' subtitle="what i've worked on" inView={true} className="mb-8" />
      </div>
      <div className="w-full">
        {!loading && data?.items.map((item) => (
          <Entry
            title={item.fields.title}
            key={item.fields.id}
            description={item.fields.description}
            projectLink={item.fields.projectLink}
            sourceLink={item.fields.sourceLink}
            image={item.fields.projectPhotos[0].fields.file.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
