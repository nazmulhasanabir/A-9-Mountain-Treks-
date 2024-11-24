import { useEffect, useState } from "react";
import one from "../../assets/pictures/Everest Base Camp Trek.jpg"
import two from "../../assets/pictures/Annapurna Circuit Trek.jpg"
import three from "../../assets/pictures/Mount Kilimanjaro Trek.jpg"
import four from "../../assets/pictures/Torres del Paine W Trek.jpg"
import five from "../../assets/pictures/The Dolomites Alta Via .jpg"
import six from "../../assets/pictures/Langtang Valley Trek.jpg"
import seven from "../../assets/pictures/Toubkal Trek in Morocco.jpg"
import eight from "../../assets/pictures/The Haute Route in Alps.jpg"
import nine from "../../assets/pictures/K2 Base Camp Trek.jpg"
import ten from "../../assets/pictures/Inca Trail to Machu Picchu.jpg"
import Cart from "./Cart";
import Marquee from "react-fast-marquee";

const Carts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("./Carts.json")
      .then((resp) => resp.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div>
      <div className="h-[340px] w-full bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] my-24">
        <Marquee>
         <div>
         <img  className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={one} alt="" />
         <p className="text-xl text-center font-bold text-black">Nepal</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={two} alt="" />
         <p className="text-xl text-center font-bold text-black">Nepal</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px] rounded-xl " src={three} alt="" />
         <p className="text-xl text-center font-bold text-black">Tanzania</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px] rounded-xl" src={four} alt="" />
         <p className="text-xl text-center font-bold text-black">Peru</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={five} alt="" />
         <p className="text-xl text-center font-bold text-black">Chile</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px] rounded-xl " src={six} alt="" />
         <p className="text-xl text-center font-bold text-black">Switzerland</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={seven} alt="" />
         <p className="text-xl text-center font-bold text-black">Morocco</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={eight} alt="" />
         <p className="text-xl text-center font-bold text-black">Italy</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={nine} alt="" />
         <p className="text-xl text-center font-bold text-black">Nepal</p>
         </div>

         <div >
         <img className="h-[280px] mt-5 mx-2 w-[280px]  rounded-xl" src={ten} alt="" />
         <p className="text-xl text-center font-bold text-black">Pakistan</p>
         </div>
        </Marquee>
      </div>
      <div className="bg-gray-200 rounded-xl">
        <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-10 w-11/12 mx-auto justify-center items-center py-5   ">
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carts;
