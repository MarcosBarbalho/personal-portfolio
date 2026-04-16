/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Blocks,
  Bot,
  Briefcase,
  FileText,
  Home,
  Layers,
  Mail,
  MessageCircle,
  MonitorCog,
  MousePointer2,
  Settings,
  User,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/marcos-barbalho-moreira-00/',
  },
  {
    icon: FaGithub,
    label: 'Github',
    link: 'https://github.com/MarcosBarbalho/',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/yggdrasil.jpeg',
    title: 'Docker Proxy',
    tags: ['Development', 'Docker'],
    projectLink: 'https://github.com/MarcosBarbalho/yggdrasil',
  },
  {
    imgSrc: '/images/stock-tracker.jpeg',
    title: 'Stock Tracker',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/MarcosBarbalho/stock-tracker',
  },
  {
    imgSrc: '/images/travel-manager.jpeg',
    title: 'Travel Manager',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/MarcosBarbalho/travel-manager',
  },
  {
    imgSrc: '/images/personal-portfolio.jpeg',
    title: 'Personal Portfolio',
    tags: ['Development', 'Website'],
    projectLink: 'https://github.com/MarcosBarbalho/personal-portfolio',
  },
];

const education: ExperienceType[] = [
  {
    year: '2025',
    title: 'Bachelor of Information Systems',
    institute: 'Pontifical Catholic University of Minas Gerais',
    desc: 'Focused on development and web application architecture.',
  },
  {
    year: '2026',
    title: 'PHP Experience Course',
    institute: 'DIO / Online Course',
    desc: 'Learned PHP, Laravel, and API development for modern web applications.',
  },
  {
    year: '2026',
    title: 'TypeScript Fullstack Developer Course',
    institute: 'DIO / Online Course',
    desc: 'Worked with TypeScript, React, and Node.js to build robust full-stack applications.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2021 – 2022',
    title: 'Frontend Developer Intern',
    institute: 'PixelForge Studio',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
  {
    year: '2022 – Present',
    title: 'UI Engineer',
    institute: 'Freelance / Remote Work',
    desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'PHP',
    imgSrc: '/images/tools/php.svg',
  },
  {
    label: 'Laravel',
    imgSrc: '/images/tools/laravel.svg',
  },
  {
    label: 'Docker',
    imgSrc: '/images/tools/docker.svg',
  },
  {
    label: 'MySQL',
    imgSrc: '/images/tools/mysql.svg',
  },
  {
    label: 'Postgres',
    imgSrc: '/images/tools/postgresql.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Typescript',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Vue',
    imgSrc: '/images/tools/vue.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'API Development',
    desc: 'Building scalable and reliable interfaces that enable seamless communication between different software systems.',
    projects: '20 Projects',
    icon: <MonitorCog className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Dockerization',
    desc: 'Packaging applications into containers to ensure consistent environments and streamlined deployment across different systems.',
    projects: '12 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Automated Tests',
    desc: 'Writing and running tests to automatically verify that software behaves as expected and prevent regressions.',
    projects: '58 Projects',
    icon: <Bot className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Integrations',
    desc: 'Connecting different systems and services to enable seamless data exchange and unified workflows.',
    projects: '21 Projects',
    icon: <Blocks className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Interface Development',
    desc: 'Building responsive and interactive interfaces that deliver smooth and engaging user experiences.',
    projects: '15 Projects',
    icon: <MousePointer2 className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '07+',
    label: 'Years Of Experience',
  },
  {
    number: '15+',
    label: 'APIs Built',
  },
  {
    number: '30+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
