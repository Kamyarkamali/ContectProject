import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import MenuPop from "./MenuPop";
import Gif from "../element/Gif";

const initialProvinces = [
  { id: 1, name: "تهران" },
  { id: 2, name: "اصفهان" },
  { id: 3, name: "خراسان رضوی" },
  { id: 4, name: "فارس" },
  { id: 5, name: "مازندران" },
];

const initialCities = {
  1: [
    { id: 1, name: "تهران" },
    { id: 2, name: "شهریار" },
    { id: 3, name: "کرج" },
    { id: 4, name: "اسلامشهر" },
    { id: 5, name: "شهرقدس" },
  ],
  2: [
    { id: 6, name: "اصفهان" },
    { id: 7, name: "نجف‌آباد" },
    { id: 8, name: "کاشان" },
    { id: 9, name: "خمینی شهر" },
    { id: 10, name: "دهقان" },
  ],
  3: [
    { id: 6, name: "مشهد" },
    { id: 7, name: "نیشابور" },
  ],
};

function SendRequest() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const [conditions, setConditions] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeSelector, setActiveSelector] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [provinces, setProvinces] = useState(initialProvinces);
  const [cities, setCities] = useState(initialCities);
  const [customProvince, setCustomProvince] = useState("");
  const [customCity, setCustomCity] = useState("");

  const provinceId = watch("province");

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

  const handleSelectProvince = (option) => {
    setSelectedProvince(option);
    setSelectedCity(null);
    setValue("city", null);
  };

  const handleSelectCity = (option) => {
    setSelectedCity(option);
  };

  const handleAddCustomProvince = () => {
    if (customProvince.trim()) {
      const newProvince = {
        id: provinces.length + 1,
        name: customProvince.trim(),
      };
      setProvinces([...provinces, newProvince]);
      setCustomProvince("");
      setSelectedProvince(newProvince);
      setValue("province", newProvince);
    }
  };

  const handleAddCustomCity = () => {
    if (customCity.trim() && selectedProvince) {
      const newCity = {
        id: cities[selectedProvince.id]
          ? cities[selectedProvince.id].length + 1
          : 1,
        name: customCity.trim(),
      };
      setCities({
        ...cities,
        [selectedProvince.id]: [
          ...(cities[selectedProvince.id] || []),
          newCity,
        ],
      });
      setCustomCity("");
      setSelectedCity(newCity);
      setValue("city", newCity);
    }
  };

  const openSelector = (selector) => {
    setActiveSelector(selector);
    setOpen(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    setClose(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full items-center border-b-2 p-3">
        <img src="/icon/color.png" alt="icon" className="rounded-md" />
        <p className="text-[12px] w-[390px] mr-2 text-gray-600 font-bold">
          جهت ارسال درخواست خود مشخصات زیر را پر کنید و توجه داشته باشید که
          خدماتی مانند خدمات منزل صرفا مربوط به شهر خود شما میباشد
        </p>
      </div>

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
            className="border-2  text-[13px] w-[340px] p-2 rounded-lg cursor-pointer"
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
            className="border-2 text-[13px] w-[340px] p-2 rounded-lg cursor-pointer"
          >
            {selectedService
              ? selectedService.title
              : "نام خدمت مورد نظر را بنویسید و انتخاب کنید"}
          </div>
        </div>

        <div className="flex flex-col mt-8 relative">
          <label className="text-[12px] font-bold ml-40 mb-3">
            شهر مورد نیاز را انتخاب کنید:
          </label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  options={selectedProvince ? cities[selectedProvince.id] : []}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={(option) => {
                    field.onChange(option);
                    handleSelectCity(option);
                  }}
                  placeholder="نام شهر را انتخاب کنید"
                  isDisabled={!selectedProvince}
                />
                {selectedProvince && (
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      value={customCity}
                      onChange={(e) => setCustomCity(e.target.value)}
                      placeholder="شهر جدید را وارد کنید"
                      className="border-[1px] placeholder:text-[13px] border-gray-400 p-2 rounded-lg mr-2 w-[200px]"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomCity}
                      className="bg-blue-500 text-white text-[13px] w-[130px]  rounded-lg"
                    >
                      اضافه کردن شهر
                    </button>
                  </div>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col mt-8 relative">
          <label className="text-[12px] font-bold ml-40 mb-3">
            استان مورد نیاز را انتخاب کنید :
          </label>
          <Controller
            name="province"
            control={control}
            render={({ field }) => (
              <div>
                <Select
                  {...field}
                  options={provinces}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={(option) => {
                    field.onChange(option);
                    handleSelectProvince(option);
                  }}
                  placeholder="نام استان را انتخاب کنید"
                />
                <div className="flex gap-3 mt-2">
                  <input
                    type="text"
                    value={customProvince}
                    onChange={(e) => setCustomProvince(e.target.value)}
                    placeholder="استان جدید را وارد کنید"
                    className="border-[1px] placeholder:text-[13px] border-gray-400 p-2 rounded-lg mr-2 w-[200px]"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomProvince}
                    className="bg-blue-500 text-[13px] text-white w-[130px] rounded-lg"
                  >
                    اضافه کردن استان
                  </button>
                </div>
              </div>
            )}
          />
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
            {...register("requestDetails", { required: "توضیحات الزامی است" })}
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
            className="bg-green-400 flex items-center justify-center gap-3 w-[140px] text-sm p-3 text-white rounded-lg"
          >
            <img src="/icon/plus.png" />
            شرایط آگهی
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
      </form>

      <div className="absolute top-[14rem]">
        {close && <Gif setClose={setClose} />}
      </div>

      <div className="mb-[7rem]"></div>
    </div>
  );
}

export default SendRequest;
