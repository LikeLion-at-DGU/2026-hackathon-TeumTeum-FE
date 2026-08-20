import { useEffect, useState } from "react";
import * as S from "./BreathingContent.style";

const BreathingContent = ({ content, isPlaying }) => {
    const steps = content.steps ?? [];
    const repeatCount = content.repeat_count ?? 1;

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(
        steps[0]?.duration_seconds ?? 0,
    );
    const [completedRepeatCount, setCompletedRepeatCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const currentStep = steps[currentStepIndex];

    useEffect(() => {
        setCurrentStepIndex(0);
        setRemainingSeconds(steps[0]?.duration_seconds ?? 0);
        setCompletedRepeatCount(0);
        setIsComplete(steps.length === 0);
    }, [content.content_order]);

    useEffect(() => {
        if (!isPlaying || isComplete || steps.length === 0) return;

        const timer = setTimeout(() => {
            if (remainingSeconds > 1) {
                setRemainingSeconds((previous) => previous - 1);
                return;
            }

            const isLastStep = currentStepIndex === steps.length - 1;

            if (!isLastStep) {
                const nextStepIndex = currentStepIndex + 1;
                setCurrentStepIndex(nextStepIndex);
                setRemainingSeconds(steps[nextStepIndex].duration_seconds);
                return;
            }

            const nextCompletedRepeatCount = completedRepeatCount + 1;

            if (nextCompletedRepeatCount >= repeatCount) {
                setCompletedRepeatCount(nextCompletedRepeatCount);
                setRemainingSeconds(0);
                setIsComplete(true);
                return;
            }

            setCompletedRepeatCount(nextCompletedRepeatCount);
            setCurrentStepIndex(0);
            setRemainingSeconds(steps[0].duration_seconds);
        }, 1000);

        return () => clearTimeout(timer);
    }, [
        completedRepeatCount,
        currentStepIndex,
        isComplete,
        isPlaying,
        remainingSeconds,
        repeatCount,
        steps,
    ]);

    return (
        <S.Container>
            <S.Title>
                {content.title}
            </S.Title>
            <S.CenterContent>
                <S.Guide>
                    <S.GuideText>{content.description}</S.GuideText>
                    <S.GuideText>{content.voice_script}</S.GuideText>
                </S.Guide>

                <S.BreathArea>
                    <S.BreathOrb aria-label={currentStep?.phase ?? "호흡 완료"}>
                        <S.Glow $delay="0s" $isPlaying={isPlaying} />
                        <S.Glow $delay="1.3s" $isPlaying={isPlaying} />
                        <S.Core $isPlaying={isPlaying} />
                    </S.BreathOrb>
                </S.BreathArea>

                <S.StatusArea>
                    <S.Phase>
                        {isComplete ? "호흡 완료" : currentStep?.phase ?? "호흡 준비"}
                    </S.Phase>
                    <S.Count>{remainingSeconds}초</S.Count>
                </S.StatusArea>
            </S.CenterContent>
        </S.Container>
    );
};

export default BreathingContent;
