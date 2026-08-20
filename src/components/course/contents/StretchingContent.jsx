import { useState } from "react";
import * as S from "./StretchingContent.styled";

const StretchingContent = ({ content }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = content.steps ?? [];
  const step = steps[currentStep];
  const imageUrl = content.image_url;

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
          {step?.phase ?? content.description}
          {step?.duration_seconds != null && (
            <>
              <br />
              <br />
              {step.duration_seconds}초간 유지하세요.
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
