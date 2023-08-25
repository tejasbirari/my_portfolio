import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <p style={{ fontSize: "25px" }}>👋</p>

      <Title>Hey, I'm Tejas Birari</Title>

      <Content>
        Fullstack Developer with 2 years of hands-on experience, my primary
        focus lies in crafting seamless User Interfaces. Allow me to share a
        secret – my passion for development knows no bounds! If you have an
        exciting project in need of extraordinary skills, rest assured, I'm your
        guy. Together, let's bring your vision to life and create something
        truly exceptional! 😄🚀
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  width: 100vh;

  @media only screen and (max-width: 900px) {
    padding: 40px;
    width: fit;
  }

  @media only screen and (max-width: 700px) {
    width: auto;
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 25px;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 20px 0;
  font-size: 18px;
  text-align: justify;
  line-height: 1.4;
  color: #999;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export default About;