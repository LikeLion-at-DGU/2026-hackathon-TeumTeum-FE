import * as S from "./MagazineCard.styled"
import fallbackImage from "../../assets/img/임시이미지.png";

const MagazineCard = ({ magazine, variant = "featured"}) => {
    return (
        <>
        <S.Section $variant={variant}>
            <S.Inner $variant={variant}>
                <S.ImageWrapper $variant={variant}>
                    <S.Img src={magazine.image_url || fallbackImage} alt={magazine.title} $variant={variant}
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = fallbackImage;
                        }}
                    />
                    {variant=="featured" && (
                        <S.AiBadge>AI 추천</S.AiBadge>
                    )}
                </S.ImageWrapper>
                <S.Content $variant={variant}>
                    <S.Title>{magazine.title}</S.Title>
                    <S.Description>
                        {variant === "wellness"
                            ? `${magazine.category} · ${magazine.read_minutes}분 읽기`
                            : magazine.summary}
                    </S.Description>
                </S.Content>
            </S.Inner>
        </S.Section>
        </>
    )
}

export default MagazineCard
