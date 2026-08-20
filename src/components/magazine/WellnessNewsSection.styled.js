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
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    padding-bottom: 10px;

    width: 100%;

    > a {
        width: 100%;
        color: inherit;
        text-decoration: none;
    }
    
`
