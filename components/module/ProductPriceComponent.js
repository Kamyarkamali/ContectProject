import { sp } from "@/helpers/replaceNumber";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Gif from "@/components/element/Gif"; // Import the Gif component

function ProductPriceComponent() {
  const router = useRouter();
  const [selected, setSelected] = useState(1);
  const [showGif, setShowGif] = useState(false);

  const backHandeler = () => {
    router.back();
  };

  const handleClick = (index) => {
    setSelected(index);
  };

  const clickHandeler = () => {
    toast.success("پرداخت موفقیت آمیز بود");
    setShowGif(true);
    setTimeout(() => {
      router.push("/fainalprice");
    }, 4000);
  };

  const closeGif = () => {
    setShowGif(false);
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
          <img src="/icon/arrowleft.png " onClick={backHandeler} />
        </div>
      </div>

      <div className="flex items-center justify-start w-full mr-4 gap-1 mt-4">
        <img src="/icon/color.png" className=" w-[15px] rounded-md" />
        <p className="text-sm">مبلغ سفارش شما :</p>
      </div>

      <div>
        <p className="font-bold text-xl">{sp(2000000)} میلیون ریال</p>
      </div>

      <div className="border-b-2 w-full p-3 border-gray-300"></div>

      <div className="flex items-center justify-start w-full mt-4 mb-4 mr-4 gap-1">
        <img src="/icon/color.png" className="w-[15px] rounded-md" />
        <p className="text-sm">نحوه پرداخت خود را انتخاب کنید</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div
          onClick={() => handleClick(0)}
          className={`border-2 ${
            selected === 0 ? "border-green-500" : "border-gray-400"
          } flex items-center gap-2 cursor-pointer bg-gray-100 w-[340px] h-[60px] rounded-lg`}
        >
          <div className="flex items-center gap-2 mr-4">
            <img
              src={`${selected === 0 ? "/icon/tick2.png" : "/icon/tick.png"}`}
            />
            <p className="text-sm text-gray-800 font-bold">
              پرداخت مستقیم از طریق درگاه
            </p>
          </div>
        </div>

        <div
          onClick={() => handleClick(1)}
          className={`border-2 ${
            selected === 1 ? "border-green-500" : "border-gray-400"
          } flex items-center gap-2 cursor-pointer bg-gray-100 w-[340px] h-[60px] rounded-lg`}
        >
          <div className="flex items-center gap-2 mr-4">
            <img
              src={`${selected === 1 ? "/icon/tick2.png" : "/icon/tick.png"}`}
            />
            <p className="text-sm text-gray-800 font-bold">
              کیف پول {sp(2000000)} تومان موجودی
            </p>
          </div>
        </div>

        <div
          onClick={() => handleClick(2)}
          className={`border-2 ${
            selected === 2 ? "border-green-500" : "border-gray-400"
          } flex items-center gap-2 cursor-pointer bg-gray-100 w-[340px] h-[60px] rounded-lg`}
        >
          <div className="flex justify-center items-center gap-2 mr-4">
            <img
              src={`${selected === 2 ? "/icon/tick2.png" : "/icon/tick.png"}`}
            />
            <p className="text-sm text-gray-800 font-bold">
              کارت هدیه {sp(2000000)} تومان
            </p>
          </div>
        </div>
      </div>

      <div className="border-b-2 w-full p-3 border-gray-300"></div>

      <div className="flex items-center justify-start w-full mr-4 gap-1 mt-4">
        <img src="/icon/color.png" className="w-[15px] rounded-md" />
        <p className="text-sm">در صورت داشتن کد تخفیف آن را وارد کنید</p>
      </div>

      <div className="border-[1px] rounded-lg border-gray-400 border-l-none mt-4">
        <input
          placeholder="625381wjwu"
          className="outline-none placeholder:p-1"
        />
        <button className="bg-green-400 w-[100px] rounded-l-lg p-2 text-white">
          اعمال
        </button>
      </div>

      <div className="border-b-[1px] w-full p-3 border-gray-300"></div>

      <div className="flex justify-center mt-6 bg-blue-300 w-[160px] rounded-lg text-white shadow-lg shadow-blue-300 p-2">
        <button onClick={clickHandeler}>پرداخت</button>
      </div>

      <div className="mb-[6rem]"></div>
      <Toaster />

      {showGif && <Gif onClose={closeGif} />}
    </div>
  );
}

export default ProductPriceComponent;
