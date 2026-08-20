import { useEffect, useRef } from "react";
import * as S from "./VideoContent.styled";

let youtubeApiPromise;

const loadYoutubeApi = () => {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (youtubeApiPromise) return youtubeApiPromise;

    youtubeApiPromise = new Promise((resolve) => {
        const previousCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            previousCallback?.();
            resolve(window.YT);
        };

        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(script);
        }
    });

    return youtubeApiPromise;
};

const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    try {
        const parsedUrl = new URL(url);
        let videoId = "";

        if (parsedUrl.hostname === "youtu.be") {
            videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? "";
        } else if (
            parsedUrl.pathname.startsWith("/embed/") ||
            parsedUrl.pathname.startsWith("/shorts/") ||
            parsedUrl.pathname.startsWith("/live/")
        ) {
            videoId = parsedUrl.pathname.split("/").filter(Boolean)[1] ?? "";
        } else {
            videoId = parsedUrl.searchParams.get("v") ?? "";
        }

        if (!videoId) return "";

        const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
        embedUrl.searchParams.set("enablejsapi", "1");
        embedUrl.searchParams.set("origin", window.location.origin);
        embedUrl.searchParams.set("widget_referrer", window.location.href);
        embedUrl.searchParams.set("playsinline", "1");
        embedUrl.searchParams.set("autoplay", "1");
        embedUrl.searchParams.set("mute", "1");

        return embedUrl.toString();
    } catch {
        return "";
    }
};

const VideoContent = ({ content, isPlaying, onPlaybackStateChange, onEnded }) => {
    const iframeRef = useRef(null);
    const playerRef = useRef(null);
    const isPlayingRef = useRef(isPlaying);
    const callbacksRef = useRef({});

    isPlayingRef.current = isPlaying;
    callbacksRef.current = { onPlaybackStateChange, onEnded };

    useEffect(() => {
        let isCancelled = false;

        loadYoutubeApi().then((YT) => {
            if (isCancelled || !iframeRef.current) return;

            playerRef.current = new YT.Player(iframeRef.current, {
                events: {
                    onReady: (event) => {
                        if (isPlayingRef.current) {
                            event.target.mute();
                            event.target.playVideo();
                        } else {
                            event.target.pauseVideo();
                        }
                    },
                    onStateChange: (event) => {
                        if (event.data === YT.PlayerState.PLAYING) {
                            callbacksRef.current.onPlaybackStateChange?.("playing");
                        } else if (event.data === YT.PlayerState.ENDED) {
                            callbacksRef.current.onPlaybackStateChange?.("ended");
                            callbacksRef.current.onEnded?.();
                        } else if (event.data === YT.PlayerState.PAUSED) {
                            callbacksRef.current.onPlaybackStateChange?.("paused");
                        } else if (
                            event.data === YT.PlayerState.BUFFERING ||
                            event.data === YT.PlayerState.UNSTARTED
                        ) {
                            callbacksRef.current.onPlaybackStateChange?.("buffering");
                        }
                    },
                    onError: (event) => {
                        console.error("YouTube 영상 로드 실패:", {
                            code: event.data,
                            videoUrl: content.video_url,
                        });
                    },
                },
            });
        });

        return () => {
            isCancelled = true;
            playerRef.current?.destroy?.();
            playerRef.current = null;
        };
    }, [content.video_url]);

    useEffect(() => {
        const player = playerRef.current;
        if (!player?.playVideo || !player?.pauseVideo) return;
        if (isPlaying) player.playVideo();
        else player.pauseVideo();
    }, [isPlaying]);

    return (
        <S.Container>
            <S.VideoPlayer
                ref={iframeRef}
                src={getYoutubeEmbedUrl(content.video_url)}
                title={content.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            <S.Content>
                <S.ContentHeader>
                    <S.Title>{content.title}</S.Title>
                    <S.ChannelName>{content.channel_name}</S.ChannelName>
                </S.ContentHeader>
            </S.Content>
        </S.Container>
    );
};

export default VideoContent;
