import styled from "styled-components";
import theme from "../../styles/theme";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  width: 100%; 
  padding: 44px 20px 0;

  background-color: white;

  @media (min-width: 376px) {
    padding-top: 30px;
  }
`;

export const Sidebar = styled.aside`
    position: fixed;
    z-index: 101;
`;

export const Left = styled.button`
  position: absolute;
  left: 20px;
  top: 44px;

  @media (min-width: 376px) {
    top: 20px;
  }

  border: none;
  background: none;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.primary};
`;

export const Description = styled.p`
  margin-top: 4px;

  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.gray};
`;

export const StopButton = styled.button`
    position: absolute;

    right: 24px;
    top: 64px;

    @media (min-width: 376px) {
      top: 40px;
    }

    transform: translateY(-50%);

    padding: 0;

    border: none;
    background: transparent;

    font-size: 14px;
    font-weight: 500;

    color: ${theme.colors.primary};

    cursor: pointer;

    -webkit-tap-highlight-color: transparent;

    &:active {
        opacity: 0.6;
    }
`;
