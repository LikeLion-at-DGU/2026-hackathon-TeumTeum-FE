import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Home from "../pages/Home/Home";
import Magazine from "../pages/Magazine/Magazine";
import History from "../pages/History/History";
import MyPage from "../pages/MyPage/MyPage";
import Onboarding from "../pages/Onboarding/Onboarding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);