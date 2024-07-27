import { userNav } from "@/data/Localdata";
import React, { useState } from "react";

function UserNav() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#FFFF] p-3 shadow-md border-t-2">
      <div className="flex justify-around">
        {userNav.map((item) => (
          <div key={item.id} className="flex  flex-col items-center">
            <img src={item.image} className="w-[24px]" />
            <p className="font-bold text-sm text-gray-600 mt-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserNav;
