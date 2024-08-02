import React, { useEffect, useState } from "react";

function WellcomePop({ onClose }) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          onClose();
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-[360px] rounded-3xl h-[200px] bg-[#D4E7C5] relative flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mr-3">
          <img src="/pop/Checklist.png" />
          <p className="text-sm">تبریک می‌گم، ورود شما موفقیت‌آمیز بود</p>
        </div>
        <p className="text-[12px] text-right w-[340px] mt-3">
          به کانکت یار خوش آمدی احمد حمیدی عزیز، برای فعالیت بهتر خود می‌توانید
          از آموزش‌ها در بخش میزکار خود استفاده کنید.
        </p>
        <div className="flex items-center justify-center w-full mt-4">
          <div className="absolute right-3">
            <p className="text-sm">{countdown} ثانیه</p>
          </div>
          <button
            onClick={onClose}
            className="text-sm border-[1px] p-2 rounded-lg border-gray-700"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
}

export default WellcomePop;
