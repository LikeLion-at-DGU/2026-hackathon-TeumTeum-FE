import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import CoursePlayer from "../../components/course/CoursePlayer";
import ContentRenderer from "../../components/course/ContentRenderer";

import { pauseCourse, resumeCourse, stopCourse, completeCourse } from "../../apis/course";

const formatRemainingTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
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
    const [remainingSeconds, setRemainingSeconds] = useState(
            execution?.remaining_seconds ?? 0,
        );

    const [isStopModalOpen, setIsStopModalOpen] = useState(false);
    const [isStopping, setIsStopping] = useState(false);

    const currentContent = contents[currentIndex];

    const [isPlaying, setIsPlaying] = useState(true);
    const [isPausing, setIsPausing] = useState(false);

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
        if(!isPlaying || isStopModalOpen || remainingSeconds <= 0) {
            return;
        }
        const timer = setInterval(() => {
            setRemainingSeconds((previous) =>
                Math.max(previous - 1, 0),
            );
        }, 1000);
        return() => clearInterval(timer);
    }, [isPlaying, isStopModalOpen, remainingSeconds]);

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
                    },
                });
            } catch (error) {
                console.error("코스 완료 실제 오류: ", error);
                console.error("HTTP 상태:", error.response?.status);
                console.error("백엔드 응답:", error.response?.data);

                const message = error.response?.data?.detail || "코스를 완료 처리할 수 없습니다.";
                console.error(message);
            } 
        };
        completeCurrentCourse();
    }, [remainingSeconds, execution, navigate]);

    if (!execution) {
        return <p>코스 실행 정보를 불러오지 못했습니다.</p>;
    }

    if (String(execution.course_id) !== courseId) {
        return <p>요청한 코스 정보가 일치하지 않습니다.</p>;
    }

    if (!currentContent) {
        return <p>실행할 콘텐츠가 없습니다.</p>;
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
                <ContentRenderer content={currentContent} />
            </div>

            <CoursePlayer
                contents={contents}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
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
