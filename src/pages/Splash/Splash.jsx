import * as S from "./Splash.styled"
import useDelayedNavigate from "../../hooks/useDelayedNavigate";

const Splash = () => {
    useDelayedNavigate("/onboarding", 1500);

    return (
        <>
            <S.Main>
                <S.SubTitle>나를 챙기는 가장 가벼운 습관</S.SubTitle>
                <S.Title>틈틈</S.Title>
            </S.Main>
        </>
    )
};

export default Splash