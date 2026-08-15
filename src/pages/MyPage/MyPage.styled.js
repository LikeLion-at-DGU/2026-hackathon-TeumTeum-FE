import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 10px 0px 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`
export const Name = styled.span`
  color: ${({theme}) => theme.colors.primary};
  font-size: 40px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  line-height: 150%;
`
export const Description = styled.span`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontsize.lg};
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
export const Avata = styled.img`
  width: 256px;
  height: 256px;
  margin: 25px 0px;

`
export const TimeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`
export const TimeDial = styled.div`
  background-color: ${({theme}) => theme.colors.primary};
  width: 135px;
  height: 135px;
  border-radius: 50%;
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
export const TimeInfo = styled.span`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontsize.lg};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  line-height: 150%;
`
export const Time = styled.span`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fontsize.title};
  font-weight: ${({theme}) => theme.fontWeight.semibold};
  line-height: 150%;

`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Info = styled.span`
  color: ${({theme}) => theme.colors.gray};
  font-size: ${({theme}) => theme.fontsize.catagory};
  font-weight: ${({theme}) => theme.fontWeight.semibold};
  line-height: 150%;

`