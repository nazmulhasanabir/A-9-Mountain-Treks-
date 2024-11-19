const Cart = ({ cart }) => {
  const { image,  adventureTitle,ecoFriendlyFeatures } = cart;
  return (
    <div className="card card-compact bg-sky-300 w-96 shadow-xl">
      <figure>
        <img className="w-[600px] h-[280px]" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title  text-2xl ">{adventureTitle}</h2>
       {
        ecoFriendlyFeatures.map((li,index)=> <li className=" text-lg" key={index}>{li}</li>)
       }
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white w-full">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
