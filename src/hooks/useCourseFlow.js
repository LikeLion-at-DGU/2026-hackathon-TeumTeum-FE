import { useState } from "react";

const useCourseFlow = () => {
  const [step, setStep] = useState(0);

  const [duration, setDuration] = useState(3);

  const [selectOption, setSelectOption] = useState(null);
  const [customSituation, setCustomSituation] = useState("");

  const [selectOptions, setSelectOptions] = useState([]);

  const [step1Answer, setStep1Answer] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleOptionClick = (optionId) => {
    // Step 1
    if (step === 1) {
      setSelectOption(optionId);

      if (optionId !== 4) {
        setCustomSituation("");
      }

      return;
    }

    // Step 2
    if (step === 2) {
      setSelectOptions((prev) => {
        if (prev.includes(optionId)) {
          return prev.filter((id) => id !== optionId);
        }

        return [...prev, optionId];
      });
    }
  };

  const goNext = () => {
    setStep((prev) => prev + 1);
  };

  return {
    step,
    setStep,

    duration,
    setDuration,

    selectOption,
    setSelectOption,

    customSituation,
    setCustomSituation,

    selectOptions,
    setSelectOptions,

    step1Answer,
    setStep1Answer,

    isLoading,
    setIsLoading,

    handleOptionClick,
    goNext,
  };
};

export default useCourseFlow;