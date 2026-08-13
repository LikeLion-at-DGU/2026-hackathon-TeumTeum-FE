import HistoryCard from "./HistoryCard";
import styled from "styled-components";

const HistoryList = ({ records, onCardClick }) => {
  return (
    <Container>
      {records.map((record) => (
          <HistoryCard 
            key={record.record_id}
            record={record}
            onClick={() => onCardClick(record)}
          />
      ))}
    </Container>
  );
};

export default HistoryList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;