import * as S from "./VideoContent.styled";

const VideoContent = ({content}) => {
    // 백엔드 유튜브 링크를 iframe용 주소로 변환
    const getYoutubeEmbedUrl = (url) => {
        if (!url) return "";

        try {
            const parsedUrl = new URL(url);
            let videoId = "";

            if (parsedUrl.hostname === "youtu.be") {
                videoId = parsedUrl.pathname.slice(1);
            } else if (parsedUrl.pathname.startsWith("/embed/")) {
                videoId = parsedUrl.pathname.split("/embed/")[1];
            } else {
                videoId = parsedUrl.searchParams.get("v") ?? "";
            }

            if (!videoId) return "";

            const embedUrl = new URL(
                `https://www.youtube.com/embed/${videoId}`,
            );

            embedUrl.searchParams.set("origin", window.location.origin);
            embedUrl.searchParams.set("widget_referrer", window.location.href);
            embedUrl.searchParams.set("playsinline", "1");

            return embedUrl.toString();
        } catch {
            return "";
        }
    };

    return (
        <S.Container>
            <S.VideoPlayer 
                src={getYoutubeEmbedUrl(content.video_url)}
                title={content.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            <S.Content>
                <S.ContentHeader>
                    <S.Title>
                        {content.title}
                    </S.Title>
                    <S.ChannelName>
                        {content.channel_name}
                    </S.ChannelName>
                </S.ContentHeader>
            </S.Content>
        </S.Container>
    );
};

export default VideoContent;
