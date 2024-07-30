import React, { useState } from "react";
import Switch from "react-switch";
import { useDarkMode } from "@/context/DarkModeContext";
import QuastionPop from "./QuastionPop";
import Privepop from "./PrivetePop";
import ConditionsPop from "./ConditionsPop";
import Contactpop from "./Contactpop";

function SettingsComponent() {
  const [notif, setNotif] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [popups, setPopups] = useState({
    question: false,
    privete: false,
    conditionsPop: false,
    contact: false,
  });

  const handlePopupToggle = (popup) => {
    setPopups((prev) => ({
      ...prev,
      [popup]: !prev[popup],
    }));
  };

  return (
    <div className="flex flex-col gap-4 items-center py-7 dark:bg-slate-800 dark:text-white transition-all duration-300 ease-in">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center mr-5">
          <div>
            <img src="/iconsettings/1.png" alt="Notification Icon" />
            {notif ? (
              <p className="text-[12px] font-bold">فعال</p>
            ) : (
              <p className="text-[12px] font-bold">غیرفعال</p>
            )}
          </div>
          <p className="font-bold mb-6">اعلانات</p>
        </div>
        <div className="ml-5">
          <Switch
            checked={notif}
            onChange={() => setNotif((prev) => !prev)}
            offColor="#bbbbbb"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>

      <div className="border-b-[1px] w-full border-gray-300 p-2"></div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center mr-5">
          <div>
            <img src="/iconsettings/6.png" alt="Theme Icon" />
            {darkMode ? (
              <p className="text-[12px] font-bold">حالت تاریک</p>
            ) : (
              <p className="text-[12px] font-bold">حالت روشن</p>
            )}
          </div>
          <p className="font-bold mb-6">پس زمینه</p>
        </div>
        <div className="ml-5">
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            offColor="#bbbbbb"
            onColor="#000000"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>

      <div className="border-b-[1px] w-full border-gray-300 p-2"></div>

      <div className="border flex justify-center items-center w-[330px] h-[140px] bg-gray-200 rounded-lg">
        <p>بنر تبلیغاتی</p>
      </div>

      <div className="border-b-[1px] w-full border-gray-300 p-2"></div>

      <div className="w-full flex justify-between">
        <div className="flex items-center justify-start gap-2 mr-5">
          <img src="/iconsettings/3.png" />
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => handlePopupToggle("question")}
          >
            <p className="font-bold">پرسش های متداول</p>
            <p className="text-[11px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
            </p>
          </div>
        </div>
        <div>
          <img src="/icon/Left 3.png" className="ml-5" />
        </div>
      </div>

      <div className="border-b-[1px] w-full border-gray-300 p-2"></div>

      <div className="w-full flex justify-between">
        <div
          onClick={() => handlePopupToggle("privete")}
          className="flex cursor-pointer items-center justify-start gap-2 mr-5"
        >
          <img src="/iconsettings/5.png" />
          <div className="flex flex-col">
            <p className="font-bold">حریم خصوصی</p>
            <p className="text-[11px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
            </p>
          </div>
        </div>
        <div>
          <img src="/icon/Left 3.png" className="ml-5" />
        </div>
      </div>

      <div className="border-b-[1px] w-full border-gray-300 p-2"></div>

      <div className="w-full flex justify-between">
        <div
          onClick={() => handlePopupToggle("conditionsPop")}
          className="flex cursor-pointer items-center justify-start gap-2 mr-5"
        >
          <img src="/iconsettings/4.png" />
          <div className="flex flex-col">
            <p className="font-bold">شرایط استفاده</p>
            <p className="text-[11px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
            </p>
          </div>
        </div>
        <div>
          <img src="/icon/Left 3.png" className="ml-5" />
        </div>
      </div>

      <div className="border-b-[1px] w-full border-gray-300 p-2"></div>

      <div className="w-full flex justify-between">
        <div
          onClick={() => handlePopupToggle("contact")}
          className="flex cursor-pointer items-center justify-start gap-2 mr-5"
        >
          <img src="/iconsettings/2.png" />
          <div className="flex flex-col">
            <p className="font-bold">تماس با ما</p>
            <p className="text-[11px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
            </p>
          </div>
        </div>
        <div>
          <img src="/icon/Left 3.png" className="ml-5" />
        </div>
      </div>

      <div
        className={`absolute transition-all duration-300 ease-in ${
          popups.question ? "top-0" : "top-[-200%]"
        } bg-white w-full h-[130vh]`}
      >
        <QuastionPop onClose={() => handlePopupToggle("question")} />
      </div>

      <div
        className={`absolute transition-all duration-300 ease-in ${
          popups.privete ? "top-0" : "top-[-200%]"
        } bg-white w-full h-[130vh]`}
      >
        <Privepop onClose={() => handlePopupToggle("privete")} />
      </div>

      <div
        className={`absolute transition-all duration-300 ease-in ${
          popups.conditionsPop ? "top-0" : "top-[-200%]"
        } bg-white w-full h-[130vh]`}
      >
        <ConditionsPop onClose={() => handlePopupToggle("conditionsPop")} />
      </div>

      <div
        className={`absolute transition-all duration-300 ease-in ${
          popups.contact ? "top-0" : "top-[-200%]"
        } bg-white w-full h-[130vh]`}
      >
        <Contactpop onClose={() => handlePopupToggle("contact")} />
      </div>

      <div className="mb-[6rem]"></div>
    </div>
  );
}

export default SettingsComponent;
