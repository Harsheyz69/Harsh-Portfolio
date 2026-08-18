import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCE } from "../constants";
import Section from "./Section";

const TimelineItem = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-8 pb-10 last:pb-0"
  >
    {/* Glowing orange dot */}
    <div
      className="absolute left-[-6px] top-1 w-3 h-3 rounded-full"
      style={{
        background: 'var(--accent)',
        boxShadow: '0 0 10px rgba(249,115,22,0.6)',
        border: '2px solid var(--bg)',
        outline: '1px solid var(--accent)',
      }}
    />

    {/* Duration */}
    <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
      {data.duration}
    </span>

    {/* Content */}
    <div className="mt-2">
      <h3 className="font-heading font-semibold text-lg" style={{ color: 'var(--text-1)' }}>
        {data.role || data.institution}
      </h3>
      <p className="font-medium mt-0.5" style={{ color: 'var(--accent-bright)' }}>
        {data.company || data.degree}
      </p>
      {data.location && (
        <p className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>{data.location}</p>
      )}
      <div className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
        {typeof data.description === "string" ? (
          <p>{data.description}</p>
        ) : (
          <ul className="space-y-1">
            {data.description && data.description.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                {item}
              </li>
            ))}
          </ul>
        )}
        {data.coursework && (
          <p className="italic mt-2 text-xs" style={{ color: 'var(--text-3)' }}>
            Relevant Coursework: {data.coursework}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <Section id="experience" title="Journey">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="font-heading font-bold text-xl mb-8" style={{ color: 'var(--text-1)' }}>
            Education
          </h3>
          <div
            className="relative ml-3 space-y-0"
            style={{ borderLeft: '1px solid var(--border-strong)' }}
          >
            {EDUCATION.map((edu, index) => (
              <TimelineItem key={index} data={edu} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-heading font-bold text-xl mb-8" style={{ color: 'var(--text-1)' }}>
            Experience
          </h3>
          <div
            className="relative ml-3 space-y-0"
            style={{ borderLeft: '1px solid var(--border-strong)' }}
          >
            {EXPERIENCE.map((exp, index) => (
              <TimelineItem key={index} data={exp} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
