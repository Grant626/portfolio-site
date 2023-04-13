import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  swift,
  cpp,
  ubif,
  techy,
  restech,
  threejs,
  personalpage,
  minesweeper,
  libster,
  fau
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Swift Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Student',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'CPP',
    icon: cpp,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Owner',
    company_name: 'ResurrecTech',
    icon: restech,
    iconBg: '#000000',
    date: 'March 2023 - Current',
    points: [
      'Manage repair solutions and device sales for clients in person and online.',
      'Schedule and fulfil mobile repair appointments.',
      'Develop and maintain internal POS system to keep track of repairs and sales.',
    ],
  },
  {
    title: 'Senior Technician',
    company_name: 'Techy',
    icon: techy,
    iconBg: '#E6DEDD',
    date: 'August 2022 - Current',
    points: [
      'Oversee store operations including work orders, inventory and staffing.',
      'Conduct hardware/software repairs and diagnostics on varying electronic devices like computers/smartphones and consoles.',
    ],
  },
  {
    title: 'Technician',
    company_name: 'uBreakiFix',
    icon: ubif,
    iconBg: '#000000',
    date: 'June 2020 - July 2022',
    points: [
      'Conduct hardware/software repairs and diagnostics on varying electronic devices like computers/smartphones and consoles.',
      'Check in and assist clients, finding the best possible repair solution to meet their needs.'
    ],
  },
];

const education = [
  {
    name: 'Florida Atlantic University',
    degree: 'B.S. Computer Science',
    date: 'Dec 2023',
    location: 'Boca Raton, FL',
    gpa: '3.58',
    image: fau,
  }
];

const projects = [
  {
    name: 'Libster',
    description:
      'Library browsing application on iOS for storing and reading free books online through a search system, user-friendly UI, and account system.',
    tags: [
      {
        name: 'swift',
        color: 'blue-text-gradient',
      },
      {
        name: 'xcode',
        color: 'green-text-gradient',
      },
      {
        name: 'parsedb',
        color: 'pink-text-gradient',
      },
    ],
    image: libster,
    source_code_link: 'https://github.com/Grant626/Libster',
  },
  {
    name: 'Minesweeper',
    description:
      'Fully-functioning clone of the popular game Minesweeper featuring custom board/difficulty specification, random tile generation, and a user-friendly custom UI.',
    tags: [
      {
        name: 'c++',
        color: 'blue-text-gradient',
      },
      {
        name: 'sfml',
        color: 'green-text-gradient',
      },
      {
        name: 'visualstudio',
        color: 'pink-text-gradient',
      },
    ],
    image: minesweeper,
    source_code_link: 'https://github.com/Grant626/minesweeper',
  },
  {
    name: 'Personal Website',
    description:
      'This website!\n A static personal website for showcasing my work and experience in a unique way. This site was built primarily with ReactJS, TailwindCSS and ThreeJS.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: personalpage,
    source_code_link: 'https://github.com/Grant626/portfolio-site',
  },
];

export { services, technologies, experiences, education, projects };
