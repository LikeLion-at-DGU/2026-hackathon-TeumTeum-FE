import back from "../../assets/icons/back.png"
import * as S from "./OnboardingHeader.styled"
import { ProgressTrack, ProgressBar } from "../common/ProgressBar.styled"

const OnboardingHeader = ({ currentStep, totalStep, question, description, progress, onPrevious }) => {

    return (
        <>
        <S.Header>
            <S.BackIcon src={back} alt="이전" onClick={onPrevious} $hidden={currentStep===1}/>
                <ProgressTrack>
                    <ProgressBar $progress={progress} />
                </ProgressTrack>
            <S.QWapper>
                <S.ProgressNum>
                <S.CurrentNum>{currentStep}</S.CurrentNum>
                <S.TotalNum>/{totalStep}</S.TotalNum>
                </S.ProgressNum>
                <S.Question>{question}</S.Question>
                <S.Description>{description}</S.Description>
            </S.QWapper>
        </S.Header>
        </>
    )
}

export default OnboardingHeader
