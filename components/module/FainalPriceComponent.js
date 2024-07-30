import { sp } from "@/helpers/replaceNumber";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function FainalPriceComponent() {
  const router = useRouter();

  const backHandeler = () => {
    router.back();
  };

  const clickHandeler = () => {
    toast.success("به  صفحه گفتوگو منتقل میشوید");
    setTimeout(() => {
      router.push("/conversation");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center mt-9">
      <div className="border-b-[7px] rounded-lg border-gray-800 w-[100px]"></div>
      <div className="flex items-center justify-between w-full mt-9">
        <div className="flex gap-2 items-center justify-start mr-8">
          <img src="/icon/wallet.png" className="w-[20px]" />
          <p className="text-sm text-gray-600 font-bold">پرداخت آگهی</p>
        </div>
        <div className="ml-8">
          <img src="/icon/arrowleft.png" onClick={backHandeler} />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <img src="/icon/logo2.png" className="w-[100px]" />
        <p className="font-bold text-xl">{sp(2000000)} میلیون ریال</p>
        <p className="font-bold">به حساب کانتنت نشست</p>

        <div className="border flex gap-2 items-center justify-center w-[160px] h-[50px] border-green-500 rounded-lg shadow-md shadow-gray-300 bg-green-100">
          <img src="/icon/tick2.png" className="w-[20px]" />
          <p className="text-[13px] font-bold">پرداخت موفق</p>
        </div>
      </div>

      <div className="border-b-2 w-full p-2 border-dashed border-gray-400"></div>

      <div className="flex items-center justify-between w-full">
        <p className="mr-5 mt-5">زمان:</p>
        <p className="ml-5 mt-5">13:14,جمعه,7 تیر 1403</p>
      </div>

      <div className="border-b-2 w-full p-2 border-dashed border-gray-400"></div>

      <div className="flex items-center justify-between w-full">
        <p className="mr-5 mt-5">انتقال دهنده:</p>
        <p className="ml-5 mt-5">رضا احمدی</p>
      </div>

      <div className="border-b-2 w-full p-2 border-dashed border-gray-400"></div>

      <div className="flex items-center justify-between w-full">
        <p className="mr-5 mt-5">روش انتقال:</p>
        <p className="ml-5 mt-5">کیف پول کانتنت</p>
      </div>

      <div className="border-b-2 w-full p-2 border-dashed border-gray-400"></div>

      <div className="flex items-center justify-between w-full">
        <p className="mr-5 mt-5">مبدا:</p>
        <p className="ml-5 mt-5"> کانتنت</p>
      </div>

      <div className="border-b-2 w-full p-2 border-dashed border-gray-400"></div>

      <div className="flex items-center justify-between w-full">
        <p className="mr-5 mt-5">شماره مرجع:</p>
        <p className="ml-5 mt-5"> 41342424242442112</p>
      </div>

      <div className="flex justify-center mt-[2rem]">
        <button
          onClick={clickHandeler}
          className="bg-blue-300 p-3 w-[340px] text-white rounded-lg shadow-lg shadow-gray-300"
        >
          رفتن به صفحه گفتگو
        </button>
      </div>

      <div className="mb-[6rem]"></div>
      <Toaster />
    </div>
  );
}

export default FainalPriceComponent;
