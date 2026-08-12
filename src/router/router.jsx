import Home from "../pages/Home";
import Magazine from "../pages/Magazine";
import Record from "../pages/Record";
import MyPage from "../pages/MyPage";
import Onboarding from "../pages/Onboarding";

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
    path: "/record",
    element: <Record />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
]);