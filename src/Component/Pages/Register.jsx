import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const {createNewUser, setUser} = useContext(AuthContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get("name")
    const email = form.get("email")
    const photo = form.get("photo")
    const password = form.get("password")
    console.log(name,email,photo,password);

    createNewUser(email,password)
    .then(result=>{
      const user = result.user
      setUser(user)
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10  bg-slate-200">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo Url"
              className="input input-bordered"
              required
            />
          </div>
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
