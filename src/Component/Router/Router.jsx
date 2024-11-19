import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>
    },
    {
        path:"/signin",
        element:<h2>Login</h2>
    },
    {
        path:"/signup",
        element:<h2>Sign up</h2>
    },
    {
        path:"*",
        element:<h1>404 ! Error</h1> 
    }
])

export default Router;