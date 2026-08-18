import VideoContent from "./contents/VideoContent";
import AiBriefContent from "./contents/AiBriefContent";

const ContentRenderer = ({ content }) => {
  switch(content.content_type) {
    case "youtube":
        return <VideoContent content={content} />;

    case "article":
        return <AiBriefContent content={content} />;
    
    default:
        return null;
  }
};

export default ContentRenderer;