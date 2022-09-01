import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>Toge Dog</Logo>
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
  border: 1px solid black;
  padding: 15px 30px;
`;
const Logo = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
export default Header;
