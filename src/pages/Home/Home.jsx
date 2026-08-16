import Header from "../../components/layout/Header";
import Button from "../../components/common/Button";

import TimeStep from "../../components/home/TimeStep";
import SituationStep from "../../components/home/SituationStep";
import ContentStep from "../../components/home/ContentStep";
import Loading from "../../components/home/Loading";

import useCourseFlow from "../../hooks/useCourseFlow";

import * as S from "./Home.styled";

// 임시 백엔드 데이터
const stepData = {
  step: 0,
  title: "당신에게 남은 '틈'은?",
  description: "최소 3분에서 최대 30분까지, 자유롭게 설정해요.",
  target_minutes: 3,
  min_minutes: 3,
  max_minutes: 30,
};

const questions = [
  {
    question_id: 1,
    title: "지금 어디에 있나요?",
    description: "현재 장소에서 부담 없이 할 수 있는 활동을 골라드릴게요.",
    options: [
      { option_id: 1, content: "이동 중" },
      { option_id: 2, content: "카페·실내" },
      { option_id: 3, content: "학교·회사" },
      { option_id: 4, content: "집" },
      { option_id: 5, content: "기타" },
    ],
  },
  {
    question_id: 2,
    title: "이 틈이 끝나면 무엇을 하나요?",
    description: "다음 일정까지 자연스럽게 이어지도록 코스를 구성할게요.",
    options: [
      { option_id: 1, content: "수업·회의" },
      { option_id: 2, content: "친구·약속" },
      { option_id: 3, content: "업무·과제" },
      { option_id: 4, content: "귀가·휴식" },
      { option_id: 5, content: "없음" },
      { option_id: 6, content: "기타" },
    ],
  },
  {
    question_id: 3,
    title: "지금 가장 가까운 상태는?",
    description: "지금 필요한 회복에 조금 더 집중해볼게요.",
    options: [
      { option_id: 1, content: "피곤해요" },
      { option_id: 2, content: "긴장돼요" },
      { option_id: 3, content: "머릿속이 복잡해요" },
      { option_id: 4, content: "몸이 뻐근해요" },
      { option_id: 5, content: "피부가 신경 쓰여요" },
    ],
  },
  {
    question_id: 4,
    title: "어떤 회복이 필요한가요?",
    description: "원하는 방식을 반영해 나만의 틈 코스를 만들게요.",
    options: [
      { option_id: 1, content: "읽기" },
      { option_id: 2, content: "듣기" },
      { option_id: 3, content: "스트레칭" },
      { option_id: 4, content: "마음 정리" },
    ],
  },
];

// 임시 사용자 UUID
const guestUuid = "550e8400-e29b-41d4-a716-446655440000";

const Home = ({ onPrimaryClick }) => {
  const {
    step, setStep,
    duration, setDuration,
    answers,
    otherContents,
    isLoading, setIsLoading,
    handleOptionClick,
    handleOtherContentChange,
  } = useCourseFlow();

  const currentQuestion = questions[step - 1];
  const currentSelectedOptions = currentQuestion
    ? answers[currentQuestion.question_id] ?? []
    : [];
  const otherOption = currentQuestion?.options.find(
    (option) => option.content === "기타",
  );
  const currentOtherContent = currentQuestion
    ? otherContents[currentQuestion.question_id] ?? ""
    : "";
  const isMultipleStep = step === 3 || step === 4;

  const hasSelectedOption =
    step === 0 ||
    (currentSelectedOptions.length > 0 &&
      (!otherOption ||
        !currentSelectedOptions.includes(otherOption.option_id) ||
        currentOtherContent.trim() !== ""));

  // 다음 / 완료 버튼
  const handleNext = () => {

    if (!hasSelectedOption) return;

    // Step 0 → Step 1
    if (step === 0) {
      setStep(1);
      return;
    }

    // 마지막 질문 → Loading
    if (step === questions.length) {
      const requestData = {
        guest_uuid: guestUuid,
        answers: questions.map((question, index) => {
          const selectedOptionIds = answers[question.question_id] ?? [];
          const questionOtherOption = question.options.find(
            (option) => option.content === "기타",
          );

          return {
            question_id: question.question_id,
            ...(index >= 2
              ? { option_ids: selectedOptionIds }
              : { option_id: selectedOptionIds[0] }),
            other_content:
              questionOtherOption &&
              selectedOptionIds.includes(questionOtherOption.option_id)
                ? otherContents[question.question_id]?.trim() || null
                : null,
          };
        }),
      };

      console.log("최종 요청 데이터:", requestData);

      // 완료 버튼 클릭 → Loading 화면
      setIsLoading(true);

      // 현재는 임시 동작
      // 나중에 실제 API 요청으로 교체
      onPrimaryClick?.(requestData);
      return;
    }

    setStep((currentStep) => currentStep + 1);
  };

  // Loading 화면
  if (isLoading) {
    return <Loading duration={duration} />;
  }

  return (
    <S.Container>
      {/* Header */}
      {step === 0 ? (
        <Header
          title={stepData.title}
          description={stepData.description}
        />
      ) : (
        <Header
          title={currentQuestion?.title}
          description={currentQuestion?.description}
        />
      )}

      {/* Step 0 : 시간 설정 */}
      {step === 0 && (
        <TimeStep
          stepData={stepData}
          duration={duration}
          onChange={setDuration}
        />
      )}

      {/* Step 1, 2 : 단일 선택 */}
      {(step === 1 || step === 2) && currentQuestion && (
        <SituationStep
          question={currentQuestion}
          selectedOption={currentSelectedOptions[0] ?? null}
          customSituation={currentOtherContent}
          otherOptionId={otherOption?.option_id}
          onOptionClick={(optionId) =>
            handleOptionClick(currentQuestion.question_id, optionId, false)
          }
          onCustomSituationChange={(e) =>
            handleOtherContentChange(
              currentQuestion.question_id,
              e.target.value,
            )
          }
        />
      )}

      {/* Step 3, 4 : 복수 선택 */}
      {isMultipleStep && currentQuestion && (
        <ContentStep
          question={currentQuestion}
          selectedOptions={currentSelectedOptions}
          onOptionClick={(optionId) =>
            handleOptionClick(currentQuestion.question_id, optionId, true)
          }
        />
      )}

      {/* 하단 버튼 */}
      <S.ButtonWrapper>
        <Button 
          variant={ hasSelectedOption ? "primary" : "secondary"} 
          disabled={!hasSelectedOption}
          onClick={handleNext}>
          {step === questions.length ? "완료" : "다음"}
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Home;
