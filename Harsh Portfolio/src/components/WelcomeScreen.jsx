import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../assets/bitmoji.png";

const WelcomeScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const greetings = [
    { text: "Hallo", language: "German" },
    { text: "स्वागत है", language: "Hindi" },
    { text: "Olà", language: "Portuguese" },
    { text: "你好", language: "Chinese" },
    { text: "Bonjour", language: "French" },
    { text: "مرحبا", language: "Arabic" },
    { text: "Hello", language: "English" },
  ];

  useEffect(() => {
    if (loading) {
      const languageTimer = setInterval(() => {
        setCurrentLanguageIndex((prevIndex) => {
          if (prevIndex >= greetings.length - 1) {
            clearInterval(languageTimer);
            setTimeout(() => {
              setLoading(false);
              if (onComplete) onComplete();
            }, 600);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 750); // Slowed down from 400ms to 750ms

      return () => clearInterval(languageTimer);
    }
  }, [loading, greetings.length, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: 'var(--bg)' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.10), transparent 70%)'
            }}
          />

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-8"
          >
            <img
              src={avatar}
              alt="Harsh avatar"
              className="w-20 h-20 rounded-2xl object-cover"
              style={{
                border: '2px solid var(--accent)',
                boxShadow: '0 0 30px rgba(249,115,22,0.25)'
              }}
            />
          </motion.div>

          {/* Greeting text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`greeting-${currentLanguageIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 font-heading text-3xl font-semibold"
              style={{ color: 'var(--text-1)' }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)', animation: 'pulseGlow 2s ease-in-out infinite' }}
              />
              {greetings[currentLanguageIndex].text}
            </motion.div>
          </AnimatePresence>

          <p className="mt-3 font-mono text-xs tracking-widest" style={{ color: 'var(--text-3)' }}>
            {greetings[currentLanguageIndex].language.toUpperCase()}
          </p>

          {/* Progress dots */}
          <div className="flex gap-1.5 mt-8">
            {greetings.map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width: i === currentLanguageIndex ? '20px' : '6px',
                  background: i === currentLanguageIndex ? 'var(--accent)' : 'var(--border-strong)',
                }}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
