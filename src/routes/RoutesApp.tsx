import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/explore',
    element: <Explore />
  },
  {
    path: '/profile',
    element: <Profile />
  },
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;