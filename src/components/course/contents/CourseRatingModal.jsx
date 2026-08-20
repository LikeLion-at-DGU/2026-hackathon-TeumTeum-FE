import { useState } from "react";
import Modal from "../../common/Modal";
import styled from "styled-components";
import theme from "../../../styles/theme";

import goodIcon from "../../../assets/icons/CourseRatingModal/mynaui_smile.svg";
import neutralIcon from "../../../assets/icons/CourseRatingModal/mynaui_annoyed.svg";
import badIcon from "../../../assets/icons/CourseRatingModal/mynaui_sad.svg";

const RATINGS = [
    { value: "good", label: "좋았어요!", icon: goodIcon },
    { value: "neutral", label: "보통이에요!", icon: neutralIcon },
    { value: "bad", label: "별로예요!", icon: badIcon },
];

const CourseRatingModal = ({
    isOpen,
    onClose,
    onSubmit,
    isSubmitting = false,
}) => {
    const [rating, setRating] = useState(null);
    const handleSubmit = () => {
        if (!rating || isSubmitting) return;
        onSubmit(rating);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            maintitle="코스 평가"
            description="평가를 반영하여 다음 코스를 추천해 드릴게요 :)"
            primaryText={isSubmitting ? "등록 중..." : "등록"}
            onPrimaryClick={handleSubmit}
        >
            <RatingContent>
                {RATINGS.map(({ value, label, icon }) => (
                    <RatingButton
                        key={value}
                        type="button"
                        $isSelected={rating === value}
                        onClick={() => setRating(value)}
                    >
                        <RatingIcon src={icon} alt="" />
                        <RatingLabel>{label}</RatingLabel>
                    </RatingButton>
                ))}
            </RatingContent>
        </Modal>
    );
};

export default CourseRatingModal;

const RatingContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    margin: 40px 0 2px;
`;

const RatingButton = styled.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 8px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.55)};
    transform: ${({ $isSelected }) =>
        $isSelected ? "translateY(-4px)" : "translateY(0)"};
    transition: 0.2s ease;

    &:hover {
        opacity: 1;
    }
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
`;

const RatingIcon = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
    filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.25));
`;

const RatingLabel = styled.span`
    color: ${theme.colors.news};
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
`;
