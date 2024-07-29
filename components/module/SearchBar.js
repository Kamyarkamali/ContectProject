import { useState } from "react";

function SearchBar() {
  const [serachValue, setSearchvalue] = useState("");

  const serachHandeler = () => {
    if (serachValue.length >= 0) {
      setSearchvalue("");
    }
  };

  return (
    <div className="z-30 mr-2">
      <div className="bg-white flex lg:w-[380px] w-[340px] gap-2 justify-center rounded-lg p-3 mt-3 border-[1px] border-gray-400  items-center">
        <img
          onClick={serachHandeler}
          className="cursor-pointer"
          src={"/images/icon.jpg"}
        />
        <input
          onChange={(e) => setSearchvalue(e.target.value)}
          value={serachValue}
          type="text"
          placeholder="جستوجوی خدمات"
          className="outline-none w-full text-gray-600 text-sm"
        />
      </div>
    </div>
  );
}

export default SearchBar;
