import { useState } from "react";

import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import CoursePlayer from "../../components/course/CoursePlayer";

const Course = ({ duration }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStop = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header
                title={duration}
                showStop={true}
                onStop={handleStop}
            />

            <div style={{ height: "1500px" }}>
                Course
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