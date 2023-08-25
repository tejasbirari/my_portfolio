import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Code, File, Github, Home, Instagram, Linkedin } from "lucide-react";
import { getResume } from "../services/getMethods";
import download from 'downloadjs';


const Sidebar = () => {

  const [resume, setResume] = useState('');

    useEffect(() => {
      const fetchImage = async() => {
        const response =  await getResume();
        setResume(response);
      }
      fetchImage();
    }, [])

    const handleDownload = () => {
      download( resume[0].resume, 'Tejas_Birari_Resume', 'application/pdf');
    }

  return (
    <Wrapper>
      <Container>
        <ListItem>
          <Home style={{ marginRight: "20px" }} />
          <Link href="#home">Home</Link>
        </ListItem>

        <ListItem>
          <Code style={{ marginRight: "20px" }} />
          <Link href="#project">Projects</Link>
        </ListItem>

        <ListItem>
          <File style={{ marginRight: "20px" }} />
          <Link onClick={handleDownload}>Resume</Link>
        </ListItem>

        <Text>Socials</Text>

        <Insta href="https://instagram.com/tejas_birari_">
          <Instagram color="#d71d8a" style={{ marginRight: "20px" }} />
          Instagram
        </Insta>

        <Linked href="https://www.linkedin.com/in/tejas-birari">
          <Linkedin color="#1d99d7" style={{ marginRight: "20px" }} />
          LinkedIn
        </Linked>

        <Git href="https://github.com/tejasbirari">
          <Github color="#1dd787" style={{ marginRight: "20px" }} />
          Github
        </Git>

        <Text>Contact Me</Text>

        <Group>
          <Label>Email</Label>
          <p>b.tej243511@gmail.com</p>
        </Group>

        <Group>
          <Label>Contact Number</Label>
          <p>+91 9325851819</p>
        </Group>

      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  margin: 40px;
  padding: 20px;
  height: 83vh;
  overflow-y: auto;
  background: #1c1b23;

  @media only screen and (max-width: 1100px) {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const ListItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s out;
`;

const Link = styled.a`
  text-decoration: none;

  &:hover {
    color: #2bd576;
  }
`;

const Text = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #999;
`;

const Insta = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s out;
  text-decoration: none;

  &:hover {
    color: #d71d8a;
  }
`;

const Linked = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s out;
  text-decoration: none;

  &:hover {
    color: #1d99d7;
  }
`;

const Git = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s out;
  text-decoration: none;

  &:hover {
    color: #1dd787;
  }
`;

const Group = styled.div`
  padding: 10px 20px;
`;

const Label = styled.label`
  color: #888;
  font-weight: 500;
`;

export default Sidebar;