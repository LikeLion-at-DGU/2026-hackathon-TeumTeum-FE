import * as S from "./Magazine.styled"
import MagazineImg from "../../assets/img/매거진이미지예시.jpg"

const MagazineCard = ({ variant = "featured"}) => {
    return (
        <>
        <S.Section $variant={variant}>
            <S.Inner>
                <S.Img src={MagazineImg} alt="뉴스 이미지" $variant={variant}/>
                <S.Content $variant={variant}>
                    <S.Title>야외 요가를 선호하는 사람들</S.Title>
                    <S.Description>요가 수련장으로 변신한 광화문 광장</S.Description>
                </S.Content>
            </S.Inner>
        </S.Section>
        </>
    )
}

export default MagazineCard