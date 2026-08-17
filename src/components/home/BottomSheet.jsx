import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Button from "../common/Button";
import RefreshIcon from "../../assets/icons/tdesign_refresh.svg";
import youtube from "../../assets/icons/youtube.svg"

// 백엔드 임시 데이터
const contents = [
    {
        content_order: 1,
        content_type: "article",
        title: "오늘 주목해야 할 AI 트렌드",
        description: "최근 주목받고 있는 AI 관련 트렌드와 주요 이슈를 살펴보세요.",
        source: "기사 출처",
        content_url: "https://example.com/article/1",
        image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        estimated_minutes: 10,
    },
    {
        content_order: 2,
        content_type: "article",
        title: "요즘 주목받는 새로운 트렌드",
        description: "최근 사람들이 관심을 가지는 새로운 트렌드를 읽어보세요.",
        source: "기사 출처",
        content_url: "https://example.com/article/2",
        image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        estimated_minutes: 10,
    },
    {
        content_order: 3,
        content_type: "youtube",
        title: "5분 만에 따라 하는 목과 어깨 스트레칭",
        description: "오래 앉아있어 뻐근한 목과 어깨를 가볍게 풀어보세요.",
        source: "YouTube",
        content_url: "https://www.youtube.com/",
        image_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        estimated_minutes: 10,
    },
];

const BottomSheet = ({ duration, onRefresh }) => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey((previous) => previous + 1);
        onRefresh?.();
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
                        aria-label="추천 코스 새로고침"
                    >
                        <RefreshImage
                            key={refreshKey}
                            $animate={refreshKey > 0}
                            src={RefreshIcon}
                            alt=""
                        />
                    </RefreshButton>
                </Header>
                <TimeSection>
                    <TotalTime>{duration}<span>분</span></TotalTime>
                    <TimeDescription>현재 장소와 컨디션, 다음 일정을 반영해<br/> {duration}분 안에 끝나는 나만의 코스를 만들었어요.</TimeDescription>
                </TimeSection>
                <WellnessVisual>
                    {/* 아이콘들 */}
                </WellnessVisual>
                <CourseSection>
                    {contents.map((content) => (
                        <CourseCard key={content.content_order}>
                            <ContentIcon>
                                {content.content_type === "article" ? "🌍" : (<YoutubeIcon src={youtube} alt="YouTube" />) }
                            </ContentIcon>

                            <ContentThumbnail>
                                <img src={content.image_url} alt={content.title}/>
                            </ContentThumbnail>

                            <ContentInfoWrapper>
                                <ContentInfo>
                                    <ContentTitle>
                                        {content.title}
                                    </ContentTitle>

                                    <ContentDescription>
                                        {content.description}
                                    </ContentDescription>
                                </ContentInfo>
                                <ContentTime>
                                    {content.estimated_minutes}분
                                </ContentTime>
                            </ContentInfoWrapper>

                        </CourseCard>
                    ))}
                </CourseSection>
                <ButtonWrapper>
                    <BottomButton variant="primary">{duration}분 코스 실행</BottomButton>
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
`;

const RefreshImage = styled.img`
    width: 19px;
    height: 19px;
    animation: ${({ $animate }) =>
        $animate ? "refreshRotate 0.6s ease-in-out" : "none"};

    @keyframes refreshRotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
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

const WellnessVisual = styled.div`
    width: 140px;
    height: 140px;
    border: solid 1px #000;
    margin: 10px;
`;

const CourseSection = styled.section`
    padding-top: 6px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
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
`;

const BottomButton = styled(Button)`
    width: 100%;
    height: 52px;
    border-radius: 16px;
    font-size: 16px;
`;
