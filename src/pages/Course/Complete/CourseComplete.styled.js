import styled, { keyframes } from "styled-components";

const drawCircle = keyframes`
    from { stroke-dashoffset: 314; }
    to { stroke-dashoffset: 0; }
`;

const fillCircle = keyframes`
    from { fill-opacity: 0; }
    to { fill-opacity: 1; }
`;

const drawCheck = keyframes`
    from {
        stroke-dashoffset: 100;
        opacity: 0;
    }
    to {
        stroke-dashoffset: 0;
        opacity: 1;
    }
`;
const fadeInContent = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const popCheck = keyframes`
    0% { transform: scale(0.7); }
    65% { transform: scale(1.15); }
    100% { transform: scale(1); }
`;

const burstConfetti = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(0deg) scale(0);
    }

    20% {
        opacity: 1;
        transform: translate(-50%, -50%) rotate(45deg) scale(1);
    }

    100% {
        opacity: 0;
        transform:
            translate(
                calc(-50% + var(--confetti-x)),
                calc(-50% + var(--confetti-y))
            )
            rotate(240deg)
            scale(0.75);
    }
`;

const showRecord = keyframes`
    0% {
        opacity: 0;
        transform: translateY(60dvh);
    }

    40% {
        opacity: 0.65;
    }

    60% {
        opacity: 0.80;
    }
    75% {
        opacity: 0.98;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100dvh;
    padding: 120px 16px 0px 16px;
`
export const CompleteSummary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
`

export const IconWrapper = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
`

export const CompleteIcon = styled.svg`
    width: 120px;
    height: 120px;
    color: ${({theme}) => theme.colors.primary};
    overflow: visible;
`

export const Confetti = styled.div`
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: visible;
    pointer-events: none;
`

export const ConfettiPiece = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({$index}) => $index % 3 === 0 ? "6px" : "8px"};
    height: ${({$index}) => $index % 3 === 0 ? "13px" : "8px"};
    border-radius: ${({$index}) => $index % 3 === 0 ? "2px" : "50%"};
    opacity: 0;
    background-color: ${({$index}) => [
        "#2DCC2F",
        "#FFD84D",
        "#FF6B6B",
        "#6C8CFF",
    ][$index % 4]};
    --confetti-x: ${({$index}) =>
        `${Math.cos(($index * Math.PI * 2) / 12) * 92}px`};
    --confetti-y: ${({$index}) =>
        `${Math.sin(($index * Math.PI * 2) / 12) * 92}px`};
    animation: ${burstConfetti} 0.8s ease-out 1.1s both;
`

export const Circle = styled.circle`
    fill: currentColor;
    fill-opacity: 0;
    stroke: currentColor;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 314;
    stroke-dashoffset: 314;
    transform: rotate(-90deg);
    transform-origin: center;
    animation:
        ${drawCircle} 0.7s ease-out forwards,
        ${fillCircle} 0.25s ease-out 0.55s forwards;
`

export const Check = styled.path`
    fill: none;
    stroke: white;
    stroke-width: 9;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    transform-origin: center;
    animation:
        ${drawCheck} 0.4s ease-out 0.7s forwards,
        ${popCheck} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    gap: 3px;
    animation:
    ${fadeInContent}
    0.5s
    ease-out
    1.1s
    both;
`
export const Title = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fontsize.title};
    font-weight: ${({theme}) => theme.fontWeight.medium};
`

export const Description = styled.span`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.subtitle};
    font-weight: ${({theme}) => theme.fontWeight.regular};
`
export const Record = styled.div`
    border: 1px solid #B4B9C9;
    border-radius: 27px;
    width: 100%;
    height: 373px;

    display: flex;
    flex-direction: column;
    align-items: center;

    transform-origin: center;

    animation:
  ${showRecord}
  1.2s
  cubic-bezier(0.16, 1, 0.3, 1)
  1.6s
  both;
`
export const RecordTitle = styled.span`
    font-size: ${({theme}) => theme.fontsize.title};
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};
    padding: 20px 0px 15px 0px;
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 20px 0px 40px 0px;

`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Times = styled.span`
    font-size: ${({theme}) => theme.fontsize.title};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    color: ${({theme}) => theme.colors.primary};
`
export const Label = styled.span`
    font-size: ${({theme}) => theme.fontsize.subtitle};
    font-weight: ${({theme}) => theme.fontWeight.regular};
    color: ${({theme}) => theme.colors.news};
`
export const SaveMessage = styled.span`
    font-size: ${({theme}) => theme.fontsize.md};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    color: ${({theme}) => theme.colors.gray};
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 55px 0px;
`
