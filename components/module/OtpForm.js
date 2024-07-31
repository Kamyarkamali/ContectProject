import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";

function OtpForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isValidOtp, setIsValidOtp] = useState(false);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const router = useRouter();

  const backHandeler = () => {
    router.back();
  };

  const clickHandler = () => {
    if (isValidOtp) {
      // Logic for valid OTP submission
      console.log("Valid OTP submitted");
    } else {
      // Logic for invalid OTP
      console.log("Invalid OTP");
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsButtonDisabled(false);
    }
  }, [timer]);

  useEffect(() => {
    // Simulating OTP validation with a hardcoded OTP (e.g., "1234")
    const otpCode = otp.join("");
    if (otpCode.length === 4 && otpCode === "1234") {
      setIsValidOtp(true);
    } else {
      setIsValidOtp(false);
    }
  }, [otp]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 3) {
        inputRefs.current[index + 1].focus();
      } else if (value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setTimer(60);
    setIsButtonDisabled(true);
    // Logic to resend OTP
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="font-bold text-xl">کد تایید به شماره شما ارسال شد</h2>
        <p className="text-sm w-[280px] text-center leading-6">
          یک کد تایید چهار رقمی به شماره تلفن شما ارسال شده است، لطفا کد تایید
          را وارد کنید
        </p>
      </div>
      <div className="flex justify-start w-[400px] mt-[2rem]">
        <p className="text-[11px] text-blue-500">091243289999</p>
      </div>
      <div className="flex justify-center gap-3 mt-5">
        {otp.map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`w-[80px] h-[80px] text-center text-lg border rounded outline-none ${
              isValidOtp ? "border-green-500" : "border-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center justify-center mt-5 text-sm">
        <p className="text-blue-500">{timer} ثانیه تا ارسال کد</p>
        <button
          onClick={handleResend}
          disabled={isButtonDisabled}
          className={`text-green-500 ${
            isButtonDisabled ? "opacity-50" : "opacity-100"
          }`}
        >
          ارسال مجدد
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-[4rem] items-center justify-center">
        <Link href={"/userPanele"}>
          <button
            onClick={clickHandler}
            className={`bg-blue-400 p-2 w-[130px] rounded-lg text-white shadow-lg ${
              isValidOtp ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
          >
            ورود
          </button>
        </Link>
        <button onClick={backHandeler} className="text-[15px]">
          برگشت
        </button>
      </div>

      <div className="mb-[8.1rem]"></div>
    </div>
  );
}

export default OtpForm;
