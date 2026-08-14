import * as S from "./FeaturedNewsSection.styled"
import MagazineCard from "./MagazineCard"
import { Link } from "react-router-dom"

const FeaturedNewsSection = ({magazine}) => {
    return (
        <>
            <S.Section>
                <S.Title>오늘의 틈새 뉴스</S.Title>
                <Link to={`/magazine/${magazine.id}`}>
                <MagazineCard variant="featured" magazine={magazine}/>
                </Link>
            </S.Section>
        </>
    )
}

export default FeaturedNewsSection