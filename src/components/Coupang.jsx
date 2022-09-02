import styled from "styled-components";
const Coupang = () => {
  const Items = [
    {
      id: 0,
      iframe: "https://coupa.ng/cc4TiG",
    },
    {
      id: 1,
      iframe: "https://coupa.ng/cc4TiN",
    },
    {
      id: 2,
      iframe: "https://coupa.ng/cc4TiR",
    },
    {
      id: 3,
      iframe: "https://coupa.ng/cc4TiV",
    },
  ];

  return (
    <Container>
      <TextTitle>아이들 아이템 🦐</TextTitle>
      <Content>
        {Items &&
          Items.map((item, key) => (
            <Wrap key={key}>
              <iframe
                title={item.id}
                src={item.iframe}
                frameborder="0"
                scrolling="no"
                referrerpolicy="unsafe-url"
              ></iframe>
            </Wrap>
          ))}
      </Content>
      <CommissionInfo>
        ※이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
        제공받습니다.
      </CommissionInfo>
      <DonationInfo>
        ※판매 수수료는 홈페이지 서버비와 유기견 보호 센터에 기부됩니다.
      </DonationInfo>
    </Container>
  );
};
const Container = styled.div`
  border: 2px solid white;
  padding: 30px;
`;
const TextTitle = styled.h2`
  margin-bottom: 30px;
`;

const Content = styled.div`
  padding: 20px 150px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 65%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  iframe {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const CommissionInfo = styled.p`
  padding: 0 150px;
  margin-bottom: 16px;
`;
const DonationInfo = styled.p`
  padding: 0 150px;
  margin-bottom: 16px;
`;

export default Coupang;
