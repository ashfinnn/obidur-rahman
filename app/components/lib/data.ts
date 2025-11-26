// lib/data.ts
import { AllProjectsData } from './types';

export const allProjectsData: AllProjectsData = {
    'data-science': {
        title: 'Data Science & Machine Learning Projects',
        items: [
            {
                label: 'EDUCATION ANALYTICS',
                title: 'Undergraduate Admission Prediction System',
                subtitle:
                    'A supervised learning system built on 15K+ admission records. Implemented advanced feature engineering, model comparison pipelines, and SHAP-based explainability to support transparent decision-making.',
                tags: [
                    'Python',
                    'XGBoost',
                    'scikit-learn',
                    'SHAP',
                    'ML Engineering',
                    'Feature Engineering'
                ],
                stats: [
                    { label: 'Accuracy', value: '83.87%' },
                    { label: 'Precision', value: '89%' },
                    { label: 'Dataset Size', value: '15K+' }
                ],
                link: 'https://github.com/Ashfinn/Undergraduate-Admission-Prediction'
            },
            {
                label: 'DEEP LEARNING',
                title: 'Hybrid Transformers vs CNNs on CPU-Constrained Environments',
                subtitle:
                    'Benchmarked ResNet-50, ConvNeXt-Tiny, and FastViT-T8 on PlantVillage to evaluate real-world feasibility of deploying plant disease detection in regions without GPU access. Focused on inference latency, accuracy, and efficiency.',
                tags: [
                    'PyTorch',
                    'Computer Vision',
                    'Transformers',
                    'Model Benchmarking',
                    'Deep Learning'
                ],
                stats: [
                    { label: 'ResNet-50', value: '97.00%' },
                    { label: 'ConvNeXt-Tiny', value: '99%' },
                    { label: 'FastViT-T8', value: '98%' }
                ],
                link: 'https://github.com/Ashfinn/efficient-leaf-disease'
            },
            {
                label: 'PUBLIC HEALTH AI',
                title: 'Environmental Correlates of Diarrheal Disease — ML Forecasting',
                subtitle:
                    'Explored the relationship between climatic factors and diarrheal incidence across four divisions in Bangladesh using predictive modeling and statistical correlation analysis.',
                tags: [
                    'Machine Learning',
                    'Public Health',
                    'Research Analysis',
                    'Predictive Modeling'
                ],
                stats: [
                    { label: 'Regions', value: '4 Divisions' },
                    { label: 'Study Type', value: 'Research' }
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
                subtitle:
                    'A modern portfolio built with Next.js and React featuring motion-based UI, responsive layouts, and dynamically rendered project data using a modular architecture.',
                tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
                stats: [
                    { label: 'Type', value: 'Portfolio' },
                    { label: 'Status', value: 'Live' }
                ],
                link: 'https://github.com/Ashfinn/ashfinn.github.io'
            },
            {
                label: 'WEB PLATFORM',
                title: 'Matlab-Hero — Interactive Learning Platform',
                subtitle:
                    'A Next.js-powered platform that hosts interactive MATLAB coding challenges. Designed with reusable UI components, server-side rendering, and scalable page architecture.',
                tags: ['Next.js', 'React', 'Frontend Development', 'Platform Design'],
                stats: [
                    { label: 'Framework', value: 'Next.js' },
                    { label: 'Status', value: 'Live' }
                ],
                link: 'https://matlab-hero.vercel.app/'
            }
        ]
    },

    'certifications': {
        title: 'Fellowship & Training',
        items: [
            {
                label: 'FELLOWSHIP',
                title: 'Software Engineering Fellowship — Headstarter',
                subtitle:
                    'Built and deployed five full-stack applications using Firebase, JavaScript, and version-controlled agile workflows. Worked in a collaborative engineering team following weekly product development cycles.',
                tags: ['Headstarter', 'Software Engineering', 'Full-Stack', 'Agile', 'Firebase'],
                stats: [
                    { label: 'Projects Built', value: '5' },
                    { label: 'Team Collaboration', value: '4 Developers' }
                ],
                link: null
            }
        ]
    }
};
