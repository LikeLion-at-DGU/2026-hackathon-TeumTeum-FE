import * as S from "./BreathingContent.style";

const BreathingContent = () => {
    return (
        <S.Container>
            <S.Title>
                약속 전 긴장 리셋
            </S.Title>
            <S.CenterContent>
                <S.Guide>
                    <S.GuideText>오늘의 약속을 잘 해내야 한다는 생각을</S.GuideText>
                    <S.GuideText>잠시 내려놓아도 괜찮아요.</S.GuideText>
                </S.Guide>

                <S.BreathArea>
                    <S.BreathOrb aria-label="들이마시는 중">
                        <S.Glow $delay="0s" />
                        <S.Glow $delay="1.3s" />
                        <S.Core />
                    </S.BreathOrb>
                </S.BreathArea>

                <S.StatusArea>
                    <S.Phase>들이 마시기</S.Phase>
                    <S.Count>00:30</S.Count>
                </S.StatusArea>
            </S.CenterContent>
        </S.Container>
    );
};

export default BreathingContent;
