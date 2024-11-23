import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const [emails , setEmails]= useState("")
  const provider = new GoogleAuthProvider();

  const { userLogin, user, setUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
 
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        toast.error("The account is not correct ");
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {});
  };

  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <div className="card bg-[url('https://i.ibb.co.com/wBq15Dg/system-bars-hero.png')] bg-cover  w-full max-w-sm lg:max-w-lg shrink-0 shadow-2xl p-5 lg:p-10  bg-slate-200">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e)=>setEmails(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href={`/reset?email=${encodeURIComponent(emails)}`} className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-700 text-white text-lg">
              Login
            </button>
            <div className="mt-5">
              <img
                onClick={handleGoogle}
                className="rounded-full cursor-pointer h-10 w-10 mx-auto"
                src={"https://i.ibb.co.com/vYyWjVq/images.png"}
                alt=""
              />
              <p className="mt-2 text-center ">
                New here? Create an account and join us today!
                <Link to={"/auth/register"}>
                  <button className="text-purple-900 font-semibold text-base">
                    Register
                  </button>
                </Link>
              </p>
            </div>
            {user && <a href="/"></a>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
