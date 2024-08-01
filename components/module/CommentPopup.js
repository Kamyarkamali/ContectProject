import React, { useState } from "react";

function CommentPopup({ title, content, onClose }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSave = () => {
    // Save the comment (you can add your logic here)
    console.log("Saved comment:", comment);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white p-5 flex flex-col items-center rounded shadow-lg w-full h-full">
        <div className="border-b-[7px] w-[70px] border-gray-700 rounded-lg"></div>
        <div className="flex mt-8 justify-between w-full">
          <div className="flex items-center gap-1 mr-6">
            <img src="/pop/Chat 2.png" />
            <p className="text-[13px] font-bold">{title}</p>
          </div>
          <div
            onClick={onClose}
            className="ml-6 border-[1px] p-2 border-gray-500 cursor-pointer rounded-[100%]"
          >
            <img src="/pop/Arrow Left.png" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-[3rem]">
          <div className="flex items-center gap-2 mr-4">
            <img
              src="/images/useravatar.png"
              className="w-[40px] rounded-[100%]"
            />
            <p className="text-[12px] font-bold">امتیاز به آگهی طراحی لگو</p>
          </div>
          <div className="ml-4">
            <img src="/icon/Settings.png" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[13px] w-[340px] text-gray-600 leading-7 mr-3 mt-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>
          <div className="flex gap-1 items-center mt-6 justify-around w-full">
            <p className="text-[13px]">تعداد ستاره های داده شده:</p>
            <div className="flex gap-3">
              <img src="/icon/Group.png" />
              <img src="/icon/Group.png" />
              <img src="/icon/Group.png" />
              <img src="/icon/Group.png" />
              <img src="/icon/Group.png" />
            </div>
          </div>
        </div>

        <div className="mt-[11rem]">
          <button className="bg-[#AFC0FF] p-2 w-[160px] rounded-lg shadow-lg text-white">
            دانلود
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentPopup;
