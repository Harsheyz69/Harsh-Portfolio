import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Home, User, Briefcase, Code, Zap, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../assets/bitmoji.png";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const current = sections.find((s) => {
        const el = document.getElementById(s);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home, id: "home" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Experience", href: "#experience", icon: Briefcase, id: "experience" },
    { name: "Projects", href: "#projects", icon: Code, id: "projects" },
    { name: "Skills", href: "#skills", icon: Zap, id: "skills" },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" },
  ];

  return (
    <>
      {/* ── Desktop Left Dock ── */}
      <nav
        className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6 py-6 px-3 rounded-2xl z-50 glass-nav shadow-2xl"
        style={{ border: '1px solid var(--border)' }}
      >
        {/* Avatar logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src={avatar}
            alt="Harsh avatar"
            className="w-10 h-10 rounded-xl object-cover ring-2 transition-all duration-200 hover:scale-110"
            style={{ ringColor: 'var(--accent)' , border: '2px solid var(--accent)' }}
          />
        </a>

        {/* Divider */}
        <div className="w-6 h-px" style={{ background: 'var(--border-strong)' }} />

        {/* Nav icons */}
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.name}
                className="relative group p-2.5 rounded-xl transition-all duration-200"
                style={{
                  background: isActive ? 'rgba(249,115,22,0.12)' : 'transparent',
                  color: isActive ? 'var(--accent-bright)' : 'var(--text-3)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(249,115,22,0.07)';
                    e.currentTarget.style.color = 'var(--text-1)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-3)';
                  }
                }}
              >
                <link.icon size={20} />

                {/* Active dot indicator */}
                {isActive && (
                  <span
                    className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-1 h-4 rounded-full"
                    style={{ background: 'var(--grad)' }}
                  />
                )}

                {/* Tooltip */}
                <span
                  className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-wider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none"
                  style={{
                    background: 'var(--surface-2)',
                    color: 'var(--text-1)',
                    border: '1px solid var(--border-strong)',
                  }}
                >
                  {link.name}
                  <span
                    className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border-strong)', borderRight: 'none', borderTop: 'none' }}
                  />
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-6 h-px" style={{ background: 'var(--border-strong)' }} />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
          style={{
            background: 'rgba(249,115,22,0.08)',
            border: '1px solid var(--border)',
            color: 'var(--accent-bright)',
          }}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* ── Mobile Top Bar ── */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 z-50 px-5 py-3 flex items-center justify-between glass-nav"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <a href="#home">
          <img src={avatar} alt="Harsh avatar" className="w-9 h-9 rounded-xl object-cover"
            style={{ border: '2px solid var(--accent)' }} />
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl"
            style={{ color: 'var(--accent-bright)', background: 'rgba(249,115,22,0.08)' }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl"
            style={{ color: 'var(--text-2)' }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 overflow-hidden"
            style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-mono text-sm tracking-wide transition-colors"
                  style={{
                    color: activeSection === link.id ? 'var(--accent-bright)' : 'var(--text-2)',
                    background: activeSection === link.id ? 'rgba(249,115,22,0.08)' : 'transparent',
                  }}
                >
                  <link.icon size={16} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
