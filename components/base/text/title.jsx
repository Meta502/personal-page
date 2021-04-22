import PropTypes from 'prop-types';

const Title = ({title, subtitle, className, inView = true}) => (
  <h1
    className={`
            flex
            items-center
            flex-col 
            md:flex-row 
            transition-all 
            duration-500
            ${!inView && 'opacity-0'}
            ${className}
          `}
  >
    <span className="text-2xl md:text-3xl font-semibold text-gray-500">{title}</span>
    <span className="hidden md:block text-2xl md:text-3xl text-gray-500">&nbsp;|&nbsp;</span>
    <span>{subtitle}</span>
  </h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  inView: PropTypes.bool,
  className: PropTypes.string,
};

export default Title;
