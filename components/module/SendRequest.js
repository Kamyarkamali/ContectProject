import React from "react";

function SendRequest() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full items-center border-b-2 p-1">
        <img src="/icon/color.png" />
        <p className="text-sm w-[380px] text-gray-600 leading-6">
          جهت ارسال درخواست خود مشخصات زیر را پر کنید و توجه داشته باشید که
          خدماتی مانند خدمات منزل صرفا مربوط به شهر خود شما میباشد
        </p>
      </div>

      <div>
        <form>
          <div className="flex flex-col mt-4">
            <label className="text-[12px] font-bold ml-40 mb-3">
              عنوان درخواست:
            </label>
            <input
              type="text"
              className="border-[1px] border-gray-400 w-[340px] p-2 rounded-lg outline-none placeholder:text-[13px]"
              placeholder="میتوانید از حروف لاتین استفاده کنید"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-[12px] font-bold ml-40 mb-3">
              دسته بندی مورد نظر خود را انتخاب کنید:
            </label>
            <select value={""} className="border-2 w-[340px] p-2 rounded-lg">
              <option value="" disabled selected>
                <p> نام دسته بندی را بنویسید و انتخاب کنید</p>
              </option>
              <option value="category1" disabled selected>
                دسته بندی1
              </option>
              <option value="category1" disabled selected>
                دسته بندی1
              </option>
              <option value="category1" disabled selected>
                دسته بندی1
              </option>
              <option value="category1" disabled selected>
                دسته بندی1
              </option>
            </select>
          </div>
        </form>
      </div>

      <div>3</div>
    </div>
  );
}

export default SendRequest;
