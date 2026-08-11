import styled from "styled-components"

export const Hero = styled.div`
    min-height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    text-align: center;
`
export const Title = styled.div`
    max-width: 760px;
    color: #24a148;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.25;
`
export const ButtonWapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    a {
        text-decoration: none;
    }
`
export const Button = styled.button`
    min-width: 180px;
    padding: 14px 22px;
    border: 1px solid #24a148;
    border-radius: 12px;
    color: #ffffff;
    background-color: #24a148;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(36, 161, 72, 0.18);
    transition: transform 0.2s ease, background-color 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        background-color: #1d853c;
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(36, 161, 72, 0.25);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 3px solid rgba(36, 161, 72, 0.3);
        outline-offset: 3px;
    }
`
