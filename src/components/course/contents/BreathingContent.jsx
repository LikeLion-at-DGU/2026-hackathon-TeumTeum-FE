import * as S from "./BreathingContent.style";

const BreathingContent = ({ content }) => {
    return (
        <S.Container>
            <S.Title>
                {content.title}
            </S.Title>
            <S.CenterContent>
                <S.Guide>
                    <S.GuideText>{content.description}</S.GuideText>
                    <S.GuideText>{content.voice_script}</S.GuideText>
                </S.Guide>

                <S.BreathArea>
                    <S.BreathOrb aria-label={firstStep?.phase}>
                        <S.Glow $delay="0s" />
                        <S.Glow $delay="1.3s" />
                        <S.Core />
                    </S.BreathOrb>
                </S.BreathArea>

                <S.StatusArea>
                    <S.Phase>{firstStep?.phase ?? "호흡 준비"}</S.Phase>
                    <S.Count>{firstStep?.duration_seconds ?? 0}초</S.Count>
                </S.StatusArea>
            </S.CenterContent>
        </S.Container>
    );
};

export default BreathingContent;
