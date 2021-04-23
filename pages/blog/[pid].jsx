import {useEffect} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useContentful} from 'react-contentful';
import postOptions from '@components/blog/post';
import convertDate from '@components/convertDate';

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
    <div className="flex flex-col items-center min-h-screen py-24">
      { fetched &&
      <>
        <div className="w-full self-center mb-6 max-w-6xl">
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-cover rounded-lg" src={data.fields?.cover.fields.file.url} />
          </div>
        </div>
        <div className="flex flex-col max-w-3xl w-full">
          <div className="mb-8">
            <div className="flex self-start mb-1">
              <Link href="/blog">
                <motion.p
                  className="cursor-pointer accelerated"
                  whileHover={{x: -2}}
                  transition={{duration: 0.25}}
                >
                  blog
                </motion.p>
              </Link>
              &nbsp;//&nbsp;
              <span className="text-blue-dark font-medium">{data.fields?.title.toLowerCase()}</span>
            </div>
            <h1 className="text-4xl font-bold">{data.fields?.title}</h1>
            <span className="text-gray-500 lowercase">
              {data.fields?.type} • { convertDate(data.sys?.createdAt) }
            </span>
            {documentToReactComponents(data.fields?.content, postOptions)}
          </div>
        </div>
      </>
      }
    </div>
  );
};

export default Post;
