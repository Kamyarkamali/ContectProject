import { services } from "@/data/Localdata";
import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="mt-[1rem] max-w-[330px] mx-auto">
      <div className="grid  grid-cols-4 gap-7">
        {services.map((item) => (
          <Link key={item.id} href={item.paths}>
            <img
              src={item.images}
              alt="services"
              className="w-[100px] object-cover hover:scale-105 duration-300"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
