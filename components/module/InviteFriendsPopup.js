import React, { useState } from "react";

function InviteFriendsPopup({ title, content, onClose }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendInvite = () => {
    // ارسال دعوت‌نامه (می‌توانید منطق خود را اینجا اضافه کنید)
    console.log("Invitation sent to:", email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white p-5 flex flex-col items-center rounded shadow-lg w-full h-full">
        <div className="border-b-[7px] w-[70px] border-gray-700 rounded-lg"></div>
        <div className="flex mt-8 items-center justify-between w-full">
          <div className="flex  items-center gap-1 mr-6">
            <img src="/pop/User Plus.png" />
            <p className="text-[13px] font-bold">{title}</p>
          </div>
          <div
            onClick={onClose}
            className="ml-6 border-[1px] p-2 border-gray-500 cursor-pointer rounded-[100%]"
          >
            <img src="/pop/Arrow Left.png" />
          </div>
        </div>

        <div className="bg-gray-300 w-[330px] rounded-lg flex items-center  justify-center font-bold text-xl h-[130px] mt-5">
          <p>بنر تبلیغاتی</p>
        </div>

        <div className="flex flex-col mt-5 items-start w-[300px]">
          <p className="text-sm font-bold mb-2">کد معرف شما:</p>
          <input
            type="text"
            placeholder="9323023232"
            className="border-[1px] p-2 outline-none border-gray-300 rounded-lg placeholder:text-[12px]"
          />
        </div>

        <div className="flex items-center justify-start w-full mt-[4rem]">
          <img src="/icon/green.png" />
          <p className="text-[12px] w-[400px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>
        </div>

        <div className="flex items-center justify-start w-full mt-[1rem]">
          <img src="/icon/green.png" />
          <p className="text-[12px] w-[400px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>
        </div>
        <div className="mt-[3rem]">
          <button className="bg-[#AFC0FF] w-[150px] p-2 rounded-lg shadow-lg text-white">
            کپی
          </button>
        </div>
      </div>
    </div>
  );
}

export default InviteFriendsPopup;
