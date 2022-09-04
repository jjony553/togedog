import styled from "styled-components";

const Detail = ({ detailData, onClose }) => {
  return (
    <Container onClick={onClose}>
      <DetailInfo>
        <DetailImage src={detailData.IMAGE_COURS}></DetailImage>
        <DetailAnimalInfo>
          <DetailClose onClick={onClose}>✖</DetailClose>
          <DetailContent>
            <Id>아이디: {detailData.ABDM_IDNTFY_NO} </Id>
            <Age>나이: {detailData.AGE_INFO}</Age>
            <Species>종: {detailData.SPECIES_NM}</Species>
            <Sex>성별: {detailData.SEX_NM === "M" ? "남" : "여"}</Sex>
            <Feature>특징: {detailData.SFETR_INFO}</Feature>
            <Devider></Devider>
            <ShterName>보호소 이름: {detailData.SHTER_NM}</ShterName>
            <ShterTel>보호소 연락처: {detailData.SHTER_TELNO}</ShterTel>
            <ShterPlace>보호소 위치: {detailData.PROTECT_PLC}</ShterPlace>
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
  width: 60%;
  height: 50%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
`;
const DetailImage = styled.img`
  width: 50%;
  border: 10px solid white;
  object-fit: cover;
`;
const DetailAnimalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
const DetailClose = styled.p`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;
const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Id = styled.span`
  font-weight: 500;
`;
const Age = styled(Id)``;
const Species = styled(Id)``;
const Sex = styled(Id)``;
const Feature = styled.span`
  margin-bottom: 20px;
  font-weight: 500;
`;
const Devider = styled.div`
  height: 5px;
  width: 100%;
  background-color: lightgrey;
`;
const ShterName = styled(Id)``;
const ShterTel = styled(Id)``;
const ShterPlace = styled(Id)``;

export default Detail;
