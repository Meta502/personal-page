import PropTypes from 'prop-types';

const Technologies = ({array, className}) => (
  <div className={'md:w-1/4 select-none pointer-events-none my-1 ' + className}>
    { array.map((item) =>
      <img className="w-5 mr-3.5 last:mr-0" key={item} src={item} />,
    )}
  </div>
);

Technologies.propTypes = {
  array: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Technologies;
