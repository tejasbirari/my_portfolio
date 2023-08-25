const Schema = require('../database/models/project');

const addProject = async(req, res) => {
    try {
        const { projectName, technologies, link, image } = req.body;
        
        const create = new Schema({ 
            projectName: projectName,
            technologies: technologies,
            link: link,
            photo: image
        })

        const success = await create.save();

        if(success){
            return res.status(200).json({ message: 'Project Added' });
        } else {
            return res.status(401).json({ message: 'Failed' });
        }

    } catch (error) {
        console.log("Backend Add Project Error: ", error);
    }
}

const getProject = async(req, res) => {
    try {
        const data = await Schema.find();
        return res.status(200).json({ data });
    } catch (error) {
        console.log("Backend Get Project Error: ", error);
    }
}

module.exports = { addProject, getProject }