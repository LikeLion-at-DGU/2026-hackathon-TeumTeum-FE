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
    margin: 0 0 24px;
    color: #222222;
    font-size: 2rem;
    font-weight: 700;
`

export const MemberList = styled.section`
    display: grid;
    gap: 12px;
`

export const Member = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    border: 1px solid #dddddd;
    border-radius: 8px;

    strong {
        color: #202820;
        font-size: 1rem;
    }

    span {
        color: #666666;
        font-size: 0.9rem;
    }
`
