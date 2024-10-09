import ServiceCard from "../ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function BestServices() {
  return (
    <div className="px-6 lg:px-32 xl:px-64 bg-slate-100 py-10">
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
    </div>
  );
}

export default BestServices;
