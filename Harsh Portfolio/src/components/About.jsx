import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";
import Section from "./Section";

const About = () => {
    return (
        <Section id="about" title="About Me">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center"
            >
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {ABOUT_CONTENT}
                </p>
            </motion.div>
        </Section>
    );
};

export default About;
