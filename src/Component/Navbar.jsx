import { CgProfile } from "react-icons/cg";
import img from "../assets/logos.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const link = (
    <>
      <NavLink to="/">
        <li className="mx-6 font-semibold text-lg">Home </li>
      </NavLink>
      <Link to="/dashboard">
        <li className="mx-6 font-normal text-lg">Dashbord</li>
      </Link>
      <Link to="/about">
        <li className="mx-6  font-semibold text-lg">About </li>
      </Link>
    </>
  );
  return (
    <div className="bg-cyan-700 text-white">
      <div className="navbar border-t-4 border-b-4 border-white  px-5">
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
             <li>{link}</li>
            </ul>
          </div>
          <div className=" hidden sm:hidden lg:flex items-center gap-3">
            <img src={img} className="w-16 h-16 rounded-full " alt="" />
            <h2 className="text-2xl font-bold ">Mountain Sign</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="relative group ">
                    <img 
                      className="w-8 h-8 sm:w-8 sm:h-8  lg:w-10 lg:h-10  rounded-full"
                      src={user.photoURL} 
                      alt=""
                    />
                    <p className="absolute top-8  right-10 bg-blue-200 text-black px-2 py-1 rounded shadow-lg opacity-0 hover:opacity-100 ">
                      {user.displayName}
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body text-black">
                  <img
                      className="w-8 mx-auto h-8 sm:w-8 sm:h-8  lg:w-10 lg:h-10  rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <p className="text-center">{user.displayName}</p>
                    <div className="card-actions">
                    {user && user?.email ? (
           <div className="flex items-center justify-center gap-5 w-full mx-auto">
           
            <button className="border-2 btn-primary border-white p-1 rounded-2xl bg-sky-200 text-black">Update Profile</button>
            <button
              onClick={logOut}
              className="border-2 btn-primary border-white p-1 rounded-2xl bg-sky-200 text-black"
            >
              Log-out
            </button>
           </div>
          ) : (
            <Link
              to="/auth/login"
              className="border-2 btn-primary border-white p-3 rounded-2xl bg-sky-200 text-black"
            >
              Log-in
            </Link>
          )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="dropdown dropdown-end">
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div> */}
            </div>
          ) : (
            <CgProfile className="w-9 h-9 mx-2 " />
          )}

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
