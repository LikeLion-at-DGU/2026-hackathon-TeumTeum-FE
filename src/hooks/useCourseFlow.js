import { useState } from "react";

const useCourseFlow = () => {
  const [step, setStep] = useState(0);
  const [duration, setDuration] = useState(3);
  const [answers, setAnswers] = useState({});
  const [otherContents, setOtherContents] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionClick = (questionId, optionId, isMultiple) => {
    setAnswers((previous) => {
      const selected = previous[questionId] ?? [];
      const nextSelected = isMultiple
        ? selected.includes(optionId)
          ? selected.filter((id) => id !== optionId)
          : [...selected, optionId]
        : [optionId];

      return { ...previous, [questionId]: nextSelected };
    });
  };

  const handleOtherContentChange = (questionId, value) => {
    setOtherContents((previous) => ({
      ...previous,
      [questionId]: value,
    }));
  };

  return {
    step,
    setStep,

    duration,
    setDuration,

    answers,
    otherContents,
    isLoading,
    setIsLoading,
    handleOptionClick,
    handleOtherContentChange,
  };
};

export default useCourseFlow;
