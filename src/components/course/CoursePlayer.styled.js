import styled from "styled-components";
import theme from "../../styles/theme";

export const Player = styled.div`
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);

    width: min(760px, calc(100% - 32px));
    min-height: 200px;

    padding: 24px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 20px;

    background-color: ${theme.colors.white};
    border-radius: 24px;

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

    z-index: 1000;
`;


/* 코스 Timeline */
export const Timeline = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;


/* 현재 코스 Progress */
export const ProgressBar = styled.div`
    width: 100%;
    height: 6px;

    background-color: #e9e9e9;
    border-radius: 999px;

    overflow: hidden;
`;


/* 재생 컨트롤 */
export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;