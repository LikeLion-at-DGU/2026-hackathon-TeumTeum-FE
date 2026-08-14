import TimeDial from "./TimeDial";
import * as S from "../../pages/Home/Home.styled";

const TimeStep = ({ stepData, duration, onChange }) => {
  return (
    <>
      <TimeDial
        initialValue={duration}
        onChange={onChange}
        min={stepData.min_minutes}
        max={stepData.max_minutes}
      />

      <S.TimeSummary aria-live="polite">
        <S.TimeLabel>틈새 시간</S.TimeLabel>
        <S.TimeValue>{duration}분</S.TimeValue>
      </S.TimeSummary>
    </>
  );
};

export default TimeStep;