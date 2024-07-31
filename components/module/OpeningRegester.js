import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function OpeningRegester() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormsubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col gap-3 items-center">
        <p className="font-bold text-xl">به کانکت خوش آمدی</p>
        <p>لطفا جهت ثبت نام در کانکت فرم زیر را تکمیل کنید</p>
      </div>

      <div className="mt-5">
        <form onSubmit={handleSubmit(onFormsubmit)}>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">نام کاربری:</label>
            <input
              {...register("username", { required: true })}
              className={`border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm ${
                errors.username && "border-red-500"
              }`}
              placeholder="* میتوانید از حروف لاتین استفاده کنید"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">این فیلد اجباری است</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-bold text-sm">نام و نام خانوادگی:</label>
            <input
              {...register("name", { required: true })}
              className={`border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm ${
                errors.name && "border-red-500"
              }`}
              placeholder="*حمید احمدی"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">این فیلد اجباری است</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-bold text-sm">شماره تلفن:</label>
            <input
              {...register("phone", {
                required: "این فیلد اجباری است",
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: "شماره تلفن باید با 09 شروع شده و 11 رقم باشد",
                },
              })}
              className={`border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm ${
                errors.phone && "border-red-500"
              }`}
              placeholder="*09122222222"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label className="font-bold text-sm">ایمیل:</label>
            <input
              {...register("email", {
                required: "این فیلد اجباری است",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "فرمت ایمیل صحیح نیست",
                },
              })}
              className={`border-[1px] border-gray-400 rounded-lg outline-none p-2 w-[300px] placeholder:text-sm ${
                errors.email && "border-red-500"
              }`}
              placeholder="*example@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="flex text-sm gap-1 items-center justify-center mt-4">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="form-checkbox"
            />
            <p className="text-blue-500 border-b-[1px] border-blue-600">
              شرایط و قوانین
            </p>
            <p className="font-bold">کانکت را میپذیرم</p>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs mt-2">این فیلد اجباری است</p>
          )}

          <div className="flex flex-col items-center gap-2 justify-center mt-5">
            <button className="bg-blue-400 p-2 w-[200px] rounded-lg text-white shadow-lg">
              ثبت نام
            </button>
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
