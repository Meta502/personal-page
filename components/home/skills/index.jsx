const langEntries = [
  {
    src: '/icons/javascript.svg',
  },
  {
    src: '/icons/ts-node.svg',
  },
  {
    src: '/icons/java.svg',
  },
  {
    src: '/icons/python.svg',
  },
];

const databaseEntries = [
  {
    src: '/icons/postgresql.svg',
  },
  {
    src: '/icons/mysql.svg',
  },
  {
    src: '/icons/firebase.svg',
  },
  {
    src: '/icons/prisma.svg',
  },
  {
    src: '/icons/graphql.svg',
  },
];

const frontendEntries = [
  {
    src: '/icons/react.svg',
  },
  {
    src: '/icons/next-dot-js.svg',
  },
  {
    src: '/icons/vue-dot-js.svg',
  },
];


const Skills = () => (
  <div className="flex flex-col items-center justify-center my-16 py-8 select-none">
    <h1 className="text-2xl md:text-4xl font-semibold">
      Skills and Technologies.
    </h1>
    <div className="flex flex-col items-center justify-center mt-4">
      <p className="text-lg">Programming Languages</p>
      <div className="flex mt-4">
        { langEntries.map((item) => (
          <img className="w-8 md:w-11 mx-4 md:mx-10" src={item.src} key={item.src} />
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-6">
      <p className="text-lg">Database</p>
      <div className="flex mt-4">
        { databaseEntries.map((item) => (
          <img className="w-8 md:w-11 mx-4 md:mx-6" src={item.src} key={item.src} />
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-6">
      <p className="text-lg">Frontend</p>
      <div className="flex mt-4">
        { frontendEntries.map((item) => (
          <img className="w-8 md:w-11 mx-4 md:mx-16" src={item.src} key={item.src} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
