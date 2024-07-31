import Link from "next/link";
import React from "react";

function Button() {
  return (
    <div className="mb-[6rem] mt-[3rem]">
      <Link href={"/advertising/sendrequest"}>
        <button className="bg-green-400 z-50 w-[160px] flex shadow-lg justify-center shadow-gray-400 items-center text-sm p-3 rounded-lg text-white">
          <img src="/icon/Send.png" className="w-[22px]" />
          ارسال آگهی جدید
        </button>
      </Link>
    </div>
  );
}

export default Button;
