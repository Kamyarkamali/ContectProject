import React from "react";
import { useForm } from "react-hook-form";

function CommentPopup({ title, content, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save the comment (you can add your logic here)
    console.log("Form data:", data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white p-5 flex flex-col items-center rounded shadow-lg w-full h-full">
        <div className="border-b-[7px] w-[70px] border-gray-700 rounded-lg"></div>

        <div className="flex mt-8 justify-between w-full">
          <div className="flex items-center gap-1 mr-6">
            <img src="/pop/Document.png" />
            <p className="text-sm font-bold">ثبت تیکت</p>
            <p className="text-[13px] font-bold">{title}</p>
          </div>
          <div
            onClick={onClose}
            className="ml-6 border-[1px] p-2 border-gray-500 cursor-pointer rounded-[100%]"
          >
            <img src="/pop/Arrow Left.png" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center"
        >
          <div className="flex flex-col gap-2 mt-[1rem]">
            <label className="text-[13px] font-bold">عنوان مشکل:</label>
            <input
              type="text"
              className="outline-none border-[1px] placeholder:text-[12px] w-[300px] p-2 border-gray-400 rounded-lg"
              placeholder="وجود مشکل در کیف پول"
              {...register("issueTitle", {
                required: "عنوان مشکل الزامی است.",
              })}
            />
            {errors.issueTitle && (
              <p className="text-red-500 text-[12px]">
                {errors.issueTitle.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-[1rem]">
            <label className="text-[13px] font-bold">شماره همراه:</label>
            <input
              type="text"
              className="outline-none border-[1px] placeholder:text-[12px] w-[300px] p-2 border-gray-400 rounded-lg"
              placeholder="09122222222"
              {...register("phoneNumber", {
                required: "شماره همراه الزامی است.",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "شماره همراه نامعتبر است.",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-[12px]">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-[1rem]">
            <label className="text-[13px] font-bold">شرح مشکل:</label>
            <textarea
              style={{ resize: "none" }}
              className="outline-none border-[1px] placeholder:text-[12px] w-[300px] p-2 border-gray-400 rounded-lg"
              placeholder="مشکل خود را بنویسید"
              {...register("issueDescription", {
                required: "شرح مشکل الزامی است.",
              })}
            />
            {errors.issueDescription && (
              <p className="text-red-500 text-[12px]">
                {errors.issueDescription.message}
              </p>
            )}
          </div>

          <div className="flex items-center mt-[2rem]">
            <img src="/icon/green.png" />
            <p className="text-[12px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
          </div>

          <div className="flex items-center mt-[2rem]">
            <img src="/icon/green.png" />
            <p className="text-[12px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
          </div>
          <div className="mt-[1rem]">
            <button
              type="submit"
              className="bg-[#AFC0FF] w-[140px] p-2 rounded-lg shadow-lg text-white"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentPopup;
