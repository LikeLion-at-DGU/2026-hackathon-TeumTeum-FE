import { useEffect, useMemo, useState } from "react";
import * as S from "./CoursePlayer.styled";

import PauseIcon from "../../assets/icons/CoursePlayerIcons/pause-icon-expanded.svg";
import PlayIcon from "../../assets/icons/CoursePlayerIcons/play-icon-expanded.svg";
import FowardIcon from "../../assets/icons/CoursePlayerIcons/foward-fill.svg";
import BackwardIcon from "../../assets/icons/CoursePlayerIcons/backward-fill.svg";

const CONTENT_TYPE_LABEL = {
    youtube: "유튜브",
    article: "AI 브리프",
    audio_guide: "호흡",
    stretch_guide: "스트레칭",
    reflection: "마음 정리",
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;
};

const CoursePlayer = ({
    contents,
    currentIndex,
    onIndexChange,
    isPlaying,
    onPlayPause,
    isUpdating,
}) => {
    const courseContents = useMemo(() => {
        return contents.map((content) => ({
            ...content,
            id: content.content_order,
            duration: content.estimated_minutes * 60,
        }));
    }, [contents]);

    // 현재 콘텐츠에서 몇 초 진행됐는지
    const [currentTime, setCurrentTime] = useState(0);

    const currentContent = courseContents[currentIndex];

    // 전체 코스 시간
    const totalDuration = useMemo(() => {
        return courseContents.reduce(
            (total, content) => total + content.duration,
            0
        );
    }, [courseContents]);

    // 현재까지 진행된 전체 코스 시간
    const elapsedCourseTime = useMemo(() => {
        const previousDuration = courseContents
            .slice(0, currentIndex)
            .reduce((total, content) => total + content.duration, 0);

        return previousDuration + currentTime;
    }, [courseContents, currentIndex, currentTime]);

    // 전체 코스에서 현재 위치가 몇 %인지
    const progressPercent =
        (elapsedCourseTime / totalDuration) * 100;

    // 현재 콘텐츠 남은 시간
    const remainingTime = Math.max(
        currentContent.duration - currentTime,
        0
    );


    // 테스트용 시간 진행
    useEffect(() => {
        if (!isPlaying || isUpdating) return;

        const timer = setInterval(() => {
            setCurrentTime((prev) => {
                if(prev < currentContent.duration) {
                    return prev + 1;
                }
                if(currentIndex < courseContents.length - 1) {
                    onIndexChange(currentIndex + 1);
                    return 0;
                }
                return currentContent.duration;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [
        isPlaying,
        isUpdating,
        currentIndex,
        currentContent.duration,
        courseContents.length,
        onIndexChange,
    ]);

    // 이전 콘텐츠
    const handlePrevious = () => {
        if(currentTime > 0) {
            setCurrentTime(0);
            return;
        }
        if(currentIndex > 0) {
            onIndexChange(currentIndex - 1);
            setCurrentTime(0);
        }
    };

    // 다음 콘텐츠
    const handleNext = () => {
        if(currentIndex < courseContents.length - 1) {
            onIndexChange(currentIndex + 1);
            setCurrentTime(0);
            return;
        }
        setCurrentTime(currentContent.duration);
    };

    return (
        <S.Player>

            {/* 코스 Timeline */}
            <S.Timeline>

                {/* 코스 이름 */}
                <S.Labels>
                    {courseContents.map((content, index) => (
                        <S.CourseLabel
                            key={content.id}
                            $active={index === currentIndex}
                        >
                            {CONTENT_TYPE_LABEL[content.content_type]}
                        </S.CourseLabel>
                    ))}
                </S.Labels>


                {/* Progress Rail */}
                <S.ProgressArea>

                    {/* 전체 회색 rail */}
                    <S.ProgressRail />

                    {/* 진행된 초록색 rail */}
                    <S.ProgressFill
                        style={{
                            width: `${progressPercent}%`,
                        }}
                    />

                    {/* 콘텐츠별 고정 dot */}
                    {courseContents.map((content, index) => {

                        const isCompleted =
                            index < currentIndex;

                        const isCurrent =
                            index === currentIndex;

                        // 각 콘텐츠 시작 위치
                        const startTime = courseContents
                            .slice(0, index)
                            .reduce(
                                (total, item) =>
                                    total + item.duration,
                                0
                            );

                        const position =
                            (startTime / totalDuration) * 100;

                        return (
                            <S.CourseDot
                                key={content.id}
                                $position={position}
                                $completed={isCompleted}
                                $current={isCurrent}
                            />
                        );
                    })}


                    {/* 실제 현재 위치 */}
                    <S.Playhead
                        style={{
                            left: `${progressPercent}%`,
                        }}
                    />
                    <S.EndDot />

                </S.ProgressArea>


                {/* 시간 */}
                <S.TimeRow>
                    <S.ElapsedTime>
                        {formatTime(currentTime)}
                    </S.ElapsedTime>

                    <S.RemainingTime>
                        -{formatTime(remainingTime)}
                    </S.RemainingTime>
                </S.TimeRow>

            </S.Timeline>


            {/* 재생 컨트롤 */}
            <S.Controls>

                <S.PreviousButton onClick={handlePrevious}>
                    <img src={BackwardIcon} alt="이전 콘텐츠" />
                </S.PreviousButton>

                <S.PlayPauseButton onClick={onPlayPause} disabled={isUpdating} $isPlaying={isPlaying}>
                    <img 
                        src={isPlaying ? PauseIcon : PlayIcon}
                        alt={isPlaying ? "일시정지" : "재생"}
                    />
                </S.PlayPauseButton>

                <S.NextButton onClick={handleNext}>
                    <img src={FowardIcon} alt="다음 콘텐츠" />
                </S.NextButton>

            </S.Controls>

        </S.Player>
    );
};

export default CoursePlayer;