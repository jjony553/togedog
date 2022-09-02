import styled from "styled-components";
const Banner = () => {
  return (
    <Container>
      <BannerImage
        src={process.env.PUBLIC_URL + "/banner.jpg"}
        alt=""
      ></BannerImage>
      <Title>
        <TitleText>구매가 아닌 보호로 </TitleText>
        <SubTitleText>친구가 되어보는 건 어떨까요?</SubTitleText>
      </Title>
    </Container>
  );
};
const Container = styled.div`
  text-align: center;
  border: 2px solid white;
`;
const BannerImage = styled.img`
  height: 70vh;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.div`
  position: absolute;
  right: 70px;
  top: 220px;
  border: 4px solid yellow;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const TitleText = styled.h2`
  font-size: 2.5rem;
  color: black;
  animation: bounce;
  animation-duration: 2s;
`;
const SubTitleText = styled.h3`
  margin-top: 15px;
  font-size: 2rem;
  animation: jello;
  animation-duration: 2s;
`;
export default Banner;
