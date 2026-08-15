import { useParams } from "react-router-dom";
import { mockMagazines } from "../../data/mockMagazines";
import Header from "../../components/layout/Header";
import * as S from "../Magazine/MagazineDetail.styled"
import LinkIcon from "../../assets/icons/Magazine/LinkIcon.png"

const MagazineDetail = () => {
    const { magazineId } = useParams();
    
    const magazine = mockMagazines.find(
        (item) => item.id === Number(magazineId)
    );

    if (!magazine) {
        return <p>매거진을 찾을 수 없습니다.</p>;
    }

    return (
        <>
        <Header
            title="발견"
            description="틈틈이 추천하는 오늘의 틈새 코스"
        />
        <S.Container>
            <S.LinkWrapper>
                <S.Icon src={LinkIcon} alt="링크" />
                <S.Link href={magazine.content_url}>원문보기</S.Link>
            </S.LinkWrapper>
            <S.Title>{magazine.title}</S.Title>
            <S.Img src={magazine.image} alt={magazine.title} />
            <S.Description>{magazine.content}</S.Description>
        </S.Container>
        </>
    )
}

export default MagazineDetail