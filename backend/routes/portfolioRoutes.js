const express = require("express");

const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Education = require("../models/Education");

const router = express.Router();


// Get portfolio information
router.get("/", async (req, res) => {

    try {

        const projects = await Project.find();
        const skills = await Skill.find();
        const education = await Education.find();

        res.json({
            success: true,

            data: {
                name: "Harini R V",
                role: "MERN Stack Developer",

                about:
                    "Computer Science and Engineering student interested in full-stack web development and software development.",

                projects,
                skills,
                education
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to retrieve portfolio data"
        });
    }
});


// Get projects
router.get("/projects", async (req, res) => {

    try {

        const projects = await Project.find()
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: projects.length,
            data: projects
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to retrieve projects"
        });
    }
});


// Add project
router.post("/projects", async (req, res) => {

    try {

        const project = await Project.create(req.body);

        res.status(201).json({
            success: true,
            message: "Project added successfully",
            data: project
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "Failed to add project",
            error: error.message
        });
    }
});


// Delete project
router.delete("/projects/:id", async (req, res) => {

    try {

        const project = await Project.findByIdAndDelete(
            req.params.id
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.json({
            success: true,
            message: "Project deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to delete project"
        });
    }
});


// Get skills
router.get("/skills", async (req, res) => {

    try {

        const skills = await Skill.find();

        res.json({
            success: true,
            count: skills.length,
            data: skills
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to retrieve skills"
        });
    }
});


// Add skill
router.post("/skills", async (req, res) => {

    try {

        const skill = await Skill.create(req.body);

        res.status(201).json({
            success: true,
            message: "Skill added successfully",
            data: skill
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "Failed to add skill"
        });
    }
});


// Get education
router.get("/education", async (req, res) => {

    try {

        const education = await Education.find();

        res.json({
            success: true,
            count: education.length,
            data: education
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to retrieve education"
        });
    }
});


// Add education
router.post("/education", async (req, res) => {

    try {

        const education = await Education.create(req.body);

        res.status(201).json({
            success: true,
            message: "Education added successfully",
            data: education
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "Failed to add education"
        });
    }
});


module.exports = router;