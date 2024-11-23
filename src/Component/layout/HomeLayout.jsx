import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../About/Footer";
const HomeLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>

      <div className="w-11/12 mx-auto">
        <header className="p-5"></header>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
