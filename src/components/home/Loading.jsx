import { useEffect, useState } from "react";
import * as S from "./Loading.styled";
import Header from "../layout/Header";
import CheckIcon from "../../assets/icons/material-symbols_check-circle-rounded.svg"
import BottomSheet from "./BottomSheet";

const steps = [
    "남은 시간 확인",
    "상황·상태 반영",
    "관심사 분석",
    "활동 순서 구성 중",
];

const Loading = ({ duration }) => {

    const [visibleSteps, setVisibleSteps] = useState(1);
    const [showSheet, setShowSheet] = useState(false);

    useEffect(() => {
        if (visibleSteps >= steps.length) {
            // 마지막 step이 화면에 나타난 뒤에 잠깐 기다렸다가 BottomSheet 올라오게
            const timer = setTimeout(() => {
                setShowSheet(true);
            }, 500);

            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setVisibleSteps((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [visibleSteps]);

    return (
        <>
            <S.Container>
                <Header 
                    title="코스 생성 중"
                    description="당신에게 딱 맞는 웰니스 코스를 구성하고 있어요"
                />

                <S.Dial aria-label="코스를 생성하고 있어요">
                    <svg viewBox="0 0 125 125" aria-hidden="true">
                        <circle cx="62.5" cy="62.5" r="50.5" />
                        <circle
                            className="progress"
                            cx="62.5"
                            cy="62.5"
                            r="50.5"
                            pathLength="100"
                        />
                    </svg>
                </S.Dial>

                <S.StepContainer>
                    {steps.slice(0, visibleSteps).map((step) => (
                        <S.TextGroup key={step}>
                            <img src={CheckIcon} alt="체크아이콘" />
                            <p>{step}</p>
                        </S.TextGroup>
                    ))}
                </S.StepContainer>

                <S.TimeSummary aria-live="polite">
                    <S.TimeLabel>틈새 시간</S.TimeLabel>
                    <S.TimeValue>{duration}분</S.TimeValue>
                </S.TimeSummary>

            </S.Container>
            {showSheet && (
                    <BottomSheet duration={duration} />
            )}
        </>
        
    );
};

export default Loading;
