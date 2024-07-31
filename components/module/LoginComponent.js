import { usetitle } from "@/helpers/changetitlename";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onFormSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      toast.error("لطفا اطلاعات وارد شده را به درستی بررسی کنید");
      return;
    }
    console.log(data);
    // Add your form submission logic here
    toast.success("کد ارسال شد");
  };

  const clickHandeler = () => {
    router.push("/opening/checkbox");
  };

  const backHandeler = () => {
    router.back();
  };

  useEffect(() => {
    usetitle("صفحه ورود و ثبت نام");
  }, []);

  return (
    <div className="flex flex-col items-center mt-7">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl font-bold">به کانکت خوش آمدی</p>
        <p className="text-sm text-gray-600 text-center w-[340px] leading-6">
          لطفا جهت ورود به حساب کانکت خود شماره تلفن یا ایمیلی که با آن ثبت نام
          کردید را وارد کنید
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col gap-2 mt-5">
            <label className="text-sm font-bold">شماره تلفن یا ایمیل:</label>
            <input
              {...register("contact", {
                required: "این فیلد اجباری است",
                pattern: {
                  value: /^(09[0-9]{9}|[^@\s]+@[^@\s]+\.[^@\s]+)$/,
                  message:
                    "شماره تلفن باید با 09 شروع شده و 11 رقم باشد یا ایمیل معتبر باشد",
                },
              })}
              placeholder="* به عنوان مثال 09122222222 یا example@gmail.com"
              className={`border-[1px] w-[300px] p-2 rounded-lg border-gray-400 outline-none placeholder:text-sm ${
                errors.contact && "border-red-500"
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs">{errors.contact.message}</p>
            )}
          </div>

          <div className="flex text-sm gap-1 items-center justify-start mt-4">
            <input
              type="checkbox"
              {...register("terms", {
                required: "پذیرش شرایط و قوانین الزامی است",
              })}
              className="form-checkbox"
            />
            <p className="text-blue-500 border-b-[1px] border-blue-600">
              شرایط و قوانین
            </p>
            <p className="font-bold">کانکت را میپذیرم</p>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs mt-2">{errors.terms.message}</p>
          )}

          <div className="flex flex-col gap-2 items-center justify-center mt-5">
            <button
              onClick={clickHandeler}
              type="submit"
              className="w-[150px] bg-blue-400 p-2 text-white rounded-lg shadow-lg"
            >
              درخواست کد
            </button>
            <Link href={"/"}>
              <button type="button" onClick={backHandeler}>
                برگشت
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
