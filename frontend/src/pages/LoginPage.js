import React, { useState } from "react";
import { styled } from "styled-components";
import { login } from "../services/postMethods";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async() => {
    const responseStatus = await login(username, password);
    if(responseStatus === 200){
        toast('Login Successful');
        navigate('/admin');
    }
  }

  return (
    <Wrapper>
      <Container>
        <Form>
          <Group>
            <Label>Username</Label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
            />
          </Group>

          <Group>
            <Label>Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </Group>

          <Button onClick={ handleLoginClick }>Login</Button>

          {/* <Toastify /> */}
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  padding: 40px;
  border-radius: 15px;
  max-width: 400px;
  width: 100%;

  background: linear-gradient(#212121, #212121) padding-box,
    linear-gradient(
        145deg,
        transparent 35%,
        rgba(34, 164, 195, 1),
        rgba(45, 253, 125, 1)
      )
      border-box;
  border: 2px solid transparent;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  padding-bottom: 5px;
  color: #999;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #ccc;
  color: #222;

  &:focus {
    border-color: #8b8a91;
  }
`;

const Button = styled.button`
  width: 230px;
  padding: 10px 20px;
  border-radius: 10px;
  background: radial-gradient(
    circle,
    rgba(34, 164, 195, 1) 0%,
    rgba(45, 253, 125, 1) 80%
  );
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #2da87d;
  }
`;

export default LoginPage;