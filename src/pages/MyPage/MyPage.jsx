import Header from "../../components/layout/Header";
import * as S from "./MyPage.styled"
import AvataImg from "../../assets/img/ExAvata.png"
import Button from "../../components/common/Button";

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
            
            <S.Line />

            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon></S.StatIcon>
                <S.StatValue>87%</S.StatValue>
              </S.ItemBox>
              <S.Label>완료율</S.Label>
            </S.StatItem>
          </S.Stats>
        </S.WeeklyCard>
        
        <S.AiInsightCard>
          <S.TitleBox>
            <S.Icon></S.Icon>
            <S.AiTitle>AI가 발견한 나</S.AiTitle>
          </S.TitleBox>

          <S.InsightDescription>
            이번 주에는 '이동중'에 피로함을 가장 많이 느꼈어요.
          </S.InsightDescription>
          <S.InsightDescription>
            특히 오후 2~4시에 몸-틈 코스의 완료율이 92%로 가장 높았어요.
          </S.InsightDescription>
          <S.InsightDescription>
            다음 비슷한 상황에서는 짧은 스트레칭을 먼저 추천할게요!
          </S.InsightDescription>
        </S.AiInsightCard>

        <S.Title>나의 틈 패턴</S.Title>
        <S.PatternSection>
          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>대중교통</S.PatternLabel>
            <S.PatternDescription>가장 자주 생긴 틈</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>피곤함</S.PatternLabel>
            <S.PatternDescription>가장 자주 느낀 상태</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>스트레칭</S.PatternLabel>
            <S.PatternDescription>가장 잘 맞는 활동</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>11분</S.PatternLabel>
            <S.PatternDescription>평균 틈 시간</S.PatternDescription>
          </S.PatternCard>
        </S.PatternSection>

        <S.AiSuggestionCard>
          <S.TitleBox>
            <S.Icon></S.Icon>
            <S.AiTitle>AI의 다음 제안</S.AiTitle>
          </S.TitleBox>
          <S.SuggestionDescription>
            최근 이동 중 피로도가 높았어요. 다음에 비슷한 틈이 생기면 5분 목·어깨 리셋 코스를 먼저 추천할게요!
          </S.SuggestionDescription>
          <S.ButtonWrapper>
          <Button variant="primary">추천 코스 보기</Button>
          </S.ButtonWrapper>
        </S.AiSuggestionCard>
      </S.Container>
    </>
  );
};

export default MyPage;