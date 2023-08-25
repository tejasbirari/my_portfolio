const mongoose = require("mongoose");

const project = new mongoose.Schema({

    projectName: {
        type: String,
        required: true,
    },

    technologies: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },

    photo: {
        type: String,
        required: true,
    },
    
})

module.exports = mongoose.model("Project", project);