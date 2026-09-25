const express = require("express");

const Contact = require("../models/contact");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required"
            });
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address"
            });
        }

        const newContact = await Contact.create({
            name,
            email,
            message
        });

        res.status(201).json({
            success: true,
            message: "Your message has been saved successfully",
            data: newContact
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to save contact message"
        });
    }
});


// Get all contact messages
router.get("/", async (req, res) => {

    try {

        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to retrieve messages"
        });
    }
});


module.exports = router;