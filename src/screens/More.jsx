import styled from "styled-components";
import Animal from "../components/Animal";
const More = () => {
  return (
    <Container>
      <Animal />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  background-color: bisque;
  border: 2px solid white;
`;
export default More;
