import React from "react";
import { styled } from "styled-components";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
// import Contact from "./Contact";


const Main = () => {
  return (
    <Wrapper>
      <Banner />

      <Container>
        <About />
        <Skills />
      </Container>

      <ProjectsSection>
        <Projects />
      </ProjectsSection>

      {/* <Footer>
        <Contact/>
      </Footer> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  margin: 40px 0;
  margin-right: 40px;
  border-radius: 10px;
  background: #1c1b23;
  min-height: 88vh;
  overflow-y: auto;

  @media only screen and (max-width: 1100px) {
    margin-left: 40px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media only screen and (max-width: 900px) {
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectsSection = styled.div``;

// const Footer = styled.div``;

export default Main;