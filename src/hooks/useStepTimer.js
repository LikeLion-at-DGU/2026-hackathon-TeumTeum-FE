import { useEffect, useState } from "react";

const useStepTimer = ({ steps, repeatCount = 1, isPlaying, resetKey }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(
    steps[0]?.duration_seconds ?? 0,
  );
  const [completedRepeatCount, setCompletedRepeatCount] = useState(0);
  const [isComplete, setIsComplete] = useState(steps.length === 0);

  useEffect(() => {
    setCurrentStepIndex(0);
    setRemainingSeconds(steps[0]?.duration_seconds ?? 0);
    setCompletedRepeatCount(0);
    setIsComplete(steps.length === 0);
  }, [resetKey, steps]);

  useEffect(() => {
    if (!isPlaying || isComplete || steps.length === 0) return;

    const timer = setTimeout(() => {
      if (remainingSeconds > 1) {
        setRemainingSeconds((previous) => previous - 1);
        return;
      }

      const isLastStep = currentStepIndex === steps.length - 1;

      if (!isLastStep) {
        const nextStepIndex = currentStepIndex + 1;
        setCurrentStepIndex(nextStepIndex);
        setRemainingSeconds(steps[nextStepIndex].duration_seconds);
        return;
      }

      const nextCompletedRepeatCount = completedRepeatCount + 1;

      if (nextCompletedRepeatCount >= repeatCount) {
        setCompletedRepeatCount(nextCompletedRepeatCount);
        setRemainingSeconds(0);
        setIsComplete(true);
        return;
      }

      setCompletedRepeatCount(nextCompletedRepeatCount);
      setCurrentStepIndex(0);
      setRemainingSeconds(steps[0].duration_seconds);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    completedRepeatCount,
    currentStepIndex,
    isComplete,
    isPlaying,
    remainingSeconds,
    repeatCount,
    steps,
  ]);

  return {
    currentStepIndex,
    remainingSeconds,
    completedRepeatCount,
    isComplete,
  };
};

export default useStepTimer;
