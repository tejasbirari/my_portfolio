import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getSkills } from "../services/getMethods";


const Skills = () => {
  
  const [images, setImages] = useState([]);

    useEffect(() => {
      const fetchImage = async() => {
        const response =  await getSkills();
        setImages(response);
      }
      fetchImage();
    }, [])


  return (
    <Wrapper>
      <Title>My Skills</Title>

      <Container>
        { images.map((image) => (
          <Img key={image._id}  src={image.photo} alt="skill"></Img>
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Container = styled.div`
  padding: 20px 0;
`;

const Img = styled.img`
  width: 50px;
  padding: 15px 10px;
`;

export default Skills;