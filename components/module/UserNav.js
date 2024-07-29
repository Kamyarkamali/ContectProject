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
                className="w-[24px]"
                style={{
                  filter:
                    selected === item.id
                      ? "brightness(0) saturate(100%) invert(39%) sepia(100%) saturate(2301%) hue-rotate(358deg) brightness(106%) contrast(101%)"
                      : "none",
                }}
              />
            </Link>
            <p
              className={`text-sm mt-1 ${
                selected === item.id ? "text-orange-500" : "text-gray-600"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserNav;
