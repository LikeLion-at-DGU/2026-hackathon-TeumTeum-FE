import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Magazine from "../pages/Magazine/Magazine";
import Record from "../pages/History/History";
import MyPage from "../pages/MyPage/MyPage";
import Onboarding from "../pages/Onboarding/Onboarding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/magazine",
    element: <Magazine />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);