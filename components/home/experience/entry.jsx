import PropTypes from 'prop-types';

const Entry = ({
  entry,
}) => (
  <div className="w-full px-8">
    <div className="flex flex-col md:flex-row justify-start w-full mb-1">
      <div className="mr-6 md:w-3/4">
        <h1 className="text-xl font-medium">{entry.position}</h1>
        <p>{entry.organization} | {entry.period}</p>
      </div>
      <div className="hidden md:flex md:w-1/4 justify-end select-none pointer-events-none">
        { entry.technologies.map((item) =>
          <img className="w-6 mr-3.5 last:mr-0" key={item} src={item} />,
        )}
      </div>
    </div>
    <p>
      <ul className="list-disc list-outside ml-4">
        {entry.activities.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </p>
  </div>
);

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default Entry;
