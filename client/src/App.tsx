import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Appbar from "./components/Appbar";
import StickyFooter from "./components/Footer";
import Landing from "./pages/Landing";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ShowCourses from "./pages/Showcourses";
import { useRecoilValue } from "recoil";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";

// @variants /

const App: React.FC = () => {
  const Layout = () => {
    return (
      <div>
        <Appbar />
        <div className="flex flex-column min-h-screen ml-[160px]  xl:ml-[300px] ">
          <Outlet />
        </div>
        <StickyFooter />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/courses",
          element: <ShowCourses />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/courses/mycourses",
          element: <MyCourses />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
