import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: calc(100dvh - 120px);
  padding: 0 24px 200px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0 0 12px;
  color: #4b4b4b;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const ProgressTrack = styled.div`
  width: 110px;
  height: 11px;
  overflow: hidden;
  border-radius: 999px;
  background: #eeeeee;
`;

export const ProgressFill = styled.div`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  border-radius: inherit;
  background: #2ecc3a;
  transition: width 0.35s ease;
`;

export const Step = styled.p`
  margin: 12px 0 0;
  color: #a1a1a1;
  font-size: 16px;
  font-weight: 500;
`;

export const ContentArea = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 56px;
`;

export const Instruction = styled.div`
  margin: 0 0 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

export const Description = styled.p`
  margin: 0;
  color: #5a5a5a;
  font-size: 14px;
  line-height: 1.5;
`;

export const StepInstruction = styled.p`
  margin: 0;
  color: #5a5a5a;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ImageFrame = styled.div`
  width: min(760px, calc(100vw - 32px));
  max-width: calc(100vw - 32px);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
`;

export const StretchImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemainingTime = styled.p`
  margin: 20px 0 0;
  color: #5a5a5a;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;
