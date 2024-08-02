import React, { useState } from "react";

function WalletComponent() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [showWithdrawPopup, setShowWithdrawPopup] = useState(false);
  const [balance, setBalance] = useState(null);
  const [accounts, setAccounts] = useState([]); // آرایه برای نگهداری حساب‌های بانکی
  const [selectedAccount, setSelectedAccount] = useState(null); // حساب انتخاب شده
  const [newAccount, setNewAccount] = useState(""); // شماره شبا جدید برای اضافه کردن

  const handleChargeClick = () => {
    setShowPopup(true);
  };

  const handleWithdrawClick = () => {
    setShowWithdrawPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setShowCardPopup(false);
    setShowWithdrawPopup(false);
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    setBalance(amount);
    setShowPopup(false);
    setShowCardPopup(true);
  };

  const handleCardPopupSubmit = (event) => {
    event.preventDefault();
    const sheba = event.target.elements.sheba.value;
    if (sheba) {
      const newAccount = `IR ${sheba}`;
      setAccounts([...accounts, newAccount]);
      setNewAccount(""); // پاک کردن شماره شبا پس از اضافه کردن
      setShowCardPopup(false);
    }
  };

  const handleWithdrawPopupSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.elements.withdrawAmount.value;
    if (selectedAccount) {
      alert(`برداشت ${amount} ریال به حساب ${selectedAccount}`);
    } else {
      alert("لطفا یک حساب را انتخاب کنید.");
    }
    setShowWithdrawPopup(false);
  };

  const handleAddAccount = () => {
    setShowCardPopup(true);
  };

  const handleAccountClick = (account) => {
    setSelectedAccount(account);
  };

  const handleNewAccountChange = (event) => {
    setNewAccount(event.target.value);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("fa-IR").format(number);
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
                {formatNumber(balance)} میلیون ریال
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
            <div
              onClick={handleWithdrawClick}
              className="bg-[#5C7878] w-[70px] h-[70px] flex justify-center items-center rounded-[100%] cursor-pointer"
            >
              <img src="/wallet/icon (2).png" />
            </div>
            <p className="text-white text-[13px] text-center mt-2">
              تسویه حساب
            </p>
          </div>

          <div className="flex flex-col">
            <div
              onClick={handleAddAccount}
              className="bg-[#5C7878] w-[70px] h-[70px] flex justify-center items-center rounded-[100%] cursor-pointer"
            >
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
              <div className="border-b-[5px] border-gray-700 w-[50px] rounded-lg"></div>
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
                  onBlur={(e) => {
                    e.target.value = formatNumber(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-[#AFC0FF] w-[300px] text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  پرداخت
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showCardPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[400px] h-[470px] p-6 rounded-lg">
            <div className="flex justify-center">
              <div className="border-b-[5px] border-gray-700 w-[50px] rounded-lg"></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mt-9">
                <img src="/wallet/Card Double 2.png" />
                <h2 className="text-sm font-bold">افزودن حساب</h2>
              </div>
              <div
                onClick={handlePopupClose}
                className="border-[1px] p-1 rounded-[100%] border-gray-400 cursor-pointer"
              >
                <img src="/wallet/Arrow Left.png" />
              </div>
            </div>

            <form onSubmit={handleCardPopupSubmit}>
              <div className="flex flex-col gap-3 mt-4">
                <p className="text-[12px]">
                  برای افزودن حساب بانکی برای اطمینان بیشتر و طبق قانون نیاز است
                  پس از وارد کردن مشخصات زیر احراز هویت کارت را انجام دهید
                </p>

                <label className="text-sm font-bold">شماره کارت:</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="شماره کارت را وارد کنید"
                  className="border outline-none placeholder:text-sm p-2 rounded w-full mb-4"
                />
                <label className="text-sm font-bold">شماره شبا:</label>
                <input
                  type="text"
                  name="sheba"
                  placeholder="شماره شبا را وارد کنید"
                  value={newAccount}
                  onChange={handleNewAccountChange}
                  className="border outline-none placeholder:text-sm p-2 rounded w-full mb-4"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-[#AFC0FF] w-[300px] text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  تایید
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showWithdrawPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[400px] h-fit p-6 rounded-lg">
            <div className="flex justify-center">
              <div className="border-b-[5px] border-gray-700 w-[50px] rounded-lg"></div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mt-9">
                <img src="/wallet/Card.png" />
                <h2 className="text-sm font-bold">برداشت وجه</h2>
              </div>
              <div
                onClick={handlePopupClose}
                className="border-[1px] p-1 rounded-[100%] border-gray-400 cursor-pointer"
              >
                <img src="/wallet/Arrow Left.png" />
              </div>
            </div>

            <form onSubmit={handleWithdrawPopupSubmit}>
              <div className="flex flex-col gap-3 mt-4">
                <label className="text-[13px] font-bold">
                  مبلغ مورد نظر را وارد کنید:
                </label>
                <input
                  type="number"
                  name="withdrawAmount"
                  placeholder="2000000 میلیون ریال"
                  className="border placeholder:text-[12px] p-2 rounded w-full mb-4"
                />
                <div>
                  <label className="text-sm font-bold">
                    حساب مقصد را وارد کنید:
                  </label>
                  <p className="text-[12px]">
                    حسابی که قصد دارید مبلغ مورد نظر درون آن واریز شود را انتخاب
                    کنید و در صورت نیاز آن را وارد کنید
                  </p>
                </div>
                <div className="flex flex-col bg-gray-200 p-2 border-[1px] rounded-lg">
                  {accounts.length > 0 ? (
                    accounts.map((account, index) => (
                      <div
                        key={index}
                        onClick={() => handleAccountClick(account)}
                        className={`flex items-center justify-between mb-2 p-2 cursor-pointer ${
                          selectedAccount === account
                            ? "border-2 border-green-500"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <img src="/wallet/Iconex (2).png" />
                          <img src="/wallet/Group 1.png" />
                        </div>
                        <p>{account}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      حسابی اضافه نشده است
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-5">
                <button
                  type="submit"
                  className="bg-[#AFC0FF] w-[300px] text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  برداشت
                </button>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={handleAddAccount}
                  className="text-sm rounded-lg text-white bg-green-400 p-2 flex items-center gap-2"
                >
                  <img src="/wallet/Card.png" className="w-[20px]" />
                  کارت جدید
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
