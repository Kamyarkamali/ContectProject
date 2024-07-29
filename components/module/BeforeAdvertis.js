import React, { useState } from "react";

import AllAdvertising from "@/components/module/AllAdvertising";

import TimerComponent from "@/components/module/TimerComponent";
import Button from "../element/Button";

function BeforeAdvertisComponents() {
  const [progressNumber, setProgressNumber] = useState(100);

  return (
    <div className="flex flex-col items-center mb-[10rem]">
      <div>
        <AllAdvertising />
      </div>

      <div className="w-[330px] border-2 p-2 mt-3 h-[200px] shadow-lg rounded-lg">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-1 mr-4">
            <img src="/icon/box.png" className="mb-5" />
            <div>
              <h2 className="text-[15px] font-bold">طراحی لوگو</h2>
              <div className="flex items-center gap-2 mt-2">
                <img src="/icon/papaer.png" className="object-cover w-[13px]" />
                <p className="text-[12px] text-gray-500">وضعیت:</p>
                <p className="text-[12px]">پرداخت شده</p>
              </div>
            </div>
          </div>

          {/* <div>5</div> */}

          <div className="ml-4">
            <img src="/icon/notif.png" />
          </div>
        </div>
        <div className="border-b-[2px] p-2"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-3 mr-3">
            <img src="/icon/ckeckarrow.png" />
            <p className="text-[13px] text-gray-500">زمان گفتوگو:</p>
          </div>
          <div className="ml-3">
            <TimerComponent />
          </div>
        </div>
        <progress value={progressNumber} max={100} />
        <p className="text-center mt-4 text-red-500">در انتظار فروشنده</p>
      </div>

      <div className="w-[330px] border-2 p-2 mt-3 h-[200px] shadow-lg rounded-lg">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-1 mr-4">
            <img src="/icon/box.png" className="mb-5" />
            <div>
              <h2 className="text-[15px] font-bold">طراحی لوگو</h2>
              <div className="flex items-center gap-2 mt-2">
                <img src="/icon/papaer.png" className="object-cover w-[13px]" />
                <p className="text-[12px] text-gray-500">وضعیت:</p>
                <p className="text-[12px]">پرداخت شده</p>
              </div>
            </div>
          </div>

          {/* <div>5</div> */}

          <div className="ml-4">
            <img src="/icon/notif.png" />
          </div>
        </div>
        <div className="border-b-[2px] p-2"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-3 mr-3">
            <img src="/icon/ckeckarrow.png" />
            <p className="text-[13px] text-gray-500">زمان گفتوگو:</p>
          </div>
          <div className="ml-3">
            <TimerComponent />
          </div>
        </div>
        <progress value={progressNumber} max={100} />
        <p className="text-center mt-4 text-red-500">در انتظار فروشنده</p>
      </div>

      <div className="absolute top-[41rem] right-[1rem]">
        <Button />
      </div>
    </div>
  );
}

export default BeforeAdvertisComponents;
