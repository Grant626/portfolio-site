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
  robot,
  fau,
  natours,
  thewildoasis,
  odyssey,
  thewildoasiswebsite,
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
    title: 'Backend Developer',
    icon: mobile,
  },
  {
    title: 'Robotics',
    icon: backend,
  },
  {
    title: 'IT Specialist',
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
      'Check in and assist clients, finding the best possible repair solution to meet their needs.',
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
  },
];

const projects = [
  {
    name: 'Autonomous Power Substation Robot',
    description:
      'Autonomous robot to navigate power substations for FPL and utilize a thermal camera to detect overheating transformers and send data to a monitoring server. I built the frontend and algorithm to extract/send tempurature data from thermal camera using propietary SDK. Built as part of team of 4 for senior design project.',
    tags: [
      {
        name: 'python/flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'ros2',
        color: 'green-text-gradient',
      },
      {
        name: 'c++',
        color: 'pink-text-gradient',
      },
    ],
    image: robot,
    source_code_link: 'https://github.com/Grant626/Temperature-Detection',
  },
  {
    name: 'The Wild Oasis Frontend',
    description:
      'This is a full-stack application build as part of the Ultimate React Course on Udemy. The application is a frontend, customer-facing UI for cabin booking and cabin information. Utilizes React, Next.JS, NextAuth and TailwindCSS, connected to a Supabase backend for data fetching and authentication, deployed using Vercel.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
    ],
    image: thewildoasiswebsite,
    source_code_link: 'https://github.com/Grant626/the-wild-oasis-website',
  },
  {
    name: 'The Wild Oasis Backend',
    description:
      'This is a full-stack application build as part of the Ultimate React Course on Udemy. The application is a backend UI for a cabin booking agency to manage cabins, bookings and guests. Utilizes React, React Router, React Query, TailwindCSS, Next.JS, connected to a Supabase backend for data fetching and authentication, and deployed via Netlify.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'react query',
        color: 'pink-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
    ],
    image: thewildoasis,
    source_code_link: 'https://github.com/Grant626/the-wild-oasis',
  },
  {
    name: 'Natours',
    description:
      'Mock tour scheduling site with client facing frontend using HTML/CSS with Pug templates, Javascript and backend API using NodeJS/Express with MondoDB for tour/user-data/authentication. Developed alongside Udemy Node.JS course with additional features',
    tags: [
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'blue-text-gradient',
      },
    ],
    image: natours,
    source_code_link: 'https://github.com/Grant626/natours',
  },
  {
    name: 'Odyssey (WIP)',
    description:
      'This is a full-stack application that allows users travel plan by selecting their destination and dates,  providing preferences for points of interest like the hotel, lunch, activity, etc. Odyssey will then find the most suitable places based on the preferences, utilizing the Yelp Fusion API to find them. The user may also refresh recommendations based on the pre-existing preferences.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'yelpAPI',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
    ],
    image: odyssey,
    source_code_link: 'https://github.com/Grant626/Odyssey-App',
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
