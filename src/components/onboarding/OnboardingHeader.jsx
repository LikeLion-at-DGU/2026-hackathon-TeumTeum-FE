import back from "../../assets/icons/back.png"
import backed from "../../assets/icons/backed.svg"
import * as S from "./OnboardingHeader.styled"
import { ProgressTrack, ProgressBar } from "../common/ProgressBar.styled"
import usePointerInteraction from "../../hooks/usePointerInteraction"

const OnboardingHeader = ({ currentStep, totalStep, question, description, progress, onPrevious }) => {

    const {
        isActive, pointerHandlers,
    } = usePointerInteraction();

    /* 
    위 선언은 구조분해!!!!!!!!!!! 
    const interaction = usePointerInteraction();
    const isActive = interaction.isActive;
    const pointerHandlers = interaction.pointerHandlers; 
    */

    return (
        <>
        <S.Header>
            <S.BackIcon src={isActive ? backed : back} 
            alt="이전" 
            onClick={onPrevious} 
            $hidden={currentStep===1}
            draggable={false}
            {...pointerHandlers}
            />
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
