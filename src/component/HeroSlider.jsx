import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import GlobalLoader from "../Pages/GlobalLoader";

const HeroSlider = () => {
  const {loading} = useContext(AuthContext)
  if(loading)return<GlobalLoader></GlobalLoader>
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-xl shadow-md"
    >
      <SwiperSlide>
        <img
          className="w-full h-[500px] object-cover"
          src="https://i.ibb.co.com/LXgN5qM3/Lucid-Origin-A-young-man-with-a-gentle-smile-and-medium-brown-3.jpg"
          alt="Web Development"
        />
      </SwiperSlide>
            <SwiperSlide>
        <img
          className="w-full h-[500px] object-cover"
          src="https://i.ibb.co.com/bRrJmwJL/Lucid-Origin-Young-developer-with-short-dark-hair-and-brown-sk-1.jpg"
          alt="Web Development"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px] object-cover"
          src="https://i.ibb.co.com/FkwndYJb/Lucid-Origin-Traditional-Bangladeshi-dishes-on-a-wooden-table-0.jpg"
          alt="Cooking"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px] object-cover"
          src="https://i.ibb.co.com/0RKRn7kb/Lucid-Origin-Photographer-with-a-warm-and-gentle-smile-having-0.jpg"
          alt="Photography"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
