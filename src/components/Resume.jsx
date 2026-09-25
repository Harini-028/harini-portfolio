function Resume() {
  return (
    <section id="resume" className="resume-section section-shell">
      <div className="section-heading">
        <span>Resume</span>
        <h2>Resume</h2>
        <p>
          Explore my education, technical skills, projects and professional
          experience.
        </p>
      </div>

      <div className="resume-actions">
        <a
          href="/Harini_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="primary-btn"
        >
          View Resume
        </a>
        <a href="/Harini_Resume.pdf" download className="secondary-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;