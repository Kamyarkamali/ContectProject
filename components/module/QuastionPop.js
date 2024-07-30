import { useRouter } from "next/router";
import React from "react";

function QuastionPop({ onClose }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center py-7 dark:bg-slate-800 dark:text-white transition-all duration-300 ease-in">
      <div className="border-b-[7px] rounded-lg border-gray-700 w-[100px]"></div>

      <div className="flex justify-between w-full mr-5 py-5">
        <div className="flex items-center gap-2">
          <img src="/iconsettings/3.png" alt="FAQ Icon" />
          <p className="text-sm">پرسش های متداول</p>
        </div>
        <img
          src="/icon/Left 3.png"
          className="ml-5 cursor-pointer"
          onClick={handleBack}
          alt="Back Icon"
        />
      </div>

      <div className="flex items-center gap-2 justify-start w-full mr-5">
        <img src="/icon/color.png" className="rounded-md" alt="Color Icon" />
        <p className="text-sm">لورم ایپسوم:</p>
      </div>

      <div>
        <p className="text-center text-sm leading-7 w-[340px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . لورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد .
        </p>
      </div>

      <div className="flex items-center justify-start w-full mr-5 py-5">
        <img src="/icon/green.png" alt="Green Icon" />
        <p className="text-[13px] font-bold mb-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
        </p>
      </div>
      <div className="flex items-center justify-start w-full mr-5 ">
        <img src="/icon/green.png" alt="Green Icon" />
        <p className="text-[13px] font-bold mb-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
        </p>
      </div>
      <div className="flex justify-center py-9">
        <button
          onClick={onClose}
          className="bg-blue-400 w-[150px] p-2 text-white rounded-lg shadow-lg"
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default QuastionPop;
