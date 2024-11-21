import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useContext, useRef} from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ResetPass = () => {
    const navigat = useNavigate()
    // const {user , setUser}= useContext(AuthContext)
    const emailRef = useRef()
    const auth = getAuth(app);
    const handleReset=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        if(!email){
            toast.error("Please provide a valid email address")
          }else{{
            sendPasswordResetEmail(auth,email)
            .then(()=>{
              toast.success("check your email")
              navigat("mail")

            })
          }}
      
    }
 
  return (
 <div className="h-screen">
       <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
        <h2 className="text-xl text-center ">Reset Your Password</h2>
    <form onSubmit={handleReset} className="card-body">
      <div className="form-control">
        <label  className="label">
          <span className="label-text">Email</span>
        </label>
        <input ref={emailRef} name="email" type="email" placeholder="email" className="input input-bordered" required />
      </div>
     
      <div className="form-control mt-6">
        <button  className="btn btn-primary">Reset</button>
      </div>
    </form>
  </div>
 </div>
  );
};

export default ResetPass;
