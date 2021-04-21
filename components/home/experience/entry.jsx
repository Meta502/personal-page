import PropTypes from 'prop-types';

const Entry = ({
  entry,
}) => (
  <div className="w-full lg:max-w-1/2 px-3">
    <div className="flex flex-col md:flex-row justify-start w-full">
      <div className="mr-6 md:w-3/4">
        <h1 className="text-xl font-medium">{entry.position}</h1>
        <p>{entry.organization} | {entry.period}</p>
      </div>
      <div className="flex md:w-1/4 justify-center select-none pointer-events-none">
        { entry.technologies.map((item) =>
          <img className="w-6 mr-3.5" key={item} src={item} />,
        )}
      </div>
    </div>
    <p>
      <ul className="list-disc list-inside">
        {entry.activities.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </p>
  </div>
);

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default Entry;
