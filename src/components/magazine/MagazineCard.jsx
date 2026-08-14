import * as S from "./MagazineCard.styled"

const MagazineCard = ({ magazine, variant = "featured"}) => {
    return (
        <>
        <S.Section $variant={variant}>
            <S.Inner>
                <S.Img src={magazine.image} alt="뉴스 이미지" $variant={variant}/>
                <S.Content $variant={variant}>
                    <S.Title>{magazine.title}</S.Title>
                    <S.Description>{magazine.summary}</S.Description>
                </S.Content>
            </S.Inner>
        </S.Section>
        </>
    )
}

export default MagazineCard