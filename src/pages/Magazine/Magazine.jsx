import Header from "../../components/layout/Header";
import FeaturedNewsSection from "../../components/magazine/FeaturedNewsSection"
import WellnessNewsSection from "../../components/magazine/WellnessNewsSection";
import * as S from "./Magazine.styled"
import { getMagazines } from "../../apis/magazine";
import { useState, useEffect } from "react";

const Magazine = () => {
  const  [magazineData, setMagazineData] = useState(null);

  useEffect(() => {
    const fetchMagazines = async () => {
      try{
        const data = await getMagazines();

        setMagazineData(data);
        console.log("대표 매거진 ID:", data.featured?.id);
      }
      catch(error){
        console.error(
          "GET /magazines 실패:",
          error.response?.data || error.message,
        );
      }
    };

    fetchMagazines();
  }, []);

  if (!magazineData) {
    return <div>불러오는 중...</div>;
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