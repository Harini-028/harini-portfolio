const socialLinks = [
  { label: "GitHub", href: "https://github.com/HariniRV" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harini-r-v" },
  { label: "Email", href: "mailto:harinirv.dev@gmail.com" },
];

const techBadges = ["React", "Node.js", "Express", "MongoDB"];

function Home() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-visual-bg" aria-hidden="true">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
        <span className="grid-overlay" />
      </div>

      <div className="hero-content">
        <span className="eyebrow">AVAILABLE FOR INTERNSHIPS & PLACEMENT</span>

        <p className="intro-line">Hello, I&apos;m</p>

        <h1>Harini R V</h1>

        <h2>MERN Stack Developer</h2>

        <p className="hero-description">
          Computer Science and Engineering student specializing in MERN stack
          development, building responsive, user-focused and scalable web
          applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>
          <a href="/Harini_Resume.pdf" download className="secondary-btn">
            Download Resume
          </a>
        </div>

        <div className="social-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="profile-panel" aria-label="Developer profile card">
        <div className="profile-card">
          <div className="profile-avatar">HR</div>
          <div className="profile-meta">
            <h3>Harini R V</h3>
            <p>MERN Stack Developer</p>
          </div>
          <div className="profile-badges" aria-label="Technology stack">
            {techBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;