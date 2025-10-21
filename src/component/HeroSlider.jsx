import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
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
          className="w-full h-[400px] object-cover"
          src="https://i.ibb.co.com/bRrJmwJL/Lucid-Origin-Young-developer-with-short-dark-hair-and-brown-sk-1.jpg"
          alt="Web Development"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-cover"
          src="https://i.ibb.co.com/FkwndYJb/Lucid-Origin-Traditional-Bangladeshi-dishes-on-a-wooden-table-0.jpg"
          alt="Cooking"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[400px] object-cover"
          src="https://i.ibb.co.com/0RKRn7kb/Lucid-Origin-Photographer-with-a-warm-and-gentle-smile-having-0.jpg"
          alt="Photography"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
