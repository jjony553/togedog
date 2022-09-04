import styled from "styled-components";

const Detail = ({ onClose }) => {
  return (
    <Container>
      <DetailInfo>
        <DetailImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwCJXtxOMxCa3rRk21Ky1pVxbhWfm20_Hjw&usqp=CAU"></DetailImage>
        <DetailAnimalInfo>
          <DetailClose onClick={onClose}>X</DetailClose>
          <DetailContent>
            <Id>아이디(이름이 없어요.):</Id>
            <Age>나이:</Age>
            <Species>종:</Species>
            <Sex>성별:</Sex>
            <State>상태:</State>
            <Feature>특징:</Feature>
            <ShterName>보호소 이름:</ShterName>
            <ShterTel>보호소 번호:</ShterTel>
            <ShterPlace>보호 장소:</ShterPlace>
          </DetailContent>
        </DetailAnimalInfo>
      </DetailInfo>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;
const DetailInfo = styled.div`
  width: 40%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
`;
const DetailImage = styled.img`
  width: 60%;
  border: 10px solid white;
`;
const DetailAnimalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DetailClose = styled.div`
  display: flex;
  justify-content: end;
  font-size: 20px;
  margin: 16px 16px 0px 0px;
  cursor: pointer;
`;
const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Id = styled.span``;
const Age = styled.span``;
const Species = styled.span``;
const Sex = styled.span``;
const State = styled.span``;
const Feature = styled.span``;
const ShterName = styled.span``;
const ShterTel = styled.span``;
const ShterPlace = styled.span``;

export default Detail;
