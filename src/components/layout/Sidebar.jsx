import { Link } from "react-router-dom";

import Logo from "../../assets/icons/Frame 13.svg";
import HomeIcon from "../../assets/icons/material-symbols-light_home-outline.svg";
import MagazineIcon from "../../assets/icons/material-symbols-light_library-books-outline-rounded.svg";
import HistoryIcon from "../../assets/icons/material-symbols-light_collections-bookmark-outline.svg";
import MyPageIcon from "../../assets/icons/material-symbols-light_person-outline-rounded.svg";
import LogoutIcon from "../../assets/icons/Bottom.svg";

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
          <img src={Logo} alt="메뉴 닫기" />
        </TopButton>

        <MenuList>
          <MenuItem>
            <Link to="/home">
              <img src={HomeIcon} alt="홈" />
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/magazine">
              <img src={MagazineIcon} alt="매거진" />
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/history">
              <img src={HistoryIcon} alt="기록" />
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/mypage">
              <img src={MyPageIcon} alt="마이페이지" />
            </Link>
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
