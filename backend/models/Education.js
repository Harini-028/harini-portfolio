const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
        degree: {
            type: String,
            required: true
        },

        institution: {
            type: String,
            required: true
        },

        result: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Education", educationSchema);