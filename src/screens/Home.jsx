import styled from "styled-components";
import Animal from "../components/Animal";
import Banner from "../components/Banner";
import Coupang from "../components/Coupang";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Animal itemSlice={12} />
      <Coupang />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: bisque;
`;

export default Home;
