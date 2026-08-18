import { useState, useEffect } from "react";

import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import CoursePlayer from "../../components/course/CoursePlayer";
import ContentRenderer from "../../components/course/ContentRenderer";
import ReflectionContent from "../../components/course/contents/ReflectionContent";
import AiBriefContent from "../../components/course/contents/AiBriefContent";
import BreathingContent from "../../components/course/contents/BreathingContent";
import StretchingContent from "../../components/course/contents/StretchingContent";

//임시데이터
const mockCourseResponse = {
  guest_uuid: "550e8400-e29b-41d4-a716-446655440000",
  target_minutes: 12,
  course: {
    course_id: 34,
    title: "12분 틈 활용법",
    description: "추천이 마음에 들지 않는다면 바꿔보세요.",
    total_minutes: 12,
    contents: [
        {
            content_order: 1,
            content_type: "youtube",
            title: "앉아서 하는 목·어깨 스트레칭",
            description: "",
            content: null,
            video_url: "https://www.youtube.com/watch?v=2N1g30OrtFg",
            thumbnail_url: "https://i.ytimg.com/vi/2N1g30OrtFg/hqdefault.jpg",
            channel_name: "채널명",
            estimated_minutes: 6,
        },
        {
            content_order: 2,
            content_type: "article",
            title: "오늘 피부가 유난히 지쳐 보이는 이유",
            description: "물 한 모금 마시고 턱 긴장을 풀어보세요.",
            content: "AI가 재구성한 본문...",
            source: "팀 원문",
            content_url: null,
            image_url: null,
            video_url: null,
            thumbnail_url: null,
            channel_name: null,
            voice_script: "TTS용 스크립트...",
            steps: [],
            question: "오늘 피부 컨디션은 몇 점인가요?",
            question_options: [],
            allow_text_input: false,
            estimated_minutes: 4,
        },
    ],
  },
};

const formatRemainingTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds,
    ).padStart(2, "0")}`;
};

const Course = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const course = mockCourseResponse.course;
    const currentContent = course.contents[currentIndex];
    const [remainingSeconds, setRemainingSeconds] = useState(
        course.total_minutes * 60,
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

    return (
        <>
            <Header
                title={formatRemainingTime(remainingSeconds)}
                description={`${course.total_minutes}분 코스`}
                showStop
                onStop={handleStop}
            />

            <div style={{ paddingTop: "120px" }}>
                {/* <ContentRenderer content={currentContent} /> */}
                <StretchingContent />
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
