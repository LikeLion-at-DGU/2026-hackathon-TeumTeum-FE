import Header from "../../../components/layout/Header";
import * as S from "./CourseComplete.styled"
import Button from "../../../components/common/Button";
import { Link, useLocation } from "react-router-dom";

const CourseComplete = () => {
    const {state} = useLocation();

    const completedExecution = state?.completedExecution;
    const targetMinutes = state?.targetMinutes ?? 0;

    const usedSeconds = completedExecution?.used_seconds ?? 0;
    const usedMinutes = Math.floor(usedSeconds / 60);
    const remainingSeconds = usedSeconds % 60;

    const formattedUsedTime = remainingSeconds > 0
        ? `${usedMinutes}분 ${remainingSeconds}초`
        : `${usedMinutes}분`;

    const todayCourses = completedExecution?.today_courses ?? 0;
    const completedContents = completedExecution?.completed_contents ?? 0;
    
    return (
        <>
        <Header />
        <S.Main>
            <S.CompleteSummary>
                <S.IconWrapper>
                    <S.CompleteIcon
                        viewBox="0 0 120 120"
                        role="img"
                        aria-label="코스 완료"
                    >
                        <S.Circle cx="60" cy="60" r="50" />
                        <S.Check d="M35 62 L52 79 L87 40" />
                    </S.CompleteIcon>
                    <S.Confetti aria-hidden="true">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <S.ConfettiPiece key={index} $index={index} />
                        ))}
                    </S.Confetti>
                </S.IconWrapper>
                <S.ContentWrapper>
                    <S.Title>{targetMinutes}분을 보냈어요</S.Title>
                    <S.Description>오늘의 작은 틈이 나를 위한 시간이 되었어요</S.Description>
                </S.ContentWrapper>
            </S.CompleteSummary>
            <S.Record>
                <S.RecordTitle>오늘의 웰니스 기록</S.RecordTitle>
                <S.InfoWrapper>
                    <S.Info>
                        <S.Times>{formattedUsedTime}</S.Times>
                        <S.Label>총 활동 시간</S.Label>
                    </S.Info>
                    <S.Info>
                        <S.Times>{completedContents}개</S.Times>
                        <S.Label>완료한 활동</S.Label>
                    </S.Info>
                    <S.Info>
                        <S.Times>{todayCourses}회</S.Times>
                        <S.Label>오늘의 코스</S.Label>
                    </S.Info>
                </S.InfoWrapper>
                    <S.SaveMessage>오늘의 기록이 저장되었어요</S.SaveMessage>
                <S.ButtonWrapper>
                    <Link to="/home">
                        <Button variant="secondary">다음 틈도 보낼래요</Button>
                    </Link>
                
                <Link to={`/history`}>
                    <Button variant="primary">기록 보기</Button>
                </Link>
            </S.ButtonWrapper>
            </S.Record>
        </S.Main>
        </>
    )
}

export default CourseComplete;
