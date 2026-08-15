import { useState } from "react";
import MenuIcon from "../../assets/icons/material-symbols-light_menu.svg";
import Sidebar from "./Sidebar";
import * as S from "./Header.styled";

const Header = ({ title, description, 
                  onClick, showStop = false, onStop, }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
    onClick?.();
  };

  return (
    <S.HeaderContainer>
        <S.Left onClick={handleMenuClick}>
            <img src={MenuIcon} alt="메뉴" width={40} height={40} />
        </S.Left>
        <S.TextBox>
            <S.Title>{title}</S.Title>
            {description && <S.Description>{description}</S.Description>}
        </S.TextBox>
        {showStop && (
            <S.StopButton onClick={onStop}>
                중단
            </S.StopButton>
        )}
        <Sidebar
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        />
    </S.HeaderContainer>
  );
};

export default Header;
