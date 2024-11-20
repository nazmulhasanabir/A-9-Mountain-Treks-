import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
const HomeLayout = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <header className="p-5">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </header>
       
      </div>
    </div>
  );
};

export default HomeLayout;
