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
    <div className="flex items-center justify-between w-[195px] text-red-600 text-[10px] mt-1">
      <img src="/images/oclock.png" />
      <Countdown date={endDate} renderer={renderer} />
    </div>
  );
};

export default App;
