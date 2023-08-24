import React from "react";
import { styled } from "styled-components";
import Navbar from "../admin-comp/Navbar";
import MainSection from "../admin-comp/MainSection";


const Adminpage = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainSection />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Adminpage;