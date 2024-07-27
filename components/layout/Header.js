import React from "react";

//component-module
import SearchBar from "../module/SearchBar";
import Link from "next/link";
import UserNav from "../module/UserNav";

function Header() {
  return (
    <div className="max-w-[1415px] mx-auto relative">
      <div className="flex justify-center relative">
        <img
          className="w-[1415px] h-[120px]"
          src={"/images/image.jpg"}
          alt="header"
        />
      </div>

      <div className="absolute top-0 flex justify-between w-full items-center mt-5">
        <div>
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              className="cursor-pointer w-[90px] mr-6 object-cover"
            />
          </Link>
        </div>

        <div>
          <img
            src="/images/Headset.png"
            className="cursor-pointer w-[50px] ml-6 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[-3.7rem]">
        <SearchBar />
      </div>

      <main className="fixed bottom-0 right-0 left-0 z-50">
        <UserNav />
      </main>
    </div>
  );
}

export default Header;
