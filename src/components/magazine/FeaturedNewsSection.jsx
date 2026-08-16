import * as S from "./FeaturedNewsSection.styled"
import MagazineCard from "./MagazineCard"
import { Link } from "react-router-dom"

const FeaturedNewsSection = ({magazine}) => {
    return (
        <>
            <S.Section>
                <S.Title>지금 나를 위한 웰니스</S.Title>
                <S.Subtitle>최근 틈 기록을 바탕으로 골랐어요.</S.Subtitle>
                <Link to={`/magazine/${magazine.id}`}>
                <MagazineCard variant="featured" magazine={magazine}/>
                </Link>
            </S.Section>
        </>
    )
}

export default FeaturedNewsSection