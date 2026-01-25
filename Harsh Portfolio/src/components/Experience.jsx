import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "../constants";
import Section from "./Section";

const TimelineItem = ({ data, isLast }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative pl-8 pb-12 last:pb-0"
    >
        {/* Timeline Line (border-l handled by parent?) No, per item relative */}
        {/* Actually, Shadcn timeline usually uses a continuous border on the PARENT list */}

        {/* Dot on the Line */}
        <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black ring-4 ring-white dark:ring-black" />

        <div className="flex flex-col gap-2">
            {/* Date/Duration */}
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                {data.duration}
            </span>

            {/* Content Card (Minimal) */}
            <div>
                <h3 className="text-lg font-bold text-black dark:text-white">
                    {data.role || data.institution}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {data.company || data.degree}
                </p>
                {data.location && (
                    <p className="text-xs text-gray-400 mt-1">{data.location}</p>
                )}

                <div className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {typeof data.description === "string" ? (
                        <p>{data.description}</p>
                    ) : (
                        <ul className="list-disc list-inside space-y-1">
                            {data.description && data.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {data.coursework && (
                        <p className="italic mt-2 text-xs">Relevant Coursework: {data.coursework}</p>
                    )}
                </div>
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <Section id="experience" title="Journey" className="bg-white dark:bg-black">
            <div className="max-w-3xl mx-auto px-4">

                {/* Timeline Container */}
                <div className="space-y-16">

                    {/* Education Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-black dark:text-white font-heading">Education</h3>
                        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-0">
                            {EDUCATION.map((edu, index) => (
                                <TimelineItem
                                    key={index}
                                    data={edu}
                                    isLast={index === EDUCATION.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-black dark:text-white font-heading">Experience</h3>
                        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-0">
                            {EXPERIENCE.map((exp, index) => (
                                <TimelineItem
                                    key={index}
                                    data={exp}
                                    isLast={index === EXPERIENCE.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Experience;
