import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "../constants";
import Section from "./Section";

const TimelineItem = ({ data, type, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`relative pl-8 md:pl-0 pb-12 md:pb-12 md:flex md:justify-between group last:pb-0 ${type === 'odd' ? 'md:flex-row-reverse' : ''
            }`}
    >
        {/* Timeline Line & Dot - Mobile: Left, Desktop: Center */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-ml-[1px]">
            <div className="absolute top-2 -left-[5px] w-3 h-3 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:shadow-[0_0_0_4px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Desktop Layout Alternate */}
        <div className={`md:w-[45%] ${type === 'even' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="bg-white dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-black dark:text-white opacity-60 font-orbitron">
                        {data.duration}
                    </span>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                        {data.role || data.institution}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {data.company || data.degree}
                    </p>
                    {data.location && (
                        <p className="text-sm text-gray-500">{data.location}</p>
                    )}

                    <div className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {typeof data.description === "string" ? (
                            <p>{data.description}</p>
                        ) : (
                            <ul className={`list-disc list-inside space-y-2 ${type === 'even' ? 'md:list-none' : ''}`}>
                                {data.description && data.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {data.coursework && (
                            <p className="italic mt-2">Relevant Coursework: {data.coursework}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Empty div for the other side on desktop */}
        <div className="hidden md:block md:w-[45%]" />
    </motion.div>
);

const Experience = () => {
    // Combine and sort entries if needed, or just display sections. 
    // Here we'll display them in two timeline blocks for structure.

    return (
        <Section id="experience" title="Journey" className="bg-white dark:bg-black">
            <div className="max-w-5xl mx-auto">

                {/* Education Timeline */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center mb-12 text-black dark:text-white font-heading">Education</h3>
                    <div className="relative">
                        {EDUCATION.map((edu, index) => (
                            <TimelineItem
                                key={index}
                                data={edu}
                                type={index % 2 === 0 ? 'even' : 'odd'}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div>
                    <h3 className="text-3xl font-bold text-center mb-12 text-black dark:text-white font-heading">Experience</h3>
                    <div className="relative">
                        {EXPERIENCE.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                data={exp}
                                type={index % 2 === 0 ? 'even' : 'odd'}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Experience;
