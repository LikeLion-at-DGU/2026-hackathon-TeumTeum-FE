import styled from "styled-components";

const AiInfoPopup = ({ onClose }) => {
  return (
    <Container>
        <Title>AI 요약</Title>
        <List>
            <p>• 완료된 코스와 시간을 바탕으로 AI가 자동 생성해요.</p>
            <p>• 기록이 쌓일수록 더 정확한 요약을 전달해 드려요.</p>
            <p>• AI 요약 내용에는 일부 오차가 발생할 수 있어요.</p>
        </List>
    </Container>
  );
};

export default AiInfoPopup;

const Container = styled.div`
    display: flex;
    width: 330px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 23px;
    background: #FFF;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25);
`;

const Title = styled.p`
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    color: #b2b2b2;
    font-size: 15px;
    font-weight: 400;
    padding-left: 10px;
`;

