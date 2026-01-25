import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-black dark:text-white"
                    >
                        {title}
                        <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
                    </motion.h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
