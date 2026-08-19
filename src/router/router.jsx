import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Home from "../pages/Home/Home";
import Magazine from "../pages/Magazine/Magazine";
import History from "../pages/History/History";
import MyPage from "../pages/MyPage/MyPage";
import Onboarding from "../pages/Onboarding/Onboarding";
import MagazineDetail from "../pages/Magazine/MagazineDetail";
import Splash from "../pages/Splash/Splash";
import Course from "../pages/Course/Course";
import CourseComplete from "../pages/Course/Complete/CourseComplete";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/onboarding",
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
      {
        path: "/magazine/:magazineId",
        element: <MagazineDetail />,
      },
      {
        path: "/course/:courseId",
        element: <Course />,
      },
      {
        path: "/course/coursecomplete",
        element: <CourseComplete />
      },
    ],
  },
]);