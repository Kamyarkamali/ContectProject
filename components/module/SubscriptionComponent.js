import { sp } from "@/helpers/replaceNumber";
import React, { useState } from "react";
import TimerComponent from "@/components/module/TimerComponent";
import { useRouter } from "next/router";

function SubscriptionComponent() {
  const [progressNumber, setProgressNumber] = useState(55);
  const router = useRouter();
  const { pathname } = router;

  // تعیین کلاس نوار پیشرفت بر اساس مسیر جاری
  const progressBarClass = pathname === "/Subscription" ? "progress-blue" : "";

  return (
    <div className="flex flex-col items-center">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-900 w-[350px] h-fit p-3 mt-8 rounded-lg"
        >
          <div className="mt-5 mr-4 flex items-center justify-between">
            <button className="bg-gray-600 p-1 w-[70px] text-[#6973CE] rounded-3xl">
              {index === 0
                ? "پایه"
                : index === 1
                ? "پایه"
                : index === 2
                ? "حرفه ای"
                : "تجاری"}
            </button>
            <div className="ml-4">
              <p className="text-white">{sp(190000)} تومان / در ماه</p>
            </div>
          </div>
          <p className="text-gray-300 text-[12px] w-[330px] mr-4 mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>
          <div className="mt-6">
            <TimerComponent />
            <progress
              className={`progress ${progressBarClass}`}
              value={progressNumber}
              max={100}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#AFC0FF] p-1 text-white w-[330px] rounded-lg">
              خرید اشتراک
            </button>
          </div>
        </div>
      ))}
      <div className="mb-[6rem]"></div>
    </div>
  );
}

export default SubscriptionComponent;
