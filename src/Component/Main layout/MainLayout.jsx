import cover from "../../assets/cover.jpeg";
import cover2 from "../../assets/cover2.jpeg";
import cover3 from "../../assets/cover3.jpeg";
import one from "../../assets/pictures/Annapurna Circuit Trek.jpg";

import Carts from "../Layout Cart/Carts";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainLayout = () => {
  return (
    <div className="">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://swiperjs.com/demos/images/nature-1.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <img className="w-full h-300px lg:h-[600px]" src={cover} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-300px lg:h-[600px]" src={cover3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-300px lg:h-[600px]" src={cover2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-300px lg:h-[600px]" src={one} />
          </SwiperSlide>
        
       
        </Swiper>
      </div>

      <div className="p-5">
        <Carts></Carts>
      </div>
    </div>
  );
};

// <div className="">
//   <div className="carousel w-full mx-auto mt-6   ">
//     <div id="slide1" className="carousel-item relative w-full">
//       <img src={cover} className="w-[900px] mx-auto rounded-lg" />
//       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//         <a href="#slide1" className="btn btn-circle">
//           ❮
//         </a>
//         <a href="#slide2" className="btn btn-circle">
//           ❯
//         </a>
//       </div>
//     </div>
//     <div id="slide2" className="carousel-item relative w-full mx-auto">
//       <img src={cover2} className="w-[900px] mx-auto rounded-lg" />
//       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//         <a href="#slide1" className="btn btn-circle">
//           ❮
//         </a>
//         <a href="#slide3" className="btn btn-circle">
//           ❯
//         </a>
//       </div>
//     </div>
//     <div id="slide3" className="carousel-item relative w-full mx-auto">
//       <img src={cover3} className="w-[900px] mx-auto rounded-lg" />
//       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//         <a href="#slide2" className="btn btn-circle">
//           ❮
//         </a>
//       </div>
//     </div>
//   </div>
//   <h2 className="text-3xl bg-purple-900 text-white rounded-3xl sm:text-3xl lg:text-6xl font-normal lg:font-semibold p-4 lg:p-8 mb-6 text-center gap-y-10 ">
//     Seeing the World <br />
//     Through the Eyes of My Lens
//   </h2>
//   <Carts></Carts>
// </div>

export default MainLayout;
