import { useEffect, useState } from "react";
import * as S from "./Loading.styled";
import Header from "../layout/Header";
import CheckIcon from "../../assets/icons/material-symbols_check-circle-rounded.svg"

const steps = [
    "남은 시간 확인",
    "취향 분석",
    "콘텐츠 선택",
    "활동 순서 구상 중",
];

const Loading = ({ duration }) => {

    const [visibleSteps, setVisibleSteps] = useState(1);

    useEffect(() => {
        if (visibleSteps >= steps.length) return;

        const timer = setTimeout(() => {
            setVisibleSteps((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [visibleSteps]);

    return (
        <S.Container>
            <Header 
                title="코스 생성 중"
                description="당신에게 딱 맞는 웰니스 코스를 구성하고 있어요"
            />

            <S.Dial />

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
    );
};

export default Loading;