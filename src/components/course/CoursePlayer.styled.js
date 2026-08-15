import styled from "styled-components";
import theme from "../../styles/theme";


// ==============================
// Player
// ==============================

export const Player = styled.div`
    position: fixed;

    left: 50%;
    bottom: 20px;

    transform: translateX(-50%);

    width: min(760px, calc(100% - 32px));
    min-height: 180px;

    padding: 28px 30px;

    box-sizing: border-box;

    background-color: ${theme.colors.white};

    border-radius: 24px;

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

    z-index: 20;
`;


// ==============================
// Timeline 전체
// ==============================

export const Timeline = styled.div`
    width: 100%;
`;


// ==============================
// 코스 이름
// ==============================

export const Labels = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 14px;
`;

export const CourseLabel = styled.span`
    font-size: 16px;
    font-weight: 500;

    color: ${({ $active }) =>
        $active ? theme.colors.primary : "#999999"};

    white-space: nowrap;

    transition: color 0.2s ease;
`;


// ==============================
// Progress 영역
// ==============================

export const ProgressArea = styled.div`
    position: relative;

    width: 100%;
    height: 22px;
`;


// ==============================
// 전체 회색 Progress
// ==============================

export const ProgressRail = styled.div`
    position: absolute;

    top: 50%;
    left: 0;

    width: 100%;
    height: 6px;

    transform: translateY(-50%);

    background-color: ${theme.colors.catagory};

    border-radius: 999px;
`;


// ==============================
// 진행된 초록색 영역
// ==============================

export const ProgressFill = styled.div`
    position: absolute;

    top: 50%;
    left: 0;

    height: 6px;

    transform: translateY(-50%);

    background-color: ${theme.colors.primary};

    border-radius: 999px;

    transition: width 0.3s linear;

    z-index: 1;
`;


// ==============================
// 코스 Dot
// ==============================

export const CourseDot = styled.div`
    position: absolute;

    top: 50%;
    left: ${({ $position }) => `${$position}%`};

    width: ${({ $current }) =>
        $current ? "16px" : "14px"};

    height: ${({ $current }) =>
        $current ? "16px" : "14px"};

    transform: translate(-50%, -50%);

    border-radius: 50%;

    background-color: ${({ $completed, $current }) => {
        if ($completed || $current) {
            return theme.colors.primary;
        }

        return theme.colors.catagory;
    }};

    z-index: 3;

    transition:
        width 0.2s ease,
        height 0.2s ease,
        background-color 0.2s ease;
`;


// ==============================
// 실제 현재 위치 Playhead
// ==============================

export const Playhead = styled.div`
    position: absolute;

    top: 50%;

    left: 0;

    width: 18px;
    height: 18px;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    background-color: ${theme.colors.primary};

    box-shadow:
        0 0 0 7px rgba(50, 205, 50, 0.18);

    z-index: 4;

    transition: left 0.3s linear;
`;

export const EndDot = styled.div`
    position: absolute;

    top: 50%;
    right: 0;

    width: 14px;
    height: 14px;

    transform: translate(50%, -50%);

    border-radius: 50%;

    background-color: ${theme.colors.catagory};

    z-index: 3;
`;

// ==============================
// 시간
// ==============================

export const TimeRow = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 8px;
`;

export const ElapsedTime = styled.span`
    font-size: 12px;
    font-weight: 400;

    color: #999999;
`;

export const RemainingTime = styled.span`
    font-size: 12px;
    font-weight: 400;

    color: #999999;
`;


// ==============================
// 재생 컨트롤
// ==============================

export const Controls = styled.div`
    position: absolute;

    left: 50%;
    bottom: 27px;

    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 69px;
`;


// ==============================
// 이전
// ==============================

export const PreviousButton = styled.button`
    width: 45px;
    height: 25px;

    padding: 0;

    border: none;
    background: transparent;

    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;

    transition: transform 0.1s ease;

    &:active {
        transform: scale(0.9);
    }

    img {
        width: 100%;
        height: 100%;

        display: block;
    }
`;


// ==============================
// 재생 / 일시정지
// ==============================

export const PlayPauseButton = styled.button`
    width: 23px;
    height: 30px;

    padding: 0;

    border: none;
    background: transparent;

    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;

    transition: transform 0.1s ease;

    &:active {
        transform: scale(0.9);
    }

    img {
        width: ${({ $isPlaying }) =>
            $isPlaying ? "23px" : "27px"};

        height: ${({ $isPlaying }) =>
            $isPlaying ? "30px" : "30px"};

        display: block;

        object-fit: contain;
    }
`;


// ==============================
// 다음
// ==============================

export const NextButton = styled.button`
    width: 44px;
    height: 25px;

    padding: 0;

    border: none;
    background: transparent;

    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;

    transition: transform 0.1s ease;

    &:active {
        transform: scale(0.9);
    }

    img {
        width: 100%;
        height: 100%;

        display: block;
    }
`;