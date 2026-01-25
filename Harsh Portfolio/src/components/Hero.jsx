import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import { Download } from "lucide-react";

const TypewriterText = ({ text }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate: (latest) => {
                if (latest <= 0 || latest >= text.length) {
                    setCursorVisible(true);
                }
            }
        });
        return controls.stop;
    }, [count, text.length]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className="inline-flex items-center">
            <motion.span>{displayText}</motion.span>
            <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} ml-1 text-primary dark:text-primary`}>|</span>
        </span>
    );
};

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg sm:text-xl md:text-2xl text-primary dark:text-primary font-medium mb-4 h-8"
                    >
                        <TypewriterText text="Hello, I'm" />
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-black dark:text-white mb-6 tracking-tight"
                    >
                        {HERO_CONTENT.name}
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
                    >
                        {HERO_CONTENT.role}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex justify-center gap-6"
                    >
                        {HERO_CONTENT.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            download="Harsh_Vardhan_Sharma_Resume.pdf"
                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                            aria-label="Download Resume"
                            title="Download Resume"
                        >
                            <Download size={24} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/20 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default Hero;
