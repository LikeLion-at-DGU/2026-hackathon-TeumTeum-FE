import { useState } from "react";
import * as S from "../../pages/Home/Home.styled";

const CourseComplete = ({ onComplete }) => {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(true);
  const handleCloseRating = () => {
    setIsRatingModalOpen(false);
  };
  const handleSubmitRating = () => {
    // 추후 코스 평가 API 호출
    setIsRatingModalOpen(false);
  };

  return (
    <>
      <S.Container>
        <h1>코스를 완료했어요!</h1>

        <p>
          오늘의 작은 틈을 잘 활용했어요 :)
        </p>

        <button onClick={onComplete}>
          홈으로 돌아가기
        </button>
      </S.Container>
      <CourseRatingModal
        isOpen={isRatingModalOpen}
        onClose={handleCloseRating}
        onSubmit={handleSubmitRating}
      />
    </>
    
  );
};

export default CourseComplete;