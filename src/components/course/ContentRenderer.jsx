import VideoContent from "./contents/VideoContent";
import ArticleContent from "./contents/ArticleContent";

const ContentRenderer = ({ content }) => {
  switch(content.content_type) {
    case "youtube":
        return <VideoContent content={content} />;

    case "article":
        return <ArticleContent content={content} />;
    
    default:
        return null;
  }
};

export default ContentRenderer;