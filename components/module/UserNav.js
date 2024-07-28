import { userNav } from "@/data/Localdata";
import Link from "next/link";
import React, { useState } from "react";

function UserNav() {
  const [selected, setSelected] = useState(null);

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
                  selected === item.id ? "text-orange-500" : "text-gray-600"
                }`}
                style={{ fill: selected === item.id ? "#FFA500" : "#808080" }}
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
