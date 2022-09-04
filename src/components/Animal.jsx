import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as env from "../common/env";
import Detail from "./Detail";
const Animal = ({ itemSlice }) => {
  const [animalData, setAnimalData] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailData, setDetailData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${env.API_KEY}&Type=json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAnimalData(data.AbdmAnimalProtect[1].row);
      });
  }, []);

  const handleOpen = (index, item) => {
    setSelectedItem(index);
    setDetailData(item);
    setOpenDetail(true);
  };

  return (
    <Container>
      <Title>
        <TextTitle>보호소 동물 친구들 🐹</TextTitle>
        {location.pathname === "/" && (
          <Link to="/more">
            <More>더 보기</More>
          </Link>
        )}
      </Title>
      {openDetail && (
        <Detail detailData={detailData} onClose={() => setOpenDetail(false)} />
      )}
      <Content>
        {animalData &&
          animalData.slice(0, itemSlice).map((item, index) => (
            <Wrap key={item.ABDM_IDNTFY_NO}>
              <AnimalImage
                src={item.IMAGE_COURS}
                alt=""
                onClick={() => handleOpen(index, item)}
              />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
const Container = styled.div`
  border: 2px solid white;
  padding: 30px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const TextTitle = styled.h2``;
const More = styled.h3`
  cursor: pointer;
  text-decoration: none;
  color: #e496a4;
`;

const Content = styled.div`
  padding: 20px 50px 30px 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 100%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const AnimalImage = styled.img`
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
`;

export default Animal;
