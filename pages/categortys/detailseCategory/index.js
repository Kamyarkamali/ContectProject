import { sp } from "@/helpers/replaceNumber";
import React from "react";

function CategoryDetailse() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        <img src="/images/banner4.jpg" className="w-[400px] rounded-lg" />
      </div>

      <div className="flex items-center justify-center gap-5 w-full mt-7">
        <div>
          <p className="text-[11px] font-bold">
            214 خدمات دهنده این خدمات را انجام میدهد
          </p>
        </div>

        <div>
          <button className="p-3 text-[13px] font-bold rounded-full shadow-md">
            بیشترین امتیاز
          </button>
        </div>

        <div>
          <button className="shadow-md w-[40px] rounded-full flex justify-center p-1">
            <img src="/icon/location.png" className="w-[20px]" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center relative">
        <div className="w-[360px] h-[200px] mt-8 shadow-md rounded-lg">
          <div className="flex items-center gap-2 mr-2">
            <img src="/images/pic.png" />
            <div>
              <h2 className="font-bold">دیزاین استور</h2>
              <div className="flex items-center gap-2 mt-2">
                <img src="/icon/location.png" className="w-[15px]" />
                <p className="text-[12px] text-gray-500">تهران یوسف آباد</p>
              </div>
              <span className="text-[12px] font-bold text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک
              </span>
            </div>
          </div>

          <div className="absolute top-[11rem] flex justify-between w-full">
            <p className="font-bold mr-3">{sp(2000000)}میلون ریال</p>

            <button className="text-[13px] border p-2 ml-3 bg-[#9AD07C] text-white rounded-lg">
              ارسال درخواست
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center relative mb-14">
          <div className="w-[360px] h-[200px] mt-8 shadow-md rounded-lg">
            <div className="flex items-center gap-2 mr-2">
              <img src="/images/pic.png" />
              <div>
                <div>
                  <h2 className="font-bold">دیزاین استور</h2>

                  <div className="flex items-center gap-2 mt-2">
                    <img src="/icon/location.png" className="w-[15px]" />
                    <p className="text-[12px] text-gray-500">تهران یوسف آباد</p>
                  </div>
                </div>
                <span className="text-[12px] font-bold text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک
                </span>
              </div>
            </div>

            <div className="absolute top-[11rem] flex justify-between w-full">
              <p className="font-bold mr-3">{sp(2000000)}میلون ریال</p>

              <button className="text-[13px] border p-2 ml-3 bg-[#9AD07C] text-white rounded-lg">
                ارسال درخواست
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-9"></div>
    </div>
  );
}

export default CategoryDetailse;
