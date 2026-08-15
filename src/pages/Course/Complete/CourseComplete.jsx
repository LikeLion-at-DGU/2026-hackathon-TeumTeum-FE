import Header from "../../../components/layout/Header";
import * as S from "./CourseComplete.styled"
import Button from "../../../components/common/Button";

const CourseComplete = () => {
    return (
        <>
        <Header />
        <S.Main>
            <S.CompleteSummary>
                <S.CompleteIcon />
                <S.ContentWrapper>
                    <S.Title>30분을 보냈어요</S.Title>
                    <S.Description>오늘의 작은 틈이 나를 위한 시간이 되었어요</S.Description>
                </S.ContentWrapper>
            </S.CompleteSummary>
            <S.Record>
                <S.RecordTitle>오늘의 웰니스 기록</S.RecordTitle>
                <S.InfoWrapper>
                    <S.Info>
                        <S.Times>30분</S.Times>
                        <S.Label>총 활동 시간</S.Label>
                    </S.Info>
                    <S.Info>
                        <S.Times>3개</S.Times>
                        <S.Label>완료한 활동</S.Label>
                    </S.Info>
                    <S.Info>
                        <S.Times>1회</S.Times>
                        <S.Label>오늘의 코스</S.Label>
                    </S.Info>
                </S.InfoWrapper>
                <S.SaveMessage>오늘의 기록이 저장되었어요</S.SaveMessage>
                <S.ButtonWrapper>
                <Button variant="secondary">다음 틈도 보낼래요</Button>
                <Button variant="primary">기록 보기</Button>
            </S.ButtonWrapper>
            </S.Record>
        </S.Main>
        </>
    )
}

export default CourseComplete