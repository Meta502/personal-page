import {useContentful} from 'react-contentful';
import Title from '@components/base/text/title';
import Card from '@components/blog/card';

const Blog = () => {
  const {data, loading} = useContentful({
    contentType: 'posts',
    query: {
      'order': 'sys.createdAt',
    },
  });

  return (
    <div className="flex flex-col items-center min-h-screen py-24">
      <Title
        title="blog"
        subtitle="a summary of my random thoughts"
        className="mb-8"
      />
      <div className="grid grid-cols-1 gap-16 max-w-7xl px-5 md:px-0 md:grid-cols-2 xl:grid-cols-3">
        {!loading && data?.items.map((item, index) => (
          <Card
            key={item.sys.id}
            id={item.sys.id}
            date={item.sys.createdAt}
            postType={item.fields.type}
            title={item.fields.title}
            description={item.fields.description}
            tags={item.fields.tags}
            cover={item.fields.cover?.fields.file.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
