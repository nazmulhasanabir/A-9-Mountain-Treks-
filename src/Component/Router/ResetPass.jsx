import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useRef } from "react";

const ResetPass = () => {
  const emailRef = useRef();
  const auth = getAuth(app);

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (email) {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("cheack your mail");
      });
    } else toast.error("provide a valid email");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-xl text-center mt-4">Reset Your Password</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button  onClick={handleReset} type="submit" className="btn btn-primary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
