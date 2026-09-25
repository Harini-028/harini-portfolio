const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        technologies: {
            type: [String],
            required: true
        },

        category: {
            type: String,
            default: "Development"
        },

        featured: {
            type: Boolean,
            default: false
        },

        github: {
            type: String,
            default: ""
        },

        liveDemo: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Project", projectSchema);