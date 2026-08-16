import { useState } from "react";

import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import CoursePlayer from "../../components/course/CoursePlayer";
import ContentRenderer from "../../components/course/ContentRenderer";

//임시데이터
const mockCourse = {
  contents: [
    {
      content_order: 1,
      content_type: "article",
      title: "첫 번째 기사",
    },
    {
      content_order: 2,
      content_type: "youtube",
      title: "첫 번째 영상",
    },
  ],
};

const Course = ({ duration }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStop = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const currentIndex = 1;
    const currentContent = mockCourse.contents[currentIndex];

    return (
        <>
            <Header
                title={duration}
                showStop={true}
                onStop={handleStop}
            />

            <div style={{ paddingTop: "120px" }}>
                <ContentRenderer content={currentContent} />
            </div>

            <CoursePlayer />

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