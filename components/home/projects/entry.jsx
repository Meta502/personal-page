import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import SectionTitle from '@components/base/text/SectionTitle';

const Entry = ({title, description, projectLink, sourceLink, image}) => (
  <div
    className="flex flex-col-reverse md:flex-row justify-center items-center mb-14 gap-x-8 mx-8
              md:mx-0"
  >
    <div className="max-w-sm w-full mb-4 md:mb-0">
      <img className="rounded-lg border border-gray-300" src={image} />
    </div>
    <div className="max-w-sm md:max-w-62.5">
      <SectionTitle title={title} />
      <p className="text-justify mb-4 mr-4">
        {description}
      </p>
      <div className="flex justify-center md:justify-start">
        { projectLink &&
          <motion.a
            href={projectLink}
            target="_blank"
            className="bg-blue-dark text-white px-4 py-2.5 rounded-md font-light mr-4"
            whileHover={{scale: 1.03}}
          >
            Visit Project
          </motion.a>
        }
        { sourceLink &&
          <motion.a
            href={sourceLink}
            target="_blank"
            className="border border-blue-dark px-4 py-2.5 rounded-md font-light"
            whileHover={{scale: 1.03}}
          >
            Source Code
          </motion.a>
        }
      </div>
    </div>
  </div>
);

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  sourceLink: PropTypes.string,
};

export default Entry;
