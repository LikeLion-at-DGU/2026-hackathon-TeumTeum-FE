import * as S from "./WellnessNewsSection.styled"
import MagazineCard from "./MagazineCard"

const WellnessNewsSection = () => {
    return (
        <>
            <S.Section>
                <S.Title>1분 웰니스 뉴스</S.Title>
                <S.CardWrapper>
                    <MagazineCard variant="wellness" />
                    <MagazineCard variant="wellness" />
                    <MagazineCard variant="wellness" />
                </S.CardWrapper>
            </S.Section>
        </>
    )
}

export default WellnessNewsSection 
