import styled, { css } from "styled-components";

export const Section = styled.div`
    box-sizing: border-box;
    border-radius: ${({theme}) => theme.borderRadius.md};
    box-shadow: 0 3px 6px rgb(0 0 0 / 18%);
    padding: ${({ $variant }) =>
    $variant === "featured" ? "18px" : "10px"};
    width: 100%;
    background-color: #fff;

    ${({ $variant }) => $variant === "featured" && css`height: 100%;`}
`
export const Inner = styled.div`
    display: flex;
    flex-direction: ${({ $variant }) =>
        $variant === "wellness" ? "row" : "column"};
    width: 100%;
    gap: ${({ $variant }) =>
        $variant === "wellness" ? "14px" : "10px"};
`
export const ImageWrapper = styled.div`
    position: relative;
    

    width: ${({ $variant }) =>
        $variant === "wellness" ? "88px" : "100%"};

    height: ${({ $variant }) =>
        $variant === "wellness" ? "100px" : "auto"};

    flex-shrink: 0;

`;
export const Img = styled.img`
    display: block;
    width: 100%;

    height: ${({ $variant }) =>
        $variant === "wellness" ? "100px" : "100%"};

    object-fit: cover;
    border-radius: ${({ theme }) =>
        theme.borderRadius.md};
`
export const Content = styled.div`
    min-width: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: ${({ $variant }) =>
        $variant === "wellness" ? "space-between" : "flex-start"};
    ${({ $variant }) => $variant === "featured" && css`padding-left: 7px`}
    ${({ $variant}) => $variant === "wellness" && css`padding-top: 10px`}
`
export const Title = styled.span`
    display: block;
    color: ${({theme}) => theme.colors.news};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    font-size: ${({theme}) => theme.fontsize.md};
    word-break: keep-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`
export const Description = styled.span`
    display: block;
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.sm};
`
export const AiBadge = styled.span`
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 1;

    padding: 5px 9px;

    color: ${({ theme }) => theme.colors.primary};
    background-color: #fff;

    font-size: 12px;
    font-weight: 600;

    border-radius: 999px;
`;