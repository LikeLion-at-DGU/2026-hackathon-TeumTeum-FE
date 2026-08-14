import Chip from "../common/Chip";
import * as S from "../../pages/Home/Home.styled";

const ContentStep = ({
  question,
  selectedOptions,
  onOptionClick,
}) => {
  return (
    <S.ChipList>
      {question.options.map((option) => (
        <Chip
          key={option.option_id}
          optionId={option.option_id}
          content={option.content}
          selected={selectedOptions.includes(option.option_id)}
          onClick={() => onOptionClick(option.option_id)}
        >
          {option.content}
        </Chip>
      ))}
    </S.ChipList>
  );
};

export default ContentStep;