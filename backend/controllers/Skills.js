const Schema = require('../database/models/skills');

const addSkillPic = async(req, res) => {
    try {
        
        const { skillPhoto } = req.body;
        
        const create = new Schema({ photo: skillPhoto });

        const success = await create.save();

        if(success){
            return res.status(200).json({ message: 'Image Uploaded' });
        } else {
            return res.status(401).json({ message: 'Failed' });
        }

    } catch (error) {
        console.log("Backend Add Skills Error: ", error);
    }
}

const getSkillPic = async(req, res) => {
    try {
        
        const data = await Schema.find();
        return res.status(200).json({ data });

    } catch (error) {
        console.log("Backend Get Skills Error: ", error);
    }
}

module.exports = { addSkillPic, getSkillPic }