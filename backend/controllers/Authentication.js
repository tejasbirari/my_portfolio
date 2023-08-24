const Schema = require('../database/models/admin');
const jwt = require('jsonwebtoken');

const handleLogin = async(req, res) => {

    const {username, password} = req.body;
    const user = await Schema.findOne({ username });

    if(!user){
        return res.status(404).json({ message: 'User not found'});
    }

    if(user.password !== password){
        return res.status(401).json({ message: 'Incorrect Password'});
    }

    if(user){
        const token = jwt.sign( {userId: user._id}, process.env.SECRET_KEY, {
            expiresIn: '1800s'
        });
        res.status(200).json({ token });
    }

}

module.exports = { handleLogin }