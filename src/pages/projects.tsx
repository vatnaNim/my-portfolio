import { Tooltip } from "@mui/material";
import { GitHubIcon } from "../assets/icons";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
    NoImage, 
    Profile 
} from "../assets/images";

interface iProject {
    isDarkMode: boolean;
}

const Projects = ({isDarkMode}: iProject) => {
    const [expanded, setExpanded] = useState<number[]>([]);
    const projectDb = [
        {
            id:1,
            image: '',
            projectName: 'personal portofio',
            discretion: 'A modern, responsive personal portfolio website showcasing my skills, projects, and experience. Built using React with TypeScript, Tailwind CSS, and Material UI, it includes interactive sections, smooth animations, and a clean design to highlight my development work and contact information.',
            status: 'success',
            gitHub_link:'',
            lang: [
                'react.ts',
                'tailwind',
                'material UI',
                'java script'
            ]
        },
        {
            id:2,
            image: '',
            projectName: 'Robert coffee(front-end)',
            discretion: 'A front-end training project for a coffee shop website with a clean UI, responsive layout, and modular structure. This project was built for self-learning and runs locally using "npm run dev". It integrates with the "Robert Coffee (Back-End)" service for login authentication and uses REST APIs for data handling and communication.',
            status: 'pending',
            gitHub_link:'https://github.com/vatnaNim/Robert-Coffee-Front-end',
            lang: [
                'nuxt.js',
                'tailwind',
                'nuxtUI',
                'java script',
                'type script'
            ]
        },
        {
            id:3,
            image: '',
            projectName: 'Robert coffee(back-end)',
            discretion: 'A backend training project built with Laravel and MySQL to support the Robert Coffee front-end. This project was developed as part of my self-learning journey to practice server-side development. It runs locally using XAMPP Control Panel v3.3.0 and provides RESTful APIs for authentication and data operations.',
            status: 'pending',
            gitHub_link:'https://github.com/vatnaNim/Robert-Coffee-Back-end',
            lang: [
                'php',
                'Laraval',
                'mySql',
            ]
        },
        {
            id:4,
            image: '',
            projectName: 'photographer',
            discretion: 'A Nuxt.js project created to deepen my understanding of modern frontend frameworks and REST API integration. The application showcases photographer profiles and testimonials, with dynamic data fetched from a backend API. It was developed as a self-learning exercise using TypeScript and Tailwind CSS. The project runs locally using "npm run dev" for the client and "node server.js" for the backend.',
            status: 'success',
            gitHub_link:'https://github.com/vatnaNim/Personal_Photographer_Project',
            lang: [
                'vue',
                'nuxt.js',
                'tailwind',
                'java script',
                'type script'
            ]
        },
        {
            id:5,
            image: '',
            projectName: 'skin care',
            discretion: 'A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site, helping me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and static content rendering.',
            status: 'success',
            gitHub_link:'https://github.com/vatnaNim/Skin-care-Project',
            lang: [
                'vue',
                'nuxt.js',
                'tailwind',
                'java script',
                'type script'
            ]
        },
        {
            id:6,
            image: '',
            projectName: 'Restaurants',
            discretion: 'A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site, helping me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and static content rendering.',
            status: 'success',
            gitHub_link:'https://github.com/vatnaNim/Restaurants-Project',
            lang: [
                'vue',
                'nuxt.js',
                'tailwind',
                'java script',
                'type script'
            ]
        },
        {
            id:7,
            image: '',
            projectName: 'starbuck',
            discretion: 'A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site and helped me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and rendering static content effectively.',
            status: 'success',
            gitHub_link:'https://github.com/vatnaNim/Starbuck',
            lang: [
                'react.js',
                'tailwind',
                'java script',
            ]
        },
        {
            id:8,
            image: '',
            projectName: 'Html school assigment',
            discretion: 'A class assignment project created to demonstrate fundamental web development skills using HTML, CSS, and JavaScript. The project includes multiple static pages with structured layouts, interactive elements, and responsive styling, following the professor’s guidelines to fulfill academic requirements and reinforce core front-end concepts.',
            status: 'success',
            gitHub_link:'https://github.com/vatnaNim/Starbuck',
            lang: [
                'HTML',
                'CSS',
                'java script',
            ]
        }
    ];

    const toggle = (id: number) => {
    setExpanded(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
    };

    return (
       <>
            <Helmet>
                <title>VATNA - Front-end Developer</title>
                <meta name="description" content="Personal portfolio of VATNA" />
                <meta property="og:title" content="VATNA - Front-end Developer" />
                <meta property="og:description" content="Personal portfolio of VATNA" />
                <meta property="og:image" content={Profile} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:5173/projects" />
            </Helmet>

            <div 
                className="px-8 sm:px-10 md:px-12 min-h-screen w-full mb-8">
                <div 
                    className="w-full md:w-[50%] flex items-center gap-x-4 sm:gap-x-6 mb-4 animate__fadeIn"
                    style={{ animationDuration: '1s' }}>
                    <span 
                        className={`${isDarkMode ? 'text-white' : 'text-black'} text-lg-clamp sm:fs-5 font-semibold uppercase`}>
                        my projects
                    </span>
                    <span className={`${isDarkMode ? 'border-white' : 'border-black'} border flex-1`} />
                </div>
                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 animate__fadeInUp"
                    style={{ animationDuration: '1s' }}>
                    {
                        projectDb.map((project) => (
                        <div
                            key={project.id}
                            className={`${isDarkMode ? 'bg-gray-900 border-sky-500 shadow-sky-600' : 'bg-gray-100 border-white shadow-sky-400'} ${
                            expanded.includes(project.id) ? 'overflow-y-scroll' : ''
                            } h-[390px] min-h-[200px] rounded-xl shadow-md overflow-hidden border cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}>
                            <div 
                                className="h-1/2 overflow-hidden relative">
                                <img
                                    src={project.image || NoImage}
                                    alt={project.projectName}
                                    className="w-full h-full object-cover"
                                />
                                <Tooltip
                                    title={
                                    <span className="text-sm font-medium text-white rounded shadow">
                                        Project Status: {project.status}
                                    </span>
                                    }
                                    arrow>
                                    <span
                                        className={`absolute top-2 right-2 text-xs-clamp font-semibold px-4 py-1 rounded-full shadow-sm capitalize
                                        ${project.status === 'success' ? 'bg-green-200 text-green-700' : ''}
                                        ${project.status === 'pending' ? 'bg-yellow-200 text-yellow-700' : ''}`}>
                                        {project.status}
                                    </span>
                                </Tooltip>
                            </div>
                        <div
                            className={`${
                                expanded.includes(project.id) ? 'px-4 pb-10 pt-4 card-scrollbar' : 'p-4'
                            } h-1/2 flex flex-col justify-between`}>
                            <div>
                                <div 
                                    className="flex justify-between">
                                    <h1
                                        className={`${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                        } text-lg font-semibold tracking-wide capitalize mb-1`}>
                                        {project.projectName}
                                    </h1>
                                    <span
                                        className="text-sm-clamp text-nowrap underline underline-offset-2 font-medium text-sky-600 hover:text-gray-600 duration-300"
                                        onClick={() => toggle(project.id)}>
                                        {expanded.includes(project.id) ? 'see less' : 'see more'}
                                    </span>
                                </div>
                                <p
                                    className={`${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    } ${expanded.includes(project.id) ? 'text-md-clamp' : 'text-sm-clamp'} mb-2`}>
                                    {expanded.includes(project.id)
                                        ? project.discretion
                                        : project.discretion.slice(0, 180) + '...'}
                                </p>
                                <ul 
                                    className="flex flex-wrap text-xs-clamp font-medium gap-2 text-sky-500 mt-2">
                                    {project.lang.map((item) => (
                                        <li 
                                            key={item} 
                                            className="list-disc list-inside capitalize">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div 
                                className="space-x-2 pb-4">
                                <a 
                                    href={project.gitHub_link}>
                                    <button
                                        className={`${
                                        isDarkMode
                                            ? 'bg-sky-700 hover:bg-sky-800'
                                            : 'bg-gray-700 hover:bg-gray-700 text-white'
                                        } mt-3 px-3 py-1.5 rounded-lg text-sm transition-colors duration-200`}>
                                        <span className="flex items-center gap-x-2">
                                        <GitHubIcon className="text-white w-4 h-4" />
                                        <span className="uppercase text-sm-clamp">View on GitHub</span>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
       </>
    )
};

export default Projects;