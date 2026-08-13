import formatDate from "../../utils/formatDate";
import styled from "styled-components";
import theme from "../../styles/theme";

const HistoryCard = ({ record, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Date>{record.date && formatDate(record.date)}</Date>
      <Title>{record.title}</Title>
      <Duration>{record.total_minutes}분</Duration>
    </Card>
  );    
};

export default HistoryCard;

const Card = styled.div`
    display: flex;
    width: 344px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    border-radius: 20px;
    border: 1px solid var(--subcolor, #EFEFEF);
    background: #FFF;
`;

const Date = styled.p`
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 700;
`;

const Title = styled.h3`
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 400;
`;

const Duration = styled.p`
    color: ${theme.colors.black};
    font-size: 13px;
    font-weight: 400;
`;