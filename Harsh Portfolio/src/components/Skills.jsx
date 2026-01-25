import { motion } from "framer-motion";
import { useState } from "react";
import { SKILLS } from "../constants";
import Section from "./Section";

const SkillPill = ({ skill, index, variant = "primary" }) => {
    const Icon = skill.icon;
    const [isHovered, setIsHovered] = useState(false);

    const baseClasses = "group relative px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-lg md:rounded-xl font-medium text-[10px] sm:text-xs md:text-sm shadow-lg border backdrop-blur-sm flex items-center gap-1.5 md:gap-2 flex-shrink-0 transition-all duration-300 cursor-pointer";

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
                className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-all duration-300 ${isHovered
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
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-3 md:gap-4 py-2 md:py-3"
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
    return (
        <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-900/50">
            {/* Grid of Category Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                {SKILLS.map((skillGroup, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={skillGroup.category}
                            className={`space-y-2 md:space-y-4 p-3 md:p-5 rounded-xl border-2 shadow-lg ${isEven
                                ? "border-gray-300/50 dark:border-gray-700/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
                                : "border-blue-300/50 dark:border-blue-700/50 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm"
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className={`text-lg md:text-xl font-orbitron font-bold text-center ${isEven
                                ? "bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent"
                                : "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                                }`}>
                                {skillGroup.category}
                            </h3>


                            <MarqueeRow items={skillGroup.items} direction={isEven ? "left" : "right"} duration={35 + index * 5} variant={isEven ? "primary" : "secondary"} />
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
