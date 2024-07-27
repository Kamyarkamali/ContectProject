import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { slider } from "@/data/Localdata";

function Slider() {
  return (
    <div className="mt-[1rem] max-w-[340px] mx-auto">
      <Swiper
        autoplay={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slider.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
