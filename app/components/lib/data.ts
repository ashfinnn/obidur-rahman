// lib/data.ts
import { AllProjectsData } from './types';

export const allProjectsData: AllProjectsData = {
    'data-science': {
        title: 'Data Science Projects',
        items: [
            {
                label: 'DEEP LEARNING',
                title: 'Tomato Leaf Disease Classification',
                subtitle: 'Comparative analysis of traditional ML and deep learning models (Xception, EfficientNet, MobileNet) for tomato leaf disease classification. Explored background removal and real-world data impact.',
                tags: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Xception', 'EfficientNet', 'MobileNet', 'Computer Vision'],
                stats: [
                    { label: 'Xception Acc', value: '97.00%' },
                    { label: 'EfficientNet Acc', value: '94.26%' },
                    { label: 'MobileNet Acc', value: '92.79%' }
                ],
                link: null
            },
            {
                label: 'EDUCATION ANALYTICS',
                title: 'Undergraduate Admission Prediction Model',
                subtitle: 'Comprehensive ML model for predicting undergraduate admission outcomes. Included feature engineering, hyperparameter optimization, and explainable AI for actionable insights.',
                tags: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'NumPy', 'Predictive Modeling'],
                stats: [
                    { label: 'Accuracy', value: '83.87%' },
                    { label: 'Precision', value: '89%' },
                    { label: 'Records', value: '15K+' }
                ],
                link: 'https://github.com/Ashfinn/Undergraduate-Admission-Prediction'
            },
            {
                label: 'PUBLIC HEALTH',
                title: 'Diarrheal Disease Prediction Model',
                subtitle: 'Research project analyzing the relationship between environmental factors and diarrheal disease incidence across four major divisions in Bangladesh.',
                tags: ['Machine Learning', 'Research', 'Predictive Modeling', 'Correlation Analysis'],
                stats: [
                    { label: 'Divisions', value: '4' },
                    { label: 'Type', value: 'Research' }
                ],
                link: 'https://github.com/Ashfinn/Diarrhea-Prediction-Model'
            }
        ]
    },
    'web-development': {
        title: 'Web Development Projects',
        items: [
            {
                label: 'PORTFOLIO',
                title: 'ashfinn.github.io',
                subtitle: 'The site you are viewing now! Built with modern HTML, CSS, and JavaScript. Features animated transitions, responsive design, and a dynamic project showcase.',
                tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
                stats: [
                    { label: 'Type', value: 'Portfolio' },
                    { label: 'Status', value: 'Live' }
                ],
                link: 'https://github.com/Ashfinn/ashfinn.github.io'
            },
            {
                label: 'WEB PLATFORM',
                title: 'Matlab-Hero',
                subtitle: 'Next.js-based web platform for coding challenges related to MATLAB. Demonstrates frontend skills, React/Next.js expertise, and interactive learning tools.',
                tags: ['Next.js', 'React', 'MATLAB', 'Frontend'],
                stats: [
                    { label: 'Framework', value: 'Next.js' },
                    { label: 'Status', value: 'Live' }
                ],
                link: 'https://matlab-hero.vercel.app/'
            },
            {
                label: 'FORUM',
                title: 'The Code Forum',
                subtitle: 'Responsive web forum with Tailwind CSS and GSAP animations. Excellent example of frontend design, animations, and user experience.',
                tags: ['Tailwind CSS', 'GSAP', 'Frontend', 'Forum'],
                stats: [
                    { label: 'Animations', value: 'GSAP' },
                    { label: 'Styling', value: 'Tailwind' }
                ],
                link: 'https://the-code-forum.github.io/website/'
            },
            {
                label: 'FULL-STACK',
                title: 'Letterboxd-Lifesaver',
                subtitle: 'Full-stack app with Flask backend and React frontend that helps users discover movies. Features API integration, user-friendly UI, and clean architecture.',
                tags: ['Flask', 'React', 'API', 'Full-Stack'],
                stats: [
                    { label: 'Backend', value: 'Flask' },
                    { label: 'Frontend', value: 'React' }
                ],
                link: 'https://github.com/Ashfinn/Letterboxd-Lifesaver'
            }
        ]
    },
    'programming': {
        title: 'Programming Projects',
        items: [
            {
                label: 'NETWORKING',
                title: 'httPy',
                subtitle: 'Custom Python HTTP server demonstrating understanding of web protocols and backend fundamentals. Lightweight, educational project showing low-level web technology knowledge.',
                tags: ['Python', 'HTTP', 'Networking', 'Backend'],
                stats: [
                    { label: 'Language', value: 'Python' },
                    { label: 'Type', value: 'Server' }
                ],
                link: 'https://github.com/Ashfinn/httPY'
            }
        ]
    },
    'certifications': {
        title: 'Certifications & Training',
        items: [
            {
                label: 'FELLOWSHIP',
                title: 'Software Engineering Fellowship – Headstarter',
                subtitle: 'Developed five full-stack web applications using Firebase, Git, and JavaScript. Collaborated in a team of four developers, following agile methodologies.',
                tags: ['Headstarter', 'Full-Stack', 'Firebase', 'JavaScript', 'Agile'],
                stats: [
                    { label: 'Projects', value: '5' },
                    { label: 'Team Size', value: '4' }
                ],
                link: null
            },
            {
                label: 'MOOC',
                title: 'Introduction to Programming with MATLAB',
                subtitle: 'Comprehensive programming course by Vanderbilt University covering MATLAB fundamentals and advanced concepts for mathematical computing.',
                tags: ['Vanderbilt', 'MATLAB', 'Programming', 'Coursera'],
                stats: [
                    { label: 'Completed', value: 'Jun 2024' },
                    { label: 'Provider', value: 'Coursera' }
                ],
                link: 'https://www.coursera.org/account/accomplishments/certificate/Z6HMC9DS5LSM'
            },
            {
                label: 'MOOC',
                title: 'Developing AI Applications with Python & Flask',
                subtitle: 'Advanced course by IBM on building AI-powered applications using Python and Flask framework with practical implementations.',
                tags: ['IBM', 'Python', 'Flask', 'AI', 'Coursera'],
                stats: [
                    { label: 'Completed', value: 'Jan 2024' },
                    { label: 'Provider', value: 'Coursera' }
                ],
                link: 'https://www.coursera.org/account/accomplishments/certificate/HV6QNTGU2KHY'
            },
            {
                label: 'SPECIALIZATION',
                title: 'Programming in C++: A Hands-on Introduction',
                subtitle: 'Comprehensive C++ programming specialization by Codio covering object-oriented programming, data structures, and algorithms.',
                tags: ['Codio', 'C++', 'Programming', 'OOP'],
                stats: [
                    { label: 'Completed', value: 'Dec 2023' },
                    { label: 'Provider', value: 'Coursera' }
                ],
                link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MNYQFWD4JX4P'
            },
            {
                label: 'MOOC',
                title: 'Python for Data Science, AI & Development',
                subtitle: 'Foundational course by IBM in Python programming with focus on data science applications and AI development.',
                tags: ['IBM', 'Python', 'Data Science', 'AI', 'Coursera'],
                stats: [
                    { label: 'Completed', value: 'Nov 2023' },
                    { label: 'Provider', value: 'Coursera' }
                ],
                link: 'https://www.coursera.org/account/accomplishments/certificate/4LK9Y375MAQ7'
            }
        ]
    }
};