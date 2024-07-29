import Link from "next/link";
import React from "react";

function Button() {
  return (
    <div>
      <Link href={"/advertising/sendrequest"}>
        <button className="bg-green-500 z-50 flex shadow-lg shadow-green-300 items-center text-sm p-4 rounded-lg text-white">
          <img src="/icon/Send.png" className="w-[17px]" />
          ارسال آگهی جدید
        </button>
      </Link>
    </div>
  );
}

export default Button;
