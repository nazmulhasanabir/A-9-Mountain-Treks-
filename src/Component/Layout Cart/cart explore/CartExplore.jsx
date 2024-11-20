import { Link, useLoaderData, useParams } from "react-router-dom";

const CartExplore = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const CartId = parseInt(id);

  const cart = data.find((detail) => detail.id === CartId);

  const { image, adventureTitle,shortDescription,adventureCost,location,duration,adventureLevel,ecoFriendlyFeatures } = cart;
  return (
    <div>
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
        <img src={image} alt="" />
      <h1 className="text-5xl font-bold">{adventureTitle}</h1>
      <p className="py-6">{shortDescription}
      </p>
     <Link to={"/"}><button className="btn btn-primary">Back To Carts</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CartExplore;
