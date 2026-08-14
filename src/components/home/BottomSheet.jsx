import styled from "styled-components";
import Button from "../common/Button";
import RefreshIcon from "../../assets/icons/tdesign_refresh.svg";

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

const BottomSheet = ({ duration }) => {
    return (
        <>
            <Overlay />
            <Container>
                <Header>
                    <Left>
                        <HeaderTitle>추천 코스</HeaderTitle>
                        <RefreshTip>추천이 마음에 들지 않는다면 바꿔보세요</RefreshTip>
                    </Left>
                    <RefreshButton>
                        <img src={RefreshIcon} alt="추천 코스 새로고침" />
                    </RefreshButton>
                </Header>
                <TimeSection>
                    <TotalTime>{duration}<span>분</span></TotalTime>
                    <TimeDescription>이렇게 준비했어요.</TimeDescription>
                </TimeSection>
                <WellnessVisual>
                    {/* 아이콘들 */}
                </WellnessVisual>
                <CourseSection>
                    {contents.map((content) => (
                        <CourseCard key={content.content_order}>
                            <ContentIcon>
                                {content.content_type === "article" ? "📰" : "▶"}
                            </ContentIcon>

                            <ContentThumbnail>
                                <img src={content.image_url} alt={content.title}/>
                            </ContentThumbnail>

                            <ContentInfo>
                                <ContentTitle>
                                    {content.title}
                                </ContentTitle>

                                <ContentDescription>
                                    {content.description}
                                </ContentDescription>
                            </ContentInfo>

                        </CourseCard>
                    ))}
                </CourseSection>
                <ButtonWrapper>
                    <BottomButton variant="primary">실행</BottomButton>
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

    z-index: 10;
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
    background-color: #ffffff;
    width: 375px;
    min-height: 746px;
    box-sizing: border-box;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    padding: 24px 22px;

    position:fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    z-index: 11;

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
    color: #000;
`;

const RefreshTip = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #b2b2b2;
`;

const RefreshButton = styled.div`
    width: 19px;
    height: 19px;
`;

const TimeSection = styled.section`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TotalTime = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: #32cd32;

    span {
        font-size: 16px;
    }
`;

const TimeDescription = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #b2b2b2;
`;

const WellnessVisual = styled.div`
    width: 200px;
    height: 200px;
    border: solid 1px #000;
    margin: 10px;
`;

const CourseSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

const CourseCard = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 13px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border: 1.4px solid #efefef;
    border-radius: 25px;
`;

const ContentIcon = styled.div`
    width: 16px;
    height: 16px;
    background-color: #32cd32;

`;

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