import { useMemo } from "react";
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

const getContentDuration = (content) => {
    const durationSeconds = Number(content?.duration_seconds);

    if (Number.isFinite(durationSeconds) && durationSeconds > 0) {
        return Math.floor(durationSeconds);
    }

    return Math.floor((Number(content?.estimated_minutes) || 0) * 60);
};

const CoursePlayer = ({
    contents,
    currentIndex,
    currentContentElapsed,
    onPrevious,
    onNext,
    isPlaying,
    onPlayPause,
    isUpdating,
}) => {
    const courseContents = useMemo(() => {
        return contents.map((content) => ({
            ...content,
            id: content.content_order,
            duration: getContentDuration(content),
        }));
    }, [contents]);

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

        return previousDuration + currentContentElapsed;
    }, [courseContents, currentIndex, currentContentElapsed]);

    // 전체 코스에서 현재 위치가 몇 %인지
    const progressPercent =
        totalDuration > 0
            ? Math.min((elapsedCourseTime / totalDuration) * 100, 100)
            : 0;

    // 현재 콘텐츠 남은 시간
    const remainingTime = Math.max(
        currentContent.duration - currentContentElapsed,
        0
    );

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
                        {formatTime(currentContentElapsed)}
                    </S.ElapsedTime>

                    <S.RemainingTime>
                        -{formatTime(remainingTime)}
                    </S.RemainingTime>
                </S.TimeRow>

            </S.Timeline>


            {/* 재생 컨트롤 */}
            <S.Controls>

                <S.PreviousButton onClick={onPrevious}>
                    <img src={BackwardIcon} alt="이전 콘텐츠" />
                </S.PreviousButton>

                <S.PlayPauseButton onClick={onPlayPause} disabled={isUpdating} $isPlaying={isPlaying}>
                    <img 
                        src={isPlaying ? PauseIcon : PlayIcon}
                        alt={isPlaying ? "일시정지" : "재생"}
                    />
                </S.PlayPauseButton>

                <S.NextButton onClick={onNext}>
                    <img src={FowardIcon} alt="다음 콘텐츠" />
                </S.NextButton>

            </S.Controls>

        </S.Player>
    );
};

export default CoursePlayer;
