import { Description } from "../../layout/Header.styled";
import * as S from "./VideoContent.styled";
import { useState } from "react";

const VideoContent = ({content}) => {

    const [activeTab, setActiveTab] = useState("description");


    return (
        <S.Container>
            <S.VideoPlayer 
                src={content.video_url}
                title={content.title}
                allowFullScreen
            />
            <S.ChipContainer>
                {/* <Chip /> */}
            </S.ChipContainer>
            <S.Content>
                <S.ContentHeader>
                    <S.Title>
                        {content.title}
                    </S.Title>
                    <S.ChannelName>
                        {content.channel_name}
                    </S.ChannelName>
                </S.ContentHeader>
                <S.ContentTabs>
                    <S.TabMenu>
                        <button onClick={() => setActiveTab("description")}>
                            영상 소개
                        </button>
                        <button onClick={() => setActiveTab("summary")}>
                            ai 요약
                        </button>
                    </S.TabMenu>
                    <S.TabPanel>
                        {activeTab === "description" && (
                            <S.VideoDescription>
                            </S.VideoDescription>
                        )}
                        {}
                        
                        <S.AiSummary></S.AiSummary>
                    </S.TabPanel>
                </S.ContentTabs>
            </S.Content>
        </S.Container>
    );
};

export default VideoContent;