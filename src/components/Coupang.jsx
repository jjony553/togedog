import styled from "styled-components";
const Coupang = () => {
  const Items = [
    {
      id: 0,
      img: "https://image.fmkorea.com/files/attach/new2/20210302/2063168106/62449231/3425868502/080f5a155f81a0cc2bbc6052fb9f2225.jpg",
    },
    {
      id: 1,
      img: "https://m.sleepnsleepmall.com/web/product/medium/202207/be10cef08bff16ef03355be34c8b73e6.jpg",
    },
    {
      id: 2,
      img: "https://pbs.twimg.com/media/E_EHtIpVgAQoM2i.jpg",
    },
    {
      id: 3,
      img: "http://www.nubizio.co.kr/shopimages/nubizio777/0790060000413.jpg",
    },
  ];

  return (
    <Container>
      <h2>쿠팡 아이템</h2>
      <Content>
        {Items &&
          Items.map((item, key) => (
            <Wrap key={key}>
              <img src={item.img} alt="쿠팡" />
            </Wrap>
          ))}
      </Content>
      <CommissionInfo>구매시 판매수수료를 얻을 수 있습니다.</CommissionInfo>
      <DonationInfo>
        판매 수수료는 홈페이지 서버비와 유기견 보호 센터에 기부됩니다.
      </DonationInfo>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid black;
`;
const Content = styled.div`
  padding: 20px 200px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 75%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
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
  padding: 0 200px;
`;
const DonationInfo = styled.p`
  padding: 0 200px;
`;

export default Coupang;
