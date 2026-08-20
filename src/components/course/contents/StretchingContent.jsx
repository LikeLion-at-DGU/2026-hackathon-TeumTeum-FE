import { useEffect, useState } from "react";
import * as S from "./StretchingContent.styled";
import stretchGuide01 from "../../../assets/img/stretchguide01.png";
import stretchGuide02 from "../../../assets/img/stretchguide02.png";
import stretchGuide03 from "../../../assets/img/stretchguide03.png";
import stretchGuide04 from "../../../assets/img/stretchguide04.png";
import stretchGuide05 from "../../../assets/img/stretchguide05.png";
import stretchGuide06 from "../../../assets/img/stretchguide06.png";
import stretchGuide07 from "../../../assets/img/stretchguide07.png";
import stretchGuide08 from "../../../assets/img/stretchguide08.png";
import stretchGuide09 from "../../../assets/img/stretchguide09.png";
import stretchGuide10 from "../../../assets/img/stretchguide10.png";

const STRETCH_IMAGE_BY_TITLE = {
  "2분 어깨 리셋": stretchGuide01,
  "2분 앉은 자세 리셋": stretchGuide02,
  "2분 약속 전 자세 정리": stretchGuide03,
  "3분 목 리셋": stretchGuide04,
  "3분 손목·손가락 리셋": stretchGuide05,
  "3분 종아리 리셋": stretchGuide06,
  "4분 굳은 등·어깨 풀기": stretchGuide07,
  "4분 손목·팔 이완": stretchGuide08,
  "4분 서서 하는 전신 리셋": stretchGuide09,
  "5분 앉아서 하체 리셋": stretchGuide10,
};

const StretchingContent = ({ content, isPlaying }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = content.steps ?? [];
  const repeatCount = content.repeat_count ?? 1;
  const step = steps[currentStep];
  const imageUrl =
    STRETCH_IMAGE_BY_TITLE[content.title] ?? content.image_url;
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
          <S.Description>{content.description}</S.Description>
          <S.StepInstruction>
            {isComplete
              ? "스트레칭 완료"
              : step?.instruction ?? step?.phase ?? "천천히 따라 해주세요."}
          </S.StepInstruction>
        </S.Instruction>

        <S.ImageFrame>
          {imageUrl && (
            <S.StretchImage
              src={imageUrl}
              alt={content.title}
            />
          )}
        </S.ImageFrame>

        {step?.duration_seconds != null && (
          <S.RemainingTime>
            {remainingSeconds}초간 유지하세요.
          </S.RemainingTime>
        )}
      </S.ContentArea>
    </S.Container>
  );
};

export default StretchingContent;
