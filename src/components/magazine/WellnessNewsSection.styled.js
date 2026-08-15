import styled from "styled-components";

export const Section = styled.div`
    width: 100%;
    min-width: 0;
`

export const Title = styled.span`
    display: block;
    font-size: ${({theme}) => theme.fontsize.lg};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.colors.primary};
`
export const CardWrapper = styled.div`
    display: flex;
    gap: 12px;
    padding-bottom: 10px;

    width: 100%;
    height: 255px;
    box-sizing: border-box;
    
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > * {
        flex: 0 0 166px;
        scroll-snap-align: start;
    }
    
`
