import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-7 gap-3">
      <div>
        <Link href={"/"}>
          <img src="/images/banner1.png" className="object-cover w-[350px]" />
        </Link>
      </div>

      <div>
        <Link href={"/"}>
          <img src="/images/banner2.png" className="object-cover w-[350px]" />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
