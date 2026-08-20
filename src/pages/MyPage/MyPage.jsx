import Header from "../../components/layout/Header";
import * as S from "./MyPage.styled"
import Button from "../../components/common/Button"
import { useState, useEffect } from "react";
import CourseIcon from "../../assets/mypageIcon/Icon/solar_course-up-bold.svg";
import CompleteIcon from "../../assets/mypageIcon/Icon/fluent-mdl2_completed.svg"
import AiIcon from "../../assets/mypageIcon/Icon/mingcute_robot-line.svg"
import AverageTimeIcon from "../../assets/mypageIcon/Icon/평균시간.svg";
import MovingIcon from "../../assets/mypageIcon/이동중.svg";
import CafeIcon from "../../assets/mypageIcon/카페실내.svg";
import SchoolIcon from "../../assets/mypageIcon/학교회사.svg";
import HomeIcon from "../../assets/mypageIcon/집.svg";
import OtherIcon from "../../assets/mypageIcon/기타.svg";
import TiredIcon from "../../assets/mypageIcon/피곤해요.svg";
import TenseIcon from "../../assets/mypageIcon/긴장돼요.svg";
import ComplexIcon from "../../assets/mypageIcon/머릿속이복잡해요.svg";
import StiffIcon from "../../assets/mypageIcon/몸이뻐근해요.svg";
import SkinIcon from "../../assets/mypageIcon/피부가신경쓰여요.svg";
import StretchingIcon from "../../assets/mypageIcon/스트레칭.svg";
import MindIcon from "../../assets/mypageIcon/마음정리.svg";
import ReadingIcon from "../../assets/mypageIcon/읽기.svg";
import ListeningIcon from "../../assets/mypageIcon/듣기.svg";
import ReadyIcon from "../../assets/icons/OnboardingIcons/before-appointment.svg";

import { getMypage } from "../../apis/mypage";
import StatusInfo from "../../components/common/StatusInfo";

const PATTERN_ICON_MAP = {
  "이동 중": MovingIcon,
  "카페·실내": CafeIcon,
  "학교·회사": SchoolIcon,
  집: HomeIcon,
  기타: OtherIcon,
  피곤함: TiredIcon,
  피곤해요: TiredIcon,
  긴장됨: TenseIcon,
  긴장돼요: TenseIcon,
  "머릿속이 복잡함": ComplexIcon,
  "머릿속이 복잡해요": ComplexIcon,
  "몸이 뻐근함": StiffIcon,
  "몸이 뻐근해요": StiffIcon,
  "피부가 신경 쓰임": SkinIcon,
  "피부가 신경 쓰여요": SkinIcon,
  스트레칭: StretchingIcon,
  "마음 정리": MindIcon,
  읽기: ReadingIcon,
  듣기: ListeningIcon,
  "준비-틈": ReadyIcon,
};

const getPatternIcon = (label) => PATTERN_ICON_MAP[label] ?? OtherIcon;

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
    return <StatusInfo>마이페이지를 불러오는 중...</StatusInfo>;
  }

  const weekly = myData.weekly_recovery;
  const discovery = myData.ai_discovery;
  const pattern = myData.teum_pattern;
  const suggestion = myData.next_suggestion;

  const maxWeeklyMinutes = Math.max(
    weekly.previous_week_minutes ?? 0,
    weekly.current_week_minutes ?? 0,
  );
  const previousWeekPercent = maxWeeklyMinutes
    ? ((weekly.previous_week_minutes ?? 0) / maxWeeklyMinutes) * 100
    : 0;
  const currentWeekPercent = maxWeeklyMinutes
    ? ((weekly.current_week_minutes ?? 0) / maxWeeklyMinutes) * 100
    : 0;

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
                <S.ProgressBar $percent={previousWeekPercent} />
                <strong>{weekly.previous_week_minutes}분</strong>
              </S.WeekRow>

              <S.WeekRow>
                <span>이번주</span>
                <S.ProgressBar $percent={currentWeekPercent} />
                <strong>{weekly.current_week_minutes}분</strong>
              </S.WeekRow>
            </S.WeekComparison>

          <S.Stats>
            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon src={CourseIcon} alt=""/>
                <S.StatValue>{weekly.executed_courses}회</S.StatValue>
              </S.ItemBox>
              <S.Label>실행한 코스</S.Label>
            </S.StatItem>
            
            <S.Line />

            <S.StatItem>
              <S.ItemBox>
                <S.StatIcon src={CompleteIcon} alt=""/>
                <S.StatValue>{weekly.completion_rate}%</S.StatValue>
              </S.ItemBox>
              <S.Label>완료율</S.Label>
            </S.StatItem>
          </S.Stats>
        </S.WeeklyCard>
        
        <S.AiInsightCard>
          <S.TitleBox>
            <S.Icon src={AiIcon} alt="" />
            <S.AiTitle>AI가 발견한 나</S.AiTitle>
          </S.TitleBox>

          <S.InsightDescription>
            {discovery.summary_text}
          </S.InsightDescription>
        </S.AiInsightCard>

        <S.Title>나의 틈 패턴</S.Title>
        <S.PatternSection>
          <S.PatternCard>
            <S.PatternIcon src={getPatternIcon(pattern.most_frequent_place)} alt="" />
            <S.PatternLabel>{pattern.most_frequent_place}</S.PatternLabel>
            <S.PatternDescription>가장 자주 생긴 틈</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon src={getPatternIcon(pattern.most_frequent_state)} alt="" />
            <S.PatternLabel>{pattern.most_frequent_state}</S.PatternLabel>
            <S.PatternDescription>가장 자주 느낀 상태</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon src={getPatternIcon(pattern.best_activity)} alt="" />
            <S.PatternLabel>{pattern.best_activity}</S.PatternLabel>
            <S.PatternDescription>가장 잘 맞는 활동</S.PatternDescription>
          </S.PatternCard>

          <S.PatternCard>
            <S.PatternIcon src={AverageTimeIcon} alt="" />
            <S.PatternLabel>{pattern.avg_duration_minutes}분</S.PatternLabel>
            <S.PatternDescription>평균 틈 시간</S.PatternDescription>
          </S.PatternCard>
        </S.PatternSection>

        <S.AiSuggestionCard>
          <S.TitleBox>
            <S.Icon src={AiIcon} alt="" />
            <S.AiTitle>AI의 다음 제안</S.AiTitle>
          </S.TitleBox>
          <S.SuggestionDescription>
            <strong>{suggestion.title}</strong>
            <br />
            {suggestion.description}
          </S.SuggestionDescription>
        </S.AiSuggestionCard>
      </S.Container>
    </>
  );
};

export default MyPage;
