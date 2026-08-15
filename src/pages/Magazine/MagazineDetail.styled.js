import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 20px;
    border-radius: 25px 25px 0 0;
    padding: 10px 15px;
`
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Icon = styled.img`
    width: 18px;
    height: 18px;

`
export const Link = styled.a`
    padding-left: 4px;
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.md};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
`
export const Title = styled.span`
    color: ${({theme}) => theme.colors.news};
    font-size: ${({theme}) => theme.fontsize.lg};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    padding: 10px 0px 20px 0px;
    word-break: keep-all;
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