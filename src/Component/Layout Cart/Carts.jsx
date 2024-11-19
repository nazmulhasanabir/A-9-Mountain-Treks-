import { useEffect, useState } from "react";
import Cart from "./Cart";

const Carts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("./Carts.json")
      .then((resp) => resp.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div>
      <h2 className="text-6xl font-semibold p-16 text-center gap-y-10 text-sky-700 ">
        Seeing the World <br />
        Through the Eyes of My Lens
      </h2>
      <div className="grid lg:grid-cols-3 gap-10">
        {
            carts.map(cart=> <Cart key={cart.id} cart={cart}></Cart> )
        }
      </div>
    </div>
  );
};

export default Carts;
