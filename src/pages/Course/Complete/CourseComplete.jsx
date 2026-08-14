import Header from "../../../components/layout/Header";
import * as S from "./CourseComplete.styled"

const CourseComplete = () => {
    return (
        <>
        <Header />
        <S.Main>
            <S.CompleteIcon></S.CompleteIcon>
            <S.ContentWrapper>
                <S.Title>30분을 보냈어요</S.Title>
                <S.Description>오늘의 작은 틈이 나를 위한 시간이 되었어요</S.Description>
            </S.ContentWrapper>
        </S.Main>
        </>
    )
}

export default CourseComplete