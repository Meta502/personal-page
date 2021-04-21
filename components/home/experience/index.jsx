import Entry from './entry';

const entries = [
  {
    id: 'ENTRY-1',
    position: 'Web Developer',
    organization: 'EDUCARE 2021',
    period: 'Nov 2020 - Mar 2021',
    technologies: [
      '/icons/javascript.svg',
      '/icons/react.svg',
      '/icons/next-dot-js.svg',
    ],
    activities: [
      'Helped in implementing features and designs requested by other divisions',
      'Created a CAS SSO authentication implementation for use in Next.js together with a senior',
    ],
  },
  {
    id: 'ENTRY-2',
    position: 'Backend Engineer',
    organization: 'Pemira IKM UI E-Voting',
    period: 'Mar 2020 - Dec 2020',
    technologies: [
      '/icons/javascript.svg',
      '/icons/postgresql.svg',
      '/icons/prisma.svg',
    ],
    activities: [
      'Implemented backend logic for the Pemira IKM UI E-Voting website',
      'Involved in designing and managing the Pemira database schema',
      'Deployed and maintained the project to DSTI-hosted servers',
    ],
  },
];

const Experience = () => (
  <div className="flex flex-col justify-center items-center mt-6 mb-12 w-full select-none">
    <div className="mb-8">
      <div className="inline-flex flex-col">
        <h1 className="inline-flex items-center flex-col md:flex-row">
          <span className="text-2xl md:text-3xl font-semibold">Experience</span>
          <span className="hidden md:block text-2xl md:text-3xl text-blue-500">&nbsp;|&nbsp;</span>
          <span>organizations i have contributed to</span>
        </h1>
        {/* <div className="h-0.5 bg-blue-400 mt-2" /> */}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {entries.map((item) => (
        <>
          <Entry key={item.id} entry={item} />
        </>
      ))}
    </div>
  </div>
);

export default Experience;
