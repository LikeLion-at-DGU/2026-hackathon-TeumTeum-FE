import { useState } from "react";
import MenuIcon from "../../assets/icons/material-symbols-light_menu.svg";
import Sidebar from "./Sidebar";
import {
  HeaderContainer,
  Left,
  Title,
  Description,
  TextBox,
} from "./Header.styled";

const Header = ({ title, description, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
    onClick?.();
  };

  return (
    <HeaderContainer>
        <Left onClick={handleMenuClick}>
            <img src={MenuIcon} alt="메뉴" width={40} height={40} />
        </Left>
        <TextBox>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
        </TextBox>
        <Sidebar
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        />
    </HeaderContainer>
  );
};

export default Header;
