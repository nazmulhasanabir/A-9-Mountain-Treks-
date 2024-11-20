import { CgProfile } from "react-icons/cg";
import img from "../assets/logos.jpg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const link = (
    <>
      <NavLink to="/">
        <li className="mx-6 font-semibold text-lg">Home </li>
      </NavLink>
      <Link to="/dashboard">
        <li className="mx-6 font-semibold text-lg">Dashbord</li>
      </Link>
      <Link to="/about">
        <li className="mx-6  font-semibold text-lg">About </li>
      </Link>
    </>
  );
  return (
    <div className="">
      <div className="navbar border-t-4 border-b-4 border-blue-800  px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img src={img} className="w-16 h-16 rounded-full " alt="" />
            <h2 className="text-2xl font-bold">Mountain Sign</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <CgProfile className="w-9 h-9 mx-2" />
          <Link
            to="/auth/login"
            className="border-2 border-white p-3 rounded-2xl bg-sky-200 text-black"
          >
            Log-in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
