import Link from "next/link";
import React from "react";

function OpeningRegester() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col gap-3 items-center">
        <p className="font-bold text-xl">به کانکت خوش آمدی</p>
        <p>لطفا جهت ثبت نام در کانکت فرم زیر را تکمیل کنید</p>
      </div>

      <div className="mt-5">
        <form>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">نام کاربری:</label>
            <input
              className="border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm"
              placeholder="* میتوانید از حروف لاتین استفاده کنید"
            />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-bold text-sm">نام و نام خانوادگی:</label>
            <input
              className="border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm"
              placeholder="*حمید احمدی"
            />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-bold text-sm">شماره تلفن:</label>
            <input
              className="border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm"
              placeholder="*09122222222"
            />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-bold text-sm">ایمیل:</label>
            <input
              className="border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm"
              placeholder="*example@gmail.com"
            />
          </div>

          <div className="flex text-sm gap-1 items-center justify-center mt-4">
            <input type="checkbox" className="" />
            <p className="text-blue-500 border-b-[1px] border-blue-600">
              شرایط و قوانین
            </p>
            <p className="font-bold">کانکت را میپذیرم</p>
          </div>

          <div className="flex flex-col items-center gap-2 justify-center mt-5">
            <Link href={"/opening/checkbox"}>
              <button className="bg-blue-400 p-2 w-[200px] rounded-lg text-white shadow-lg">
                ثبت نام
              </button>
            </Link>
            <Link href={"/opening/login"}>
              <button className="text text-gray-600">ورود به کانکت</button>
            </Link>
          </div>
        </form>
      </div>

      <div className="mb-[6rem]"></div>
    </div>
  );
}

export default OpeningRegester;
