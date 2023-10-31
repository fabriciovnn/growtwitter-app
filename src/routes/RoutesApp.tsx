import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Home from "../pages/Home";
import DefaultLayout from "../config/layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <DefaultLayout children={<Home />} />,
  },
  {
    path: "/explore",
    element: <DefaultLayout children={<Explore />} />,
  },
  {
    path: "/profile",
    element: <DefaultLayout children={<Profile />} />,
  },
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
