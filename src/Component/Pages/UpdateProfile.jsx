import { useContext, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const UpdateProfile = () => {
  const { UpdateUserProfile, setUser,} =
    useContext(AuthContext);
 
  const [Error, setError] = useState("");
  
  //   const [succes , setSuccess] = useState(false)
  const navigate = useNavigate();
  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo);
    try {
      await UpdateUserProfile({displayName: name , photoURL: photo})
      console.log("succes");
      setUser(name,photo)
      navigate("/")
    } catch (error) {
        console.log("failed", error);
        setError(error.message)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center    ">
      <div className="card  w-full max-w-lg shrink-0 shadow-2xl p-10  bg-[url('https://i.ibb.co.com/G5Jgdfn/image.png')] bg-cover text-white" >
        <h2 className="text-3xl font-bold text-black rounded-3xl text-center">
          Update Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl font-bold text-black">Name</span>
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
              <span className="label-text text-2xl font-bold text-black">Photo url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo Url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-gray-700 text-white text-lg">
              Update Your Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
