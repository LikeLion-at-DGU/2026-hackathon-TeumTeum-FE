import { Link } from "react-router-dom";

import HomeIcon from "../../assets/icons/home.svg";
import MagazineIcon from "../../assets/icons/magazine.svg";
import HistoryIcon from "../../assets/icons/history.svg";
import MyPageIcon from "../../assets/icons/mypage.svg";
import LogoutIcon from "../../assets/icons/logout.svg";

import {
  SidebarContainer,
  TopButton,
  MenuList,
  MenuItem,
  BottomButton,
} from "./Sidebar.styled";

const Sidebar = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <SidebarContainer>
      <TopButton>
        <img src={MenuIcon} alt="메뉴 닫기" />
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
  );
};

export default Sidebar;