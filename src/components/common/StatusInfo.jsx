import styled from "styled-components";

const StatusInfo = ({ children }) => {
  return <Info role="status">{children}</Info>;
};

export default StatusInfo;

const Info = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
