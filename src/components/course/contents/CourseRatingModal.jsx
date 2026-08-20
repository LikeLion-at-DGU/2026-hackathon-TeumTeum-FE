import Modal from "../../common/Modal";

const CourseRatingModal = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            maintitle="코스 평가"
            description="평가를 반영하여 다음 코스를 추천해 드릴게요 :)"
            primaryText="등록"
            onPrimaryClick={onSubmit}
        >
            <RatingContent></RatingContent>
        </Modal>
    );
};

export default CourseRatingModal;