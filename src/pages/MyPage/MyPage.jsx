import Header from "../../components/layout/Header";
import * as S from "./MyPage.styled"
import AvataImg from "../../assets/img/ExAvata.png"

const MyPage = () => {
  return (
    <>
      <Header
        title="MY"
        description="틈틈이 발견한 나의 웰니스"
      />

      <S.Container>
        <S.Title>이번 주 나의 틈</S.Title>
          <S.WeeklyCard>
            <S.Summary>
              <S.SummaryTitle>이번 주 회복한 틈 시간</S.SummaryTitle>

              <S.TotalTime>67<S.Min>분</S.Min></S.TotalTime>

              <S.Description>
                지난주보다 <S.MoreTime>18분</S.MoreTime> 더 
                <br />
                나를 위한 시간을 만들었어요!
              </S.Description>

              <S.ChangeRate>▲ 37%</S.ChangeRate>
            </S.Summary>


            <S.WeekComparison>
              <S.WeekRow>
                <span>지난주</span>
                <S.ProgressBar />
                <strong>49분</strong>
              </S.WeekRow>

              <S.WeekRow>
                <span>이번주</span>
                <S.ProgressBar $percent={100} />
                <strong>67분</strong>
              </S.WeekRow>
            </S.WeekComparison>

          <S.Stats>
            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon></S.StatIcon>
                <S.StatValue>8회</S.StatValue>
              </S.ItemBox>
              <S.Label>실행한 코스</S.Label>
            </S.StatItem>

            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon></S.StatIcon>
                <S.StatValue>87%</S.StatValue>
              </S.ItemBox>
              <S.Label>완료율</S.Label>
            </S.StatItem>
          </S.Stats>
        </S.WeeklyCard>
      </S.Container>

    </>
  );
};

export default MyPage;