import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Section from "./Section";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-dark dark:text-light">Let's Connect</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                            <div className="p-3 bg-primary/10 rounded-full text-dark dark:text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <a href={`mailto:${HERO_CONTENT.email}`} className="font-medium hover:text-primary transition-colors">
                                    {HERO_CONTENT.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                            <div className="p-3 bg-primary/10 rounded-full text-dark dark:text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                <p className="font-medium">{HERO_CONTENT.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                            <div className="p-3 bg-primary/10 rounded-full text-dark dark:text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p className="font-medium">{HERO_CONTENT.location}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full btn-soft bg-primary text-white hover:bg-primary/90 transform hover:scale-[1.02]"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
