import Header from "../../components/layout/Header";
import Button from "../../components/common/Button";

import TimeStep from "../../components/home/TimeStep";
import SituationStep from "../../components/home/SituationStep";
import ContentStep from "../../components/home/ContentStep";
import Loading from "../../components/home/Loading";

import useCourseFlow from "../../hooks/useCourseFlow";

import * as S from "./Home.styled";

import { useEffect, useState } from "react";
import { getMain, postMain, getQuestions, postQuestions } from "../../apis/main";

const Home = () => {

  const [stepData, setStepData] = useState(null);
  const [questions, setQuestions] = useState([]);

  
  const {
    step, setStep,
    duration, setDuration,
    answers,
    otherContents,
    isLoading, setIsLoading,
    handleOptionClick,
    handleOtherContentChange,
  } = useCourseFlow();

  useEffect(() => {
    const fetchMain = async () => {
      try {
        const data = await getMain();

        setStepData(data);
        setDuration(data.target_minutes ?? data.min_minutes);
        console.log("main API 응답:", data);
      } catch (error) {
        console.error(
          "GET /main 실패:",
          error.response?.data || error.message
        );
      }
    };

    fetchMain();
  }, [setDuration]);

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
  const handleNext = async () => {

    if (!hasSelectedOption) return;

    // Step 0 → Step 1
    if (step === 0) {
      try {
        const mainData = await postMain(duration);
        console.log("POST /main 성공: ", mainData);

        const questionData = await getQuestions();
        console.log("GET /main/questions 성공: ", questionData);

        const fetchedQuestions = questionData.questions ?? [];

        if (fetchedQuestions.length === 0) {
          console.error("질문 목록이 비어 있습니다.");
          return;
        }

        setQuestions(fetchedQuestions);
        setStep(1);

        return;

      } catch (error) {
        console.error(
          "POST /main 실패",
          error.response?.data || error.message,
        );
        return;
      }
    }

    // 마지막 질문 → Loading
    if (step === questions.length) {
      const requestAnswers = questions.map((question, index) => {
          const selectedOptionIds = answers[question.question_id] ?? [];

          const questionOtherOption = question.options.find(
            (option) => option.content === "기타",
          );


          const isOtherSelected =
            questionOtherOption &&
            selectedOptionIds.includes(
              questionOtherOption.option_id,
            );


          return {
            question_id: question.question_id,
            ...(index >= 2
              ? { option_ids: selectedOptionIds }
              : { option_id: selectedOptionIds[0] }),
            other_content: isOtherSelected
                ? otherContents[question.question_id]?.trim() || null
                : null,
          };
      });

      try {
        const data = await postQuestions(requestAnswers);

        console.log("POST /main/questions 성공:", data);


      // 완료 버튼 클릭 → Loading 화면
      setIsLoading(true);


      } catch (error) {
        console.error(
          "시간 저장 또는 질문 조회 실패:",
          error.response?.data || error.message,
        );
      }

      return;
    }

    setStep((currentStep) => currentStep + 1);
  };

  // Loading 화면
  if (isLoading) {
    return <Loading duration={duration} />;
  }

  if (!stepData) {
    return <div>불러오는 중...</div>;
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
          {step > 0 && step === questions.length ? "완료" : "다음"}
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Home;
