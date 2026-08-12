import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AppLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default AppLayout;

export const Wrapper = styled.main`
  width: 100%;
  max-width: 385px;
  min-height: 100vh;

  margin: 0 auto;

  background: #fff;
`;