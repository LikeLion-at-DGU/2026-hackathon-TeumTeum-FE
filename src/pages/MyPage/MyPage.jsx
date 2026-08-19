import Header from "../../components/layout/Header";
import * as S from "./MyPage.styled"
import Button from "../../components/common/Button"
import { useState, useEffect } from "react";

import { getMypage } from "../../apis/mypage";

const MyPage = () => {

  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchMypage = async() => {
      try{
        const data = await getMypage();
        setMyData(data);

        console.log("GET /mypage 성공:", data);
      }
      catch(error){
        console.error(
          "GET /mypage 실패 : ",
          error.response?.data || error.message
        )
      }
    }
    fetchMypage();
  }, [])

  if (!myData) {
    return <p>마이페이지를 불러오는 중...</p>;
  }

  const weekly = myData.weekly_recovery;
  const discovery = myData.ai_discovery;
  const pattern = myData.teum_pattern;
  const suggestion = myData.next_suggestion;

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

              <S.TotalTime>{weekly.current_week_minutes}<S.Min>분</S.Min></S.TotalTime>

              <S.Description>
                지난주보다 <S.MoreTime>{Math.abs(weekly.diff_minutes)}분</S.MoreTime> {weekly.diff_minutes >= 0 ? "더" : "덜"}
                <br />
                나를 위한 시간을 만들었어요!
              </S.Description>

              <S.ChangeRate>
                {weekly.growth_rate > 0
                  ? `▲ ${weekly.growth_rate}%`
                  : weekly.growth_rate < 0
                    ? `▼ ${Math.abs(weekly.growth_rate)}%`
                    : "-"}
              </S.ChangeRate>
            </S.Summary>


            <S.WeekComparison>
              <S.WeekRow>
                <span>지난주</span>
                <S.ProgressBar />
                <strong>{weekly.previous_week_minutes}분</strong>
              </S.WeekRow>

              <S.WeekRow>
                <span>이번주</span>
                <S.ProgressBar $percent={100} />
                <strong>{weekly.current_week_minutes}분</strong>
              </S.WeekRow>
            </S.WeekComparison>

          <S.Stats>
            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon></S.StatIcon>
                <S.StatValue>{weekly.executed_courses}회</S.StatValue>
              </S.ItemBox>
              <S.Label>실행한 코스</S.Label>
            </S.StatItem>
            
            <S.Line />

            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon></S.StatIcon>
                <S.StatValue>{weekly.completion_rate}%</S.StatValue>
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
            {discovery.summary_text}
          </S.InsightDescription>
        </S.AiInsightCard>

        <S.Title>나의 틈 패턴</S.Title>
        <S.PatternSection>
          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>{pattern.most_frequent_place}</S.PatternLabel>
            <S.PatternDescription>가장 자주 생긴 틈</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>{pattern.most_frequent_state}</S.PatternLabel>
            <S.PatternDescription>가장 자주 느낀 상태</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>{pattern.best_activity}</S.PatternLabel>
            <S.PatternDescription>가장 잘 맞는 활동</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon />
            <S.PatternLabel>{pattern.avg_duration_minutes}분</S.PatternLabel>
            <S.PatternDescription>평균 틈 시간</S.PatternDescription>
          </S.PatternCard>
        </S.PatternSection>

        <S.AiSuggestionCard>
          <S.TitleBox>
            <S.Icon></S.Icon>
            <S.AiTitle>AI의 다음 제안</S.AiTitle>
          </S.TitleBox>
          <S.SuggestionDescription>
            <strong>{suggestion.title}</strong>
            <br />
            {suggestion.description}
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