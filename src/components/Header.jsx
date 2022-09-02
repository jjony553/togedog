import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>Toge Dog 🐼</Logo>
      </Link>
      <Nav>
        <Link to="/">
          <Home>🏠 Home</Home>
        </Link>
        <Link to="/about">
          <About>❔ About</About>
        </Link>
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  height: 50px;
  background-color: transparent;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
const Logo = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: lightgreen;
`;
const Nav = styled.nav`
  gap: 40px;
  display: flex;
`;
const Home = styled.h3`
  color: #a65c25;
`;
const About = styled.h3`
  color: #a65c25;
`;
export default Header;
