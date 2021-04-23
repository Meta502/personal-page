import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import Link from 'next/link';

const Breadcrumb = ({title}) => (
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
    <span className="text-blue-dark font-medium">{title.toLowerCase()}</span>
  </div>
);

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Breadcrumb;
