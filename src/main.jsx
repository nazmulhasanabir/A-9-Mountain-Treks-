import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Component/Router/Router";
import AuthProvider from "./Component/Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    <ToastContainer></ToastContainer>
   
    </AuthProvider>
  </StrictMode>
);
