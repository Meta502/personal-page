import PropTypes from 'prop-types';
import SectionTitle from '@components/base/text/SectionTitle';
import SectionSubtitle from '@components/base/text/SectionSubtitle';
import Technologies from './technology';

const Entry = ({
  entry,
}) => (
  <div className="w-full px-8">
    <div className="flex flex-col md:flex-row justify-start w-full mb-1">
      <div className="mr-6 md:w-3/4">
        <SectionTitle title={entry.fields.position} />
        <SectionSubtitle text={`${entry.fields.organization} | ${entry.fields.period}`} />
        <Technologies array={entry.fields.technologies} className="flex lg:hidden" />
      </div>
      <Technologies array={entry.fields.technologies} className="hidden lg:flex justify-end" />
    </div>
    <p>
      <ul className="list-disc list-outside ml-4">
        {entry.fields.activities.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </p>
  </div>
);

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default Entry;
