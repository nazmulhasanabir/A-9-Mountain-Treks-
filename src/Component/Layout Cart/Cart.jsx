import { NavLink } from "react-router-dom";


const Cart = ({ cart }) => {
  const {
    // eslint-disable-next-line 
    image,
    // eslint-disable-next-line 
    id,
    // eslint-disable-next-line 
    adventureTitle,
    // eslint-disable-next-line 
    ecoFriendlyFeatures,
    
    // eslint-disable-next-line 
    bookingAvailability,
    // eslint-disable-next-line 
    duration
  } = cart;
  return (
    <div className="card card-compact   w-96 shadow-xl">
      <figure>
        <img className="w-[600px] h-[280px]" src={image} alt="" />
      </figure>
      <div className="card-body">
       <div className="flex  justify-between">
       <h2 className="card-title  text-2xl ">{adventureTitle}</h2>
       <h2 className="text-xl font-bold">({duration})</h2>
       </div>
        <div className="flex justify-between">
          <div>
            {ecoFriendlyFeatures.map((li, index) => (
              <li className=" text-lg" key={index}>
                {li}
              </li>
            ))}
          </div>
          <div>
            {bookingAvailability ? (
              <button className="p-1 font-medium rounded-2xl bg-teal-600 text-white ">
                Available
              </button>
            ) : (
              <button className="p-1 font-medium rounded-2xl bg-orange-500 text-black">
                Not Available
              </button>
            )}
          </div>
        </div>

        <div className="card-actions justify-end">
          <NavLink to={`category/${id}`} className="btn bg-[#667EEA]  text-white w-full">Explore</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
