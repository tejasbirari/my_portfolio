const Schema = require('../database/models/resume');

const addResume = async(req, res) => {
    try {
        const {resume} = req.body;
        
        await Schema.deleteMany({});
        
        const create = new Schema({
            resume: resume
        })

        const success = await create.save();

        if(success){
            return res.status(200).json({ message: 'Resume Added' });
        } else {
            return res.status(401).json({ message: 'Failed' });
        }

    } catch (error) {
        console.log(error);
    }
}

const getResume = async(req, res) => {
    try {
        const data = await Schema.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { addResume, getResume }