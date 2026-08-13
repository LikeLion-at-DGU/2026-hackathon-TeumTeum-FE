import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: min(280px, 82vw);
  aspect-ratio: 1;
  margin: 160px auto 0;
  user-select: none;
`;

export const Dial = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  touch-action: none;
`;

export const ProgressGradient = styled("linearGradient").attrs(
  ({ $startAngle }) => ({
    x1: 0,
    y1: 35,
    x2: 0,
    y2: 245,
    gradientUnits: "userSpaceOnUse",
    gradientTransform: `rotate(${$startAngle} 140 140)`,
  }),
)``;

export const GradientStart = styled.stop`
  stop-color: #16821b;
`;

export const GradientMiddle = styled.stop`
  stop-color: #26b82d;
`;

export const GradientEnd = styled.stop`
  stop-color: ${({ theme }) => theme.colors.primary};
`;

export const Track = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.catagory};
  stroke-width: 42;
`;

export const Progress = styled.circle`
  fill: none;
  stroke: url("#time-dial-gradient");
  stroke-width: 42;
  stroke-linecap: round;
  stroke-dasharray: ${({ $circumference, $progress }) =>
    `${$circumference * $progress} ${$circumference}`};
  transform: ${({ $startAngle }) => `rotate(${$startAngle - 90}deg)`};
  transform-origin: center;
  pointer-events: none;
`;

export const Handle = styled.circle`
  fill: ${({ theme }) => theme.colors.primary};
  stroke: ${({ theme }) => theme.colors.background};
  stroke-width: 6;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const TimeOutput = styled.output`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsize.md};
  pointer-events: none;

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const TimeMark = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsize.subtitle};
  pointer-events: none;

  ${({ $position }) =>
    $position === "right" &&
    `
      top: 50%;
      right: 70px;
      transform: translateY(-50%);
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    `
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ $position }) =>
    $position === "left" &&
    `
      top: 50%;
      left: 70px;
      transform: translateY(-50%);
    `}
`;
