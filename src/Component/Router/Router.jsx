import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CartExplore from "../Layout Cart/cart explore/CartExplore";
import MainLayout from "../Main layout/MainLayout";
import Auth from "../Layout Auth/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../About/About";

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
        path: "/category/:id",
        element: (<PrivateRoute>
            <CartExplore></CartExplore>
        </PrivateRoute>),
        loader: () => fetch("../Carts.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
{
    path:"about",
    element:<About></About>
},
  {
    path: "*",
    element: <h1>404 ! Error</h1>,
  },
]);

export default Router;
