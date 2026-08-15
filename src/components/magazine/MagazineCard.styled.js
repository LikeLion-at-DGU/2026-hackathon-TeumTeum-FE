import styled, { css } from "styled-components";

export const Section = styled.div`
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${({theme}) => theme.borderRadius.md};
    box-shadow: 0 3px 6px rgb(0 0 0 / 18%);
    padding: ${({ $variant }) =>
    $variant === "featured" ? "18px" : "12px"};
    width: 100%;

    ${({ $variant }) => $variant === "featured" && css`width: 100%; height: 100%;`}
    ${({ $variant}) => $variant === "wellness" && css`width:  100%; height: 100%;`}
`
export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: ${({theme}) => theme.borderRadius.md};
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${({ $variant }) => $variant === "featured" && css`padding-left: 7px`}
    ${({ $variant}) => $variant === "wellness" && css` padding-left: 0`}
`
export const Title = styled.span`
    display: block;
    color: ${({theme}) => theme.colors.news};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    font-size: ${({theme}) => theme.fontsize.md};
`
export const Description = styled.span`
    display: block;
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.sm};
`