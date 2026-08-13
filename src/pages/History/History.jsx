import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import { useState } from "react";

const Record = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      
      <Header
        title="기록"
        description="틈틈이 채워준 틈새 코스의 흔적들을 둘러보세요 :)"
      /> 

      <button type="button" onClick={() => setIsModalOpen(true)}>
        기록 보기
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maintitle="이 코스로 다시 쉬어갈까요?"
        date="2026-05-05"
        title="움츠러들었던 목과 어깨를 펴준 5분의 기적"
        description={
          <>
            나를 온전히 챙겨준 반가운 틈새 기록,
            <br />
            이대로 불러올까요?
          </>
        }
        secondaryText="닫기"
        primaryText="네, 진행할게요"
        onSecondaryClick={() => setIsModalOpen(false)}
        onPrimaryClick={() => setIsModalOpen(false)}
      />
      <div>Record</div>
    </>
  );
};

export default Record;