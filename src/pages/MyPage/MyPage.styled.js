import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 20px 0px 20px;
`
export const Title = styled.span`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontsize.lg};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  padding-bottom: 10px;
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
  gap: 15px;
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
  position: relative;
  overflow: hidden;

  background-color: #e6f2e3;
  width: 190px;
  height: 15px;
  border-radius: 30px;

  &::after {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: ${({$percent}) =>
      `${Math.min(Math.max($percent ?? 0, 0), 100)}%`};
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: inherit;
    transition: width 0.4s ease;
  }
`
export const Line = styled.div`
  width: 1px;
  height: 50px;
  background-color: black;
`
export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  gap: 50px;
  padding: 23px 0px;
  border-radius: 0px 0px 30px 30px;
  margin-top: 25px;
`
export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
export const StatIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
export const StatValue = styled.span`
  font-size: ${({theme}) => theme.fontsize.title};
  font-weight: ${({theme}) => theme.fontWeight.semibold};
`
export const Label = styled.span`
  font-size: ${({theme}) => theme.fontsize.md};
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
export const AiInsightCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e6f2e3;
  border-radius: 30px;
  padding: 20px;
  gap: 10px;
  margin: 25px 0px;

`
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-bottom: 5px;
`
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
export const AiTitle = styled.span`
  color: green;
  font-size: ${({theme}) => theme.fontsize.lg};
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
export const InsightDescription = styled.span`
  white-space: pre-line;
  color: ${({theme}) => theme.colors.black};
  font-size: 18px;
  word-break: keep-all;
`
export const PatternSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
`
export const PatternCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;
  border-radius: 25px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`
export const PatternIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`
export const PatternLabel = styled.span`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontsize.lg};
  font-weight: ${({theme}) => theme.fontWeight.semibold};
`
export const PatternDescription = styled.span`
  display: inline-block;
  width: 70px;
  text-align: center;
  word-break: keep-all;
`
export const AiSuggestionCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e6f2e3;
  border-radius: 30px;
  padding: 20px;
  gap: 10px;
  margin: 25px 0px;
`
export const SuggestionDescription = styled.span`
  color: ${({theme}) => theme.colors.black};
  font-size: 18px;
  word-break: keep-all;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`

export const EmptyRecordMessage = styled.p`
  margin: 28px 0;
  color: ${({theme}) => theme.colors.gray};
  font-size: ${({theme}) => theme.fontsize.md};
  line-height: 1.6;
  text-align: center;
  word-break: keep-all;
`
