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
        degree: "B.Tech in CSE (AI & Data Science)",
        duration: "Aug 2024 - Aug 2028",
        location: "Haryana, India",
        coursework: "DSA, OOP, Web Dev, ML, SQL, C++"
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
        tech: ["React", "TypeScript", "Gemini API"],
        description: [
            "AI Assistant built with React, TypeScript, and Google Gemini API.",
            "Features real-time Voice-to-Text/Speech and a responsive dark mode UI."
        ]
    },
    {
        title: "Gold Spotify (Music Player Clone)",
        tech: ["JavaScript", "CSS3", "HTML5"],
        description: [
            "Custom-themed music player featuring a vanilla JS audio engine.",
            "Optimized asset loading for high performance and smooth transitions."
        ]
    },
    {
        title: "E-Commerce Sales Analysis Dashboard",
        tech: ["Python", "Pandas", "Matplotlib"],
        description: [
            "Python/Pandas data analysis tool processing 10k+ records.",
            "Visualized revenue KPIs and growth metrics using Matplotlib & Seaborn."
        ]
    }
];

export const EXPERIENCE = [
    {
        role: "Hackathon Team Lead | Smart India Hackathon (Internal Round)",
        company: "SRM University",
        duration: "Sept 2025",
        description: [
            "Led 6-member team to build a crop monitoring prototype in 24h.",
            "Coordinated full-stack integration and final presentation."
        ]
    },
    {
        role: "Core Member",
        company: "WeBytes",
        duration: "2025 - Present",
        description: [
            "Organizing technical workshops and campus events."
        ]
    }
];
