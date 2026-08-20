import styled from "styled-components";
import theme from "../../styles/theme";
import Logo from "../../assets/icons/Frame 13.svg";
import Button from "../common/Button";
import formatDate from "../../utils/formatDate";

const Modal = ({ 
    maintitle, date, title, description, 
    secondaryText, primaryText, onSecondaryClick, onPrimaryClick,
    isOpen, onClose, children, topOnlyRounded = false
 }) => {
    return (
        <>
            <Overlay $isOpen={isOpen} onClick={onClose}/>
            <ModalContainer
                $isOpen={isOpen}
                $topOnlyRounded={topOnlyRounded}
            >
            <LogoImage src={Logo} alt="로고" />
            <Content>
                <MainTitle>{maintitle}</MainTitle>
                {date && <Date>{formatDate(date)}</Date>}
                {title && <Title>{title}</Title>}
                <Description>{description}</Description>
                {children}
            </Content>
            <ButtonGroup>
                {secondaryText && (
                    <Button
                        variant="secondary"
                        onClick={onSecondaryClick}
                    >
                        {secondaryText}
                    </Button>
                )}
                <Button
                    variant="primary"
                    onClick={onPrimaryClick}
                >
                    {primaryText}
                </Button>
            </ButtonGroup>
        </ModalContainer>
        </>
        
    );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 199;
  background: rgba(0, 0, 0, 0.4);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 10px;
  right: 10px;
  bottom: ${({ $topOnlyRounded }) => ($topOnlyRounded ? "0" : "10px")};
  z-index: 200;

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transform: scale(${({ $isOpen }) => ($isOpen ? 1 : 0.95)});

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  background: #ffffff;
  border-radius: ${({ $topOnlyRounded }) =>
    $topOnlyRounded ? "27px 27px 0 0" : "27px"};

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  max-height: calc(100dvh - 20px);
  overflow-y: auto;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;

  position: absolute;
  left: 24px;
  top: 24px;
`;

const Content = styled.div`
  margin-top: 71px;
  width: 307px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.h2`
  margin: 0 0 18px;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #000;
`;

const Date = styled.p`
  margin: 0 0 12px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: gray;
`;

const Title = styled.p`
  margin: 0 0 12px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: gray;
`;

const Description = styled.p`
  margin: 0;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  color: #b3b3b3;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 60px;
  padding-bottom: 30px;
`;
