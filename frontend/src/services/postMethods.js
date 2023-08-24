import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const login = async(username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/authetication`, {username, password});
        localStorage.setItem('token', response.data.token);
        return response.status;
    } catch (error) {
        console.log('Login Error: ', error);
    }
}

export const addProfilePicture = async(selectedProfilePic) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/add_profile`, {profilePic: selectedProfilePic});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const addSkills = async(selectedSkillPic) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/add_skills`, {skillPhoto: selectedSkillPic});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const addProjects = async(projectName, technologies, link, selectedProjectImg) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/add_project`, {
            projectName, 
            technologies, 
            link, 
            image: selectedProjectImg
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const addResume = async(resume) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/add_resume`, {resume});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}