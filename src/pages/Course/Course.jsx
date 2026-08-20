import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import CoursePlayer from "../../components/course/CoursePlayer";
import ContentRenderer from "../../components/course/ContentRenderer";
import StatusInfo from "../../components/common/StatusInfo";

import { pauseCourse, resumeCourse, stopCourse, completeCourse } from "../../apis/course";

const formatRemainingTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
};

const getContentDuration = (content) => {
    const durationSeconds = Number(content?.duration_seconds);

    if (Number.isFinite(durationSeconds) && durationSeconds > 0) {
        return Math.floor(durationSeconds);
    }

    const estimatedMinutes = Number(content?.estimated_minutes) || 0;
    return Math.floor(estimatedMinutes * 60);
};

const Course = () => {
    const { courseId } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const execution = state?.execution;

    const contents = useMemo(() => {
        return [...(execution?.contents ?? [])].sort(
            (a, b) => a.content_order - b.content_order,
        );
    }, [execution]);
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentContentElapsed, setCurrentContentElapsed] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(
            execution?.remaining_seconds ?? 0,
        );

    const [isStopModalOpen, setIsStopModalOpen] = useState(false);
    const [isStopping, setIsStopping] = useState(false);

    const currentContent = contents[currentIndex];
    const currentContentDuration = getContentDuration(currentContent);

    const [isPlaying, setIsPlaying] = useState(
        execution?.status === "in_progress",
    );
    const [isPausing, setIsPausing] = useState(false);

    const handleNext = () => {
        if (currentIndex >= contents.length - 1) {
            setCurrentContentElapsed(currentContentDuration);
            return;
        }

        setCurrentIndex((previous) => previous + 1);
        setCurrentContentElapsed(0);
    };

    const handlePrevious = () => {
        if (currentContentElapsed > 0) {
            setCurrentContentElapsed(0);
            return;
        }

        if (currentIndex > 0) {
            setCurrentIndex((previous) => previous - 1);
            setCurrentContentElapsed(0);
        }
    };

    const handlePause = async () => {
        if(isPausing) return;
        setIsPausing(true);

        if(isPlaying) {
            // 일시정지
            try {
                setIsPlaying(false);

                const data = await pauseCourse(execution.execution_id);
                console.log("코스 일시정지 성공: ", data);
                setRemainingSeconds(data.remaining_seconds);
            } catch (error) {
                console.error("코스 일시정지 실제 오류:", error);
                console.error("HTTP 상태:", error.response?.status);
                console.error("백엔드 응답:", error.response?.data);

                const detail = error.response?.data?.detail;
                if (
                    error.response?.status === 400 &&
                    detail === "현재 실행 중인 코스가 아닙니다."
                ) {
                    setIsPlaying(false);
                    return;
                }

                setIsPlaying(true);
            } finally {
                setIsPausing(false);
            }
            return;
        }
        // 재개
        try {
            const data = await resumeCourse(execution.execution_id);
        console.log("코스 타이머 재개 성공: ", data);

        setRemainingSeconds(data.remaining_seconds);
        setIsPlaying(true);
        } catch (error) {
            console.error("코스 재개 실제 오류:", error);
            console.error("HTTP 상태:", error.response?.status);
            console.error("백엔드 응답:", error.response?.data);
        } finally {
            setIsPausing(false);
        }
    };

    const handleStop = async () => {
        if(isPausing || isStopping) return;
        setWasPlayingBeforeModal(isPlaying);
        if(isPlaying) {
            try {
                setIsPausing(true);
                setIsPlaying(false);
                const data = await pauseCourse(execution.execution_id);
                setRemainingSeconds(data.remaining_seconds);
            } catch (error) {
                console.error("중단 modal 진입 중 일시정지 실패: ", error);
                console.error("HTTP 상태:", error.response?.status);
                console.error("백엔드 응답:", error.response?.data);
                const detail = error.response?.data?.detail;
                if(
                    error.response?.status === 400 && detail === "현재 실행 중인 코스가 아닙니다."
                ) {
                    setIsPlaying(false);
                    setIsStopModalOpen(true);
                    return;
                }
                setIsPlaying(true);
                return;
            }
        }
        setIsStopModalOpen(true);
    };

    const [wasPlayingBeforeModal, setWasPlayingBeforeModal] = useState(false);
    
    const handleCloseModal = async () => {
        if(wasPlayingBeforeModal) {
            try {
                setIsPausing(true);
                const data = await resumeCourse(execution.execution_id);
                setRemainingSeconds(data.remaining_seconds);
                setIsPlaying(true);
            } catch(error) {
                console.error("코스 재개 실패: ", error);
                console.error("백엔드 응답: ", error.response?.data);
                return;
            } finally {
                setIsPausing(false);
            }
        }
        setIsStopModalOpen(false);
    };
    
    const handleConfirmStop = async () => {
        console.log("중단 확인 버튼: ", execution.execution_id);
        if (isStopping) return;

        try {   
            setIsStopping(true);
            const data = await stopCourse(execution.execution_id);

            console.log("코스 중단 성공:", data);

            setIsStopModalOpen(false);

            navigate("/home", {
                state: {
                    stoppedExecution: data,
                },
            });
        } catch (error) {
            console.error("코스 중단 실제 오류:", error);
            console.error("HTTP 상태:", error.response?.status);
            console.error("백엔드 응답:", error.response?.data);

            const message = error.response?.data?.detail || "코스를 중단할 수 없습니다.";
            console.error(message);
        } finally {
            setIsStopping(false);
        }
    };

    const hasRequestedComplete = useRef(false);

    useEffect(() => {
        if (
            !isPlaying ||
            isPausing ||
            isStopModalOpen ||
            remainingSeconds <= 0
        ) {
            return;
        }

        const timer = setTimeout(() => {
            setRemainingSeconds((previous) => Math.max(previous - 1, 0));

            const nextElapsed = currentContentElapsed + 1;

            if (nextElapsed < currentContentDuration) {
                setCurrentContentElapsed(nextElapsed);
                return;
            }

            if (currentIndex < contents.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setCurrentContentElapsed(0);
                return;
            }

            setCurrentContentElapsed(currentContentDuration);
        }, 1000);

        return () => clearTimeout(timer);
    }, [
        isPlaying,
        isPausing,
        isStopModalOpen,
        remainingSeconds,
        currentContentElapsed,
        currentContentDuration,
        currentIndex,
        contents.length,
    ]);

    useEffect(() => {
        if (remainingSeconds !== 0) return;
        if (!execution) return;
        if (hasRequestedComplete.current) return;

        const completeCurrentCourse = async () => {
            try {
                hasRequestedComplete.current = true;
                setIsPlaying(false);

                const data = await completeCourse(execution.execution_id);
                console.log("코스 완료 성공:", data);

                navigate("/course/coursecomplete", {
                    state: {
                        completedExecution: data,
                        targetMinutes: execution.target_minutes,
                    },
                });
            } catch (error) {
                console.error("코스 완료 실제 오류: ", error);
                console.error("HTTP 상태:", error.response?.status);
                console.error("백엔드 응답:", error.response?.data);

                const message = error.response?.data?.detail || "코스를 완료 처리할 수 없습니다.";
                console.error(message);

                if (
                    error.response?.status === 400 &&
                    error.response?.data?.detail ===
                        "아직 코스 시간이 다 되지 않았습니다. 중간에 그만두려면 stop을 사용해주세요."
                ) {
                    hasRequestedComplete.current = false;
                    setRemainingSeconds(1);
                    setIsPlaying(true);
                }
            } 
        };
        completeCurrentCourse();
    }, [remainingSeconds, execution, navigate]);

    if (!execution) {
        return <StatusInfo>코스 실행 정보를 불러오지 못했습니다.</StatusInfo>;
    }

    if (String(execution.course_id) !== courseId) {
        return <StatusInfo>요청한 코스 정보가 일치하지 않습니다.</StatusInfo>;
    }

    if (!currentContent) {
        return <StatusInfo>실행할 콘텐츠가 없습니다.</StatusInfo>;
    }

    

    return (
        <>
            <Header
                title={formatRemainingTime(remainingSeconds)}
                description={`${execution.target_minutes}분 코스`}
                showStop
                onStop={handleStop}
            />

            <div style={{ paddingTop: "120px" }}>
                <ContentRenderer
                    content={currentContent}
                    isPlaying={isPlaying}
                />
            </div>

            <CoursePlayer
                contents={contents}
                currentIndex={currentIndex}
                currentContentElapsed={currentContentElapsed}
                onPrevious={handlePrevious}
                onNext={handleNext}
                isPlaying={isPlaying}
                onPlayPause={handlePause}
                isUpdating={isPausing}
            />
            <Modal
                isOpen={isStopModalOpen}
                onClose={handleCloseModal}
                maintitle="이 코스를 중단하시겠어요?"
                description={
                    <>
                        여기까지만 기록하고 마칠게요. <br />남은 시간도 언제든 다시 챙기러 오세요!
                    </>
                }
                secondaryText="닫기"
                primaryText={isStopping ? "중단 중..." : "네, 중단할게요"}
                onSecondaryClick={handleCloseModal}
                onPrimaryClick={handleConfirmStop}
            />
        </>
    );
};

export default Course;
