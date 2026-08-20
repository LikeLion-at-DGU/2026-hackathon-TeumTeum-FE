import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import * as S from "../Magazine/MagazineDetail.styled"
import Button from "../../components/common/Button"
import { getMagazineDetail } from "../../apis/magazine";
import fallbackImage from "../../assets/img/매거진이미지예시.jpg";
import StatusInfo from "../../components/common/StatusInfo";
import useAsyncData from "../../hooks/useAsyncData";

const MagazineDetail = () => {
    const { magazineId } = useParams();

    const {
        data: magazine,
        isLoading,
        error,
    } = useAsyncData(getMagazineDetail, magazineId);

    if (isLoading) {
        return <StatusInfo>매거진을 불러오는 중...</StatusInfo>;
    }

    if (error || !magazine) {
        return <StatusInfo>매거진을 찾을 수 없습니다.</StatusInfo>;
    }

    const recommendationReason =
        typeof magazine.ai_reason === "string" && magazine.ai_reason.trim()
            ? magazine.ai_reason
            : "아직 완료한 틈 기록이 없어 추천 이유를 분석하지 못했어요. 틈 코스를 완료해 기록을 쌓으면 나에게 더 잘 맞는 콘텐츠를 추천해드릴게요!";

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

                <S.RecommendDescription>{recommendationReason}</S.RecommendDescription>

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
