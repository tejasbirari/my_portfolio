import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <Wrapper>
      <Logo>Admin Panel</Logo>

      <Group>
        <Button onClick={handleLogout}>Log out</Button>
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  border-bottom: 1px solid #c0c0c0;

  @media only screen and (max-width: 600px) {
    padding: 20px 20px;
  }
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 8px 15px;
  border-radius: 10px;
  outline: none;
  border: 1px solid white;
  background: red;
  font-weight: 500;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    padding: 8px 10px;
  }
`;

export default Navbar;