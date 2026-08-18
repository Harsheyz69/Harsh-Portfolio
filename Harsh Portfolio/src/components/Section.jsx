import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 relative z-10 ${className}`} style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5 mb-12"
          >
            {/* Icon box */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                border: '1px solid var(--border-strong)',
                color: 'var(--accent-bright)',
                background: 'rgba(249,115,22,0.07)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <h2 className="font-mono text-sm font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--text-2)' }}>
              {title}
            </h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
