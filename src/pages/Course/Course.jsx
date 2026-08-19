import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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

    const currentContent = contents[currentIndex];

    const handleStop = () => {
        setIsStopModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsStopModalOpen(false);
    };
    
    const handleConfirmStop = () => {
        setIsStopModalOpen(false);
        navigate("/home");
    }

    useEffect(() => {
        if (isStopModalOpen || remainingSeconds <= 0) return;

        const timer = setInterval(() => {
            setRemainingSeconds((previous) => Math.max(previous - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [isStopModalOpen, remainingSeconds]);

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
                primaryText="네, 중단할게요"
                onSecondaryClick={handleCloseModal}
                onPrimaryClick={handleConfirmStop}
            />
        </>
    );
};

export default Course;
