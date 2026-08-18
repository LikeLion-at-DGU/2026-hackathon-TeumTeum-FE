import OnboardingHeader from "../../components/onboarding/OnboardingHeader.jsx"
import OptionSelect from "../../components/onboarding/OptionSelect.jsx";
import Button from "../../components/common/Button.jsx";
import * as S from "./Onboarding.styled.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const questions = mockOnboardingQuestions.questions;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);

  const currentQuestion = questions.find(
    (question) => question.order === currentStep
  );

  const navigate = useNavigate();

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
