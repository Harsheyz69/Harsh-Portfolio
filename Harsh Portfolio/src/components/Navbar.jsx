import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${isScrolled
                ? "top-4 w-[90%] max-w-7xl"
                : "top-4 w-[90%] max-w-7xl"
                } bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl shadow-lg border border-white/20 dark:border-white/10`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl md:text-2xl font-heading font-black text-tertiary dark:text-primary tracking-tight">
                            Harsh Vardhan Sharma
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-dark dark:text-light hover:text-secondary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary dark:bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 border-b-4 border-gray-300 dark:border-gray-600 active:border-b-0 active:translate-y-1 transition-all duration-100 text-tertiary dark:text-primary hover:bg-gray-200 dark:hover:bg-gray-700"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-tertiary" />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-4 rounded-xl bg-gray-100 dark:bg-gray-800 border-b-4 border-gray-300 dark:border-gray-600 active:border-b-0 active:translate-y-1 transition-all duration-100 text-tertiary dark:text-primary hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-tertiary" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-dark dark:text-light hover:text-secondary dark:hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-b-3xl border-t border-white/20 dark:border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-dark dark:text-light hover:text-secondary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-3 rounded-xl text-base font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
