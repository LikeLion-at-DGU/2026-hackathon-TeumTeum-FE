import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const pulse = keyframes`
  0%, 100% {
    transform: scale(0.78);
    opacity: 0.18;
  }

  50% {
    transform: scale(1.28);
    opacity: 0.72;
  }
`;

const corePulse = keyframes`
  0%, 100% {
    transform: scale(0.92);
    box-shadow:
      0 0 24px rgba(120, 230, 117, 0.55),
      0 0 45px rgba(145, 242, 141, 0.28);
  }

  50% {
    transform: scale(1.08);
    box-shadow:
      0 0 34px rgba(120, 230, 117, 0.8),
      0 0 70px rgba(145, 242, 141, 0.5);
  }
`;

export const Container = styled.main`
  width: 100%;
  min-height: calc(100dvh - 120px);
  padding: 0 24px 220px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  display: flex;
  padding-bottom: 24px;
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.news};
`;

export const CenterContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Guide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

export const GuideText = styled.p`
  margin: 0;
  color: ${theme.colors.news};
  font-size: 14px;
  line-height: 1.45;
`;

export const BreathArea = styled.div`
  min-height: 230px;
  display: grid;
  justify-items: center;
  align-items: start;
  padding: 25px 0 10px;
`;

export const BreathOrb = styled.div`
  position: relative;
  width: 190px;
  height: 190px;
  display: grid;
  place-items: center;
`;

export const Glow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(112, 227, 108, 0.6) 0%,
    rgba(139, 237, 134, 0.34) 34%,
    rgba(192, 255, 188, 0) 72%
  );
  animation: ${pulse} 2.6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  animation-play-state: ${({ $isPlaying }) =>
    $isPlaying ? "running" : "paused"};
`;

export const Core = styled.div`
  position: relative;
  z-index: 1;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: #9be99a;
  animation: ${corePulse} 2.6s ease-in-out infinite;
  animation-play-state: ${({ $isPlaying }) =>
    $isPlaying ? "running" : "paused"};
`;

export const StatusArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 6px;
`;

export const Phase = styled.p`
  margin: 0;
  color: ${theme.colors.news};
  font-size: 14px;
  font-weight: 500;
`;

export const Count = styled.p`
  margin: 0;
  color: ${theme.colors.news};
  font-size: 15px;
  font-variant-numeric: tabular-nums;
`;
