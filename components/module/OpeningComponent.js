import React, { useEffect, useState } from "react";
import Opening2 from "./Opening2";
import OpeningRegester from "./OpeningRegester";
import { usetitle } from "@/helpers/changetitlename";

function OpeningComponent() {
  const [step, setstep] = useState(1);

  useEffect(() => {
    usetitle("صفحه ورود و ثبت نام");
  }, []);

  return (
    <>
      {step === 1 && (
        <div className="flex flex-col items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <img src="/icon/logo2.png" className="w-[140px]" />
            <img src="/images/opening1.png" className="w-[300px]" />
          </div>

          <div className=" w-[300px] h-[250px] shadow-md shadow-gray-300 rounded-lg">
            <div className="flex justify-center mt-3">
              <div className="border-b-[6px] rounded-lg border-gray-800 w-[50px] flex justify-center"></div>
            </div>
            <div className="flex flex-col items-center mt-4">
              <h1 className="font-bold">به دنیایی از خدمات متصل شو</h1>
              <p className="text-center text-sm p-2">
                با کانکت نیازی نیست به بیرون مراجعه کنی, همه چیز در دستان تو است
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center mt-5">
              <button
                onClick={() => setstep((prev) => prev + 1)}
                className="bg-blue-300 w-[140px] p-2 rounded-lg text-white  shadow-lg"
              >
                ادامه
              </button>
              <button onClick={() => setstep(3)} className="text-red-500">
                رد کردن
              </button>
            </div>
          </div>

          <div className="mb-[5rem]"></div>
        </div>
      )}

      {step === 2 && <Opening2 setstep={setstep} />}
      {step === 3 && <OpeningRegester />}
    </>
  );
}

export default OpeningComponent;
