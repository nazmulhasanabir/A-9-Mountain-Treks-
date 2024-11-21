import { useContext, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/Firebase.config";


const Register = () => {
  const {createNewUser,setUser,UpdateUserProfile} = useContext(AuthContext)
  const auth = getAuth(app);
  const [Error, setError] = useState('')
  const provider = new GoogleAuthProvider();
  const [succes , setSuccess] = useState(false)
  const navigate = useNavigate();
  // const navigate = useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    const Email = e.target.email.value
    const Password = e.target.password.value
    const form = new FormData(e.target)
    const name = form.get("name")
    const email = form.get("email")
    const photo = form.get("photo")
    const password = form.get("password")
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if(Password.length < 6){
      setError("Password Should be 6 Characters and longers")
      return
    }
    
    if(!passwordRegex.test(Password)){
      setError("At Least one uppercase,one lowerCase,one number,one special character")
      return
    } 
    
    createNewUser(email,password)
    .then(result=>{
      const user = result.user
      setUser(user)
     setSuccess(true)
    
      UpdateUserProfile({displayName: name , photoURL:photo})
      .then(()=>{
        navigate("/")
        
      }).catch(err=>{
        console.log(err);
      })
    })
    .catch((error) => {
      // eslint-disable-next-line no-unused-vars
     
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.message;
        setError(errorCode,errorMessage)
        setSuccess(false)
      
    });
  }

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
    <div className="min-h-screen flex justify-center items-center">
    
      <div className="card  w-full max-w-lg shrink-0 shadow-2xl p-10  bg-slate-200">
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
            {
        Error&& <p className="text-red-500  text-base ">{Error}</p>
       }
          </div>
          <div className="form-control mt-6">
           
            <button className="btn bg-gray-700 text-white text-lg">Register</button>
           
            <div className="mt-5">
            <img
                onClick={handleGoogle}
                className="rounded-full cursor-pointer h-10 w-10 mx-auto"
                src={"https://i.ibb.co.com/vYyWjVq/images.png"}
                alt=""
              />
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
