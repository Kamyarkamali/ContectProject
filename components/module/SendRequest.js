import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import MenuPop from "./MenuPop";
import Gif from "../element/Gif";

function SendRequest() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const [conditions, setConditions] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeSelector, setActiveSelector] = useState(null);

  const [close, setclose] = useState(false);

  const addCondition = () => {
    setConditions([...conditions, ""]);
  };

  const handleConditionChange = (index, value) => {
    const newConditions = [...conditions];
    newConditions[index] = value;
    setConditions(newConditions);
  };

  const removeCondition = (index) => {
    const newConditions = conditions.filter((_, i) => i !== index);
    setConditions(newConditions);
  };

  const handleSelectService = (item) => {
    setSelectedService(item);
  };

  const handleSelectCategory = (item) => {
    setSelectedCategory(item);
  };

  const openSelector = (selector) => {
    setActiveSelector(selector);
    setOpen(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    setclose(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full items-center border-b-2 p-1">
        <img src="/icon/color.png" alt="icon" className="rounded-md" />
        <p className="text-[12px] w-[390px] mr-2 text-gray-600 font-bold">
          جهت ارسال درخواست خود مشخصات زیر را پر کنید و توجه داشته باشید که
          خدماتی مانند خدمات منزل صرفا مربوط به شهر خود شما میباشد
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-4">
            <label className="text-[12px] font-bold ml-40 mb-3">
              عنوان درخواست:
            </label>
            <input
              type="text"
              {...register("requestTitle", {
                required: "عنوان درخواست الزامی است",
              })}
              className={`border-[1px] ${
                errors.requestTitle ? "border-red-500" : "border-gray-400"
              } w-[340px] p-2 rounded-lg outline-none placeholder:text-[13px]`}
              placeholder="میتوانید از حروف لاتین استفاده کنید"
            />
            {errors.requestTitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.requestTitle.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-8 relative">
            <label className="text-[12px] font-bold ml-40 mb-3">
              دسته بندی مورد نظر خود را انتخاب کنید:
            </label>
            <div
              onClick={() => openSelector("category")}
              className="border-2 w-[340px] p-2 rounded-lg cursor-pointer"
            >
              {selectedCategory
                ? selectedCategory.title
                : "نام دسته بندی را بنویسید و انتخاب کنید"}
            </div>
          </div>

          <div className="flex flex-col mt-8 relative">
            <label className="text-[12px] font-bold ml-40 mb-3">
              خدمت مورد نیاز را انتخاب کنید:
            </label>
            <div
              onClick={() => openSelector("service")}
              className="border-2 w-[340px] p-2 rounded-lg cursor-pointer"
            >
              {selectedService
                ? selectedService.title
                : "نام خدمت مورد نظر را بنویسید و انتخاب کنید"}
            </div>
          </div>

          {open && (
            <div className="fixed transition-all duration-300 ease-in top-[18.6rem] z-40 left-0 right-0">
              <MenuPop
                open={open}
                setOpen={setOpen}
                onSelect={
                  activeSelector === "service"
                    ? handleSelectService
                    : handleSelectCategory
                }
              />
            </div>
          )}

          <div className="flex flex-col mt-8 mb-9">
            <label className="text-[12px] font-bold ml-40 mb-3">
              توضیحات درخواست:
            </label>
            <textarea
              {...register("requestDetails", {
                required: "توضیحات الزامی است",
              })}
              className={`border-[1px] outline-none rounded-lg w-[340px] p-2 ${
                errors.requestDetails ? "border-red-500" : "border-gray-400"
              }`}
              style={{ resize: "none" }}
            />
            {errors.requestDetails && (
              <p className="text-red-500 text-xs mt-1">
                {errors.requestDetails.message}
              </p>
            )}
          </div>

          <label className="text-[12px] font-bold ml-40 mb-3">ارسال به</label>

          <div className="flex items-center gap-2">
            <div className="flex gap-2 items-center border-2 w-[170px] p-4 rounded-lg">
              <input
                type="radio"
                {...register("sendTo", { required: "گزینه ارسال الزامی است" })}
                value="city"
                defaultChecked
              />
              <label className="text-[12px] text-gray-500 font-bold w-[200px]">
                ارسال آگهی به خدمات رسان های شهر خود
              </label>
            </div>

            <div className="flex gap-2 items-center border-2 w-[170px] p-4 rounded-lg">
              <input
                type="radio"
                {...register("sendTo", { required: "گزینه ارسال الزامی است" })}
                value="all"
              />
              <label className="text-[12px] text-gray-500 font-bold w-[200px]">
                ارسال آگهی به تمامی خدمات رسان ها
              </label>
            </div>
          </div>
          {errors.sendTo && (
            <p className="text-red-500 text-xs mt-1">{errors.sendTo.message}</p>
          )}

          <div className="mt-9">
            <button
              type="button"
              onClick={addCondition}
              className="bg-green-400 text-md p-3 text-white rounded-lg"
            >
              + شرایط آگهی
            </button>
          </div>

          {conditions.map((condition, index) => (
            <div key={index} className="flex flex-col mt-4">
              <div className="flex items-center">
                <label className="text-[12px] font-bold ml-4">
                  شرط {index + 1}:
                </label>
                <button
                  type="button"
                  onClick={() => removeCondition(index)}
                  className="text-red-500 ml-4"
                >
                  حذف
                </button>
              </div>
              <input
                type="text"
                value={condition}
                onChange={(e) => handleConditionChange(index, e.target.value)}
                className="border-[1px] border-gray-400 w-[340px] p-2 rounded-lg outline-none placeholder:text-[13px]"
                placeholder="شرط جدید را وارد کنید"
              />
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 w-[200px] p-2 rounded-lg text-white shadow-md shadow-blue-400"
            >
              ارسال آگهی
            </button>
          </div>

          <div className="flex flex-col mt-8 mb-[4rem]"></div>
        </form>
      </div>

      <div className="absolute top-[14rem]">
        {close && <Gif setclose={setclose} />}
      </div>
    </div>
  );
}

export default SendRequest;
