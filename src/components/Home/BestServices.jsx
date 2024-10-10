import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "../ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function BestServices() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure animation runs only once when scrolled into view
    threshold: 0.2, // Adjusts when the animation is triggered (20% in view)
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="px-6 lg:px-32 xl:px-64 bg-slate-100 py-10"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
        Best Services
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            // for mobile devices
            slidesPerView: 1,
          },
          640: {
            // for small tablets
            slidesPerView: 2,
          },
          1024: {
            // for large tablets and small laptops
            slidesPerView: 3,
          },
          1280: {
            // for desktops
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <ServiceCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default BestServices;
