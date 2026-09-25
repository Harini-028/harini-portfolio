function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-heading">
        <span>About Me</span>
        <h2>About Me</h2>
        <p>Building modern web experiences with technology and creativity.</p>
      </div>

      <div className="about-grid">
        <div className="about-intro panel-card">
          <h3>Who I am</h3>
          <p>
            I am Harini R V, a Computer Science and Engineering student with a
            strong interest in full-stack development, product thinking, and
            building user-friendly digital experiences.
          </p>
          <p>
            I enjoy turning ideas into practical web solutions by combining
            clean UI design, scalable backend logic, and efficient problem
            solving. My goal is to create applications that are both functional
            and impactful.
          </p>
        </div>

        <div className="about-details panel-card">
          <div className="detail-item">
            <span className="detail-label">Degree</span>
            <strong>B.E. Computer Science &amp; Engineering</strong>
          </div>
          <div className="detail-item">
            <span className="detail-label">CGPA</span>
            <strong>8.07</strong>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location</span>
            <strong>India</strong>
          </div>
          <div className="detail-item">
            <span className="detail-label">Career Focus</span>
            <strong>MERN Stack Development</strong>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <strong>8.07</strong>
              <span>CGPA</span>
            </div>
            <div className="stat-card">
              <strong>9+</strong>
              <span>Projects</span>
            </div>
            <div className="stat-card">
              <strong>MERN</strong>
              <span>Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;