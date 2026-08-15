import { useEffect, useMemo, useState } from "react";
import * as S from "./CoursePlayer.styled";

import PauseIcon from "../../assets/icons/CoursePlayerIcons/pause-icon-expanded.svg";
import PlayIcon from "../../assets/icons/CoursePlayerIcons/play-icon-expanded.svg";
import FowardIcon from "../../assets/icons/CoursePlayerIcons/foward-fill.svg";
import BackwardIcon from "../../assets/icons/CoursePlayerIcons/backward-fill.svg";

const courseContents = [
    {
        id: 1,
        title: "스트레칭",
        duration: 180, // 3분
    },
    {
        id: 2,
        title: "듣기",
        duration: 320, // 5분 20초
    },
    {
        id: 3,
        title: "매거진",
        duration: 120, // 2분
    },
];

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;
};

const CoursePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    // 현재 콘텐츠 index
    const [currentIndex, setCurrentIndex] = useState(1);

    // 현재 콘텐츠에서 몇 초 진행됐는지
    const [currentTime, setCurrentTime] = useState(120);

    const currentContent = courseContents[currentIndex];

    // 전체 코스 시간
    const totalDuration = useMemo(() => {
        return courseContents.reduce(
            (total, content) => total + content.duration,
            0
        );
    }, []);

    // 현재까지 진행된 전체 코스 시간
    const elapsedCourseTime = useMemo(() => {
        const previousDuration = courseContents
            .slice(0, currentIndex)
            .reduce((total, content) => total + content.duration, 0);

        return previousDuration + currentTime;
    }, [currentIndex, currentTime]);

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
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrentTime((prev) => {
                if(prev < currentContent.duration) {
                    return prev + 1;
                }
                if(currentIndex < courseContents.length - 1) {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                    return 0;
                }
                setIsPlaying(false);
                return currentContent.duration;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [
        isPlaying,
        currentIndex,
        currentContent.duration,
    ]);

    // 이전 콘텐츠
    const handlePrevious = () => {
        if(currentTime > 0) {
            setCurrentTime(0);
            return;
        }
        if(currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setCurrentTime(0);
        }
    };

    // 다음 콘텐츠
    const handleNext = () => {
        if(currentIndex < courseContents.length - 1) {
            setCurrentIndex((prev) => prev + 1);
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
                            {content.title}
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

                <S.PlayPauseButton onClick={handlePlayPause} $isPlaying={isPlaying}>
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