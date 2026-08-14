import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100dvh;
    padding-top: 120px;
`

export const CompleteIcon = styled.div`
    background-color: ${({theme}) => theme.colors.primary};
    width: 105px;
    height: 105px;
    border-radius: 50%;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    gap: 3px;
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