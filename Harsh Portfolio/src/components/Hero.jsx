import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import bitmoji from "../assets/bitmoji.png";

// Commands the terminal understands
const NAV_COMMANDS = {
  home: { label: "Home", id: "home" },
  about: { label: "About", id: "about" },
  skills: { label: "Skills", id: "skills" },
  projects: { label: "Projects", id: "projects" },
  experience: { label: "Experience", id: "experience" },
  contact: { label: "Contact", id: "contact" },
};

const HELP_TEXT = [
  "Available commands:",
  "  home        — scroll to Home",
  "  about       — scroll to About",
  "  skills      — scroll to Skills",
  "  projects    — scroll to Projects",
  "  experience  — scroll to Experience",
  "  contact     — scroll to Contact",
  "  whoami       — who am I?",
  "  hi           — say hello",
  "  start music  — play the portfolio playlist",
  "  stop music   — pause the portfolio playlist",
  "  clear        — clear terminal",
  "  help         — show this message",
];

const WHOAMI_LINES = [
  "Harsh Vardhan Sharma",
  "B.Tech CSE (AI & ML) | SRM University",
  "Building intelligent systems.",
];

const Hero = () => {
  const checkRefs = useRef([]);
  const inputRef = useRef(null);
  const termBodyRef = useRef(null);

  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdHistIdx, setCmdHistIdx] = useState(-1);

  // Staggered reveal of check marks on mount
  useEffect(() => {
    checkRefs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.style.transition = "opacity 0.25s ease";
        el.style.opacity = "1";
      }, 700 + i * 420);
    });
  }, []);

  // Auto-scroll terminal body to bottom when history changes
  useEffect(() => {
    const el = termBodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const focusInput = () => inputRef.current?.focus();

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Record in command history
    setCmdHistory((prev) => [raw, ...prev]);
    setCmdHistIdx(-1);

    let outputLines = [];
    let outputType = "normal"; // "normal" | "error" | "success"

    if (cmd === "clear") {
      setHistory([]);
      return;
    } else if (cmd === "help") {
      outputLines = HELP_TEXT;
    } else if (cmd === "hi" || cmd === "hello") {
      outputLines = ["Hello there! Thanks for visiting my portfolio. Feel free to explore!"];
      outputType = "success";
    } else if (cmd === "start music" || cmd === "play music") {
      window.dispatchEvent(new Event("play-music"));
      outputLines = ["Starting the music player..."];
      outputType = "success";
    } else if (cmd === "stop music" || cmd === "pause music") {
      window.dispatchEvent(new Event("pause-music"));
      outputLines = ["Music player paused."];
      outputType = "success";
    } else if (cmd === "whoami") {
      outputLines = WHOAMI_LINES;
      outputType = "success";
    } else if (NAV_COMMANDS[cmd]) {
      const target = document.getElementById(NAV_COMMANDS[cmd].id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        outputLines = [`Navigating to "${NAV_COMMANDS[cmd].label}"...`];
        outputType = "success";
      }
    } else {
      outputLines = [
        `bash: ${raw}: command not found`,
        `Type 'help' to see available commands.`,
      ];
      outputType = "error";
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: raw },
      { type: outputType, lines: outputLines },
    ]);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCmdHistIdx((prev) => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        if (cmdHistory[next] !== undefined) setInputVal(cmdHistory[next]);
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCmdHistIdx((prev) => {
        const next = Math.max(prev - 1, -1);
        setInputVal(next === -1 ? "" : cmdHistory[next] ?? "");
        return next;
      });
    }
  };

  return (
    <section id="home" className="relative z-10 pt-24 pb-10">
      {/* Background Image */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen z-[-1] opacity-30 dark:opacity-15 pointer-events-none"
        style={{
          background: 'url(/hero_image.jpeg) center/cover no-repeat',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow — no emoji */}
            <div className="inline-flex items-center gap-2 font-mono text-sm mb-5" style={{ color: 'var(--accent)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              HELLO, I'M
            </div>

            {/* Name */}
            <h1 className="font-brush leading-[1.03] tracking-tight mb-5"
              style={{ fontSize: 'clamp(38px, 5.4vw, 64px)', color: 'var(--text-1)' }}>
              Harsh Vardhan
              <br />
              <span className="grad-text">Sharma</span>
            </h1>

            {/* Role */}
            <div className="font-heading font-medium mb-5" style={{
              fontSize: 'clamp(17px, 2vw, 21px)',
              color: 'var(--text-2)'
            }}>
              B.Tech CSE{" "}
              <span style={{ color: 'var(--accent-bright)' }}>(AI &amp; ML)</span>{" "}
              Student
            </div>

            {/* Lede */}
            <p className="text-base mb-8 max-w-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Passionate about building intelligent systems and solving real-world problems
              using AI, ML, and modern technologies. Always learning. Always building.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-3 mb-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm text-zinc-900 grad-bg transition-all duration-200 hover:-translate-y-0.5"
                style={{ boxShadow: '0 10px 26px -10px rgba(249,115,22,0.5)' }}
              >
                View My Work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                download="Harsh_Vardhan_Sharma_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-1)',
                  background: 'rgba(255,255,255,0.02)'
                }}
              >
                Resume
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" />
                </svg>
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>, label: "India" },
                { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4.72L12 21l7-3.1v-4.72L12 17l-7-3.82z" /></svg>, label: "B.Tech CSE (AI & ML)" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3.5 py-2 rounded-full font-mono text-xs"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}>
                  {icon}
                  {label}
                </div>
              ))}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full font-mono text-xs"
                style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--green)', boxShadow: '0 0 7px var(--green)', animation: 'pulseGlow 2s ease-in-out infinite' }} />
                Open to Opportunities
              </div>
            </div>
          </motion.div>

          {/* ── Right Interactive Terminal ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={focusInput}
            className="rounded-2xl overflow-hidden cursor-text select-none"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              boxShadow: '0 30px 60px -25px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.04)'
            }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3"
              style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full block" style={{ background: '#F0605A' }} />
                <span className="w-3 h-3 rounded-full block" style={{ background: '#F0B93B' }} />
                <span className="w-3 h-3 rounded-full block" style={{ background: '#43D19E' }} />
              </div>
              <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>zsh — harsh@portfolio</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--accent)' }}>
                interactive
              </span>
            </div>

            {/* Body (scrollable) */}
            <div
              ref={termBodyRef}
              className="px-5 py-5 font-mono text-[13px] leading-[1.9] overflow-y-auto"
              style={{ minHeight: '300px', maxHeight: '380px', color: 'var(--text-2)' }}
            >
              {/* Static initial output */}
              <div style={{ color: 'var(--green)' }}>
                <span style={{ color: 'var(--accent-bright)' }}>harsh@portfolio ~ %</span>{" "}
                <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>whoami</span>
              </div>
              {["AI & ML enthusiast", "Problem solver", "Builder"].map((line) => (
                <div key={line} style={{ color: 'var(--text-2)' }}>&gt; {line}</div>
              ))}
              <div style={{ color: 'var(--text-3)', marginTop: '2px', fontSize: '11px' }}>
                # Try typing a command below — e.g. "projects" or "help"
              </div>
              <br />
              <div style={{ color: 'var(--green)' }}>
                <span style={{ color: 'var(--accent-bright)' }}>harsh@portfolio ~ %</span>{" "}
                <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>cat goals.txt</span>
              </div>
              <div style={{ color: 'var(--accent)' }}># Current Goals</div>
              {[
                "Build impactful ML projects",
                "Deepen understanding of AI systems",
                "Contribute to open source",
                "Learn. Build. Share.",
              ].map((goal, i) => (
                <div key={goal} style={{ color: 'var(--text-2)' }}>
                  <span
                    ref={(el) => (checkRefs.current[i] = el)}
                    style={{ color: 'var(--green)', marginRight: '6px', opacity: 0 }}
                  >
                    [✓]
                  </span>
                  {goal}
                </div>
              ))}
              <br />

              {/* Dynamic command history */}
              {history.map((entry, i) => {
                if (entry.type === "input") {
                  return (
                    <div key={i} style={{ color: 'var(--green)' }}>
                      <span style={{ color: 'var(--accent-bright)' }}>harsh@portfolio ~ %</span>{" "}
                      <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>{entry.text}</span>
                    </div>
                  );
                }
                if (entry.type === "error") {
                  return (
                    <div key={i}>
                      {entry.lines.map((line, j) => (
                        <div key={j} style={{ color: j === 0 ? 'var(--red)' : 'var(--text-3)', fontSize: j === 1 ? '12px' : undefined }}>
                          {j === 0 ? `bash: ${history[i - 1]?.text}: command not found` : line}
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <div key={i}>
                    {entry.lines.map((line, j) => (
                      <div key={j} style={{ color: entry.type === "success" ? 'var(--green)' : 'var(--text-2)' }}>
                        {line}
                      </div>
                    ))}
                  </div>
                );
              })}

              {/* Live input prompt */}
              <div className="flex items-center mt-1">
                <span style={{ color: 'var(--accent-bright)', whiteSpace: 'nowrap' }}>harsh@portfolio ~ %&nbsp;</span>
                <input
                  ref={inputRef}
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none font-mono text-[13px]"
                  style={{ color: 'var(--text-1)', fontWeight: 600, caretColor: 'var(--accent-bright)', minWidth: 0 }}
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal input"
                />
                {inputVal.length === 0 && <span className="term-cursor" />}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 font-mono text-[11px]"
              style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--border)', color: 'var(--text-3)' }}>
              <span>~/portfolio</span>
              <span className="flex items-center gap-1.5" style={{ color: 'var(--green)' }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)', animation: 'pulseGlow 2s ease-in-out infinite' }} />
                ONLINE · click to type
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2.5 pt-14 pb-4 font-mono text-xs tracking-widest" style={{ color: 'var(--text-3)' }}>
          SCROLL TO EXPLORE
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ animation: 'bob 2s ease-in-out infinite' }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
