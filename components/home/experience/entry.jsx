import PropTypes from 'prop-types';

const Entry = ({
  entry,
}) => (
  <div className="w-full px-8">
    <div className="flex flex-col md:flex-row justify-start w-full mb-1">
      <div className="mr-6 md:w-3/4">
        <h1 className="text-xl font-medium">{entry.position}</h1>
        <p>{entry.organization} | {entry.period}</p>
        <div className="flex lg:hidden md:w-1/4 select-none pointer-events-none my-1">
          { entry.technologies.map((item) =>
            <img className="w-5 mr-3.5 last:mr-0" key={item} src={item} />,
          )}
        </div>
      </div>
      <div className="hidden lg:flex md:w-1/4 select-none justify-end pointer-events-none my-1">
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
