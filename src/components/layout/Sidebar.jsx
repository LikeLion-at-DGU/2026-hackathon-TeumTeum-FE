import { NavLink } from "react-router-dom";

import Logo from "../../assets/icons/Frame 13.svg";
import HomeIcon from "../../assets/icons/SidebarIcons/material-symbols-light_home-outline.svg";
import HomeActiveIcon from "../../assets/icons/SidebarIcons/material-symbols-light_home-outline-green.svg";
import MagazineIcon from "../../assets/icons/SidebarIcons/material-symbols-light_library-books-outline-rounded.svg";
import MagazineActiveIcon from "../../assets/icons/SidebarIcons/material-symbols-light_library-books-outline-rounded-green.svg";
import HistoryIcon from "../../assets/icons/SidebarIcons/material-symbols-light_collections-bookmark-outline.svg";
import HistoryActiveIcon from "../../assets/icons/SidebarIcons/material-symbols-light_collections-bookmark-outline-green.svg";
import MyPageIcon from "../../assets/icons/SidebarIcons/material-symbols-light_person-outline-rounded.svg";
import MyPageActiveIcon from "../../assets/icons/SidebarIcons/material-symbols-light_person-outline-rounded-green.svg";
import LogoutIcon from "../../assets/icons/SidebarIcons/Bottom.svg";

import {
  SidebarContainer,
  TopButton,
  MenuList,
  MenuItem,
  BottomButton,
  Overlay,
} from "./Sidebar.styled";

const Sidebar = ({ isOpen, onClose }) => {
  

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <TopButton type="button" onClick={onClose}>
          <img src={Logo} alt="로고" />
        </TopButton>

        <MenuList> 
          <MenuItem>
            <NavLink to="/home" reloadDocument>
              {({ isActive }) => (
                <img src={isActive ? HomeActiveIcon : HomeIcon} alt="홈"/>
              )}
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/magazine">
              {({ isActive }) => (
                <img src={isActive ? MagazineActiveIcon : MagazineIcon} alt="매거진" />
              )}
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/history">
              {({ isActive }) => (
                <img src={isActive ? HistoryActiveIcon : HistoryIcon} alt="기록" />
              )}
              
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink to="/mypage">
              {({ isActive }) => (
                <img src={isActive ? MyPageActiveIcon : MyPageIcon} alt="마이페이지" />
              )}
            </NavLink>
          </MenuItem>
        </MenuList>

        <BottomButton>
          <img src={LogoutIcon} alt="로그아웃" />
        </BottomButton>
      </SidebarContainer>
    </>
    
  );
};

export default Sidebar;
