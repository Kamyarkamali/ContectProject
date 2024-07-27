import React from "react";

//component-module
import SearchBar from "../module/SearchBar";

function Header() {
  return (
    <div className="max-w-[1415px] mx-auto">
      <div className="flex justify-center relative">
        <img
          className="w-[1415px] h-[120px]"
          src={"/images/image.jpg"}
          alt="header"
        />
      </div>

      <div className="absolute top-0 flex justify-between w-full items-center mt-5">
        <div>
          <img
            src="/images/logo.png"
            className="cursor-pointer w-[90px] mr-6 object-cover"
          />
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
    </div>
  );
}

export default Header;
