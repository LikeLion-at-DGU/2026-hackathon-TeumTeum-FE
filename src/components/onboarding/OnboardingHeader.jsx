import back from "../../assets/icons/back.png"
import * as S from "./OnboardingHeader.styled"
import { ProgressBar } from "../common/ProgressBar.styled"

const OnboardingHeader = ({ currentStep, totalStep }) => {
    return (
        <>
        <S.Header>
            <S.BackIcon src={back} alt="이전" />
            <ProgressBar />
            <S.QWapper>
                <S.ProgressNum>
                <S.CurrentNum>{currentStep}</S.CurrentNum>
                <S.TotalNum>/{totalStep}</S.TotalNum>
                </S.ProgressNum>
                <S.Question>관심 카테고리를 선택해주세요.</S.Question>
                <S.Description>코스 추천에 활용돼요. (중복 선택 가능)</S.Description>
            </S.QWapper>
        </S.Header>
        </>
    )
}

export default OnboardingHeader