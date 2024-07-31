import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";

function OpinionPop({ setOpen }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <div className="bg-white border-[1px] border-gray-300 flex flex-col items-center z-50 h-screen rounded-3xl">
      <div className="border-[3px] mt-6 w-[50px] border-gray-800 rounded-lg"></div>

      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-center mr-5">
          <img src="/icon/comment.png" />
          <p className="text-sm font-bold">ثبت نظر</p>
        </div>
        <div
          onClick={() => setOpen(false)}
          className="border-[1px] flex flex-col border-gray-300 cursor-pointer items-center p-2 rounded-[100%] ml-5"
        >
          <img src="/icon/arrowleft.png" />
        </div>
      </div>

      <div className="flex items-center justify-start w-full mr-10 mt-5">
        <div className="flex flex-col w-full items-start">
          <img src="/images/useravatar.png" className="w-[40px]" />
          <div>
            <p className="font-bold text-sm mt-3">نظر راجب دیزاین استور</p>
            <p className="text-[12px] max-w-[360px] text-right mt-3 text-gray-800 leading-5">
              میزان رضایت خود را درمورد عملکرد فروشنده ای که از ان خدمت دریافت
              کرده اید با زدن بروی ستاره ها مشخص کنید و چناچه دارای انتقاد و
              پیشنهاد هستید برای این فروشگاه در باکس پایین برای ما بنویسید
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center"
      >
        <div className="flex items-center gap-2 w-full justify-start mr-8 mt-6">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    className="hidden"
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    color={ratingValue <= (hover || rating) ? "yellow" : "gray"}
                    size={29}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </div>
          <button type="button" className="text-[13px] text-gray-600 mt-2">
            کلیک کنید
          </button>
        </div>

        <div className="flex flex-col w-full justify-start mr-8">
          <p className="text-[12px] font-bold mt-6">نظر خود را بنویسید</p>
          <textarea
            {...register("opinion", { required: true })}
            placeholder="توضیحات تبلیغ را شرح دهید"
            style={{ resize: "none" }}
            className="border-[1px] border-gray-400 placeholder:text-[13px] placeholder:p-3 outline-none w-[330px] h-[100px] mt-3 rounded-lg"
          />
          {errors.opinion && (
            <p className="text-red-500 text-sm">این فیلد الزامی است</p>
          )}
        </div>

        <div className="border-[1px] border-gray-300 mt-5 w-[300px]"></div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-[#AFC0FF] w-[200px] p-2 rounded-lg text-white shadow-md"
          >
            ثبت نظر
          </button>
        </div>
      </form>
    </div>
  );
}

export default OpinionPop;
