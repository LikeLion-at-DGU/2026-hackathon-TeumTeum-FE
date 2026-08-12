import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  padding: 24px 20px 0;
`;

export const Left = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #32cd32;
`;

export const Description = styled.p`
  margin-top: 4px;

  font-size: 14px;
  color: #a3a3a3;
`;