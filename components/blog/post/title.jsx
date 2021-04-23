import PropTypes from 'prop-types';
import convertDate from '@components/convertDate';

const Title = ({title, type, date}) => (
  <>
    <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
    <span className="text-gray-500 lowercase">
      {type} • { convertDate(date) }
    </span>
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Title;
