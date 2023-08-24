import React from "react";
import { styled } from "styled-components";
import Sidebar from '../user-comp/Sidebar'
import Main from "../user-comp/Main";

const HomePage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default HomePage;