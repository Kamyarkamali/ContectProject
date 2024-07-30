import { useRouter } from "next/router";
import React from "react";

function Gif({ setclose }) {
  const router = useRouter();

  const closeHandeler = () => {
    setclose(true);

    setTimeout(() => {
      router.push("/produtcPrice");
    }, 2000);
  };

  return (
    <div className="fixed left-0 top-0 w-[100%] bg-white h-[100%]">
      <div>
        <img src="/icon/gif.gif" />
        <div className="flex flex-col items-center">
          <p>آگهی شما با موفقیت ارسال شد</p>
          <p>لطفا منتظر باشید تا فروشندگان با شما تماس برقرار بکنند</p>
          <button
            onClick={closeHandeler}
            className="bg-blue-500 w-[120px] p-2 text-white font-bold mt-4 rounded-lg text-sm"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gif;
