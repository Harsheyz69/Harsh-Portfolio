import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "../constants";
import Section from "./Section";
 
const ExperienceCard = ({ title, subtitle, duration, location, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors"
    >
        <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
                <h3 className="text-xl font-bold text-dark dark:text-light">{title}</h3>
                <p className="text-tertiary dark:text-primary font-medium">{subtitle}</p>
            </div>
            <div className="text-right md:text-left mt-2 md:mt-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
                {location && <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>}
            </div>
        </div>
        {typeof description === "string" ? (
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        ) : (
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
    </motion.div>
);

const Experience = () => {
    return (
        <Section id="experience" title="Experience & Education" className="bg-gray-50 dark:bg-gray-900/50">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-center mb-6 text-dark dark:text-light">Education</h3>
                    {EDUCATION.map((edu, index) => (
                        <ExperienceCard
                            key={index}
                            title={edu.institution}
                            subtitle={edu.degree}
                            duration={edu.duration}
                            location={edu.location}
                            description={edu.coursework ? `Relevant Coursework: ${edu.coursework}` : ""}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-center mb-6 text-dark dark:text-light">Experience</h3>
                    {EXPERIENCE.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.role}
                            subtitle={exp.company}
                            duration={exp.duration}
                            description={exp.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
