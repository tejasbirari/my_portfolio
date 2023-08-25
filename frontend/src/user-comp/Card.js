import React from "react";
import { styled } from "styled-components";
import { Code } from "lucide-react";

const Card = ({project}) => {
  return (
    <Wrapper>

      <ProjectLink href={project.link}>
        <Img src={project.photo} alt={project.projectName}></Img>
      </ProjectLink>

      <Title>{project.projectName}</Title>

      <Tech>
        <Code color="#999" size={16} style={{ marginRight: "6px" }} />
        {project.technologies}
      </Tech>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 calc(33.33% - 10px);
  margin-top: 25px;
  border-radius: 15px 15px 0 0;
  cursor: pointer;

  @media only screen and (max-width: 920px) {
    flex: 0 0 calc(38% - 0);
  }

  @media only screen and (max-width: 800px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media only screen and (max-width: 650px) {
    flex: 0 0 calc(100% - 1px);
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 15px 15px 0 10px;
`;

const Title = styled.div`
  padding: 10px;
  font-weight: 600;
`;

const Tech = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  padding: 0 10px;
  font-size: 14px;
`;

export default Card;