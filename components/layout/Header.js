import React from "react";

//component-module
import SearchBar from "../module/SearchBar";
import Link from "next/link";
import UserNav from "../module/UserNav";
import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  const router = useRouter();

  const { title } = router.query;

  console.log(title);

  // بررسی مسیر و انتخاب تصاویر بر اساس آن
  const headerImageSrc =
    pathname === "/categortys/detailseCategory"
      ? "/images/other-image.jpg"
      : "/images/image.jpg";
  const logoImageSrc =
    pathname === "/categortys/detailseCategory" ? title : "/images/logo.png";
  const headsetImageSrc =
    pathname === "/categortys/detailseCategory"
      ? "/icon/arrowleft.png"
      : "/images/Headset.png";

  const backHandeler = () => {
    router.back();
  };

  return (
    <div className="max-w-[1415px] mx-auto relative">
      <div className="flex justify-center relative">
        <img
          className="w-[1415px] h-[100px]"
          src={"/images/image.jpg"}
          alt="header"
        />
      </div>

      <div className="absolute top-0 flex justify-between w-full items-center mt-5">
        <div>
          <Link href={"/"}>
            <img
              src={"/images/logo.png"}
              className={`cursor-pointer w-[90px] mr-6 object-cover ${
                title ? "hidden" : "block"
              }`}
            />
            <p
              className={`mr-4 text-[17px] text-gray-700 font-bold ${
                title ? "block" : "hidden"
              }`}
            >
              {title}
            </p>
          </Link>
        </div>

        <div
          className={`${
            headsetImageSrc &&
            "h-[40px] flex flex-col items-center justify-center ml-4 rounded-[100%]"
          }`}
        >
          <img
            src={headsetImageSrc}
            onClick={backHandeler}
            className={`cursor-pointer`}
          />
        </div>
      </div>
      <div
        className={`flex justify-center mt-[-3.5rem] ${
          pathname === "/categortys/detailseCategory" ? "hidden" : "block"
        }`}
      >
        <SearchBar />
      </div>

      <main className="fixed bottom-0 right-0 left-0 z-50">
        <UserNav />
      </main>
    </div>
  );
}

export default Header;
