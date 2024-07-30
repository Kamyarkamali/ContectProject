import { menuUser } from "@/data/Localdata";
import Link from "next/link";
import React from "react";

function UserMenu() {
  return (
    <div className="w-full">
      {menuUser.map((item) => (
        <div key={item.id} className="flex items-center border-b-[1px] p-3">
          <Link
            className="flex items-center gap-2 hover:scale-105 duration-300"
            href={item.paths}
          >
            <img src={item.image} className="w-[20px] cursor-pointer" />
            <p className="text-sm">{item.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserMenu;
