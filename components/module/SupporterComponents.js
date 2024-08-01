import React, { useState } from "react";
import TicketPopup from "./TicketPopup";

function SupporterComponents() {
  const [showTicketPopup, setShowTicketPopup] = useState(false);

  const handleTicketClick = () => {
    setShowTicketPopup(true);
  };

  const closeTicketPopup = () => {
    setShowTicketPopup(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col items-start mt-5 mr-5">
            <div className="flex items-center gap-2">
              <img src="/pop/Isolation Mode.png" />
              <p className="font-bold">اتصال به ایتا</p>
            </div>
            <p className="text-[12px] w-[340px] mt-2 text-gray-600">
              برای عملکرد بهتر از پشتیبانی میتوانید حساب خود را به ایتا متصل
              کنید و راحت‌تر با پشتیبانی ارتباط برقرار کنید
            </p>
          </div>
          <div className=" ml-5">
            <img src="/icon/Left 3.png" />
          </div>
        </div>
      </div>

      <div className="border-b-[1px] border-gray-300 w-full p-3"></div>

      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col items-start mt-5 mr-5">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleTicketClick}
            >
              <img src="/pop/Document.png" />
              <p className="font-bold">ثبت تیکت</p>
            </div>
            <p className="text-[12px] w-[340px] mt-2 text-gray-600">
              مشکل خود را درون فرم مورد بنویسید و ارسال کنید تا در اسرع وقت مشکل
              شما برطرف شود
            </p>
          </div>
          <div className=" ml-5">
            <img src="/icon/Left 3.png" className="cursor-pointer" />
          </div>
        </div>
      </div>

      {showTicketPopup && <TicketPopup onClose={closeTicketPopup} />}
    </div>
  );
}

export default SupporterComponents;
