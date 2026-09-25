const skillGroups = [
  {
    icon: "☕",
    title: "Programming",
    items: ["Java"],
  },
  {
    icon: "🌐",
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    icon: "🗄️",
    title: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    icon: "🔧",
    title: "Tools",
    items: ["Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="section-heading">
        <span>Technical Skills</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card panel-card" key={group.title}>
            <div className="skill-icon" aria-hidden="true">
              {group.icon}
            </div>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;