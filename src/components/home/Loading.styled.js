import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 120px 22px 0;
`;

export const Dial = styled.div`
    width: 125px;
    height: 125px;

    flex: 0 0 125px;
    flex-shrink: 0;

    margin-top: 55px;

    border-radius: 50%;

    background: conic-gradient(
        #28c936 0deg,
        #28c936 90deg,
        #8ee296 90deg,
        #8ee296 360deg
    );

    position: relative;

    animation: rotateDial 2.5s linear infinite;

    &::after {
        content: "";
        position: absolute;
        inset: 12px;
        border-radius: 50%;
        background: #fff;
    }

    @keyframes rotateDial {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const StepContainer = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
    gap: 24px;
`;

export const TextGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    p {
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.374px;
    }
    animation: stepFadeUp 0.35s ease-out;
    @keyframes stepFadeUp {
        from {
            opacity: 0;
            transform: translateY(12px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;


export const TimeSummary = styled.p`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
`;

export const TimeLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontsize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const TimeValue = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;