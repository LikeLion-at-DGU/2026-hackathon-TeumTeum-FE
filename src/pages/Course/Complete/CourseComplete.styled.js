import styled from "styled-components";

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
export const Record = styled.div`
    border: 1px solid #B4B9C9;
    border-radius: 27px;
    width: 100%;
    height: 343px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const RecordTitle = styled.span`
    font-size: ${({theme}) => theme.fontsize.title};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    color: ${({theme}) => theme.colors.primary};
    padding: 15px;
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 40px 0px 30px 0px;

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
    padding: 35px 0px;
`