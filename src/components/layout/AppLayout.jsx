import { Outlet } from "react-router-dom";
import { Wrapper } from "./AppLayout.style";
import styled from "styled-components";

const AppLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Sidebar />
    </Wrapper>
  );
};

export default AppLayout;

export const Wrapper = styled.main`
  width: 100%;
  max-width: 375px;
  min-height: 100vh;

  margin: 0 auto;

  background: #fff;
`;