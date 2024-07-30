import React from "react";
import NewAdvertising from "./AllAdvertising";
import Link from "next/link";
import Button from "../element/Button";

function AdvertisingComponent() {
  return (
    <div className="flex flex-col items-center relative dark:bg-slate-800 dark:text-white transition-all duration-300 ease-in">
      <div>
        <NewAdvertising />
      </div>

      <div className="mt-8">
        <img src="/images/agahi.png" alt="logo" className="w-[270px]" />
      </div>

      <div className="mt-5 flex flex-col items-center mb-[11rem]">
        <p className="font-bold text-xl">
          صندوق درخواست های روز شما خالی میباشد!
        </p>
        <p className="text-sm text-gray-500">صندوق ارسال شما خالی میباشد</p>
      </div>

      <div className="absolute top-[30rem] right-[1rem]">
        <Button />
      </div>
    </div>
  );
}

export default AdvertisingComponent;
