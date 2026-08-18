import { HERO_CONTENT } from "../constants";

const Footer = () => {
  return (
    <footer
      className="relative z-10 py-8"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg grad-bg flex items-center justify-center font-heading font-bold text-xs text-zinc-900">
            HV
          </div>
          <p className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} {HERO_CONTENT.name}. All rights reserved.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          {HERO_CONTENT.socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent-bright)';
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-3)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <social.icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
