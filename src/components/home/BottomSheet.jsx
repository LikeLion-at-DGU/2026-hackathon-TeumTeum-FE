import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import Button from "../common/Button";
import RefreshIcon from "../../assets/icons/tdesign_refresh.svg";
import youtube from "../../assets/icons/youtube.svg"

const CONTENT_TYPE_CONFIG = {
    youtube: {
        label: "유튜브",
        icon:  "youtube",
    },
    article: {
        label: "ai브리프",
        icon: "🌍",
    },
    audio_guide: {
        label: "호흡명상 가이드",
        icon: "🧘🏻"
    },
    stretch_guide: {
        label: "스트레칭",
        icon: "🤸🏻",
    },
    reflection: {
        label: "마음 기록",
        icon: "✍🏻",
    },
};
const BottomSheet = ({ course, onRefresh }) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const navigate = useNavigate();

    const contents = course?.contents ?? [];
    const duration = course?.total_minutes ?? 0;

    const handleRefresh = async () => {
        if(isRefreshing) return;

        try {
            setIsRefreshing(true);

            await onRefresh?.();
        } catch (error) {
            console.error("코스 새로고침 실제 오류:", error);
            console.error("HTTP 상태:", error.response?.status);
            console.error("백엔드 응답:", error.response?.data);
            const message = error.response?.data?.detail || "새로운 추천 코스를 생성할 수 없습니다.";
            console.error(message);
        } finally {
            setIsRefreshing(false);
        }
    };

    const handleStartCourse = () => {
        navigate("/course", {
            state: {
                duration,
                course
            },
        });
    };

    return (
        <>
            <Overlay />
            <Container>
                <Header>
                    <Left>
                        <HeaderTitle>생성된 코스</HeaderTitle>
                        <RefreshTip>추천이 마음에 들지 않는다면 바꿔보세요</RefreshTip>
                    </Left>
                    <RefreshButton
                        type="button"
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        aria-label="추천 코스 새로고침"
                    >
                        <RefreshImage
                            src={RefreshIcon}
                            alt=""
                            $isRefreshing={isRefreshing}
                        />
                    </RefreshButton>
                </Header>
                <TimeSection>
                    <TotalTime>{duration}<span>분</span></TotalTime>
                    <TimeDescription>현재 장소와 컨디션, 다음 일정을 반영해<br/> {duration}분 안에 끝나는 나만의 코스를 만들었어요.</TimeDescription>
                </TimeSection>
                
                <CourseSection>
                    {contents.map((content) => {
                        const typeConfig = 
                            CONTENT_TYPE_CONFIG[content.content_type] ?? {
                                label: "콘텐츠",
                                icon: "✨"
                            };
                        return (
                            <CourseCard key={content.content_order}>
                                <ContentIcon aria-label={typeConfig.label}>
                                    {typeConfig.icon === "youtube" ? (
                                        <YoutubeIcon src={youtube} alt="" />
                                    ) : (
                                        typeConfig.icon
                                    )}
                                </ContentIcon>
                                 <ContentThumbnail>
                                    {(content.thumbnail_url || content.image_url) && (
                                        <img
                                            src={content.thumbnail_url || content.image_url}
                                            alt={content.title}
                                        />
                                    )}
                                </ContentThumbnail>

                                <ContentInfoWrapper>
                                    <ContentInfo>
                                        <ContentTitle>{content.title}</ContentTitle>
                                        <ContentDescription>
                                            {content.description}
                                        </ContentDescription>
                                    </ContentInfo>

                                    <ContentTime>
                                        {content.estimated_minutes}분
                                    </ContentTime>
                                </ContentInfoWrapper>
                            </CourseCard>
                        );
                    })}
                </CourseSection>
                <ButtonWrapper>
                    <BottomButton
                        variant="primary"
                        onClick={handleStartCourse}
                    >
                        {duration}분 코스 실행
                    </BottomButton>
                </ButtonWrapper>
                
            </Container>
        </>
        
    );


};

export default BottomSheet;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.35);

    z-index: 120;
    animation: bottomSheetSlideUp 0.5s ease-out forwards;

    @keyframes bottomSheetSlideUp {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

export const Container = styled.div`
    background-color: ${theme.colors.background};
    width: 375px;
    min-height: 750px;

    @media (min-width: 768px) {
        min-height: 720px;
        height: 720px;
    }
    box-sizing: border-box;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    padding: 24px 22px;

    position:fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    z-index: 121;

    animation: slideUp 0.5s ease-out forwards;
    @keyframes slideUp {
        from {
            transform: translate(-50%, 100%);
        }

        to {
            transform: translate(-50%, 0);
        }
    }

`;

const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

`;

const HeaderTitle = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.black};
`;

const RefreshTip = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.gray};
`;

const RefreshButton = styled.button`
    width: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:active {
        background: ${theme.colors.catagory};
    }

     &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const RefreshImage = styled.img`
    width: 19px;
    height: 19px;

    animation: ${({ $isRefreshing }) =>
        $isRefreshing
            ? "refreshRotate 0.6s linear infinite"
            : "none"};

    @keyframes refreshRotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;

const TimeSection = styled.section`
    padding-top: 40px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

const TotalTime = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: ${theme.colors.primary};

    span {
        font-size: 16px;
    }
`;

const TimeDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.gray};
    line-height: 1.4;
`;

const CourseSection = styled.section`
    padding-top: 50px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding-bottom: 100px;
`;

const CourseCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 13px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);


`;

const ContentIcon = styled.span`
    font-size: 20px;
`;

const YoutubeIcon = styled.img`
    width: 20px;
    height: 20px;
`

const ContentThumbnail = styled.div`
    width: 46px;
    height: 46px;
    flex-shrink: 0;

    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContentInfoWrapper= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;
`

const ContentInfo = styled.div`
    display: flex;
    width: 164px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`;

const ContentTitle = styled.h3`
    color: #000;
    font-size: 12px;
    font-weight: 400;
`;

const ContentDescription = styled.p`
    color: #b2b2b2;
    font-size: 10px;
    font-weight: 400;
`;

const ContentTime = styled.span`
    padding-left: 8px;
    font-size: 12px;
    color: ${({theme}) => theme.colors.primary};
`

const ButtonWrapper = styled.div`
    position: absolute;
    left: 28px;
    right: 28px;
    bottom: 30px;
    /* PC */
  @media (min-width: 376px) {
    bottom: 20px;
  }
`;

const BottomButton = styled(Button)`
    width: 100%;
    height: 52px;
    border-radius: 16px;
    font-size: 16px;
`;
