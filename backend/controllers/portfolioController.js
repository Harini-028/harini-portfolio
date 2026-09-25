const getPortfolio = (req, res) => {
  const portfolio = {
    name: "Harini R V",

    role: "MERN Stack Developer",

    about:
      "Computer Science and Engineering student interested in full-stack web development and software development.",

    education: {
      degree: "B.E. Computer Science and Engineering",
      college: "Sri Shakthi Institute of Engineering and Technology",
      cgpa: "8.07"
    },

    skills: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Git",
      "GitHub"
    ],

    projects: [
      {
        title: "Local Commerce & Essential Service Platform",
        description:
          "A platform connecting customers with local shops and essential service providers.",
        technologies: ["Flutter", "Firebase"]
      },

      {
        title: "AI-Powered Personal Finance Manager",
        description:
          "A finance management application for tracking income, expenses, budgets and AI-based financial insights.",
        technologies: ["MERN", "MongoDB", "AI"]
      },

      {
        title: "AI-Based Personalized News Summarizer",
        description:
          "An AI-powered application that summarizes news articles and presents important information.",
        technologies: ["AI", "JavaScript", "Web"]
      }
    ]
  };

  res.status(200).json({
    success: true,
    data: portfolio
  });
};


const getProjects = (req, res) => {

  const projects = [
    {
      id: 1,
      title: "Local Commerce & Essential Service Platform",
      description:
        "Platform connecting customers with local shops and essential services.",
      technologies: ["Flutter", "Firebase"]
    },

    {
      id: 2,
      title: "AI-Powered Personal Finance Manager",
      description:
        "MERN-based application for managing income, expenses and budgets.",
      technologies: ["React", "Node.js", "MongoDB", "AI"]
    },

    {
      id: 3,
      title: "AI-Based Personalized News Summarizer",
      description:
        "AI-powered application for summarizing news articles.",
      technologies: ["JavaScript", "AI"]
    }
  ];

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
};


const getSkills = (req, res) => {

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub"
  ];

  res.status(200).json({
    success: true,
    data: skills
  });
};


const getEducation = (req, res) => {

  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution:
        "Sri Shakthi Institute of Engineering and Technology",
      result: "CGPA: 8.07"
    },

    {
      degree: "Higher Secondary",
      institution:
        "K R P Matric Higher Secondary School",
      result: "83%"
    },

    {
      degree: "Secondary School",
      institution:
        "K R P Matric Higher Secondary School",
      result: "84%"
    }
  ];

  res.status(200).json({
    success: true,
    data: education
  });
};


module.exports = {
  getPortfolio,
  getProjects,
  getSkills,
  getEducation
};