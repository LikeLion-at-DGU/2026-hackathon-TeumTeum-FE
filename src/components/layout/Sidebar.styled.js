import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.4);
  z-index: 10;

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  transition: opacity 0.3s ease;
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  width: 82px;
  height: 100vh;

  background: #fff;
  z-index: 11;

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopButton = styled.div`
  border: 0;
  padding: 24px 0 44px;
  background: transparent;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const MenuItem = styled.li`
  font-size: 18px;
  font-weight: 600;
`;

export const BottomButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;

  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

