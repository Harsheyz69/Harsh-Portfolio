import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleSyncMute = (e) => setIsMuted(e.detail);
    window.addEventListener('sync-mute', handleSyncMute);
    return () => window.removeEventListener('sync-mute', handleSyncMute);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const toggleMute = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    window.dispatchEvent(new CustomEvent('sync-mute', { detail: newState }));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} theme={theme} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="min-h-screen transition-colors duration-300" style={{ background: "var(--bg)" }}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="md:pl-32">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />

          {/* Global Mute Button */}
          <button
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ 
              background: 'var(--surface)', 
              border: '1px solid var(--border)', 
              color: 'var(--text-1)',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
            }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      )}
    </>
  );
}

export default App;
