import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.div`
    width: 100%;
    padding: 30px 20px;;
`
export const BackIcon = styled.img`
    visibility: ${({ $hidden }) => $hidden ? "hidden" : "visible"};

    cursor: ${({ $hidden }) => $hidden ? "default" : "pointer" };
`
export const QWapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProgressNum = styled.div`
    font-size: ${({theme}) => theme.fontsize.md};
`
export const CurrentNum = styled.span`
    color: ${({theme}) => theme.colors.primary};
`
export const TotalNum = styled.span`
    color: ${({theme}) => theme.colors.gray};
`
export const Question = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fontsize.lg};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
    padding-bottom: 8px;
`
export const Description = styled.span`
    color: ${({theme}) => theme.colors.gray};
    font-size: ${({theme}) => theme.fontsize.subtitle};
    font-weight: ${({theme}) => theme.fontWeight.regular};
`