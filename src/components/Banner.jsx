import styled from "styled-components";
const Banner = () => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + "/banner.jpg"} alt="" />
      <Title>
        <h2>구매가 아닌 보호로 </h2>
        <h3>친구가 되어보는 건 어떨까요?</h3>
      </Title>
    </Container>
  );
};
const Container = styled.div`
  text-align: center;
  border: 1px solid black;
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;
const Title = styled.div`
  position: absolute;
  right: 70px;
  top: 220px;
  border: 4px solid yellow;
  padding: 50px;

  h2 {
    font-size: 2.5rem;
  }
  h3 {
    margin-top: 15px;
    font-size: 2rem;
  }
`;

export default Banner;
