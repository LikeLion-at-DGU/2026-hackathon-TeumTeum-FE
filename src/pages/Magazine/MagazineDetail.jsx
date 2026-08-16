import { useParams } from "react-router-dom";
import { mockMagazines } from "../../data/mockMagazines";
import Header from "../../components/layout/Header";
import * as S from "../Magazine/MagazineDetail.styled"
import LinkIcon from "../../assets/icons/Magazine/LinkIcon.png"
import Button from "../../components/common/Button"

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
            <S.AiRecommend>
                <S.TitleBox>
                    <S.RecommendTitle>당신에게 추천한 이유</S.RecommendTitle>
                </S.TitleBox>

                <S.RecommendDescription>
                    최근 틈 기록에서 '피곤함'과 '대중교통'을 자주 선택했어요. 그래서 이 콘텐츠를 추천했어요!
                </S.RecommendDescription>

            </S.AiRecommend>

            <S.Title>{magazine.title}</S.Title>
            <S.Info>{magazine.contentType} · {magazine.readMinutes}분 읽기</S.Info>
            <S.Img src={magazine.image} alt={magazine.title} />
            <S.Description>{magazine.content}</S.Description>

            <S.Summary>
                <S.SummaryTitle>✨ 틈틈 한 줄 정리</S.SummaryTitle>
                <S.SummaryDescription>화면에서 잠시 눈을 떼고, 목과 어깨를 움직여주는 것만으로도 오후 피로를 크게 줄일 수 있어요!</S.SummaryDescription>
            </S.Summary>

            <S.ButtonWrapper>
                <Button>다음 틈에서 실행하기</Button>
            </S.ButtonWrapper>
        </S.Container>
        </>
    )
}

export default MagazineDetail