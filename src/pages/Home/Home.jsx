import { useState } from "react";

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
  description: "최소 3분에서 최대 60분까지, 자유롭게 설정해요.",
  target_minutes: 3,
  min_minutes: 3,
  max_minutes: 60,
};

const questions = [
  {
    question_id: 1,
    title: "현재 당신의 상황은?",
    description: "상황에 맞추어 세션을 추천 드릴게요 :)",
    options: [
      { option_id: 1, content: "길거리/대중교통" },
      { option_id: 2, content: "카페/실내" },
      { option_id: 3, content: "약속 직전" },
      { option_id: 4, content: "기타" },
    ],
  },
  {
    question_id: 2,
    title: "어떤 콘텐츠를 원하시나요?",
    description: "알맞는 가이드로 추천 드릴게요 :)",
    options: [
      { option_id: 5, content: "독서" },
      { option_id: 6, content: "듣기" },
      { option_id: 7, content: "스트레칭" },
      { option_id: 8, content: "마인드컨트롤" },
    ],
  },
];

// 임시 사용자 UUID
const guestUuid = "550e8400-e29b-41d4-a716-446655440000";

const Home = ({ onPrimaryClick }) => {
  const {
    step, setStep,
    duration, setDuration,
    selectOption,
    customSituation, setCustomSituation,
    selectOptions,
    step1Answer, setStep1Answer,
    isLoading, setIsLoading,
    handleOptionClick,
  } = useCourseFlow();

  const currentQuestion = questions[step - 1];

  // 다음 / 완료 버튼
  const handleNext = () => {
    // Step 0 → Step 1
    if (step === 0) {
      setStep(1);
      return;
    }

    // Step 1 → Step 2
    if (step === 1) {
      const answer = {
        question_id: currentQuestion.question_id,
        option_id: selectOption,
        other_content:
          selectOption === 4 ? customSituation : null,
      };

      setStep1Answer(answer);

      console.log("Step 1 answer:", answer);

      setStep(2);
      return;
    }

    // Step 2 → Loading
    if (step === 2) {
      const answer = {
        question_id: currentQuestion.question_id,
        option_ids: selectOptions,
      };

      const requestData = {
        guest_uuid: guestUuid,
        answers: [
          step1Answer,
          answer,
        ],
      };

      console.log("최종 요청 데이터:", requestData);

      // 완료 버튼 클릭 → Loading 화면
      setIsLoading(true);

      // 현재는 임시 동작
      // 나중에 실제 API 요청으로 교체
      onPrimaryClick?.(requestData);
    }
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

      {/* Step 1 : 상황 선택 */}
      {step === 1 && currentQuestion && (
        <SituationStep
          question={currentQuestion}
          selectedOption={selectOption}
          customSituation={customSituation}
          onOptionClick={handleOptionClick}
          onCustomSituationChange={(e) =>
            setCustomSituation(e.target.value)
          }
        />
      )}

      {/* Step 2 : 콘텐츠 선택 */}
      {step === 2 && currentQuestion && (
        <ContentStep
          question={currentQuestion}
          selectedOptions={selectOptions}
          onOptionClick={handleOptionClick}
        />
      )}

      {/* 하단 버튼 */}
      <S.ButtonWrapper>
        <Button variant="primary" onClick={handleNext}>
          {step === 2 ? "완료" : "다음"}
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Home;