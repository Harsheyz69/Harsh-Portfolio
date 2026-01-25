import { Linkedin, Github, Terminal, BarChart3, Camera, Video, Database } from "lucide-react";
import {
    SiPython,
    SiCplusplus,
    SiC,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiMarkdown,
    SiBootstrap,
    SiDjango,
    SiFastapi,
    SiExpress,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiVite,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiTensorflow,
    SiScikitlearn,
    SiGooglecloud,
    SiVercel,
    SiNetlify,
    SiRender,
    SiFirebase,
    SiSupabase,
    SiAnaconda,
    SiNpm,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiCanva,
    SiGit,
    SiGithub
} from "react-icons/si";

export const HERO_CONTENT = {
    name: "Harsh Vardhan Sharma",
    role: "Computer Science Student",
    description: "Specializing in AI and Machine Learning. Passionate about leveraging AI and data-driven approaches to solve real-world problems. With the experience in Full stack Development",
    location: "New Delhi, India",
    phone: "+91 8810441651",
    email: "harsh.vsharma1515@gmail.com",
    socials: [
        { icon: Linkedin, href: "https://linkedin.com/in/harsheez", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/harsheyz69", label: "GitHub" },
    ]
};

export const ABOUT_CONTENT = `Computer Science student specializing in AI and Data Science with hands-on experience in full-stack development. Passionate about leveraging AI and data-driven approaches to solve real-world problems.`;

export const EDUCATION = [
    {
        institution: "SRM University",
        degree: "B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Data Science",
        duration: "Aug 2024 - Aug 2028",
        location: "Haryana, India",
        coursework: "Data Structures & Algorithms, OOP (Python), SQL, Web Development, Python Programming, Machine Learning, C++ Programming"
    }
];

export const SKILLS = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: SiPython },
            { name: "C++", icon: SiCplusplus },
            { name: "C", icon: SiC },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
            { name: "Markdown", icon: SiMarkdown }
        ]
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React.js", icon: SiReact },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Django", icon: SiDjango },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "Vite", icon: SiVite },
            { name: "OpenCV", icon: Camera }
        ]
    },
    {
        category: "Data Science & ML",
        items: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "scikit-learn", icon: SiScikitlearn },
            { name: "Pandas", icon: SiPandas },
            { name: "NumPy", icon: SiNumpy },
            { name: "Scipy", icon: BarChart3 },
            { name: "Matplotlib", icon: BarChart3 }
        ]
    },
    {
        category: "Cloud & Deployment",
        items: [
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "Firebase", icon: SiFirebase },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
            { name: "Render", icon: SiRender }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Supabase", icon: SiSupabase }
        ]
    },
    {
        category: "Developer Tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Windows Terminal", icon: Terminal },
            { name: "NPM", icon: SiNpm },
            { name: "Anaconda", icon: SiAnaconda },
            { name: "Power BI", icon: Database },
            { name: "Canva", icon: SiCanva },
            { name: "Premiere Pro", icon: Video }
        ]
    },
];

export const PROJECTS = [
    {
        title: "N.Y.R.A - New Gen Your Reliable Assistant",
        tech: ["React.js", "TypeScript", "APIs"],
        description: [
            "Developed comprehensive AI assistant with React.js and TypeScript for type-safe frontend architecture",
            "Integrated Google Gemini APIs for natural language processing and creative content generation",
            "Implemented real-time Voice-to-Text and Text-to-Speech using Web Speech API for enhanced accessibility",
            "Designed responsive UI with Tailwind CSS, supporting dark mode across desktop and mobile devices"
        ]
    },
    {
        title: "Gold Spotify (Music Player Clone)",
        tech: ["JavaScript", "CSS3", "HTML5"],
        description: [
            "Engineered visually distinct music streaming interface with custom 'Gold' theme using CSS3 variables",
            "Built core playback logic with pure JavaScript, managing audio state and DOM manipulation without libraries",
            "Optimized asset loading and layout performance for smooth transitions and low-latency track switching"
        ]
    },
    {
        title: "E-Commerce Sales Analysis Dashboard",
        tech: ["Python", "Pandas", "Matplotlib"],
        description: [
            "Developed data analysis tool using Python and Pandas to process 10,000+ sales records",
            "Visualized KPIs (monthly revenue, category growth) using Matplotlib and Seaborn",
            "Implemented data cleaning scripts to handle missing values and outliers, improving accuracy by 15%"
        ]
    }
];

export const EXPERIENCE = [
    {
        role: "Hackathon Team Lead | Smart India Hackathon (Internal Round)",
        company: "SRM University",
        duration: "Sept 2025",
        description: [
            "Led team of 6 students to develop crop health monitoring system prototype within 24-hour deadline",
            "Coordinated frontend and backend integration, presented scalable solution to judging panel"
        ]
    },
    {
        role: "Core Member",
        company: "WeBytes",
        duration: "2025 - Present",
        description: [
            "Organizing workshops and collaborate on organizing campus-wide technical events"
        ]
    }
];
