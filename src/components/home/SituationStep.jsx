import Chip from "../common/Chip";
import * as S from "../../pages/Home/Home.styled";

const SituationStep = ({
  question,
  selectedOption,
  customSituation,
  onOptionClick,
  onCustomSituationChange,
}) => {
  return (
    <>
      <S.ChipList>
        {question.options.map((option) => (
          <Chip
            key={option.option_id}
            optionId={option.option_id}
            content={option.content}
            selected={selectedOption === option.option_id}
            onClick={() => onOptionClick(option.option_id)}
          >
            {option.content}
          </Chip>
        ))}
      </S.ChipList>

      {selectedOption === 4 && (
        <S.CustomInput
          type="text"
          value={customSituation}
          onChange={onCustomSituationChange}
          placeholder="현재 당신의 상황은?"
          maxLength={50}
        />
      )}
    </>
  );
};

export default SituationStep;