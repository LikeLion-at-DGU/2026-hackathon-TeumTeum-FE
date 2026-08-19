import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import * as S from "../Magazine/MagazineDetail.styled"
import Button from "../../components/common/Button"
import { getMagazineDetail } from "../../apis/magazine";
import { useState, useEffect } from "react";
import fallbackImage from "../../assets/img/매거진이미지예시.jpg";

const MagazineDetail = () => {
    const { magazineId } = useParams();

    const [magazine, setMagazine] = useState(null);

    useEffect(() => {
        const fetchMagazineDetail = async() => {
            try {
                const data = await getMagazineDetail(magazineId);
                setMagazine(data);

                console.log("GET 매거진 상세 성공:", data);
            }
            catch(error){
                console.error(
                    "GET 매거진 상세 실패:",
                    error.response?.data || error.message
                )
            }
        };
        fetchMagazineDetail();
    }, [magazineId])

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

                <S.RecommendDescription>{magazine.ai_reason}</S.RecommendDescription>

            </S.AiRecommend>

            <S.Title>{magazine.title}</S.Title>
            <S.Info>{magazine.category} · {magazine.read_minutes}분 읽기</S.Info>
            <S.Img src={magazine.image_url || fallbackImage} alt={magazine.title} />
            <S.Description>{magazine.content}</S.Description>

            <S.Summary>
                <S.SummaryTitle>✨ 틈틈 한 줄 정리</S.SummaryTitle>
                <S.SummaryDescription>{magazine.ai_one_line_summary}</S.SummaryDescription>
            </S.Summary>

            <S.ButtonWrapper>
                <Button>다음 틈에서 실행하기</Button>
            </S.ButtonWrapper>
        </S.Container>
        </>
    )
}

export default MagazineDetail