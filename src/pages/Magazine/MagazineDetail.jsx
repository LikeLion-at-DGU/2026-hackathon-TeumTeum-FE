import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import * as S from "../Magazine/MagazineDetail.styled"
import Button from "../../components/common/Button"
import { getMagazineDetail } from "../../apis/magazine";
import { useState, useEffect } from "react";
import fallbackImage from "../../assets/img/매거진이미지예시.jpg";
import StatusInfo from "../../components/common/StatusInfo";

const MagazineDetail = () => {
    const { magazineId } = useParams();

    const [magazine, setMagazine] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchMagazineDetail = async() => {
            setIsLoading(true);
            setHasError(false);

            try {
                const data = await getMagazineDetail(magazineId);
                setMagazine(data);

                console.log("GET 매거진 상세 성공:", data);
            }
            catch(error){
                setHasError(true);
                console.error(
                    "GET 매거진 상세 실패:",
                    error.response?.data || error.message
                )
            } finally {
                setIsLoading(false);
            }
        };
        fetchMagazineDetail();
    }, [magazineId])

    if (isLoading) {
        return <StatusInfo>매거진을 불러오는 중...</StatusInfo>;
    }

    if (hasError || !magazine) {
        return <StatusInfo>매거진을 찾을 수 없습니다.</StatusInfo>;
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
        </S.Container>
        </>
    )
}

export default MagazineDetail
