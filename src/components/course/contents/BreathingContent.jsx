import * as S from "./BreathingContent.style";
import useStepTimer from "../../../hooks/useStepTimer";

const EMPTY_STEPS = [];

const BreathingContent = ({ content, isPlaying }) => {
    const steps = content.steps ?? EMPTY_STEPS;
    const repeatCount = content.repeat_count ?? 1;

    const { currentStepIndex, remainingSeconds } = useStepTimer({
        steps,
        repeatCount,
        isPlaying,
        resetKey: content.content_order,
    });

    const currentStep = steps[currentStepIndex];
    const currentInstruction =
        currentStep?.instruction ??
        currentStep?.phase ??
        content.description ??
        "";

    return (
        <S.Container>
            <S.Title>
                {content.title}
            </S.Title>
            <S.CenterContent>
                <S.Guide>
                    <S.GuideText>{content.description}</S.GuideText>
                </S.Guide>

                <S.BreathArea>
                    <S.BreathOrb aria-label={currentInstruction}>
                        <S.Glow $delay="0s" $isPlaying={isPlaying} />
                        <S.Glow $delay="1.3s" $isPlaying={isPlaying} />
                        <S.Core $isPlaying={isPlaying} />
                    </S.BreathOrb>
                </S.BreathArea>

                <S.StatusArea>
                    <S.Phase>
                        {currentInstruction}
                    </S.Phase>
                    <S.Count>{remainingSeconds}초</S.Count>
                </S.StatusArea>
            </S.CenterContent>
        </S.Container>
    );
};

export default BreathingContent;
