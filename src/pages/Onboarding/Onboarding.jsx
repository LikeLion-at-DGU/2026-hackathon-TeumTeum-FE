import OnboardingHeader from "../../components/onboarding/OnboardingHeader.jsx"
import OptionSelect from "../../components/onboarding/OptionSelect.jsx";
import Button from "../../components/common/Button.jsx";
import * as S from "./Onboarding.styled.js"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOnboardingQuestions, saveOnboardingAnswers } from "../../apis/onboarding";
import StatusInfo from "../../components/common/StatusInfo.jsx";

const Onboarding = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);

  const navigate = useNavigate();

    useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data =
          await getOnboardingQuestions();

        setQuestions(
          Array.isArray(data?.questions)
            ? data.questions
            : [],
        );
      } catch (error) {
        console.error(
          "온보딩 질문 조회 실패:",
          error.response?.data || error.message
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

    if (isLoading) {
    return <StatusInfo>질문을 불러오는 중...</StatusInfo>;
  }

  if (questions.length === 0) {
    return <StatusInfo>질문을 불러오지 못했습니다.</StatusInfo>;
  }

  const currentQuestion = questions.find(
    (question) => question.order === currentStep
  );
  const currentOptions = currentQuestion?.options ?? [];

  const handleNext = async () => {
    // 1, 2단계라면 다음 질문으로 이동
    if (currentStep < questions.length) {
      setCurrentStep((previousStep) => previousStep + 1);
      return;
    }

  const answers = questions.map((question) => ({
    question_id: question.question_id,

    option_ids: (question.options ?? [])
      .filter((option) =>
        selectedOptionIds.includes(option.option_id)
      )
      .map((option) => option.option_id),
  }));

  try {
    // 백엔드에 POST 요청
    await saveOnboardingAnswers(answers);

    // 저장 성공 후에만 Home으로 이동
    navigate("/home");
  } catch (error) {
    console.error(
      "온보딩 답변 저장 실패:",
      error.response?.data ?? error.message
    );
  }
};

  const handleSelect = (optionId) => {
    setSelectedOptionIds((previousIds) => {
      const isAlreadySelected = previousIds.includes(optionId);

      if (isAlreadySelected) {
        return previousIds.filter((id) => id !== optionId);
      }

      return [...previousIds, optionId];
    });
  }

  const hasSelectedOption = currentOptions.some(
  (option) =>
    selectedOptionIds.includes(option.option_id)
  );

  const progress = ((currentStep - 1 + (hasSelectedOption ? 1 : 0)) / questions.length) * 100;

  const handlePrevious = () => {
    if(currentStep > 1 ) {
      setCurrentStep(
        (previousStep) => previousStep -1
      );
    }
  }
  return (
    <>
    <OnboardingHeader 
      currentStep={currentStep}
      totalStep={questions.length}
      question={currentQuestion?.question ?? ""}
      description={currentQuestion?.description ?? ""}
      progress={progress}
      onPrevious={handlePrevious}
    />
    <OptionSelect 
      options={currentOptions}
      selectedOptionIds={selectedOptionIds}
      onSelect={handleSelect}
    />
    <S.ButtonWrapper>
    <Button 
      variant={ hasSelectedOption ? "primary" : "secondary"} 
      disabled={!hasSelectedOption}
      onClick={handleNext}>다음</Button>
    </S.ButtonWrapper>
    </>
  )
};

export default Onboarding;
