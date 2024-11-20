import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {userLogin,user, setUser} = useContext(AuthContext) 
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then((result)=>{
      const user = result.user;
      setUser(user)
      navigate("/")
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error)=>{
      toast.error("The account has been not registered")
    })
    
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10  bg-slate-200">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-700 text-white text-lg">
              Login
            </button>
            {
              user && <a href="/"></a>
            }
            <p className="mt-2">
              New here? Create an account and join us today!
              <Link to={"/auth/register"}>
                <button className="text-purple-900 font-semibold text-base">
                  Register
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
