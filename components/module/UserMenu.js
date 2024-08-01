import { menuUser } from "@/data/Localdata";
import Link from "next/link";
import React, { useState } from "react";
import Popup from "./PopUserMenu"; // پاپ‌آپ پیش‌فرض
import CommentPopup from "./CommentPopup"; // پاپ‌آپ نظرات شما
import InviteFriendsPopup from "./InviteFriendsPopup"; // پاپ‌آپ دعوت دوستان

function UserMenu() {
  const [popupData, setPopupData] = useState({
    show: false,
    title: "",
    content: "",
    type: "", // اضافه کردن نوع پاپ‌آپ
  });

  const handleItemClick = (title, content, type = "") => {
    setPopupData({ show: true, title, content, type });
  };

  const closePopup = () => {
    setPopupData({ show: false, title: "", content: "", type: "" });
  };

  return (
    <div className="w-full">
      {menuUser.map((item) => (
        <div key={item.id} className="flex items-center border-b-[1px] p-3">
          {item.paths ? (
            <Link
              className="flex items-center gap-2 hover:scale-105 duration-300"
              href={item.paths}
            >
              <img src={item.image} className="w-[20px] cursor-pointer" />
              <p className="text-sm">{item.title}</p>
            </Link>
          ) : (
            <div
              className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer"
              onClick={() =>
                handleItemClick(
                  item.title,
                  `${item.title} محتوای مربوط به`,
                  item.title
                )
              }
            >
              <img src={item.image} className="w-[20px]" />
              <p className="text-sm">{item.title}</p>
            </div>
          )}
        </div>
      ))}

      {popupData.show && popupData.type === "نظرات شما" && (
        <CommentPopup
          title={popupData.title}
          content={popupData.content}
          onClose={closePopup}
        />
      )}

      {popupData.show && popupData.type === "دعوت دوستان" && (
        <InviteFriendsPopup
          title={popupData.title}
          content={popupData.content}
          onClose={closePopup}
        />
      )}

      {popupData.show &&
        popupData.type !== "نظرات شما" &&
        popupData.type !== "دعوت دوستان" && (
          <Popup
            title={popupData.title}
            content={popupData.content}
            onClose={closePopup}
          />
        )}
    </div>
  );
}

export default UserMenu;
