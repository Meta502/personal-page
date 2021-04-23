/* eslint-disable react/jsx-no-comment-textnodes */
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import Link from 'next/link';
import convertDate from '@components/convertDate';

const Card = ({
  id,
  postType,
  date,
  title,
  description,
  tags,
  cover,
}) => (
  <Link href={`/blog/${id}`}>
    <motion.div
      className={`
        flex 
        flex-col
        justify-start
        items-start 
        w-full
        h-full
        my-2
        max-w-sm
        shadow-lg
        border
        rounded-lg
        select-none
        cursor-pointer
      `}
      whileHover={{y: -3}}
      transition={{duration: 0.25}}
    >
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img className="rounded-t-lg w-full object-cover" src={cover} />
      </div>

      <div className="py-4 px-6 h-full w-full">
        <p className="text-sm text-blue-dark font-medium">
          { postType } // { convertDate(date) }
        </p>
        <h1 className="text-lg font-bold text-blue-darker">{title}</h1>
        <p className="font-light mb-2.5">
          {description}
        </p>
        <div className="flex flex-wrap justify-self-end">
          { tags?.map((item) => (
            <p
              className="text-xs text-white bg-gray-400 rounded-full py-1 px-3 mr-2 mb-2"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  postType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cover: PropTypes.string,
  tags: PropTypes.array,
};

export default Card;
export {convertDate};
