import { Fragment } from "react";

import Chip from "../common/Chip";
import * as S from "../../pages/Home/Home.styled";

const SituationStep = ({
  question,
  selectedOption,
  customSituation,
  otherOptionId,
  onOptionClick,
  onCustomSituationChange,
}) => {
  const orderedOptions = [
    ...question.options.filter((option) => option.option_id !== otherOptionId),
    ...question.options.filter((option) => option.option_id === otherOptionId),
  ];

  return (
    <S.QuestionArea>
      <S.ChipList>
        {orderedOptions.map((option) => {
          const isOtherOption = option.option_id === otherOptionId;

          return (
            <Fragment key={option.option_id}>
              {isOtherOption ? (
                <S.OptionItem>
                  <Chip
                    optionId={option.option_id}
                    content={option.content}
                    selected={selectedOption === option.option_id}
                    onClick={() => onOptionClick(option.option_id)}
                  >
                    {option.content}
                  </Chip>

                  {selectedOption === otherOptionId && (
                    <S.CustomInput
                      type="text"
                      value={customSituation}
                      onChange={onCustomSituationChange}
                      placeholder="기타 내용을 입력해 주세요"
                      maxLength={50}
                    />
                  )}
                </S.OptionItem>
              ) : (
                <Chip
                  optionId={option.option_id}
                  content={option.content}
                  selected={selectedOption === option.option_id}
                  onClick={() => onOptionClick(option.option_id)}
                >
                  {option.content}
                </Chip>
              )}
            </Fragment>
          );
        })}
      </S.ChipList>
    </S.QuestionArea>
  );
};

export default SituationStep;
