import { motion } from "framer-motion";
import { useState } from "react";
import { SKILLS } from "../constants";
import Section from "./Section";

const SkillPill = ({ skill, index, variant = "primary" }) => {
    const Icon = skill.icon;
    const [isHovered, setIsHovered] = useState(false);

    const baseClasses = "group relative px-4 py-2.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl font-medium text-sm md:text-base shadow-lg border backdrop-blur-sm flex items-center gap-2 md:gap-3 flex-shrink-0 transition-all duration-300 cursor-pointer";

    const variantClasses = variant === "primary"
        ? "bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:border-blue-300/50 dark:hover:border-blue-500/50 md:hover:-translate-y-1 active:scale-95"
        : "bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-900 dark:text-blue-100 border-blue-200/50 dark:border-blue-500/30 hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-purple-400/20 hover:border-purple-300/50 dark:hover:border-purple-500/50 md:hover:-translate-y-1 active:scale-95"

    return (
        <div
            className={`${baseClasses} ${variantClasses}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon
                className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${isHovered
                    ? 'text-blue-600 dark:text-blue-400 scale-110 rotate-12'
                    : variant === "primary"
                        ? 'text-gray-600 dark:text-gray-400'
                        : 'text-blue-700 dark:text-blue-300'
                    }`}
            />
            <span className="font-orbitron font-semibold tracking-wide whitespace-nowrap">{skill.name}</span>
            {isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-500/20 -z-10 blur-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </div>
    );
};

const MarqueeRow = ({ items, direction = "left", duration = 30, variant = "primary" }) => {
    const [isPaused, setIsPaused] = useState(false);

    const animateX = direction === "left" ? [0, -1000] : [-1000, 0];

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Gradient overlays for smooth fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-4 md:gap-6 py-3 md:py-4"
                animate={{ x: isPaused ? undefined : animateX }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: duration,
                        ease: "linear",
                    },
                }}
            >
                {[...items, ...items, ...items, ...items].map((skill, index) => (
                    <SkillPill key={index} skill={skill} index={index} variant={variant} />
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    const languages = SKILLS.find(s => s.category === "Languages")?.items || [];
    const frameworks = SKILLS.find(s => s.category === "Frameworks & Libraries")?.items || [];
    const tools = SKILLS.find(s => s.category === "Developer Tools")?.items || [];
    const secondRowItems = [...frameworks, ...tools];

    return (
        <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
            <div className="relative w-full space-y-6 md:space-y-10">

                {/* Languages - Moving Left */}
                <motion.div
                    className="space-y-3 md:space-y-4 p-4 md:p-6 rounded-2xl border-2 border-gray-300/50 dark:border-gray-700/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-lg md:text-2xl font-orbitron font-bold text-center bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
                        Languages
                    </h3>
                    <MarqueeRow items={languages} direction="left" duration={35} variant="primary" />
                </motion.div>

                {/* Frameworks & Tools - Moving Right */}
                <motion.div
                    className="space-y-3 md:space-y-4 p-4 md:p-6 rounded-2xl border-2 border-blue-300/50 dark:border-blue-700/50 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-lg md:text-2xl font-orbitron font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Frameworks & Tools
                    </h3>
                    <MarqueeRow items={secondRowItems} direction="right" duration={40} variant="secondary" />
                </motion.div>

            </div>
        </Section>
    );
};

export default Skills;
