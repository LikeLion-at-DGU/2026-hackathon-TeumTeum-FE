import Header from "../../components/layout/Header";
import FeaturedNewsSection from "../../components/magazine/FeaturedNewsSection"
import WellnessNewsSection from "../../components/magazine/WellnessNewsSection";
import * as S from "./Magazine.styled"
import { getMagazines } from "../../apis/magazine";
import StatusInfo from "../../components/common/StatusInfo";
import useAsyncData from "../../hooks/useAsyncData";

const Magazine = () => {
  const { data: magazineData } = useAsyncData(getMagazines);

  if (!magazineData) {
    return <StatusInfo>매거진을 불러오는 중...</StatusInfo>;
  }

  return (
    <> 
      <Header
        title="발견"
        description="틈틈이 추천하는 오늘의 틈새 코스"
      />

      <S.Container>
        {magazineData.is_initial && magazineData.message &&(
          <S.TextBox>
            <S.Text>{magazineData.message}</S.Text>
          </S.TextBox>
        )}
        {magazineData.featured && (
          <FeaturedNewsSection magazine={magazineData.featured}/>
        )}
        <WellnessNewsSection magazines={magazineData.recommendations ?? []} />
      </S.Container>
    </>
  );
};

export default Magazine;
