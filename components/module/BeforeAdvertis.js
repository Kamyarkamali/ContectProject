import React, { useState } from "react";

import AllAdvertising from "@/components/module/AllAdvertising";

import TimerComponent from "@/components/module/TimerComponent";
import Button from "../element/Button";
import OpinionPop from "./OpinionPop";

function BeforeAdvertisComponents() {
  const [progressNumber, setProgressNumber] = useState(100);

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div>
        <AllAdvertising />
      </div>

      <div className="flex items-center justify-center w-full">
        <p className="text-[14px] text-gray-500 mt-3">
          شنبه 12 ام فروردین 1403
        </p>
        <img src="/icon/line.png" className="w-[220px]" />
      </div>

      <div className="w-[360px] border-2 p-3 mt-3 h-fit shadow-lg rounded-lg relative">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-1">
            <img src="/images/icon.png" />
            <div>
              <h2 className="text-[15px] font-bold">طراحی لوگو</h2>
              <div className="flex items-center gap-2 mt-2">
                <img src="/icon/papaer.png" className="object-cover w-[13px]" />
                <p className="text-[12px] text-gray-500">وضعیت:</p>
                <p className="text-[12px] text-gray-500">تکمیل شد</p>
              </div>
            </div>
          </div>

          {/* <div>5</div> */}

          <div className="ml-2">
            <img src="/icon/notif.png" />
          </div>
        </div>
        <div className="border-b-[2px] p-2"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-3 mr-3">
            <img src="/icon/ckeckarrow.png" />
            <p className="text-[13px] w-[100px]  text-gray-500">زمان گفتوگو:</p>
          </div>
          <div className="ml-3">
            <TimerComponent />
          </div>
        </div>
        <progress value={progressNumber} max={100} />
        <p
          onClick={() => setOpen(true)}
          className="text-center mt-4 text-gray-500 text-[13px] cursor-pointer"
        >
          ثبت نظر
        </p>
      </div>
      <div className="w-[360px] border-2 p-3 mt-3 h-fit shadow-lg rounded-lg">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-1">
            <img src="/images/icon.png" />
            <div>
              <h2 className="text-[15px] font-bold">طراحی لوگو</h2>
              <div className="flex items-center gap-2 mt-2">
                <img src="/icon/papaer.png" className="object-cover w-[13px]" />
                <p className="text-[12px] text-gray-500">وضعیت:</p>
                <p className="text-[12px] text-gray-500">تکمیل شد</p>
              </div>
            </div>
          </div>

          <div className="ml-2">
            <img src="/icon/Download.png" />
          </div>
        </div>
        <div className="border-b-[2px] p-2"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-3 mr-3">
            <img src="/icon/ckeckarrow.png" />
            <p className="text-[13px] w-[100px]  text-gray-500">زمان گفتوگو:</p>
          </div>
          <div className="ml-3">
            <TimerComponent />
          </div>
        </div>
        <progress value={progressNumber} max={100} />
        {/* <p className="text-center mt-4 text-red-500">در انتظار فروشنده</p> */}
      </div>
      <div className="absolute top-[39rem] right-[2rem]">
        <Button />
      </div>
      <div className="mb-[7rem]"></div>

      <div
        className={`fixed z-50 left-0 transition-all duration-300 ease-in ${
          open ? "top-[6rem]" : "top-[-400%]"
        } right-0`}
      >
        <OpinionPop setOpen={setOpen} />
      </div>
    </div>
  );
}

export default BeforeAdvertisComponents;
