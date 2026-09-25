const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Project = require("./models/Project");

dotenv.config();

const projects = [
    {
        title: "Local Commerce & Essential Service Platform",
        description:
            "A Flutter-based platform connecting customers with local shops and essential service providers. The application supports shopping, services, cart, orders, location, offers and customer interaction.",
        technologies: ["Flutter", "Firebase"],
        category: "Full Stack / Mobile",
        featured: true,
        github: "",
        liveDemo: ""
    },

    {
        title: "AI-Powered Personal Finance Manager",
        description:
            "A MERN stack application that helps users manage income, expenses, budgets and savings while providing AI-powered financial analysis and personalized insights.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
        category: "MERN Stack",
        featured: true,
        github: "",
        liveDemo: ""
    },

    {
        title: "AI-Based Personalized News Summarizer",
        description:
            "An AI-powered application that analyzes news content and generates concise personalized summaries to help users understand important information quickly.",
        technologies: ["JavaScript", "AI", "NLP"],
        category: "AI",
        featured: true,
        github: "",
        liveDemo: ""
    },

    {
        title: "Smart Dress Recommendation System",
        description:
            "An intelligent recommendation system that suggests suitable clothing based on user preferences and selected requirements.",
        technologies: ["Python", "Machine Learning", "AI"],
        category: "AI / ML",
        featured: false,
        github: "",
        liveDemo: ""
    },

    {
        title: "AI-Powered Lead Tracking & CRM Platform",
        description:
            "A CRM platform designed to manage leads, track customer interactions, organize sales activities and provide intelligent insights for better lead management.",
        technologies: ["React", "Node.js", "MongoDB", "AI"],
        category: "MERN Stack",
        featured: true,
        github: "",
        liveDemo: ""
    },

    {
        title: "Autonomous Business Management System",
        description:
            "A business management system for employee management, attendance, inventory, sales and reports with separate Employee, Manager and Admin roles.",
        technologies: ["Flutter", "Python", "FastAPI", "MongoDB"],
        category: "Full Stack",
        featured: false,
        github: "",
        liveDemo: ""
    },

    {
        title: "Deepfake Detector",
        description:
            "An AI-based system designed to analyze digital media and identify potentially manipulated or deepfake content.",
        technologies: ["Python", "AI", "Machine Learning"],
        category: "AI / ML",
        featured: false,
        github: "",
        liveDemo: ""
    },

    {
        title: "Health Diagnosis Using AI",
        description:
            "An AI-based project that analyzes relevant health information and provides predictive assistance for possible health conditions.",
        technologies: ["Python", "Machine Learning", "AI"],
        category: "AI / ML",
        featured: false,
        github: "",
        liveDemo: ""
    },

    {
        title: "SmartCart AI",
        description:
            "An intelligent shopping solution that uses AI-based recommendations to improve product discovery and personalize the shopping experience.",
        technologies: ["AI", "JavaScript", "Machine Learning"],
        category: "AI",
        featured: false,
        github: "",
        liveDemo: ""
    }
];

const seedDatabase = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        await Project.deleteMany();

        await Project.insertMany(projects);

        console.log(`${projects.length} projects inserted successfully`);

        await mongoose.connection.close();

        console.log("Database connection closed");

    } catch (error) {

        console.error("Seeding failed:", error.message);

        process.exit(1);
    }
};

seedDatabase();