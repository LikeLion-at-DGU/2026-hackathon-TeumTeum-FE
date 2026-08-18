import * as S from "./MagazineCard.styled"

const MagazineCard = ({ magazine, variant = "featured"}) => {
    return (
        <>
        <S.Section $variant={variant}>
            <S.Inner $variant={variant}>
                <S.ImageWrapper>
                    <S.Img src={magazine.image} alt="뉴스 이미지" $variant={variant}/>
                    {variant=="featured" && (
                        <S.AiBadge>AI 추천</S.AiBadge>
                    )}
                </S.ImageWrapper>
                <S.Content $variant={variant}>
                    <S.Title>{magazine.title}</S.Title>
                    <S.Description>
                        {variant === "wellness"
                            ? `${magazine.contentType} · ${magazine.readMinutes}분 읽기`
                            : magazine.summary}
                    </S.Description>
                </S.Content>
            </S.Inner>
        </S.Section>
        </>
    )
}

export default MagazineCard
