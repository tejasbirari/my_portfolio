import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Instagram } from "lucide-react";
import { getProfilePicture } from "../services/getMethods";

const Banner = () => {

    const [image, setImage] = useState('');

    useEffect(() => {
      const fetchImage = async() => {
        const response =  await getProfilePicture();
        setImage(response);
      }
      fetchImage();
    }, [])
    

  return (
    <Wrapper id="home">
      <Container>
        <Image>
          <Img src={image} alt="profile picture"></Img>
        </Image>

        <Title>
          <Name>Tejas Birari</Name>
        </Title>
      </Container>

      <Button href="https://www.instagram.com/tejas_birari_">
        <Instagram color="#8b8a91" style={{ marginRight: "10px" }} />
        Follow me on Instagram
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 22vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  opacity: 0.8;
  background: radial-gradient(
    circle,
    rgba(34, 164, 195, 1) 0%,
    rgba(45, 253, 125, 1) 80%
  );
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Image = styled.div`
  border: 3px solid white;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-left: 40px;

  @media only screen and (max-width: 470px) {
    width: 100px;
    height: 100px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Title = styled.div``;

const Name = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  margin-right: 40px;
  padding: 6px 10px;
  border-radius: 10px;
  background: #1c1b23;
  font-size: 12px;
  color: #8b8a91;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export default Banner;