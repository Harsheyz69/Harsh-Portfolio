import { motion } from "framer-motion";
import { useState } from "react";
import { SKILLS } from "../constants";
import Section from "./Section";

const SkillPill = ({ skill, index }) => {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex items-center gap-2 px-3 py-2 rounded-xl flex-shrink-0 font-mono text-xs font-medium cursor-pointer transition-all duration-300"
      style={{
        background: hovered ? 'rgba(249,115,22,0.08)' : 'var(--surface-2)',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.4)' : 'var(--border)'}`,
        color: hovered ? 'var(--accent-bright)' : 'var(--text-2)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 8px 20px -8px rgba(249,115,22,0.25)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        className="w-4 h-4 flex-shrink-0 transition-all duration-300"
        style={{
          color: hovered ? 'var(--accent)' : 'var(--text-3)',
          transform: hovered ? 'scale(1.1) rotate(8deg)' : 'none',
        }}
      />
      <span className="whitespace-nowrap tracking-wide">{skill.name}</span>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "left", duration = 30 }) => {
  const [paused, setPaused] = useState(false);
  const x = direction === "left" ? [0, -1000] : [-1000, 0];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }} />

      <motion.div
        className="flex gap-3 py-2"
        animate={{ x: paused ? undefined : x }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items, ...items, ...items].map((skill, i) => (
          <SkillPill key={i} skill={skill} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="Technical Skills">
      {/* Grid of category boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {SKILLS.map((group, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl p-5 space-y-3"
              style={{
                background: isEven ? 'var(--surface)' : 'var(--surface-2)',
                border: `1px solid ${isEven ? 'rgba(249,115,22,0.2)' : 'var(--border)'}`,
              }}
            >
              <h3
                className="font-heading font-semibold text-base text-center"
                style={{ color: isEven ? 'var(--accent-bright)' : 'var(--text-1)' }}
              >
                {group.category}
              </h3>
              <MarqueeRow
                items={group.items}
                direction={isEven ? "left" : "right"}
                duration={35 + index * 5}
              />
            </motion.div>
          );
        })}
      </div>

      {/* GitHub Streak */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <h3 className="font-heading font-semibold text-center mb-5" style={{ color: 'var(--text-1)' }}>
            Coding Activity
          </h3>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=harsheyz69&theme=dark&hide_border=true&background=111113&ring=F97316&fire=FB923C&currStreakLabel=F97316"
            alt="GitHub Streak Stats"
            className="w-full max-w-lg"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
