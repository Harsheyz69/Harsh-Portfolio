import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeScreen = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);


    // List of "hello" in different languages with their text
    const greetings = [
        { text: "Hallo", language: "German" },
        { text: "स्वागत है", language: "Hindi" },
        { text: "Olà", language: "Portuguese" },
        { text: "你好", language: "Chinese" },
        { text: "Bonjour", language: "French" },
        { text: "ایگریم", language: "Arabic" }
    ];

    useEffect(() => {
        // Handle language transitions - with faster timing
        if (loading) {
            const languageTimer = setInterval(() => {
                setCurrentLanguageIndex((prevIndex) => {
                    // If we've gone through all languages, prepare to finish loading
                    if (prevIndex >= greetings.length - 1) {
                        clearInterval(languageTimer);

                        // Wait a moment after the last greeting before swiping up
                        setTimeout(() => {
                            setLoading(false);
                            if (onComplete) {
                                onComplete();
                            }
                        }, 500); // Wait 500ms before starting swipe

                        return prevIndex;
                    }
                    return prevIndex + 1;
                });
            }, 400); // Show each language for 400ms (was 800ms) - twice as fast

            return () => clearInterval(languageTimer);
        }
    }, [loading, greetings.length, onComplete]);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: "-100%" // Swipe up animation
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }} // Faster transition (was 1)
                    className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
                >
                    <motion.div
                        key={`greeting-${currentLanguageIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }} // Faster transition (was 0.3)
                        className="flex items-center gap-2 text-white text-2xl"
                    >
                        <span className="text-orange-500 mr-1">•</span>
                        {greetings[currentLanguageIndex].text}
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Content after loading removed - handled by App.jsx */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;
