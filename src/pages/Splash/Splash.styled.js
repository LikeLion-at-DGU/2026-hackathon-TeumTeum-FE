import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }

    75% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const Main = styled.div`
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    animation: ${fadeOut} 1.5s ease-out forwards;
`
export const SubTitle = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fontsize.md};
    font-weight: ${({theme}) => theme.fontWeight.regular};
`
export const Title = styled.span`
    font-size: 64px;
    font-weight: 100;
    color: ${({theme}) => theme.colors.primary};
    letter-spacing: 0.37px;
`