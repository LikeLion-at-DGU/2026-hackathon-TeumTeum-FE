import { useState } from "react";

import * as S from "./ReflectionContent.styled";

const options = ["설레요", "기대돼요", "편안해요", "조금 긴장돼요"];

const ReflectionContent = () => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [answer, setAnswer] = useState("");

    return (
            <S.Container>
                <S.SubTitle>
                    친구를 만나기 전, 마음정리
                </S.SubTitle>

                <S.Question>
                    지금 내 기분을 한 단어로 표현하면?
                </S.Question>

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

                <S.SecondQuestion>
                    오늘 이 약속에서
                    <br />
                    내가 가장 기대하는 순간은 무엇인가요?
                </S.SecondQuestion>

                <S.TextArea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="한 문장만 적어도 좋아요."
                />
            </S.Container>
    );  
};

export default ReflectionContent;
