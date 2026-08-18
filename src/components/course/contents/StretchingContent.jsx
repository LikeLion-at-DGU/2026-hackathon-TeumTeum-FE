import * as S from "./StretchingContent.styled";

const StretchingContent = ({
  title = "눈에 띄지 않는 목 리셋",
  currentStep = 1,
  totalStep = 3,
  imageUrl,
}) => {
  const progress = (currentStep / totalStep) * 100;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.ProgressTrack>
        <S.ProgressFill $progress={progress} />
      </S.ProgressTrack>

      <S.Step>
        {currentStep}/{totalStep}
      </S.Step>

      <S.ContentArea>
        <S.Instruction>
          어깨를 귀에서 멀어지게 내립니다.
          <br />
          <br />
          그 상태에서 20초간 유지하세요.
        </S.Instruction>

        <S.ImageFrame>
          {imageUrl && (
            <S.StretchImage
              src={imageUrl}
              alt="목과 어깨 스트레칭 자세"
            />
          )}
        </S.ImageFrame>
      </S.ContentArea>
    </S.Container>
  );
};

export default StretchingContent;
