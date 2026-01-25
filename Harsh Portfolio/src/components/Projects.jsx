import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ title, tech, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
        <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <div className="flex gap-3">
                    <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-primary transition-colors">
                        <Github size={22} />
                    </a>
                    <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-primary transition-colors">
                        <ExternalLink size={22} />
                    </a>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((t, i) => (
                    <span
                        key={i}
                        className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary dark:text-primary border border-primary/30 dark:border-primary/50"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <ul className="space-y-3 flex-grow">
                {description.map((item, i) => (
                    <li key={i} className="text-base text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-black dark:text-white"
                >
                    Featured Projects
                    <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
