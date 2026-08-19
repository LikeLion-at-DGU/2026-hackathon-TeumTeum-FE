import Header from "../../components/layout/Header";
import FeaturedNewsSection from "../../components/magazine/FeaturedNewsSection"
import WellnessNewsSection from "../../components/magazine/WellnessNewsSection";
import { Container } from "./Magazine.styled";
import { getMagazines } from "../../apis/magazine";
import { useState, useEffect } from "react";

const Magazine = () => {
  const  [magazineData, setMagazineData] = useState(null);

  useEffect(() => {
    const fetchMagazines = async () => {
      try{
        const data = await getMagazines();

        setMagazineData(data);
        console.log("GET /magazines 성공: ", data);
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

      <Container>
        {magazineData.featured && (
          <FeaturedNewsSection magazine={magazineData.featured}/>
        )}
        <WellnessNewsSection magazines={magazineData.recommendations ?? []} />
      </Container>
    </>
  );
};

export default Magazine;