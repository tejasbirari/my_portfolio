import React, { useState } from 'react'
import { styled } from 'styled-components'
import { addProfilePicture, addSkills, addProjects, addResume} from '../services/postMethods';

const MainSection = () => {

    const [selectedProfilePic, setSelectedProfilePic] = useState(null);
    const [selectedSkillPic, setSelectedSkillPic] = useState(null);

    const [projectName, setProjectName] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [link, setLink] = useState('');
    const [selectedProjectImg, setSelectedProjectImg] = useState(null);

    const [resume, setResume] = useState(null);

    const handleImageUpload = (e, setImageFunction) => {
        try {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImageFunction(base64String);
            };
            reader.readAsDataURL(file)
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddProfile = async() => {
        await addProfilePicture(selectedProfilePic);
    }

    const handleAddSkill = async() => {
        await addSkills(selectedSkillPic);
    }

    const handleAddProject = async() => {
        await addProjects(projectName, technologies, link, selectedProjectImg);
    }

    const handleAddResume = async() => {
        await addResume(resume);
    }

  return (
    <Wrapper>

    <Box>       
        <Section>
            <Heading>Add Profile Picture</Heading>
            <FileInput type='file' onChange={ (e) => handleImageUpload(e, setSelectedProfilePic) }></FileInput>
            <Button onClick={ handleAddProfile }>add</Button>
        </Section>

        <Section>
            <Heading>Add Skills</Heading>
            <FileInput type='file' onChange={ (e) => handleImageUpload(e, setSelectedSkillPic) }></FileInput>
            <Button onClick={ handleAddSkill }>add</Button>
        </Section>

        <Section>
            <Heading>Add Project</Heading>
            <Input value={projectName} onChange={ (e) => setProjectName(e.target.value) }
                type='text' placeholder='Project Name'></Input>
            <Input value={technologies} onChange={ (e) => setTechnologies(e.target.value) }
                type='text' placeholder='Technologies Used'></Input>
            <Input value={link} onChange={ (e) => setLink(e.target.value) } 
                type='text' placeholder='Project Link'></Input>
            <FileInput type='file' onChange={ (e) => handleImageUpload(e, setSelectedProjectImg) }></FileInput>
            <Button onClick={ handleAddProject }>add</Button>
        </Section>

        <Section>
            <Heading>Add Resume</Heading>
            <FileInput type='file' onChange={ (e) => handleImageUpload(e, setResume) }></FileInput>
            <Button onClick={ handleAddResume }>add</Button>
        </Section>
    </Box>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: 40px;

    @media only screen and (max-width: 470px) {
        flex-direction: column;
        margin: 0px 60px;
    }
`;

const Box = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    margin: 60px ;
    gap: 40px;

    @media only screen and (max-width: 470px) {
        flex-direction: column;
    }
`;

const Section = styled.div`
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    border-radius: 20px;
    gap: 10px;
`;

const Heading = styled.div`
    font-weight: 500;
    margin: 20px 0;
`;

const Input = styled.input`
    color: #111;
    padding: 6px 20px;

`;

const FileInput = styled.input`
    padding-left: 60px;
`;

const Button = styled.button`
    padding: 8px 20px;
    background: transparent;
    outline: none;
    text-transform: uppercase;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
`;


export default MainSection