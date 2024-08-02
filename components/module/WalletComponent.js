import React, { useState } from "react";

function WalletComponent() {
  const [showPopup, setShowPopup] = useState(false);
  const [balance, setBalance] = useState(null);

  const handleChargeClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    setBalance(amount);
    setShowPopup(false);
  };

  return (
    <div className="bg-[#1B4242] w-full h-screen">
      <div className="relative">
        <div className="absolute left-0">
          <img src="/wallet/bg.png" className="w-[200px]" />
        </div>
        <div className="flex justify-between items-center">
          <img src="/wallet/icon.png" className="mr-5 mt-5 cursor-pointer" />
          <div className="border-[1px] ml-5 mt-5 border-gray-400 cursor-pointer p-1 rounded-[100%]">
            <img src="/wallet/Bell 2.png" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-bold text-white">کیف پول</p>
          {balance === null ? (
            <>
              <img src="/wallet/Vector.png" className="w-[30px]" />
              <p className="text-xl font-bold text-white">
                حسابی وارد نشده است
              </p>
            </>
          ) : (
            <>
              <p className="text-xl font-bold text-white">
                {balance} میلیون ریال
              </p>
            </>
          )}
        </div>

        <div className="flex gap-8 items-center justify-center mt-5">
          <div className="flex flex-col">
            <div
              onClick={handleChargeClick}
              className="border cursor-pointer bg-white w-[70px] h-[70px] flex justify-center items-center rounded-[100%]"
            >
              <p className="text-[40px]">+</p>
            </div>
            <p className="text-white text-[13px] text-center mt-2">شارژ حساب</p>
          </div>

          <div className="flex flex-col">
            <div className="bg-[#5C7878] w-[70px] h-[70px] flex justify-center items-center rounded-[100%]">
              <img src="/wallet/icon (2).png" />
            </div>
            <p className="text-white text-[13px] text-center mt-2">
              تسویه حساب
            </p>
          </div>

          <div className="flex flex-col">
            <div className="bg-[#5C7878] w-[70px] h-[70px] flex justify-center items-center rounded-[100%]">
              <img src="/wallet/Card.png" />
            </div>
            <p className="text-white text-[13px] text-center mt-2">
              افزودن حساب
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-3xl h-[500px] mt-6">
        <div className="flex justify-center">
          <div className="border-b-[6px] border-gray-700 mt-4 rounded-lg w-[60px]"></div>
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex justify-center">
            <img src="/wallet/illu (1).png" className="w-[350px]" />
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-6 font-bold text-xl">
              تا این لحظه تراکنشی وجود نداشته است
            </p>
            <p className="text-[11px] text-gray-500 text-center">
              میتوانید با زدن بروی دکمه شارژ حساب ، اولین تراکنش کیف پول خود را
              انجام دهید{" "}
            </p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[400px] h-[280px] p-6 rounded-lg">
            <div className="flex justify-center">
              <div className="border-b-[5px] border-gray-700 w-[50px] rounded-lg "></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mt-9">
                <img src="/wallet/Card Double 2.png" />
                <h2 className="text-sm font-bold">شارژ حساب</h2>
              </div>
              <div
                onClick={handlePopupClose}
                className="border-[1px] p-1 rounded-[100%] border-gray-400 cursor-pointer"
              >
                <img src="/wallet/Arrow Left.png" />
              </div>
            </div>

            <form onSubmit={handlePopupSubmit}>
              <div className="flex flex-col gap-3 mt-4">
                <label className="text-sm font-bold">
                  مبلغ مورد نظر را وارد کنید:
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="مبلغ را وارد کنید"
                  className="border placeholder:text-sm p-2 rounded w-full mb-4"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-[#AFC0FF] w-[300px] text-white px-4 py-2 rounded-lg  shadow-lg"
                >
                  پرداخت
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletComponent;
