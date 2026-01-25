import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Home, User, Briefcase, Code, Zap, Mail } from "lucide-react";
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
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Projects", href: "#projects", icon: Code },
        { name: "Skills", href: "#skills", icon: Zap },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    return (
        <>
            {/* Desktop Dock (Left Side) */}
            <nav className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-8 py-8 px-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl z-50">
                {/* Logo / Home */}
                <a href="#home" className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:scale-110 transition-transform shadow-sm">
                    <span className="font-bold font-heading text-lg">H</span>
                </a>

                {/* Navigation Icons */}
                <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative group p-3 rounded-xl text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white opacity-60 hover:opacity-100 transition-all duration-300"
                            aria-label={link.name}
                        >
                            <link.icon size={24} />

                            {/* Tooltip */}
                            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl">
                                {link.name}
                                {/* Arrow */}
                                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-black dark:bg-white rotate-45"></span>
                            </span>
                        </a>
                    ))}
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white transition-all hover:scale-110 shadow-sm"
                    aria-label="Toggle Theme"
                >
                    {theme === "dark" ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
                </button>
            </nav>

            {/* Mobile Navbar (Top) */}
            <nav
                className={`md:hidden fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${isScrolled
                    ? "top-4 w-[90%]"
                    : "top-4 w-[90%]"
                    } bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10`}
            >
                <div className="px-6">
                    <div className="flex items-center justify-between h-16">
                        <a href="#" className="font-bold font-heading text-xl text-black dark:text-white">
                            H.
                        </a>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                            >
                                {theme === "dark" ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
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
                            className="bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-b-3xl overflow-hidden border-t dark:border-white/10"
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 p-3 rounded-xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
                                    >
                                        <link.icon size={20} />
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
