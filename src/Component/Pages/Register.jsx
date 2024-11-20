import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10  bg-slate-200">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-700 text-white text-lg">
              Register
            </button>
            <p className="mt-2">
              Hey there! Got an account?{" "}
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-purple-900 font-semibold text-base">
                  Login
                </span>{" "}
              </Link>{" "}
              in to continue!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
