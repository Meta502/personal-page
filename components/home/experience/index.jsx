import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import Title from '@components/base/text/title';
import Entry from './entry';

const entries = [
  {
    id: 'ENTRY-1',
    position: 'Software Engineering',
    organization: 'COMPFEST 13',
    period: 'Mar 2021 - Present',
    technologies: [
      '/icons/ts-node.svg',
      '/icons/react.svg',
      '/icons/next-dot-js.svg',
      '/icons/hasura.svg',
    ],
    activities: [
      'Currently involved as a staff member for COMPFEST 13\'s IT Dev division',
    ],
  },
  {
    id: 'ENTRY-2',
    position: 'Web Developer',
    organization: 'EDUCARE 2021',
    period: 'Nov 2020 - Mar 2021',
    technologies: [
      '/icons/javascript.svg',
      '/icons/react.svg',
      '/icons/next-dot-js.svg',
      '/icons/firebase.svg',
    ],
    activities: [
      'Helped in implementing features and designs requested by other divisions',
      'Created a CAS SSO authentication implementation for use in Next.js together with a senior',
    ],
  },
  {
    id: 'ENTRY-3',
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
      'Deployed and maintained the project on DSTI UI-hosted servers',
    ],
  },
];

const Experience = () => {
  const [ref] = useInView();

  return <div className="flex flex-col justify-center items-center mt-6 mb-16 w-full select-none">
    <div className="mb-10">
      <div
        className="inline-flex flex-col"
        ref={ref}
      >
        <Title title='experience' subtitle='organizations i have contributed to' inView={true} />
        {/* <div className="h-0.5 bg-blue-400 mt-2" /> */}
      </div>
    </div>
    <motion.div
      className={`transition-all grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10`}
      ref={ref}
    >
      {entries.map((item) => (
        <div
          className={`transition-all duration-1000`}
          key={item.id}
        >
          <Entry entry={item} />
        </div>
      ))}
    </motion.div>
  </div>;
};

export default Experience;
