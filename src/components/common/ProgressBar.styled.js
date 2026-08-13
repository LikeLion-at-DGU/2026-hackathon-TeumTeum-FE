import styled from "styled-components";

export const ProgressBar = styled.div`
    width: 100%;
    height: 11px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 6px;
    margin: 16px 0px;
`