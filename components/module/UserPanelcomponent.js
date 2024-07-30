import React from "react";
import UserMenu from "./UserMenu";

function UserPanelcomponent() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-[-11rem] left-0 right-0 flex flex-col items-center">
        <img src="/images/useravatar.png" className="w-[120px] " />
        <p className="font-bold">رضا احمدی</p>
        <p className="font-bold text-[12px]">09122222222</p>
      </div>

      <div className="flex  items-center justify-around w-full p-3">
        <div className="border flex flex-col items-center justify-center w-[160px] shadow-md shadow-gray-200 rounded-lg h-[100px]">
          <p className="border-b-[1px] border-gray-300 w-full text-center font-bold mb-4 p-1">
            فاقد اشتراک
          </p>
          <p className="text-[12px] text-right w-full mr-4 font-bold">
            خرید اشتراک ویژه
          </p>
        </div>

        <div className="border w-[190px] shadow-md shadow-gray-200 rounded-lg h-[100px]">
          <div className="flex items-center gap-1 mt-3 mr-3">
            <img src="/icon/icons.png" />
            <p className="text-[11px] font-bold">کانکت کلاب</p>
          </div>
          <h2 className="text-center mt-1 font-bold text-xl">58 امتیاز</h2>
          <div className="border-b-[1px] p-1 border-gray-300"></div>
          <div className="flex items-center">
            <p className="text-[11px] justify-between w-full mr-2 mt-1">
              گردونه شانس
            </p>
            <img src="/icon/Left 3.png" className="ml-2" />
          </div>
        </div>
      </div>

      <div className="flex justify-start w-full">
        <UserMenu />
      </div>
    </div>
  );
}

export default UserPanelcomponent;
