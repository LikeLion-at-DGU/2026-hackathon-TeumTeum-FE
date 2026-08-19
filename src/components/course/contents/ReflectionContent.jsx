import { useState } from "react";

import * as S from "./ReflectionContent.styled";

const ReflectionContent = ({ content }) => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [answer, setAnswer] = useState("");

    const options = content.question_options ?? [];

    return (
            <S.Container>
                <S.SubTitle>
                    {content.title}
                </S.SubTitle>

                <S.Question>
                    {content.question}
                </S.Question>

                {options.length > 0 && (
                <S.OptionList>
                {options.map((option) => (
                    <S.OptionButton
                    key={option}
                    type="button"
                    $selected={selectedOption === option}
                    onClick={() => setSelectedOption(option)}
                    >
                    {option}
                    </S.OptionButton>
                ))}
                </S.OptionList>
            )}

            {content.allow_text_input && (
                <S.TextArea
                value={answer}
                onChange={(event) =>
                    setAnswer(event.target.value)
                }
                placeholder="한 문장만 적어도 좋아요."
                />
            )}
            </S.Container>
        );
    };

export default ReflectionContent;
