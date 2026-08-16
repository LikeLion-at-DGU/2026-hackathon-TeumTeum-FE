import * as S from "./WellnessNewsSection.styled"
import MagazineCard from "./MagazineCard"
import { Link } from "react-router-dom"

const WellnessNewsSection = ({ magazines }) => {
    return (
        <>
            <S.Section>
                <S.Title>당신에게 추천</S.Title>
                <S.CardWrapper>
                    {magazines.map((magazine) => (
                        <Link key={magazine.id} to={`/magazine/${magazine.id}`}>
                        <MagazineCard key={magazine.id} variant="wellness" magazine={magazine} />
                        </Link>
                    ))}
                </S.CardWrapper>
            </S.Section>
        </>
    )
}

export default WellnessNewsSection 
