import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import Section from "./Section";

const Skills = () => {
    // Extract specific categories
    const languages = SKILLS.find(s => s.category === "Languages")?.items || [];
    const frameworks = SKILLS.find(s => s.category === "Frameworks & Libraries")?.items || [];
    const tools = SKILLS.find(s => s.category === "Developer Tools")?.items || [];

    // Combine frameworks and tools for the second row if desired, or just frameworks
    const secondRowItems = [...frameworks, ...tools];

    return (
        <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
            <div className="relative w-full space-y-12">

                {/* Languages - Moving Left */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center text-gray-500 dark:text-gray-400">Languages</h3>
                    <div className="flex overflow-hidden mask-image-linear-gradient">
                        <motion.div
                            className="flex gap-8 whitespace-nowrap py-4"
                            animate={{ x: [0, -1000] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...languages, ...languages, ...languages, ...languages].map((skill, index) => (
                                <div
                                    key={index}
                                    className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-lg shadow-sm border border-gray-100 dark:border-gray-700 flex-shrink-0"
                                >
                                    {skill}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Frameworks & Tools - Moving Right */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center text-gray-500 dark:text-gray-400">Frameworks & Tools</h3>
                    <div className="flex overflow-hidden mask-image-linear-gradient">
                        <motion.div
                            className="flex gap-8 whitespace-nowrap py-4"
                            animate={{ x: [-1000, 0] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 35,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...secondRowItems, ...secondRowItems, ...secondRowItems].map((skill, index) => (
                                <div
                                    key={index}
                                    className="px-6 py-3 rounded-full bg-primary/10 text-dark dark:text-primary font-medium text-lg shadow-sm border border-primary/20 flex-shrink-0"
                                >
                                    {skill}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Skills;
