import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 15px 0px 15px;
`
export const Title = styled.span`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontsize.lg};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`
export const WeeklyCard = styled.div`
  background-color: #f6fbf5;
  border-radius: 30px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`
export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  gap: 7px;

`
export const SummaryTitle = styled.span`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fontsize.md};
`
export const TotalTime = styled.span`
  color:  ${({theme}) => theme.colors.primary};
  font-size: 67px;
  font-weight: 700;

`
export const Min = styled.span`
  font-size: 30px;

`
export const Description = styled.span`
  text-align: center;
  color: ${({theme}) => theme.colors.black};
  font-size: 18px;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  padding-bottom: 8px;
`
export const MoreTime = styled.span`
font-size: 20px;
  font-weight: ${({theme}) => theme.fontWeight.semibold};
`
export const ChangeRate = styled.div`
  background-color: #e6f2e3;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
export const WeekComparison = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`
export const WeekRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    padding-right: 12px;
    font-size: ${({theme}) => theme.fontsize.md};
  }
  
  strong {
    padding-left: 15px;
    font-size: ${({theme}) => theme.fontsize.lg};
  }
  
`
export const ProgressBar = styled.div`
  background-color: #e6f2e3;
  width: 200px;
  height: 15px;
  border-radius: 25px;
`
export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
`
export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const StatIcon = styled.div`
  background-color: green;
  width: 30px;
  height: 30px;
`
export const StatValue = styled.span`
`
export const Label = styled.span`
`
