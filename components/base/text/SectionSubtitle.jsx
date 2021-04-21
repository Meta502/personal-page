import PropTypes from 'prop-types';

const SectionSubtitle = ({text}) => (
  <p>{text}</p>
);

SectionSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionSubtitle;
