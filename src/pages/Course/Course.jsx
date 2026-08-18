import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import CoursePlayer from "../../components/course/CoursePlayer";
import ContentRenderer from "../../components/course/ContentRenderer";

const formatRemainingTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
};

const Course = () => {
    const { state } = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const course = state?.course;
    const duration = state?.duration ?? course?.total_minutes ?? 0;
    const currentContent = course?.contents?.[currentIndex];
    const [remainingSeconds, setRemainingSeconds] = useState(
        duration * 60,
    );

    const handleStop = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen || remainingSeconds <= 0) return;

        const timer = setInterval(() => {
            setRemainingSeconds((previous) => Math.max(previous - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [isModalOpen, remainingSeconds]);

    if (!course || !currentContent) {
        return <p>코스 정보를 불러올 수 없습니다.</p>;
    }

    return (
        <>
            <Header
                title={formatRemainingTime(remainingSeconds)}
                description={`${duration}분 코스`}
                showStop
                onStop={handleStop}
            />

            <div style={{ paddingTop: "120px" }}>
                <ContentRenderer content={currentContent} />
            </div>

            <CoursePlayer
                contents={course.contents}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                maintitle="이 코스를 중단하시겠어요?"
                description={
                    <>
                        여기까지만 기록하고 마칠게요. <br />남은 시간도 언제든 다시 챙기러 오세요!
                    </>
                }
                secondaryText="닫기"
                primaryText="네, 중단할게요"
                onSecondaryClick={handleCloseModal}
                onPrimaryClick={handleCloseModal}
            />
        </>
    );
};

export default Course;
