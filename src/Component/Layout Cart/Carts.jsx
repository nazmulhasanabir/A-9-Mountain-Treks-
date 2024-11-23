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
    <div className="bg-gray-200 rounded-xl">
      <div className="grid lg:grid-cols-3 gap-10 w-11/12 mx-auto justify-center items-center py-5   ">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
