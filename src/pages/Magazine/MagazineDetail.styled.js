import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 15px;
    border-radius: 25px 25px 0 0;
    padding: 0px 10px;
`
export const AiRecommend = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e6f2e3;
    border-radius: 20px;
    padding: 15px;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 25px;
`
export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-bottom: 5px;
`
export const RecommendTitle = styled.span`
    color: green;
    font-size: ${({theme}) => theme.fontsize.lg};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    `
export const RecommendDescription = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-size: 18px;
    word-break: keep-all;
`
export const Title = styled.span`
    color: ${({theme}) => theme.colors.news};
    font-size: 30px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    padding-bottom: 20px;
    word-break: keep-all;
`
export const Info = styled.span`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.md};
    font-weight: ${({theme}) => theme.fontWeight.bold};
    padding-bottom: 20px;
`
export const Img = styled.img`
    width: 299px;
    height: 181px;
    border-radius: 20px;
`

export const Description = styled.span`
    padding-top: 25px;
    line-height: 20px;
    font-size: 15px;
    color: ${({theme}) => theme.colors.news};
    font-weight: ${({theme}) => theme.fontWeight.regular};
    word-break: keep-all;
`
export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: fit-content;
    overflow: visible;
    background-color: #e6f2e3;
    border-radius: 20px;
    padding: 15px;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 25px;
`
export const SummaryTitle = styled.span`
    color: green;
    font-size: ${({theme}) => theme.fontsize.lg};
    font-weight: ${({theme}) => theme.fontWeight.medium};
    `
export const SummaryDescription = styled.span`
    display: block;
    height: auto;
    overflow: visible;
    color: ${({theme}) => theme.colors.black};
    font-size: 18px;
    line-height: 1.4;
    white-space: pre-wrap;
    word-break: keep-all;
    overflow-wrap: anywhere;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`
