import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>زمان به پایان رسیده است!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div>
        <span>{days} روز </span>
        <span>{hours} ساعت </span>
        <span>{minutes} دقیقه </span>
        <span>{seconds} ثانیه </span>
      </div>
    );
  }
};

const App = () => {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 100);

  return (
    <div className="flex items-center justify-center w-[195px] text-red-600 text-[10px]">
      <h1 className="text-center">زمان باقی‌مانده :</h1>
      <Countdown date={endDate} renderer={renderer} />
    </div>
  );
};

export default App;
