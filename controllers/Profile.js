const Schema = require('../database/models/profile');

const addProfilePic = async(req, res) => {
    try {
        
        const { profilePic } = req.body;
        
        await Schema.deleteMany({});

        const create = new Schema({ photo: profilePic });

        const success = await create.save();

        if(success){
            return res.status(200).json({ message: 'Image Uploaded' });
        } else {
            return res.status(401).json({ message: 'Failed' });
        }

    } catch (error) {
        console.log("Backend Add Profile Error: ", error);
    }
}

const getProfilePic = async(req, res) => {
    try {
        
        const data = await Schema.find();
        const photo = data[0].photo;

        return res.status(200).json({ photo });

    } catch (error) {
        console.log("Backend Get Profile Error: ", error);
    }
}

module.exports = { addProfilePic, getProfilePic }