import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CartExplore from "../Layout Cart/cart explore/CartExplore";
import MainLayout from "../Main layout/MainLayout";
import Auth from "../Layout Auth/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../About/About";
import ResetPass from "./ResetPass";
import UpdateProfile from "../Pages/UpdateProfile";
import Error from "./404/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
      },
      {
        path: "update",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CartExplore></CartExplore>
          </PrivateRoute>
        ),
        loader: () => fetch("../Carts.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "register",
        element: <Register></Register>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
        ],
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "reset",
        element: <ResetPass></ResetPass>,
      },
    ],
  },
  {
    path: "about",
    element: <About></About>,
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default Router;
