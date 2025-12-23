import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile.avif.jpg'
import { FaProjectDiagram } from 'react-icons/fa'

export const assets = {
    profileImg,
}

export const navMenu = ['Home', 'About', 'Skills', 'Work', 'Contact']

export const skillsData = [
  {
    icon: FaMicrochip,
    title: 'Backend',
    type: 'Backend',
    level: 80,
    technologies: ['Node.js', 'Express.js' , 'Rest API'],
  },
  {
    icon: FaReact,
    title: 'Frontend',
    type: 'Frontend',
    level: 90,
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', ' Web API '],
  },
  {
    icon: FaDesktop,
    title: 'Database',
    type: 'Tools',
    level: 70,
    technologies: [ 'JSON Server', 'MongoDB', 'MS Office', 'Basic MS Project'  ],
  },
  {
    icon: FaCode,
    title: 'DevOps',
    type: 'Tools',
    level: 75,
    technologies: ['Git', 'GitHub',' VS Code', 'MATLAB', 'Canva'],
  },
  {
    icon: FaMobile,
    title: 'Frameworks',
    type: 'Frontend',
    level: 85,
    technologies: [' Tailwind CSS', 'Bootstrap', 'Responsive Web Design'],
  },
];

export const projectData = [
    {
        title: 'Smart Personal Finance Tracker ',
        description: 'Web app that auto-categorizes expenses, shows monthly insights with charts, and helps users stay on top of their budgets.',
        image: 'https://www.shutterstock.com/image-photo/digital-tax-calculation-management-concept-260nw-2496532687.jpg',
        tech: [ 'JavaScript', 'HTML5', 'CSS3 '],
        githubUrl: 'https://github.com/Priyanka010802/Smart-Finance-Tracker',  // Replace with your actual GitHub repo
        liveUrl: 'https://smart-finance-tracker-blush.vercel.app/'  // Replace with your Vercel/Netlify deploy URL
    },
    {
        title: 'Employess Managemant System',
        description: 'Responsive SPA that lets admins view employees, track attendance, and manage departments with clean UI cards and tables.',
        image: 'https://www.techfunnel.com/wp-content/uploads/2019/08/Benefits-of-Performance-Management-for-Organization-and-Employees-1-768x444.png',
        tech: [' React', 'JSON Server', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3 '],
        githubUrl: 'https://github.com/Priyanka010802/Employees-Management-System',  // Replace with your actual GitHub repo
        liveUrl: 'https://employees-management-system-blush.vercel.app/'  // Replace with your Vercel/Netlify deploy URL
    },
    {
        title: 'Real Time Chat  Application ',
        description: 'Chat interface with real-time message updates, online indicators, and clean layout suitable for personal or team chats.',
        image: 'https://png.pngtree.com/background/20240413/original/pngtree-portfolio-displays-and-mobile-apps-with-3d-shapes-chat-messages-and-picture-image_8471028.jpg',
        tech: [ 'React.js', 'JavaScript (ES6+)', 'HTML5',' CSS3', 'WebSocket'  ],
        githubUrl: 'https://github.com/Priyanka010802/Real-Time-Chat-App',  // Replace with your actual GitHub repo
        liveUrl: 'https://real-time-chat-app-blue-six.vercel.app/'  // Replace with your Vercel/Netlify deploy URL
    }
];

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['HTML', 'Javascript', 'React', 'express js', 'Tailwindcss']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['B.tech in ENTC ']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built projects']
    },
];
