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
      <div className="grid lg:grid-cols-3 gap-10 justify-center">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
