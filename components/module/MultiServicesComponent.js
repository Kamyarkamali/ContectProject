import { servicesImages } from "@/data/Localdata";
import Link from "next/link";
import React from "react";

function MultiServicesComponent() {
  return (
    <div className="py-10 max-w-[300px] mx-auto">
      <div className="flex items-center gap-2 mr-[-1rem] mb-[1rem]">
        <img src="/icon/icon.png" />
        <span className="font-bold">خدمات چندگانه</span>
      </div>

      <div className="grid grid-cols-2 relative">
        {servicesImages.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-t-0 flex justify-center p-4"
          >
            <Link href={"/multipleservices"}>
              <img
                src={item.images}
                className="object-cover cursor-pointer hover:scale-105 duration-300"
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-center gap-10">
        <img src="/images/banner3.png" className="object-cover w-[350px]" />
        <div className="bg-[#E2E2E2] w-[300px] flex flex-col items-center justify-center rounded-lg h-[100px] mb-8">
          <p className="text-xl">بنر تبلیغاتی</p>
        </div>
      </div>
    </div>
  );
}

export default MultiServicesComponent;
