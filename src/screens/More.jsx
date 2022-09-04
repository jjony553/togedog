import styled from "styled-components";
import { useEffect, useState } from "react";
import * as env from "../env";
const More = () => {
  const [animalData, setAnimalData] = useState([]);

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
  return (
    <Container>
      <Content>
        {animalData &&
          animalData.map((item, key) => (
            <Wrap key={key}>
              <img src={item.IMAGE_COURS} alt="" />
            </Wrap>
          ))}
      </Content>
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

const Content = styled.div`
  padding: 20px 50px 70px 50px;
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
export default More;
