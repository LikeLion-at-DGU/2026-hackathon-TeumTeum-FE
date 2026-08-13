import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import { useState } from "react";
import AiGuide from "./AiGuide";
import HistoryList from "./HistoryList";
import AiInfoPopup from "./AiInfoPopup";
import styled from "styled-components";

const History = () => {

  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAiInfoOpen, setIsAiInfoOpen] = useState(false);

  const handleCardClick = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  }

  const records = [
    {
      record_id: 1,
      date: "2026-08-10",
      title: "도파민 스크롤을 끊어내고 뇌에 선물한 사운드",
      total_minutes: 30,
    },
    {
      record_id: 2,
      date: "2026-08-08",
      title: "움츠러들었던 목과 어깨를 펴준 5분의 기적",
      total_minutes: 5,
    },
    {
      record_id: 3,
      date: "2026-08-06",
      title: "잠깐의 스트레칭으로 굳어있던 몸을 깨운 시간",
      total_minutes: 10,
    },
    {
      record_id: 4,
      date: "2026-08-03",
      title: "복잡했던 생각을 잠시 내려놓은 마음 정리",
      total_minutes: 15,
    },
    {
      record_id: 5,
      date: "2026-07-30",
      title: "좋아하는 음악과 함께 천천히 걸었던 오후",
      total_minutes: 25,
    },
    {
      record_id: 6,
      date: "2026-07-27",
      title: "지친 눈을 쉬게 해준 짧고 편안한 휴식",
      total_minutes: 5,
    },
    {
      record_id: 7,
      date: "2026-07-24",
      title: "차 한 잔과 함께 아무것도 하지 않았던 여유",
      total_minutes: 20,
    },
    {
      record_id: 8,
      date: "2026-07-19",
      title: "굳어있던 어깨를 풀어내고 가볍게 움직인 틈",
      total_minutes: 10,
    },
    {
      record_id: 9,
      date: "2026-07-15",
      title: "잔잔한 음악에 집중하며 잠시 숨을 고른 시간",
      total_minutes: 30,
    },
    {
      record_id: 10,
      date: "2026-07-11",
      title: "바쁜 하루 사이에서 나를 돌아본 작은 순간",
      total_minutes: 15,
    },
    {
      record_id: 11,
      date: "2026-07-07",
      title: "가볍게 몸을 움직이며 활력을 채운 아침",
      total_minutes: 10,
    },
    {
      record_id: 12,
      date: "2026-07-02",
      title: "깊게 숨 쉬며 머릿속을 비워낸 평온한 시간",
      total_minutes: 5,
    },
  ];

  return (
    <>
      
      <Header
        title="기록"
        description="틈틈이 채워준 틈새 코스의 흔적들을 둘러보세요 :)"
      /> 

      <Content>
        <AiGuide
          isOpen={isAiInfoOpen}
          onInfoClick={() => setIsAiInfoOpen((prev) => !prev)}
          onClose={() => setIsAiInfoOpen(false)}
        />
        
        <HistoryList 
          records={records} 
          onCardClick={handleCardClick}
        />

      </Content>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maintitle="이 코스로 다시 쉬어갈까요?"
        date={selectedRecord?.date}
        title={selectedRecord?.title}
        description="나를 온전히 챙겨준 반가운 틈새 기록, 이대로 불러올까요?"
        secondaryText="닫기"
        primaryText="네, 진행할게요"
        onSecondaryClick={() => setIsModalOpen(false)}
        onPrimaryClick={() => {
          console.log("선택한 기록:", selectedRecord);
          setIsModalOpen(false);
        }}
       />
    </>
  );
};

export default History;

const Content = styled.div`
  padding: 120px 28px 0;
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-left: 28px;
  padding-right: 28px;
`;
