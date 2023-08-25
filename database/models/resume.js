const mongoose = require("mongoose");

const resume = new mongoose.Schema({

    resume: {
        type: String,
        required: true,
    },
    
})

module.exports = mongoose.model("Resume", resume);