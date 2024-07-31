import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function NewAdvertising() {
  const [active, setActive] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/advertising") {
      setActive(true);
    } else if (router.pathname === "/advertising/BeforeAdvertis") {
      setActive(false);
    }
  }, [router.pathname]);

  const clickHandeler = () => {
    setActive(false);
  };

  const clickHandeler2 = () => {
    setActive(true);
  };

  return (
    <div className="w-[333px] rounded-lg mt-6 p-4 bg-[#EFEFEF]">
      <div className="flex items-center justify-around text-sm">
        <Link href="/advertising">
          <h2
            onClick={clickHandeler2}
            className={`rounded-lg cursor-pointer p-2 w-[140px] flex justify-center ${
              active ? "bg-white" : ""
            }`}
          >
            آگهی جدید
          </h2>
        </Link>
        <Link href="/advertising/BeforeAdvertis">
          <h2
            onClick={clickHandeler}
            className={`rounded-lg cursor-pointer p-2 w-[140px] flex justify-center ${
              !active ? "bg-white" : ""
            }`}
          >
            آگهی های گذشته
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default NewAdvertising;
