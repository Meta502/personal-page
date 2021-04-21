import {useInView} from 'react-intersection-observer';
import Title from '@components/base/text/title';
import Entry from './entry';

const projectEntries = [
  {
    id: 'PROJECT-1',
    title: 'CSUI2020 - Angkatan Website',
    description: `
      The CSUI2020 website was made as a joint collaboration between myself and CSUI2020's early
      design and karya angkatan team. The website functions as CSUI2020's "yearbook", with the
      details and majors of students in CSUI2020. This site was submitted as part of CSUI2020's 
      joint PMB assignment and was built using Vue.
    `,
    projectLink: 'https://csui2020.github.io/',
    sourceLink: 'https://github.com/Meta1807/csui2020',
    image: '/images/csui2020.png',
  },
  {
    id: 'PROJECT-2',
    title: 'CHRONOS Assignment Tracker',
    description: `
      The CHRONOS Assignment Tracker was a hobby project that i built whilst experimenting with
      React and Tailwind CSS. The website essentially functions as a frontend renderer for
      the CHRONOS Academic Division's assignment reminder spreadsheet, with the site handling
      the rendering of assignments, deadline countdowns and filtering of assignments based on major.
    `,
    projectLink: 'https://chronos2020.github.io/ais',
    sourceLink: 'https://github.com/chronos2020/ais',
    image: '/images/chronos-ais.png',
  },
  {
    id: 'PROJECT-3',
    title: 'Pemira IKM UI 2020 E-Voting',
    description: `
      The Pemira IKM UI 2020 E-Voting Website was used as the primary method of voting for the
      UI campus-wide organizational elections in 2020. The site's frontend was built using
      React.js by my seniors, with the backend being built in the most part by me using Express.js
      along with PostgreSQL and Prisma 2.
    `,
    projectLink: 'https://pemira.ui.ac.id',
    image: '/images/pemira.jpg',
  },
];

const Projects = () => {
  const [ref] = useInView();

  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-16 w-full select-none">
      <div ref={ref}>
        <Title title='projects' subtitle="what i've worked on" inView={true} className="mb-5" />
      </div>
      <div className="w-full">
        {projectEntries.map((item) => (
          <Entry
            title={item.title}
            key={item.id}
            description={item.description}
            projectLink={item.projectLink}
            sourceLink={item.sourceLink}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
