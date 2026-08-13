import { useState } from "react";
import TimeDial from "../../components/home/TimeDial";
import Header from "../../components/layout/Header";
import * as S from "./Home.styled";
import Button from "../../components/common/Button";

const Home = ({ onPrimaryClick }) => {
  const [duration, setDuration] = useState(30);

  return (
    <S.Container>
      <Header
        title="당신에게 남은 '틈'은?"
        description="최대 60분까지 자유롭게 설정해요."
      />

      <TimeDial initialValue={duration} onChange={setDuration} />

      <S.TimeSummary aria-live="polite">
        <S.TimeLabel>틈새 시간</S.TimeLabel>
        <S.TimeValue>{duration}분</S.TimeValue>
      </S.TimeSummary>
      
      <S.ButtonWrapper>
        <Button variant="primary" onClick={onPrimaryClick}>
          다음
        </Button>
      </S.ButtonWrapper>
      
    </S.Container>
  );
};

export default Home;
