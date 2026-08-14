import { useState } from "react";
import TimeDial from "../../components/home/TimeDial";
import Header from "../../components/layout/Header";
import * as S from "./Home.styled";
import Button from "../../components/common/Button";
import Chip from "../../components/common/Chip";

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

// 나중에 props에 stepData, questions, 넣어야함
const Home = ({  onPrimaryClick }) => {
  const [step, setStep] = useState(0);

  // step 0 시간설정
  const [duration, setDuration] = useState(
    stepData?.target_minutes ?? 30
  );

  // step 1 단일선택
  const [selectOption, setSelectOption] = useState(null);

  // step 1 기타 입력값
  const [customSituation, setCustomSituation] = useState("");

  // step 2 복수선택
  const [selectOptions, setSelectOptions] = useState([]);

  // step 1에서 저장한 답변
  const [step1Answer, setStep1Answer] = useState(null);

  const currentQuestion = questions?.[step - 1];

  // 칩 선택
  const handleOptionClick = (optionId) => {
    //step 1 단일선택
    if(step === 1) {
      setSelectOption(optionId);
    
      if(optionId !== 4) {
        setCustomSituation("");
      }
      return;
    }

    // step2 복수선택
    if(step === 2) {
      setSelectOptions((prev) => {
        if(prev.includes(optionId)) {
          return prev.filter((id) => id !== optionId);
        }

        return [...prev, optionId];
      });
    }
  };

  const handleNext = () => {
    if(step === 0) {
      setStep(1);
      return;
    }

    if(step === 1) {
      const answer = {
        question_id: currentQuestion.question_id,
        option_ids: selectOptions,
        other_content: selectOption === 4 ? customSituation : null,
      };
      
      setStep1Answer(answer);
      console.log("Step 1 answer: ", answer);

      setStep(2);
      return;
    }

    if(step === 2) {
      const answer = {
        question_id: currentQuestion.question_id,
        option_id: selectOptions,
      };
      console.log("Step 2 answer: ", answer);

      const requestData = {
        guest_uuid: guestUuid,
        answers: [
          step1Answer,
          answer,
        ],
      };

      console.log("최종 요청 데이터: ", requestData);

      onPrimaryClick?.(requestData);
    }
  };

  return (
    <S.Container>
      {step === 0 ? (
        <Header
          title={stepData?.title}
          description={stepData?.description}
        />
      ) : ( 
        <Header
          title={currentQuestion?.title}
          description={currentQuestion?.description}
        />
      )}
      
      {step === 0 && (
        <>
          <TimeDial 
            initialValue={duration} 
            onChange={setDuration} 
            min={stepData?.min_minutes}
            max={stepData?.max_minutes}
          />

          <S.TimeSummary aria-live="polite">
            <S.TimeLabel>틈새 시간</S.TimeLabel>
            <S.TimeValue>{duration}분</S.TimeValue>
          </S.TimeSummary>
        </>
      )}

      {step > 0 && currentQuestion && (
        <>
          <S.ChipList>
            {currentQuestion?.options?.map((option) => (
              <Chip 
                key={option.option_id}
                optionId={option.option_id}
                content={option.content}
                selected={
                    step === 1
                      ? selectOption === option.option_id
                      : selectOptions.includes(option.option_id)
                  }
                onClick={() => handleOptionClick(option.option_id)}
              >
                {option.content}
              </Chip>
            ))}
          </S.ChipList>

          {step === 1 && selectOption === 4 && (
            <S.CustomInput
              type="text"
              value={customSituation}
              onChange={(e) => setCustomSituation(e.target.value)}
              placeholder="현재 당신의 상황은?"
              maxLength={50}
            />
          )}
        </>
        
      )}
      
      <S.ButtonWrapper>
        <Button variant="primary" onClick={handleNext}>
          {step === 2 ? "완료" : "다음"}
        </Button>
      </S.ButtonWrapper>
      
    </S.Container>
  );
};

export default Home;


