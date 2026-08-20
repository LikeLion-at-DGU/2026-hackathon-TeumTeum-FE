import VideoContent from "./contents/VideoContent";
import AiBriefContent from "./contents/AiBriefContent";
import BreathingContent from "./contents/BreathingContent";
import StretchingContent from "./contents/StretchingContent";
import ReflectionContent from "./contents/ReflectionContent";

const ContentRenderer = ({ content, isPlaying }) => {
  switch (content.content_type) {
    case "youtube":
        return <VideoContent content={content} />;

    case "article":
        return <AiBriefContent content={content} />;

    case "audio_guide":
        return <BreathingContent content={content} isPlaying={isPlaying} />;

    case "stretch_guide":
        return <StretchingContent content={content} />;

    case "reflection":
        return <ReflectionContent content={content} />;

    default:
        return <StatusInfo>지원하지 않는 콘텐츠입니다.</StatusInfo>;
  }
};

export default ContentRenderer;
import StatusInfo from "../common/StatusInfo";
