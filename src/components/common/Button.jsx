import styled from "styled-components";

const Button = ({ children, onClick, disabled = false, type = "button" }) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

export const ButtonContainer = styled.button`
  width: 155px;
  height: 39px;

  border: none;
  border-radius: 8px;

  background: #32cd32;
  color: #fff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.15s ease,
    transform 0.1s ease,
    box-shadow 0.15s ease;

  &:hover {
    background: #28b828;
    box-shadow: 0 6px 12px rgba(50, 205, 50, 0.25);
  }

  &:active {
    background: #B2B2B2;
    color: #fff;
    box-shadow: 0 2px 4px rgba(50, 205, 50, 0.2);
    transform: scale(0.98);
  }

  &:disabled {
    background: #B2B2B2;
    color: #C3C3C3;
    cursor: not-allowed;
  }
`;