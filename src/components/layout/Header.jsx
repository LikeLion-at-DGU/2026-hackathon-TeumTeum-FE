import MenuIcon from "../../assets/icons/material-symbols-light_menu.svg";
import { HeaderContainerLeft, Title, Description, TextBox, HeaderContainer, } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
        <Left onClick={onClick}>
            <img src={MenuIcon} alt="메뉴" />
        </Left>
        <TextBox>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
        </TextBox>
    </HeaderContainer>
  );
};

export default Header;
