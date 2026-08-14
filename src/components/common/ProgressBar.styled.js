import styled from "styled-components";

export const ProgressTrack = styled.div`
    width: 100%;
    height: 11px;
    margin: 16px 0;
    overflow: hidden;
    background-color: #eeeeee;
    border-radius: 6px;
`;

export const ProgressBar = styled.div`
    width: ${({ $progress }) => `${$progress}%`};
    height: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 6px;
    transition: width 0.4s ease;
`