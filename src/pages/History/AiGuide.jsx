import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import InfoIcon from "../../assets/icons/mdi-light_information.svg";
import AiInfoPopup from "./AiInfoPopup";

const AiGuide = ({ isOpen, onInfoClick, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        window.addEventListener("scroll", onClose, { passive: true });

        return () => {
            window.removeEventListener("scroll", onClose);
        };
    }, [isOpen, onClose]);

    return (
        <Container>
            <Text>
                <Highlight>AI</Highlight>가 요약했어요
            </Text>
            <InfoButton
                type="button"
                onClick={onInfoClick}
                aria-label="AI 요약 안내 보기"
                aria-expanded={isOpen}
            >
                <img src={InfoIcon} alt="Ai 요약 설명" width={15} height={15} />  
            </InfoButton>
            {isOpen && <AiInfoPopup onClose={onClose} />}
        </Container>
    );
};

export default AiGuide;

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Text = styled.p`
    font-size: 13px;
    font-weight: 700;

    color: ${theme.colors.black};
`;

const Highlight = styled.span`
    color: ${theme.colors.primary};
`;

const InfoButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`;
