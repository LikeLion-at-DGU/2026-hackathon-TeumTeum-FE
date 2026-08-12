import MenuIcon from "../../assets/icons/material-symbols-light_menu.svg";
import {
  HeaderContainer,
  Left,
  Title,
  Description,
  TextBox,
} from "./Header.styled";

const Header = ({ title, description, onClick }) => {
  return (
    <HeaderContainer>
        <Left onClick={onClick}>
            <img src={MenuIcon} alt="메뉴" width={40} height={40} />
        </Left>
        <TextBox>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
        </TextBox>
        {/* <Sidebar
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        /> */}
    </HeaderContainer>
  );
};

export default Header;
