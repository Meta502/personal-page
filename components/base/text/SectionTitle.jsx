import PropTypes from 'prop-types';

const SectionTitle = ({title}) => (
  <h1 className="text-xl font-medium">{title}</h1>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
