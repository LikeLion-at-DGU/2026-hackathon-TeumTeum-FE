import useTimeDial from "../../hooks/useTimeDial";
import * as S from "./TimeDial.styled";

const SIZE = 280;
const CENTER = SIZE / 2;
const RADIUS = 105;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const TimeDial = ({ initialValue = 30, onChange }) => {
  const {
    svgRef,
    minutes,
    startAngle,
    startPosition,
    endPosition,
    progress,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
  } = useTimeDial({
    size: SIZE,
    radius: RADIUS,
    maxMinutes: 60,
    step: 1,
    initialValue,
    onChange,
  });

  return (
    <S.Container>
      <S.Dial
        ref={svgRef}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        aria-label={`틈새 시간 ${minutes}분`}
      >
        <defs>
          <S.ProgressGradient
            id="time-dial-gradient"
            $startAngle={startAngle}
          >
            <S.GradientStart offset="0%" />
            <S.GradientMiddle offset="55%" />
            <S.GradientEnd offset="100%" />
          </S.ProgressGradient>
        </defs>

        <S.Track cx={CENTER} cy={CENTER} r={RADIUS} />

        <S.Progress
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          $circumference={CIRCUMFERENCE}
          $progress={progress}
          $startAngle={startAngle}
        />

        <S.Handle
          cx={startPosition.x}
          cy={startPosition.y}
          r="20"
          role="slider"
          tabIndex="0"
          aria-label="시작 지점"
          aria-valuemin="0"
          aria-valuemax="60"
          aria-valuenow="0"
          onPointerDown={(event) => handlePointerDown(event, "start")}
        />

        <S.Handle
          cx={endPosition.x}
          cy={endPosition.y}
          r="20"
          role="slider"
          tabIndex="0"
          aria-label="종료 지점"
          aria-valuemin="0"
          aria-valuemax="60"
          aria-valuenow={minutes}
          onPointerDown={(event) => handlePointerDown(event, "end")}
        />
      </S.Dial>

      <S.TimeOutput aria-live="polite">
        <strong>{minutes}</strong>분
      </S.TimeOutput>

      <S.TimeMark $position="right">15</S.TimeMark>
      <S.TimeMark $position="bottom">30</S.TimeMark>
      <S.TimeMark $position="left">45</S.TimeMark>
    </S.Container>
  );
};

export default TimeDial;
