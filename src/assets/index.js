import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';

//Hero session
export const heroIcons = [
    {
        icon: <GithubLineIcon />,
        link: 'https://github.com/kellyklabunde'
    },
    {
        icon: <LinkedinLineIcon />, 
        link: 'https://www.linkedin.com/in/kelly-klabunde/'
    },
];
//end of Hero session

//About session
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';
import { Tilt_Neon } from 'next/font/google';

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftLineIcon />;

export const aboutText =
 'Hi, I am Kelly! I am a software engineer, marathon runner, coffee lover and very recently also a snowboarder that writes frontend development for a living. My passion lies on creating user-friendly and appealing web applications. Proficient in JavaScript, TypeScript, React, Vue and responsive design. I am a fast learner and a team player, and I am always looking for new challenges.';

//Experience session
export const experienceData = [
    {
        year: '2021',
        title: 'Full Stack Web Development Bootcamp  ',
        education: 'SPICED Academy - Berlin, Germany', 
        experience: ['12-week full-time course covering the following topics:', 'Deep understanding of HTML, CSS and animations', 'JavaScript loops, callback functions and asynchronous coding. Clean and efficient JS code.',
            'React functions, hooks, custom hooks and nested components to create structured and efficient web applications.',
            'Use of Next.js to create highly scalable web applications.',
            'Build robust backend using API routes and PostgreSQL database.',
        ],
    },
    {
        year: '2021 - 2022',
        title: 'Junior Frontend Developer',
        education: 'It Solutions LTDA - Blumenau, Brazil (Remote)', 
        experience: ['Development of components for web applications using HTML, CSS, JavaScript and React.', 
            'Implementation of a responsive design for user-friendly application. Use of React custom Hooks and reusable components for efficient and structured applications.'
        ],
    },
    {
        year: '2022 - 2025',
        title: 'Frontend Developer',
        education: 'REHUB FORGE GmbH - Cologne, Germany (Remote)', 
        experience: ['Development and implementation of a Web App consistently translating designs from Figma into responsive interfaces. Responsible for developing the Component Library for the project, ensuring reusability and maintainability of components.', 
            'Actively contributing in an Agile environment, working in sprints and Scrum methodology to ensure timely delivery of high-quality software features.'
        ],
    },
]
//end of Experience session

//Skills session
export const skillsData = [
    {
        name: 'CSS',
        icon: '/skills/css.png',
    },
    {
        name: 'HTML',
        icon: '/skills/html.png',
    },
    {
        name: 'JavaScript',
        icon: '/skills/js.png',
    },
    {
        name: 'React',
        icon: '/skills/react.png',
    },
    {
        name: 'Next.js',
        icon: '/skills/nextjs.png',
    },
    {
        name: 'Node.js',
        icon: '/skills/nodejs.png',
    },
    {
        name: 'Figma',
        icon: '/skills/figma.png',
    },
    {
        name: 'Framer',
        icon: '/skills/framer.png',
    },
    {
        name: 'GitHub',
        icon: '/skills/github.png',
    },
    {
        name: 'Tailwind CSS',
        icon: '/skills/tailwind.png',
    },
    {
        name: 'Three.js',
        icon: '/skills/threejs.png',
    },
    {
        name: 'TypeScript',
        icon: '/skills/ts.png',
    },
    {
        name: 'Vite',
        icon: '/skills/vite.png',
    },
    {
        name: 'VS Code',
        icon: '/skills/vscode.png',
    },
    
]
//end of Skills session

//Projects session
export const projectsData = [
    {
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus in ult',
        url: '/projects/guideme.png',
        tech: ['React', 'Tailwind CSS'],
    },
    {
        name: 'Project 2',
        description: 'haadguiewffwe wwwe ',
        url: '/projects/naturegermany.png',
        tech: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
        name: 'Project 3',
        description: 'haadguiewffwe wwwe ',
        url: '/projects/tkarquitetura.png',
        tech: ['Tailwind CSS', 'Vue'],
    },
]

export const projectsButton = [
    'All',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Vue',
    'HTML',
    'Next.js',
    'JavaScript',
]
//end of Projects session

//Navbar session
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon';
export const copyRightIcon = <CopyrightLineIcon />;

import Home2LineIcon from 'remixicon-react/Home2LineIcon';
import UserLineIcon from 'remixicon-react/UserLineIcon';
import RoadMapLineIcon from 'remixicon-react/RoadMapLineIcon';
import CodeBoxLineIcon from 'remixicon-react/CodeBoxLineIcon';
import ComputerLineIcon from 'remixicon-react/ComputerLineIcon';
import MailLineIcon from 'remixicon-react/MailLineIcon';

export const navbarData = [
    {
        id: 'home',
        name: 'Home',
        icon: <Home2LineIcon />,
    },
    {
        id: 'about',
        name: 'About',
        icon: <UserLineIcon />,
    },
    {
        id: 'experience',
        name: 'MyRoad',
        icon: <RoadMapLineIcon />,
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: <CodeBoxLineIcon />,
    },
    {
        id: 'projects',
        name: 'Projects',
        icon: <ComputerLineIcon />,
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: <MailLineIcon />,
    },
];
//end of Navbar session

//Toggle 

import MoonClearFillIcon from 'remixicon-react/MoonClearFillIcon';
import SunFillIcon from 'remixicon-react/SunFillIcon';

export const moonIcon = <MoonClearFillIcon />;
export const sunIcon = <SunFillIcon />;