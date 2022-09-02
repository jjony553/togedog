import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Nav>
        <Blog href="https://core10000.tistory.com/" target="_blank">
          Blog
        </Blog>{" "}
        |{" "}
        <Github href="https://github.com/jjony553" target="_blank">
          Github
        </Github>
      </Nav>
      <DevInfo>
        <Maker>⛄ Developer: John Jeong</Maker>
        <Email>🦀E-mail: klassicdev@gmail.com</Email>
        <Copyright>
          🔥 Copyright 2022. John Jeong. All Rights Reserved
        </Copyright>
      </DevInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 15px 30px;
`;
const Nav = styled.nav`
  margin-bottom: 17px;
`;
const Blog = styled.a``;
const Github = styled.a``;

const DevInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Maker = styled.span``;
const Email = styled.span``;
const Copyright = styled.span``;
export default Footer;
