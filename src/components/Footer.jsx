const quickLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Resume",
  "Contact",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/HariniRV" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harini-r-v" },
  { label: "Email", href: "mailto:harinirv.dev@gmail.com" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Harini R V</h3>
            <p>MERN Stack Developer</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            {quickLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>

          <div className="footer-social">
            <h4>Social</h4>
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

        <div className="footer-bottom">
          © 2026 Harini R V. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
