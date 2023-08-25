import axios from 'axios';

// const BASE_URL = 'http://localhost:5000';

export const getProfilePicture = async() => {
    try {
        const response = await axios.get(`/api/get_profile`);
        return response.data.photo
    } catch (error) {
        console.log(error);
    }
}

export const getSkills = async() => {
    try {
        const response = await axios.get(`/api/get_skills`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProjects = async() => {
    try {
        const response = await axios.get(`/api/get_project`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getResume = async() => {
    try {
        const response = await axios.get(`/api/get_resume`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
