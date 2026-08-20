import { useState } from "react";

import * as S from "./ReflectionContent.styled";

const ReflectionContent = ({ content }) => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [answer, setAnswer] = useState("");

    const options = ["설레요", "기대돼요", "편안해요", "조금 긴장돼요"];

    return (
        <S.Container>
        <S.SubTitle>{content.title}</S.SubTitle>

        <S.Question>지금 내 기분을 한 단어로 표현하면?</S.Question>

        {options.length > 0 && (
            <S.OptionList>
            {options.map((option) => (
                <S.OptionButton
                key={option}
                type="button"
                $selected={selectedEmotion === option}
                onClick={() => setSelectedEmotion(option)}
                >
                {option}
                </S.OptionButton>
            ))}
            </S.OptionList>
        )}
        <S.SecondQuestion>
            {content.question}
        </S.SecondQuestion>
        {content.allow_text_input && (
            <S.TextArea
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="한 문장만 적어도 좋아요."
            />
        )}
        </S.Container>
    );
};

export default ReflectionContent;
