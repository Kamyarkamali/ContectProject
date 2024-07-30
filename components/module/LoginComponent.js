import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function LoginComponent() {
  const router = useRouter();

  const clickHandeler = () => {
    router.push("/");
  };

  const backHandeler = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center mt-7">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl font-bold">به کانکت خوش آمدی</p>
        <p className="text-sm text-gray-600 text-center w-[340px] leading-6">
          لطفا جهت ورود به حساب کانکت خود شماره تلفن یا ایمیلی که با آن ثبت نام
          کردیه اید را وارد کنید
        </p>
      </div>

      <div>
        <form>
          <div className="flex flex-col gap-2 mt-5">
            <label className="text-sm font-bold">شماره تلفن یا ایمیل:</label>
            <input
              placeholder="* به عنوان مثال 09122222222"
              className="border-[1px] w-[300px] p-2 rounded-lg border-gray-400 outline-none placeholder:text-sm"
            />
          </div>

          <div className="flex text-sm gap-1 items-center justify-start mt-4">
            <input type="checkbox" className="" />
            <p className="text-blue-500 border-b-[1px] border-blue-600">
              شرایط و قوانین
            </p>
            <p className="font-bold">کانکت را میپذیرم</p>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center h-[500px]">
            <Link href={"/"}>
              <button
                onClick={clickHandeler}
                className="w-[150px] bg-blue-400 p-2 text-white rounded-lg shadow-lg"
              >
                درخواست کد
              </button>
            </Link>
            <Link href={"/"}>
              <button onClick={backHandeler}>برگشت</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
