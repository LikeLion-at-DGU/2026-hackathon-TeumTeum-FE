import Header from "../../components/layout/Header";
import FeaturedNewsSection from "../../components/magazine/FeaturedNewsSection"
import WellnessNewsSection from "../../components/magazine/WellnessNewsSection";
import { Container } from "./Magazine.styled";
import { mockMagazines } from "../../data/mockMagazines"

const Magazine = () => {
  return (
    <> 
      <Header
        title="발견"
        description="틈틈이 추천하는 오늘의 틈새 코스"
      />

      <Container>
        <FeaturedNewsSection magazine = {mockMagazines[0]}/>
        <WellnessNewsSection magazines = {mockMagazines.slice(1)}/>
      </Container>
    </>
  );
};

export default Magazine;