import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import GlobalLoader from "../Pages/GlobalLoader";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Empower Your Skills",
    subtitle: "Learn, share, and grow with experts from your community.",
    img: "https://i.ibb.co.com/LXgN5qM3/Lucid-Origin-A-young-man-with-a-gentle-smile-and-medium-brown-3.jpg",
  },
  {
    id: 2,
    title: "Transform Your Passion",
    subtitle: "Turn your curiosity into confidence with practical learning.",
    img: "https://i.ibb.co.com/bRrJmwJL/Lucid-Origin-Young-developer-with-short-dark-hair-and-brown-sk-1.jpg",
  },
  {
    id: 3,
    title: "Taste the Culture",
    subtitle: "Discover flavors, traditions, and creativity that inspire.",
    img: "https://i.ibb.co.com/FkwndYJb/Lucid-Origin-Traditional-Bangladeshi-dishes-on-a-wooden-table-0.jpg",
  },
  {
    id: 4,
    title: "Capture the Moment",
    subtitle: "Frame your world beautifully — learn from visual storytellers.",
    img: "https://i.ibb.co.com/0RKRn7kb/Lucid-Origin-Photographer-with-a-warm-and-gentle-smile-having-0.jpg",
  },
];

const HeroSlider = () => {
  const { loading } = useContext(AuthContext);
  if (loading) return <GlobalLoader />;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
    <Swiper
  modules={[Autoplay, Pagination, EffectFade]}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  effect="fade"
  loop={true}
  className="h-[65vh]"
>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75 transition-all duration-700 hover:scale-105"
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-linear-to-t
               from-black/70 via-black/40 to-black/10"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300 
                             text-4xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 rounded-full 
                             bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 
                             text-white font-semibold shadow-md hover:shadow-lg 
                             transition-all tracking-wide"
                >
                  Explore Now
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
