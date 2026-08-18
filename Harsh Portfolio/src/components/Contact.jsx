import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Section from "./Section";
import { Mail, MapPin, Phone } from "lucide-react";

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  background: 'var(--surface-2)',
  border: '1px solid var(--border)',
  color: 'var(--text-1)',
  outline: 'none',
  fontSize: '14px',
  transition: 'border-color 0.2s',
  fontFamily: 'Inter, sans-serif',
};

const InputField = ({ id, label, type = "text", placeholder, rows }) => {
  const handleFocus = (e) => { e.target.style.borderColor = 'var(--accent)'; };
  const handleBlur = (e) => { e.target.style.borderColor = 'var(--border)'; };

  return (
    <div>
      <label htmlFor={id} className="block font-mono text-xs tracking-wider mb-2" style={{ color: 'var(--text-2)' }}>
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: 'var(--text-1)' }}>
            Let's <span className="grad-text">Connect</span>
          </h3>
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-2)' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-5">
            {[
              { Icon: Mail, label: "Email", value: HERO_CONTENT.email, href: `mailto:${HERO_CONTENT.email}` },
              { Icon: Phone, label: "Phone", value: HERO_CONTENT.phone, href: `tel:${HERO_CONTENT.phone}` },
              { Icon: MapPin, label: "Location", value: HERO_CONTENT.location },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--accent-bright)' }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs tracking-wider" style={{ color: 'var(--text-3)' }}>{label}</p>
                  {href ? (
                    <a href={href} className="font-medium transition-colors hover:text-orange-400" style={{ color: 'var(--text-1)' }}>
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium" style={{ color: 'var(--text-1)' }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 p-8 rounded-2xl"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <InputField id="name" label="NAME" placeholder="Your Name" />
          <InputField id="email" label="EMAIL" type="email" placeholder="your@email.com" />
          <InputField id="message" label="MESSAGE" placeholder="Your message..." rows={4} />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-sm text-zinc-900 grad-bg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{ boxShadow: '0 10px 26px -8px rgba(249,115,22,0.45)' }}
          >
            Send Message →
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
