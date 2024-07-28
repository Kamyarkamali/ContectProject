import Link from "next/link";
import React from "react";

function CategorysComponent() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center mt-[2rem]">
          <h1 className="text-right w-[330px] mb-[1rem] font-bold">
            محبوب ترین خدمات
          </h1>
          <div className="flex items-center gap-3 w-[370px] justify-center">
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img2.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">بیمه خودرو</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img1.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">نرم افزار</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center mt-[2rem] ">
          <h1 className="text-right w-[330px] mb-[1rem] font-bold">
            خدمات اینترنتی
          </h1>
          <div className="flex items-center gap-1 w-[350px] justify-center">
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img2.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">قبوض</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img1.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">ابلاغیه</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img1.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">سایر</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center mt-[2rem] mb-[4rem] ">
          <h1 className="text-right w-[330px] mb-[1rem] font-bold">
            خدمات تحقیقی
          </h1>
          <div className="flex items-center gap-1 w-[350px] justify-center">
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img2.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">قبوض</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img1.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">ابلاغیه</p>
            </div>
            <div className="flex flex-col items-center">
              <Link href={"/categortys/detailseCategory"}>
                <img
                  src="/images/img1.png"
                  className="w-[140px] rounded-lg object-cover"
                />
              </Link>
              <p className="text-sm mt-1 font-bold">سایر</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorysComponent;
