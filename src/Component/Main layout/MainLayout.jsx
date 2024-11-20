import cover from "../../assets/cover.jpeg";
import cover2 from "../../assets/cover2.jpeg";
import cover3 from "../../assets/cover3.jpeg";
import Carts from "../Layout Cart/Carts"
const MainLayout = () => {
  return (
    <div>
      <div className="carousel w-full mx-auto mt-6" >
        <div id="slide1" className="carousel-item relative w-full">
          <img src={cover} className="w-[900px] mx-auto rounded-lg" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full mx-auto">
          <img src={cover2} className="w-[900px] mx-auto rounded-lg" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full mx-auto">
          <img src={cover3} className="w-[900px] mx-auto rounded-lg" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-6xl font-semibold p-16 text-center gap-y-10 text-sky-700 ">
        Seeing the World <br />
        Through the Eyes of My Lens
      </h2>
      <Carts></Carts>
    </div>
  );
};

export default MainLayout;
