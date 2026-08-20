import { useEffect, useState } from "react";
import * as S from "./StretchingContent.styled";

const StretchingContent = ({ content, isPlaying }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = content.steps ?? [];
  const repeatCount = content.repeat_count ?? 1;
  const step = steps[currentStep];
  const imageUrl = content.image_url;
  const [remainingSeconds, setRemainingSeconds] = useState(
    steps[0]?.duration_seconds ?? 0,
  );
  const [completedRepeatCount, setCompletedRepeatCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setCurrentStep(0);
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

      const isLastStep = currentStep === steps.length - 1;

      if (!isLastStep) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        setRemainingSeconds(steps[nextStep].duration_seconds);
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
      setCurrentStep(0);
      setRemainingSeconds(steps[0].duration_seconds);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    completedRepeatCount,
    currentStep,
    isComplete,
    isPlaying,
    remainingSeconds,
    repeatCount,
    steps,
  ]);

  return (
    <S.Container>
      <S.Title>{content.title}</S.Title>

      <S.ProgressTrack>
        <S.ProgressFill
          $progress={
            steps.length > 0
              ? ((currentStep + 1) / steps.length) * 100
              : 0
          }
        />
      </S.ProgressTrack>

      <S.Step>
        {steps.length > 0
          ? `${currentStep + 1}/${steps.length}`
          : "0/0"}
      </S.Step>

      <S.ContentArea>
        <S.Instruction>
          {isComplete ? "스트레칭 완료" : step?.phase ?? content.description}
          {step?.duration_seconds != null && (
            <>
              <br />
              <br />
              {remainingSeconds}초간 유지하세요.
            </>
          )}
        </S.Instruction>

        <S.ImageFrame>
          {imageUrl && (
            <S.StretchImage
              src={content.image_url}
              alt={content.title}
            />
          )}
        </S.ImageFrame>
      </S.ContentArea>
    </S.Container>
  );
};

export default StretchingContent;
