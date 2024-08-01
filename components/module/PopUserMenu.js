import React, { useState } from "react";

function Popup({ title, initialContent, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState([initialContent]);

  const handleEditClick = (index) => {
    setIsEditing(index);
  };

  const handleChange = (event, index) => {
    const newAddresses = [...addresses];
    newAddresses[index] = event.target.value;
    setAddresses(newAddresses);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const addNewAddress = () => {
    setAddresses([...addresses, "آدرس جدید"]);
  };

  const handleDelete = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white p-5 flex flex-col items-center rounded shadow-lg w-full h-full">
        <div className="border-b-[7px] w-[70px] border-gray-700 rounded-lg"></div>

        <div className="flex mt-8 justify-between w-full">
          <div className="flex items-center gap-1 mr-6">
            <img src="/pop/Location.png" />
            <p className="text-[13px] font-bold">آدرس</p>
          </div>
          <div
            onClick={onClose}
            className="ml-6 border-[1px] p-2 border-gray-500 cursor-pointer rounded-[100%]"
          >
            <img src="/pop/Arrow Left.png" />
          </div>
        </div>

        {addresses.map((address, index) => (
          <div
            key={index}
            className="flex justify-between w-full mt-[2rem] items-center"
          >
            <div className="flex items-center">
              <img src="/pop/dayere.png" />
              {isEditing === index ? (
                <input
                  type="text"
                  value={address}
                  onChange={(e) => handleChange(e, index)}
                  className="text-[13px] border p-2 rounded-lg outline-none w-[240px]"
                />
              ) : (
                <p className="text-[13px]">{address}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div
                className="ml-2 cursor-pointer"
                onClick={() =>
                  isEditing === index ? handleSave() : handleEditClick(index)
                }
              >
                <img src={`/pop/Pen.png`} />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleDelete(index)}
              >
                <button className="bg-red-500 w-[60px] p-1 text-white text-[12px] rounded-lg">
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="border-b-2 w-full p-3"></div>

        <div className="mt-[17rem]">
          <button
            className="bg-[#AFC0FF] w-[160px] p-2 rounded-lg shadow-lg text-white"
            onClick={addNewAddress}
          >
            آدرس جدید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
