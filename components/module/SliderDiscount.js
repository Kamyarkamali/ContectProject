import React, { useState } from "react";

import TimerComponent from "@/components/module/TimerComponent";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

export default function App() {
  const [progressNumber, setProgressNumber] = useState(55);

  return (
    <div className="mt-3">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        autoplay={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center relative">
            <img src="/images/framerbg.jpg" className="rounded-lg h-[320px]" />
            <div className="absolute top-6">
              <Link href={"/discount"}>
                <img src="/images/car.png" className="object-cover w-[200px]" />
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-white mr-3">بیمه خودرو</span>
                <span className="bg-red-600 ml-3 mt-1 flex justify-center text-sm p-1 w-[50px] text-white font-bold rounded-2xl">
                  20%
                </span>
              </div>
              <p className="absolute text-[11px]  mt-5 text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </p>

              <div className="absolute top-[15.6rem]">
                <TimerComponent />
              </div>

              <progress
                className="absolute top-[17.5rem]"
                value={progressNumber}
                max={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center relative">
            <img src="/images/framerbg.jpg" className="rounded-lg h-[320px]" />
            <div className="absolute top-6">
              <Link href={"/discount"}>
                <img src="/images/car.png" className="object-cover w-[200px]" />
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-white mr-3">بیمه خودرو</span>
                <span className="bg-red-600 ml-3 mt-1 flex justify-center text-sm p-1 w-[50px] text-white font-bold rounded-2xl">
                  20%
                </span>
              </div>
              <p className="absolute text-[11px]  mt-5 text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </p>

              <div className="absolute top-[15.6rem]">
                <TimerComponent />
              </div>

              <progress
                className="absolute top-[17.5rem]"
                value={progressNumber}
                max={100}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center relative">
            <img src="/images/framerbg.jpg" className="rounded-lg h-[320px]" />
            <div className="absolute top-6">
              <Link href={"/discount"}>
                <img src="/images/car.png" className="object-cover w-[200px]" />
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-white mr-3">بیمه خودرو</span>
                <span className="bg-red-600 ml-3 mt-1 flex justify-center text-sm p-1 w-[50px] text-white font-bold rounded-2xl">
                  20%
                </span>
              </div>
              <p className="absolute text-[11px] mt-5 text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </p>

              <div className="absolute top-[15.6rem]">
                <TimerComponent />
              </div>

              <progress
                className="absolute top-[17.5rem]"
                value={progressNumber}
                max={100}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex gap-3 items-center cursor-pointer mt-3 justify-center">
        <p className="text-white font-bold">مشاهده همه</p>
        <img src="/images/left.png" />
      </div>
    </div>
  );
}
