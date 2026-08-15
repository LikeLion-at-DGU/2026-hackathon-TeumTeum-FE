import styled from "styled-components";

export const Section = styled.div`
    width: 100%;

    > a {
        display: block;
        width: 100%;
    }
`

export const Title = styled.span`
    display: block;
    font-size: ${({theme}) => theme.fontsize.lg};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 10px;
`