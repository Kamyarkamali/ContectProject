import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="mt-3">
      <Swiper
        loop={true}
        autoplay={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center relative">
            <img src="/images/background.png" />
            <div className="absolute top-6">
              <img src="/images/car.png" className="object-cover" />
              <div className="flex justify-between items-center">
                <span className="text-white">بیمه خودرو</span>
                <span className="bg-red-600 flex justify-center text-sm p-1 w-[50px] text-white font-bold rounded-2xl">
                  20%
                </span>
              </div>
              <p className="absolute text-[13px] mt-5 text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center relative">
            <img src="/images/background.png" />
            <div className="absolute top-6">
              <img src="/images/car.png" className="object-cover" />
              <div className="flex justify-between items-center">
                <span className="text-white">بیمه خودرو</span>
                <span className="bg-red-600 flex justify-center text-sm p-1 w-[50px] text-white font-bold rounded-2xl">
                  20%
                </span>
              </div>
              <p className="absolute text-[13px] mt-5 text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center relative">
            <img src="/images/background.png" />
            <div className="absolute top-6">
              <img src="/images/car.png" className="object-cover" />
              <div className="flex justify-between items-center">
                <span className="text-white">بیمه خودرو</span>
                <span className="bg-red-600 flex justify-center text-sm p-1 w-[50px] text-white font-bold rounded-2xl">
                  20%
                </span>
              </div>
              <p className="absolute text-[13px] mt-5 text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-3 items-center cursor-pointer mt-3 justify-center">
        <p className="text-white font-bold">مشاهده همه</p>
        <img src="/icon/left.png" />
      </div>
    </div>
  );
}
