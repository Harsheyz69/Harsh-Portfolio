import { HERO_CONTENT } from "../constants";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    © {new Date().getFullYear()} {HERO_CONTENT.name}. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    {HERO_CONTENT.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-secondary dark:hover:text-primary transition-colors"
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
