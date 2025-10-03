import React from "react";
import HTML from './assests/tech-icons/html.png'
import CSS from './assests/tech-icons/css.png'
import TS from './assests/tech-icons/ts.png'
import Python from './assests/tech-icons/python.png'
import ReactIcon from './assests/tech-icons/react.png'
import Angular from './assests/tech-icons/angular.png'
import NodeJS from './assests/tech-icons/node.png'
import AWS from './assests/tech-icons/aws.png'
import Github from './assests/tech-icons/github.png'
import DissertationImage from "./assests/project-dissertation.png"
import FitnessImage from "./assests/project-fitness.png"
import RoadImage from "./assests/project-road.png"
import RoadImageGIF from "./assests/project-road.gif"


export const techStack = {
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'C++'],
    'Frameworks/Libraries': ['React.js', 'Angular', 'Node.js', 'Express.js', 'FastAPI', 'Django'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL'],
    'Cloud Platforms': ['AWS (EC2, S3)', 'Google Cloud'],
    'Tools': ['Docker', 'Git/GitHub', 'JIRA', 'Confluence', 'GitHub Actions', 'Terraform'],
    'Other': ['REST APIs', 'Material UI', 'ECharts.js', 'RxJS', 'Kafka', 'Agile/Scrum', 'TDD', 'CI/CD', 'Real-time Data Processing'],
    'Core Concepts': ['Data Structures and Algorithms', 'Object-oriented Programming', 'Performance Optimization']
}

export const techStackIcons = [
    {name: 'HTML', icon: HTML},
    {name: 'CSS', icon: CSS},
    {name: 'TypeScript', icon: TS},
    {name: 'Python', icon: Python},
    {name: 'React.js', icon: ReactIcon},
    {name: 'Angular', icon: Angular},
    {name: 'Node.js', icon: NodeJS},
    {name: 'AWS', icon: AWS},
    {name: 'GitHub', icon: Github},
]

export const projectDetails = [
    {
        image: DissertationImage,
        title: "Decoding the Rhythm of the Body: Analysis of Multivariate Physiological Time Series Data",
        description: "Interactive healthcare data analysis platform",
        techstack: ["Python", "FastAPI", "Angular", "TypeScript", "RxJS", "Docker", "Kafka", "Google Cloud"],
        timeline: "2025",
        links: {
            github: "https://github.com/tejas2609/COMP6200",
            images: DissertationImage
        }
    }, 
    {
        image: FitnessImage,
        title: "Cloud-based fitness governing web application",
        description : "Web-based application for seamless fitness management.",
        techstack: ["React.js", "Material UI", "Echarts.js", "Azure", "Terraform", "Node.js", "Express.js", "MongoDB"],
        timeline: "2025",
        links: {
            github: "https://github.com/Vpb123/web-dev-frontend",
            images: FitnessImage,
            link: "https://gymbuddies-frontend.azurewebsites.net/"
        }

    }, 
    {
        image: RoadImage,
        title: "Vision-Based Detection of Road Lane Curvature",
        description: "Accurate and highly-precise detection model.",
        techstack: ["Python", "OpenCV", "NumPy", "Matplotlib", "Jupyter Notebook", "Machine Learning", "Model tranining"],
        timeline: "2022",
        links: {
            github: "https://github.com/tejas2609/Road-Curvature-Detection",
            images: RoadImageGIF
        }
    }, 
    {
        image: DissertationImage,
        title: "AWS based secure text transfer using Diffie-Hellmann Key",
        description: "Built a secure AWS-hosted messaging platform with Python/JS, AES encryption, and end-to-end confidentiality.",
        techstack: ["Python", "JavaScript", "AWS EC2", "AES Encryption", "Diffie-Hellman Key Exchange", "HTML", "CSS"],
        timeline: "2022",
        links: {
            github: "https://github.com/tejas2609/Major_23",
            images: DissertationImage
        }
    }
    
]

export const experience = [
    {
        company: "Itanta Analytics",
        role: "Associate Software Engineer",
        duration: "Feb 2023 - Apr 2024",
        description: [
            "⚡ Redesigned & optimized enterprise software, enhancing 3 core features and boosting frontend performance by 40%.",
            "🔧 Enhanced backend efficiency by 35–40% with advanced algorithms, WebSockets, Django, and FastAPI.",
            "📡 Built Kafka-based data pipelines, containerized with Docker and deployed seamlessly on AWS.",
            "🚀 Streamlined delivery pipelines with GitHub Actions CI/CD, cutting deployment time by 20% and achieving 85%+ test coverage.",
            "🤝 Collaborated in an Agile/Scrum environment, participating in daily stand-ups, sprint planning, and retrospectives using JIRA and Confluence for documentation."
        ]
    },
    {
        company: "D.C Ikigai Pvt. Ltd.",
        role: "Frontend Developer Intern",
        duration: "May 2021 - Aug 2021",
        description: [
            "⚛️ Developed reusable React.js components with Material UI, enhancing scalability and user engagement.",
            "📱 Improved responsive design across browsers and devices, aligning with accessibility standards.",
            "🎨 Collaborated with designers and product teams to deliver user-friendly landing pages and new features.",
            "🌐 Leveraged GitHub to keep the development among peers in-sync."
        ]
    },
]