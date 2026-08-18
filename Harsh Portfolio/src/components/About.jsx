import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";
import Section from "./Section";
import MusicPlayer from "./MusicPlayer";

const About = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        {/* Glass card with left orange border */}
        <div
          className="rounded-2xl p-8 relative overflow-hidden"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          {/* Subtle corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top right, rgba(249,115,22,0.07), transparent 65%)'
            }}
          />

          <p className="text-lg leading-relaxed relative z-10" style={{ color: 'var(--text-2)' }}>
            {ABOUT_CONTENT}
          </p>

          {/* Quick stats */}
          <div className="mt-8 pt-6 flex flex-wrap gap-8 border-t" style={{ borderColor: 'var(--border)' }}>
            {[
              { value: "1+", label: "Year of Coding" },
              { value: "5+", label: "Projects Built" },
              { value: "AI/ML", label: "Specialization" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-heading font-bold text-2xl grad-text">{value}</div>
                <div className="font-mono text-xs tracking-wider mt-0.5" style={{ color: 'var(--text-3)' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Playlist Section */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            <h4 className="font-mono text-xs tracking-wider mb-4" style={{ color: 'var(--text-3)' }}>
              WHAT I'M LISTENING TO
            </h4>
            <MusicPlayer />
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
