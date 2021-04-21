import {motion, AnimatePresence} from 'framer-motion';
import PropTypes from 'prop-types';

const sentence = {
  hidden: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.025,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({
  words, index,
}) => (
  <motion.span
    initial="hidden"
    animate="visible"
    className="font-light"
    variants={sentence}
    key={words[index]}
  >
    {
      words[index].split('').map((char) => {
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })
    }
  </motion.span>
);

AnimatedText.propTypes = {
  words: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default AnimatedText;
