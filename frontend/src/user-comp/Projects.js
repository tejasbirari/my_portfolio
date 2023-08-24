import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "./Card";
import { getProjects } from "../services/getMethods";


const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchImage = async() => {
      const response =  await getProjects();
      setProjects(response);
    }
    fetchImage();
  }, [])

  return (
    <Wrapper id="project">
      <Title>Projects</Title>

      <Row>
        { projects.map((project) => (
          <Card key={project._id} project={project} />
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;

  @media only screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  flex-wrap: wrap;
`;

export default Projects;