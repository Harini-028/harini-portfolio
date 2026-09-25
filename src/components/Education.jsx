function Education() {
  const educationItems = [
    {
      title: "B.E. Computer Science and Engineering",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      detail: "CGPA: 8.07",
    },
    {
      title: "Higher Secondary",
      institution: "K R P Matric Higher Secondary School",
      detail: "83%",
    },
    {
      title: "Secondary School",
      institution: "K R P Matric Higher Secondary School",
      detail: "84%",
    },
  ];

  return (
    <section className="section-shell education-section" aria-labelledby="education-heading">
      <div className="section-heading">
        <span>Education</span>
        <h2 id="education-heading">Academic Journey</h2>
      </div>

      <div className="timeline">
        {educationItems.map((item, index) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card panel-card">
              <span className="timeline-year">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <strong>{item.detail}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
