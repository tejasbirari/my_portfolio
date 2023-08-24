const mongoose = require("mongoose");

const profile = new mongoose.Schema({

    photo: {
        type: String,
        required: true,
    },
    
})

module.exports = mongoose.model("Skill", profile);