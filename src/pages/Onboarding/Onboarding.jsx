import OnboardingHeader from "../../components/onboarding/OnboardingHeader.jsx"
import OptionSelect from "../../components/onboarding/OptionSelect.jsx";
import Button from "../../components/common/Button.jsx";
import * as S from "./Onboarding.styled.js"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOnboardingQuestions } from "../../apis/onboarding";

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

        setQuestions(data.questions);
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
    return <p>질문을 불러오는 중...</p>;
  }

  if (questions.length === 0) {
    return <p>질문을 불러오지 못했습니다.</p>;
  }

  const currentQuestion = questions.find(
    (question) => question.order === currentStep
  );

  const handleNext =() => {
    if(currentStep < questions.length){
      setCurrentStep((previousStep) => previousStep +1);
    }

    if(currentStep === questions.length){
      navigate("/home");
      return;
    }

    if(selectedOptionIds === 0) {

    }
  }

  const handleSelect = (optionId) => {
    setSelectedOptionIds((previousIds) => {
      const isAlreadySelected = previousIds.includes(optionId);

      if (isAlreadySelected) {
        return previousIds.filter((id) => id !== optionId);
      }

      return [...previousIds, optionId];
    });
  }

  const hasSelectedOption = currentQuestion.options.some(
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
      question={currentQuestion.question}
      description={currentQuestion.description}
      progress={progress}
      onPrevious={handlePrevious}
    />
    <OptionSelect 
      options={currentQuestion.options}
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
