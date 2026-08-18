import { useRef } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";

const cardAccents = [
  { bg: 'rgba(249,115,22,0.13)', color: '#FB923C' },
  { bg: 'rgba(52,211,153,0.13)', color: '#34D399' },
  { bg: 'rgba(251,191,36,0.13)', color: '#FCD34D' },
];

const projectEmojis = ["🧠", "📈", "📷"];

const ProjectCard = ({ title, tech, description, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", (e.clientX - r.left) + "px");
    card.style.setProperty("--my", (e.clientY - r.top) + "px");
  };

  const accent = cardAccents[index % cardAccents.length];
  const emoji = projectEmojis[index % projectEmojis.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-6 overflow-hidden flex flex-col h-full group transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      {/* Spotlight glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: 'radial-gradient(400px circle at var(--mx, 50%) var(--my, 0%), rgba(249,115,22,0.09), transparent 60%)',
        }}
      />

      {/* Card top row */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: accent.bg, color: accent.color }}
        >
          {emoji}
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-bright)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
          >
            <Github size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full transition-all"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-1)'; e.currentTarget.style.transform = 'translate(2px,-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.transform = 'none'; }}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-[18px] mb-3 relative z-10" style={{ color: 'var(--text-1)' }}>
        {title}
      </h3>

      {/* Description bullets */}
      <ul className="space-y-1.5 flex-grow mb-5 relative z-10">
        {description.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ color: 'var(--text-2)' }}>
            <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
            {item}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md"
            style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              color: 'var(--text-2)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
