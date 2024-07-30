import React, { useState } from "react";

import TimerComponent from "@/components/module/TimerComponent";
import Link from "next/link";

function ConversationComponent() {
  const [progressNumber, setProgressNumber] = useState(0);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center mr-5 gap-2">
          <Link href={"/"}>
            <img src="/icon/ckeckarrow.png" />
          </Link>
          <p className="text-sm">زمان گفتگو</p>
        </div>
        <div className="ml-5">
          <TimerComponent />
        </div>
      </div>
      <progress value={progressNumber} max={100} />
      <div className=" flex items-center justify-center w-[350px] bg-[#E3E3E3] rounded-lg shadow-lg shadow-gray-300 mt-4 h-[100px]">
        <p className="text-xl font-bold">بنر تبلیغاتی</p>
      </div>

      <div className="mt-4 mr-8">
        <div className="flex items-center w-fit">
          <img src="/icon/Shield.png" />
          <p className="text-[11px] w-[330px] text-red-500">
            پرداخت خارج از کانکت (کارت به کارت و سایر روش ها) باعث عدم پیگیری
            سفارش شما و همچنین مسیئولیت های پیش آمده بر عهده خود شخص میباشد.
          </p>
        </div>
      </div>

      <div className="border-[1px] border-gray-300 w-full mt-5"></div>

      <div className="flex gap-2 items-center text-gray-400">
        <p>PM</p>
        <p>12:32</p>
      </div>

      <div className="flex justify-start items-center w-full gap-2">
        <img src="/icon/Avatar1.png" />
        <div className="flex flex-col gap-2">
          <div className="bg-gray-600 w-fit p-2 rounded-lg">
            <p className="text-white text-sm">سلام</p>
          </div>
          <div className="bg-gray-600 p-2 w-fit rounded-lg">
            <p className="text-white text-sm">برای آگهی که گذاشتید پیام دادم</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center w-full ml-9 gap-2">
        <div className="flex items-center">
          <div className="flex flex-col items-end">
            <p className="bg-gray-400 p-1 rounded-lg text-white ml-2 w-fit">
              سلام
            </p>
            <img src="/icon/chat.png" className="w-[200px] ml-4 mt-4" />
          </div>
          <div>
            <img src="/icon/Avatar2.png" />
          </div>
        </div>
      </div>

      <div className=" flex mt-[5rem] justify-center items-center w-full">
        <div className="flex items-center justify-center gap-2">
          <img src="/icon/chat2.png" />
          <img src="/icon/Mic.png" />
        </div>
        <input
          placeholder="پیام خود را بنویسید"
          className="outline-none border-[1px] rounded-lg p-3 border-gray-500 w-[270px]"
        />
      </div>

      <div className="mb-8"></div>
    </div>
  );
}

export default ConversationComponent;
