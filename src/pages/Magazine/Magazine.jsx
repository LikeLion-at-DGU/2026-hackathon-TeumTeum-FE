import Header from "../../components/layout/Header";
import MagazineCard from "../../components/magazine/MagazineCard";
import FeaturedNewsSection from "../../components/magazine/FeaturedNewsSection"
import WellnessNewsSection from "../../components/magazine/WellnessNewsSection";
import { Container } from "./Magazine.styled";

const Magazine = () => {
  return (
    <>
      <Header
        title="발견"
        description="틈틈이 추천하는 오늘의 틈새 코스"
      />

      <Container>
        <FeaturedNewsSection />
        <WellnessNewsSection />
      </Container>
    </>
  );
};

export default Magazine;