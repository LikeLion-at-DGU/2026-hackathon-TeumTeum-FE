import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
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

export const ButtonWrapper = styled.div`
  /* 모바일 */
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);

  /* PC */
  @media (min-width: 376px) {
    bottom: 40px;
  }
`;

export const QuestionArea = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 120px 20px 170px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChipList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

export const OptionItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomInput = styled.input`
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);

  width: 280px;
  height: 50px;

  padding: 0 20px;

  box-sizing: border-box;

  border: 1.4px solid #efefef;
  border-radius: 25px;

  background-color: #fff;

  font-size: 14px;
  letter-spacing: 0.02em;
  color: #000;

  outline: none;

  &::placeholder {
    color: #b2b2b2;
  }

  &:focus {
    border-color: #32cd32;
  }
`;
