import {useEffect} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {useRouter} from 'next/router';
import {useContentful} from 'react-contentful';
import postOptions from '@components/blog/post';
import Breadcrumb from '@components/blog/post/breadcrumb';
import Title from '@components/blog/post/title';

const Post = () => {
  const router = useRouter();
  const {pid} = router.query;
  const {data, fetched} = useContentful({
    contentType: 'posts',
    query: {
      'order': 'sys.createdAt',
    },
    id: pid,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col items-center min-h-screen py-24 mx-5">
      { fetched &&
      <>
        <div className="w-full self-center mb-6 max-w-6xl">
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-cover rounded-lg" src={data.fields?.cover.fields.file.url} />
          </div>
        </div>
        <div className="flex flex-col max-w-3xl w-full">
          <div className="mb-8">
            <Breadcrumb title={data.fields?.title} />
            <Title title={data.fields?.title} type={data.fields?.type} date={data.sys?.createdAt} />
            {documentToReactComponents(data.fields?.content, postOptions)}
          </div>
        </div>
      </>
      }
    </div>
  );
};

export default Post;
