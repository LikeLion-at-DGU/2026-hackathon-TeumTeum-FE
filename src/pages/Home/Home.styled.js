import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeSummary = styled.p`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
  margin-top: 110px;
`;

export const TimeLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontsize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const TimeValue = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontsize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ButtonWrapper = styled.button`
  position: fixed;
  bottom: 158px;
  left: 50%;
  transform: translateX(-50%);
`;