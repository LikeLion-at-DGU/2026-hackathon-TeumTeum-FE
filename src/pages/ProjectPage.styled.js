import styled from "styled-components"

export const Page = styled.main`
    min-height: 100vh;
    padding: 48px 24px;
`

export const Container = styled.div`
    width: min(100%, 720px);
    margin: 0 auto;
`

export const Title = styled.h1`
    margin: 0 0 16px;
    color: #222222;
    font-size: 2rem;
`

export const Introduction = styled.p`
    margin: 0 0 32px;
    color: #555555;
    line-height: 1.7;
    word-break: keep-all;
`

export const FeatureList = styled.section`
    display: grid;
    gap: 12px;
`

export const Feature = styled.article`
    padding: 20px;
    border: 1px solid #dddddd;
    border-radius: 8px;

    h2 {
        margin: 0 0 8px;
        color: #222222;
        font-size: 1.05rem;
    }

    p {
        margin: 0;
        color: #666666;
        font-size: 0.9rem;
        line-height: 1.6;
        word-break: keep-all;
    }
`
