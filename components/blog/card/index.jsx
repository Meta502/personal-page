/* eslint-disable react/jsx-no-comment-textnodes */
import PropTypes from 'prop-types';

const convertDate = (date) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const Card = ({
  postType,
  date,
  title,
  description,
  tags,
}) => (
  <div
    className={`
      flex 
      flex-col 
      justify-start
      items-center 
      w-full 
      my-2
      max-w-sm
      md:max-w-sm
      shadow-lg
      border
      rounded-lg
      select-none
    `}
  >
    <img className="w-full rounded-t-lg" src="https://via.placeholder.com/600x400" />
    <div className="py-4 px-6">
      <p className="text-sm text-blue-dark font-medium">
        { postType } // { convertDate(date) }
      </p>
      <h1 className="text-lg font-bold text-blue-darker">{title}</h1>
      <p className="font-light mb-2.5">
        {description}
      </p>
      <div className="flex">
        { tags?.map((item) => (
          <p
            className="text-xs text-white bg-gray-400 rounded-full py-1 px-3 mr-2"
            key={item}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  postType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array,
};

export default Card;
