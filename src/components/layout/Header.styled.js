import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  width: 100%; 
  padding: 44px 20px 0;

  background-color: white;
`;

export const Left = styled.button`
  position: absolute;
  left: 20px;
  top: 44px;

  border: none;
  background: none;
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
  color: #32cd32;
`;

export const Description = styled.p`
  margin-top: 4px;

  font-size: 12px;
  font-weight: 400;
  color: #B2B2B2;
`;