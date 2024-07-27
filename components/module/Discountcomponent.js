import React from "react";

import SliderDiscount from "@/components/module/SliderDiscount";

function Discountcomponent() {
  return (
    <div className="bg-[#576C63] max-w-[490px] mx-auto mt-7 h-[600px] rounded-lg">
      <div className="flex items-center justify-center gap-3">
        <img className="mt-9" src="/images/iconleft.png" />
        <span className="mt-9 text-white text-xl font-bold">
          نیازت همراه با تخفیف
        </span>
        <img className="mt-9" src="/images/iconright.png" />
      </div>

      <div className="flex justify-center">
        <span className="text-md text-[#ffff]">
          لذت رفع نیاز با قیمت شگفت انگیز
        </span>
      </div>

      <div>
        <SliderDiscount />
      </div>
    </div>
  );
}

export default Discountcomponent;