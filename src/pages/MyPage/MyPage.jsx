import Header from "../../components/layout/Header";
import * as S from "./MyPage.styled"
import AvataImg from "../../assets/img/ExAvata.png"

const MyPage = () => {
  return (
    <>
      <Header
        title="MY"
      />

      <S.Container>
        <S.Content>
          <S.Name>연체동물</S.Name>
          <S.Description>유연함이 남다른 연체동물 DNA</S.Description>
          <S.Avata src={AvataImg} />
          <S.TimeInfoWrapper>
            <S.TimeDial></S.TimeDial>
            <S.Box>
              <S.TimeInfo>이번주 정비 시간</S.TimeInfo><S.Time>30분</S.Time>
            </S.Box>
          </S.TimeInfoWrapper>
          <S.InfoWrapper>
            <S.Info>• 어디에서든 유연함을 뽐내는 사람!</S.Info>
            <S.Info>• 건강전도사가 바로 당신?</S.Info>
            <S.Info>• 거복목이 뭐야? 당장 고쳐줄게!</S.Info>
          </S.InfoWrapper>
        </S.Content>
      </S.Container>
    </>
  );
};

export default MyPage;