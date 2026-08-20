import StatusInfo from "../common/StatusInfo";
import VideoContent from "./contents/VideoContent";
import AiBriefContent from "./contents/AiBriefContent";
import BreathingContent from "./contents/BreathingContent";
import StretchingContent from "./contents/StretchingContent";
import ReflectionContent from "./contents/ReflectionContent";

const ContentRenderer = ({
  content,
  isPlaying,
  onVideoPlaybackStateChange,
  onVideoEnded,
}) => {
  switch (content.content_type) {
    case "youtube":
        return (
          <VideoContent
            key={content.content_order ?? content.video_url}
            content={content}
            isPlaying={isPlaying}
            onPlaybackStateChange={onVideoPlaybackStateChange}
            onEnded={onVideoEnded}
          />
        );

    case "article":
        return <AiBriefContent content={content} />;

    case "audio_guide":
        return <BreathingContent content={content} isPlaying={isPlaying} />;

    case "stretch_guide":
        return <StretchingContent content={content} isPlaying={isPlaying} />;

    case "reflection":
        return <ReflectionContent content={content} />;

    default:
        return <StatusInfo>지원하지 않는 콘텐츠입니다.</StatusInfo>;
  }
};

export default ContentRenderer;
