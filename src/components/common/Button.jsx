import styled from "styled-components";

const Button = ({ children, onClick, 
  disabled = false, type = "button", variant="primary", className }) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      className={className}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  width: 155px;
  height: 39px;

  border: none;
  border-radius: 8px;

  background: ${({ $variant }) =>
    $variant === "secondary" ? "#B3B3B3" : "#2DCC2F"}; 
  color: #fff;

  font-size: 14px;
  font-weight: 400;

  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  user-select: none;

  transition:
    background-color 0.15s ease,
    transform 0.1s ease,
    box-shadow 0.15s ease;

  &:hover {
    background: ${({ $variant }) =>
      $variant === "secondary" ? "#969696" : "#28b828"};
    box-shadow: 0 6px 12px rgba(147, 147, 147, 0.25);
  }

  &:active {
    background: ${({ $variant }) => 
      $variant === "secondary" ? "#4c4c4c" : "#209d20"};
    color: #fff;
    box-shadow: 0 2px 4px rgba(147, 147, 147, 0.25);
    transform: scale(0.98);
  }

  &:disabled {
    background: #B2B2B2;
    color: #C3C3C3;
    cursor: not-allowed;
  }
`;