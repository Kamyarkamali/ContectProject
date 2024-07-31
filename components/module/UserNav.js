import { userNav } from "@/data/Localdata";
import Link from "next/link";
import React, { useState } from "react";

function UserNav() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="bg-[#FFFF] p-3 shadow-md border-t-2">
      <div className="flex justify-around">
        {userNav.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelected(item.id)}
          >
            <Link href={item.paths}>
              <img
                src={item.image}
                className={`w-[24px] ${
                  selected === item.id ? "filter-active" : "filter-default"
                }`}
                alt={item.title}
              />
            </Link>
            <Link href={item.paths}>
              <p
                className={`text-[13px] font-body text-gray-600 mt-1 ${
                  selected === item.id && "text-orange-500"
                }`}
              >
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserNav;
