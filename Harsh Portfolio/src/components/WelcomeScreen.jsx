import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "Hola", lang: "Spanish" },
    { text: "Bonjour", lang: "French" },
    { text: "Ciao", lang: "Italian" },
    { text: "Guten Tag", lang: "German" },
    { text: "你好", lang: "Chinese" },
    { text: "Olá", lang: "Portuguese" },
    { text: "こんにちは", lang: "Japanese" }
];

const WelcomeScreen = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Cycle through greetings
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === greetings.length - 1) {
                    clearInterval(interval);
                    setTimeout(onComplete, 1000); // Wait 1s after last greeting then finish
                    return prev;
                }
                return prev + 1;
            });
        }, 1200); // 1200ms per greeting for a very slow, cinematic feel

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-wider ${greetings[index].lang === "English" ? "font-pacifico" : "font-sans"
                        }`}>
                        {greetings[index].text}
                    </h1>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default WelcomeScreen;
