// import { getAuth, sendPasswordResetEmail } from "firebase/auth";

// import app from "../Firebase/Firebase.config";
// import { toast } from "react-toastify";
// import { useContext, useRef } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const ResetPass = () => {
//   const [searchParams] = useSearchParams()
//   const email = searchParams.get("email")
//   const navigat = useNavigate();
//   const { user, userLogin, setUser } = useContext(AuthContext);
//   const emailRef = useRef();
//   const auth = getAuth(app);
//   const handleReset = (e) => {
//     e.preventDefault();
//     const email = emailRef.value;
//   };

//   return (
//     <div className="h-screen">
//       <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
//         <h2 className="text-xl text-center ">Reset Your Password</h2>
//         <form onSubmit={handleReset} className="card-body">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               ref={emailRef}
//               name="email"
//               value={email}
//               type="email"
//               placeholder="email"
//               className="input input-bordered"
//               required
//             />
//           </div>

//           <div className="form-control mt-6">
//             <button className="btn btn-primary">Reset</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPass;
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useContext, useRef } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
const ResetPass = () => {
  const [searchParams] = useSearchParams();
  const emailFromQuery = searchParams.get("email");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const emailRef = useRef();
  const auth = getAuth(app);
  const handleReset = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value || emailFromQuery;
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully!");
      navigate("/login"); // Redirect to login page after success
    } catch (error) {
      console.error("Error resetting password:", error.message);
      toast.error("Failed to send password reset email. Please try again.");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-xl text-center mb-4">Reset Your Password</h2>
        <form onSubmit={handleReset} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              name="email"
              defaultValue={emailFromQuery || ""}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPass;