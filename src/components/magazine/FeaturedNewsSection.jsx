import * as S from "./FeaturedNewsSection.styled"
import MagazineCard from "./MagazineCard"

const FeaturedNewsSection = () => {
    return (
        <>
            <S.Section>
                <S.Title>오늘의 틈새 뉴스</S.Title>
                <MagazineCard variant="featured" />
            </S.Section>
        </>
    )
}

export default FeaturedNewsSection