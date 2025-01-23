import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';

//Hero session
export const heroIcons = [
    <GithubLineIcon />,
    <LinkedinLineIcon />,
];
//end of Hero session

//About session
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon';
import { Tilt_Neon } from 'next/font/google';

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftLineIcon />;

export const aboutText = 'I am a software engineer with a passion for building web applications. I have experience in front-end and back-end development, as well as in the design and implementation of relational databases. I am a fast learner and a team player, and I am always looking for new challenges.';
//end of About session

//Experience session
export const experienceData = [
    {
        year: '1',
        title: 'Foundation and Basics',
        education: 'education', 
        experience: ['experiencegtrge', 'tttttttttttttttttttttttttttt'],
    },
    {
        year: '2',
        title: 'Foundation and Basicfsfewfre',
        education: 'education', 
        experience: ['experience', 'experience'],
    },
    {
        year: '3',
        title: 'Foundation and Basicsbbbbbbbbbbb',
        education: 'education', 
        experience: ['experience', 'experience'],
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