import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Modal from "../../Modal";

const CartExplore = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const CartId = parseInt(id);
  const [ismodalOpen, setIsModalOpen] = useState(false)
  const cart = data.find((detail) => detail.id === CartId);
  const startHour = 10;
  const EndHour = 20;
 
  const {
    image,
    adventureTitle,
    shortDescription,
    adventureCost,
    location,
    duration,
    adventureLevel,
    ecoFriendlyFeatures,
    bookingAvailability,
  } = cart;
  // const currentHour = new Date().getHours();
  // const isWithinTime = currentHour >= startHour && currentHour < EndHour
  // if(!isWithinTime){
  //   console.log("not in time ");
  // }else{
  //   console.log("in time ");
  // }
  // const isBookingAndTime = {bookingAvailability}  
  const isWithinTime = ()=> {
    const currentHour = new Date().getHours();
    return currentHour >= startHour && currentHour < EndHour
  }

  const handlclicked = (e)=> {
    if(!isWithinTime()){
      e.preventDefault()
      console.log("not in time");
      setIsModalOpen(true)
    }
  }


  return (
    <div >
      <div className="card bg-base-100 w-full mt-7   shadow-2xl ">
        <figure className="px-10 pt-10 ">
          <img src={image} className="rounded-2xl  " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl lg:text-5xl bg-gray-200 p-2 rounded-md flex flex-col lg:flex-row ">
            {adventureTitle}

            <div className="badge bg-purple-600 text-white p-2 lg:p-5 text-base lg:text-xl">
              <FaFlag className="mx-1"></FaFlag>
              {location}
            </div>
          </h2>
          <div className="">
          <p className="text-xl font-semibold">
            Adventurel Level-{adventureLevel}
          </p>
          <p className="text-gray-700 text-lg">
      Duration: <span className="font-semibold">{duration} days</span>
    </p>
    <p className="text-xl mt-2 text-gray-800">
      <strong>About this Adventure:</strong> {shortDescription}
    </p>

    <p className="text-md mt-3 text">
      <strong>Eco-Friendly Features:</strong> {ecoFriendlyFeatures}
    </p>
          </div>

          <div className="card-actions flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-teal-800">
        Adventure Cost: <span>${adventureCost}/-</span>
      </p>
            {bookingAvailability ? (
              <a onClick={handlclicked} href="https://meet.google.com/gxs-sppf-bzx" target="_blank" className="p-4 font-medium rounded-2xl bg-teal-600 text-white ">
                Talk With Expert
              </a>
            ) : (
              <button className="p-1 font-medium rounded-2xl bg-orange-500 text-black">
                Not Available
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={ismodalOpen} onClose={() => setIsModalOpen(false)} message="If you want to talk to an expert, come at 10 am - 8pm. We will wait for you at this time!" /> 
    </div>
  );
};

export default CartExplore;
