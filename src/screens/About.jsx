import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <AboutSource>
        <AboutVideo
          src="https://www.youtube.com/embed/Z1oBC_VvuVA?start=3"
          title="YouTube video player"
        ></AboutVideo>
        <AboutImage>
          <AboutImageLeft
            src={process.env.PUBLIC_URL + "/about.jpg"}
            alt=""
          ></AboutImageLeft>
          <AboutImageRight
            src={process.env.PUBLIC_URL + "/about2.jpg"}
            alt=""
          ></AboutImageRight>
        </AboutImage>
      </AboutSource>
      <Info>
        <Title>천안 애견샵 79마리 방치 치사 사건을 보고,</Title>
        <SubTitle>
          애견샵 있는 거리를 오가며, <br />
          많은 애완동물이 하염없이 누워만 있는 것을 볼 때.
          <br />
          <br />
          생명을 무책임하게 사고파는 행위를
          <br />
          줄이는 게 좋지 않을까 하는 생각이 듭니다.
          <br />
          <br />
          많은 생명이 오늘도 유기되며,
          <br />
          내일을 걱정하고 있습니다.
          <br />
          <br />
          적어도 지금 살아 있는 아이를 잘 돌보는 게
          <br />
          가장 좋은 방법이라고 생각합니다.
        </SubTitle>
      </Info>
    </Container>
  );
};

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Z1oBC_VvuVA?start=3"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 50px;
  background-color: bisque;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const AboutSource = styled.div`
  display: flex;
  flex-direction: column;
`;
const AboutVideo = styled.iframe`
  width: 600px;
  height: 500px;
  border: 10px solid white;
`;

const AboutImage = styled.div`
  display: flex;
  flex-direction: row;
`;
const AboutImageLeft = styled.img`
  width: 300px;
  height: 250px;
  border: 10px solid white;
`;
const AboutImageRight = styled.img`
  width: 300px;
  height: 250px;
  border: 10px solid white;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.h2`
  margin: 50px 0px 30px 40px;
`;
const SubTitle = styled.h3`
  margin: 20px 0px 30px 40px;
  line-height: 3rem;
`;
export default About;
