import { useRouter } from "next/router";
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

const TimerComponent = () => {
  const endDate = new Date();
  endDate.setHours(endDate.getHours() + 100);
  const { pathname } = useRouter();

  return (
    <div
      className={`flex  items-center justify-start gap-2 w-[195px] ${
        pathname === "/Subscription" ? "text-blue-600" : "text-red-600 "
      } text-[10px] mt-1`}
    >
      <img src="/images/oclock.png" />
      <Countdown date={endDate} renderer={renderer} />
    </div>
  );
};

export default TimerComponent;
