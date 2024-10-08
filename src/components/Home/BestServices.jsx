import ServiceCard from "../ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function BestServices() {
  return (
    <div className="px-64 bg-slate-100 py-10">
      <h2 className="text-center text-4xl font-bold">Best Services</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
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
