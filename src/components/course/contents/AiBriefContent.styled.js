import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.article`
    width: 100%;
    padding: 24px 28px 240px;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    margin: 0;
    color: ${theme.colors.black};
    font-size: ${theme.fontsize.lg};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1.45;
    word-break: keep-all;
`;

export const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    margin-top: 24px;
    border-radius: ${theme.borderRadius.sm};
    object-fit: cover;
`;

export const Description = styled.p`
    margin: 24px 0 0;
    color: ${theme.colors.news};
    font-size: ${theme.fontsize.history};
    font-weight: ${theme.fontWeight.regular};
    line-height: 1.8;
    word-break: keep-all;
`;
