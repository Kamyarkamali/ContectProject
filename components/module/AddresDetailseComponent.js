import React from "react";

function AddresDetailseComponent() {
  return (
    <div className="flex flex-col items-start py-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center mr-4">
          <p className="text-sm">نام و نام خانوادگی</p>
          <p className="font-bold">حمیدرضا بابایی</p>
        </div>
        <img src="/icon/Left 3.png" className="ml-4" />
      </div>

      <div className="border-[1px] border-gray-300 w-full mt-4 flex justify-center items-center"></div>

      <div className="flex justify-between items-center w-full py-4">
        <div className="flex flex-col items-center mr-4">
          <p className="text-sm">شماره تلفن</p>
          <p className="font-bold">09122222222</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="border bg-green-700 w-[100px] p-2 rounded-lg text-white text-sm">
            تایید شده
          </button>
          <img src="/icon/Left 3.png" className="ml-4" />
        </div>
      </div>

      <div className="border-[1px] border-gray-300 w-full mt-4 flex justify-center items-center"></div>

      <div className="flex justify-between items-center w-full py-4">
        <div className="flex flex-col items-center mr-4">
          <p className="text-sm">پست الکترونیکی</p>
          <p className="font-bold">hamidrezababaei@gmail.com</p>
        </div>
        <img src="/icon/Left 3.png" className="ml-4" />
      </div>

      <div className="border-[1px] border-gray-300 w-full mt-4 flex justify-center items-center"></div>

      <div className="flex justify-between items-center w-full py-4">
        <div className="flex flex-col items-center mr-4">
          <p className="text-sm">شماره شبا حسساب</p>
          <p className="font-bold">IR90000232424948127841</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="border bg-green-700 w-[100px] p-2 rounded-lg text-white text-sm">
            تایید شده
          </button>
          <img src="/icon/Left 3.png" className="ml-4" />
        </div>
      </div>

      <div className="border-[1px] border-gray-300 w-full mt-4 flex justify-center items-center"></div>

      <div className="flex justify-center w-full py-4">
        <div className="shadow-lg w-[290px] h-[100px] bg-gray-200 rounded-lg flex justify-center items-center">
          <p className="text-xl">بنر تبلیغاتی</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mr-4">
        <img src="/icon/exit.png" className="w-[20px]" />
        <p className="text-sm text-red-500 font-bold">خروج از جساب کاربری</p>
      </div>

      <div className="border-[1px] border-gray-300 w-full mt-4 flex justify-center items-center"></div>

      <div className="py-16"></div>
    </div>
  );
}

export default AddresDetailseComponent;
