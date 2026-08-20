import Header from "../../components/layout/Header";
import Modal from "../../components/common/Modal";
import { useState,useEffect } from "react";
import AiGuide from "./AiGuide";
import HistoryList from "./HistoryList";
import styled from "styled-components";
import { getRecords, executeRecord } from "../../apis/record";
import { useNavigate } from "react-router-dom";
import StatusInfo from "../../components/common/StatusInfo";


const History = () => {

  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAiInfoOpen, setIsAiInfoOpen] = useState(false);

  const [isExecuting, setIsExecuting] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchRecords = async () => {
      try {
        const data = await getRecords();

        setRecords(data.records ?? []);

        console.log("GET /records 성공: ", data);
      }catch(error) {
        console.error(
          "GET /records 실패: ",
          error.response?.data || error.message,
        );
      }
    };

    fetchRecords();

  }, []);

  const handleCardClick = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  }

  const handleExecuteRecord = async () => {
    if (!selectedRecord || isExecuting) {
      return;
    }

    try {
      setIsExecuting(true);

      const data = await executeRecord(
        selectedRecord.record_id,
      );

      console.log("기록 실행 성공:", data);

      setIsModalOpen(false);

      navigate(`/course/${data.course_id}`, {
        state: {
          execution: data,
          returnPath: "/history",
        },
      });
    } catch (error) {
      console.error(
        "기록 실행 실패:",
        error.response?.data || error.message,
      );

      const message =
        error.response?.data?.detail ||
        "기록을 다시 실행하지 못했습니다.";

      alert(message);
    } finally {
      setIsExecuting(false);
    }
  };

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

        {records.length === 0 ? (
          <StatusInfo>아직 완료한 코스 기록이 없습니다.</StatusInfo>
        ) : (
          <HistoryList
            records={records}
            onCardClick={handleCardClick}
          />
        )}

      </Content>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maintitle="이 코스로 다시 쉬어갈까요?"
        date={selectedRecord?.date}
        title={selectedRecord?.title}
        description="나를 온전히 챙겨준 반가운 틈새 기록, 이대로 불러올까요?"
        secondaryText="닫기"
        primaryText={
          isExecuting ? "불러오는 중..." : "네, 진행할게요"
        }
        onSecondaryClick={() => setIsModalOpen(false)}
        onPrimaryClick={handleExecuteRecord}
      />
    </>
  );
};

export default History;

const Content = styled.div`
  min-height: 100dvh;
  box-sizing: border-box;
  padding: 120px 28px 0;
  
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-left: 28px;
  padding-right: 28px;
`;
