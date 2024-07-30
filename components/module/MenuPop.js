import { menuPop } from "@/data/Localdata";
import React from "react";

function MenuPop({ open, setOpen, onSelect }) {
  return (
    <div className="bg-white grid relative grid-cols-4 z-40 w-[500px] rounded-lg mx-auto p-8 gap-4">
      {menuPop.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            onSelect(item);
            setOpen(false);
          }}
        >
          <div className="flex flex-col cursor-pointer items-center bg-black h-[50px] p-3 rounded-lg justify-center w-[70px]">
            <img src={item.image} />
          </div>
          <p className="text-[12px] text-center w-[80px] font-bold mt-1">
            {item.title}
          </p>
        </div>
      ))}
      <div className="absolute border-b-4 top-4 w-[60px] flex justify-center left-[14rem] border-gray-700 cursor-pointer"></div>

      <div className="absolute left-6">
        <img
          src="/images/Arrow Left.png"
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default MenuPop;
