import { useRouter } from "next/router";

function Gif({ onClose }) {
  const router = useRouter();

  const handleButtonClick = () => {
    onClose();
    router.push("/fainalprice");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[300px]">
        <img src="/icon/gif.gif" className="w-full h-auto mb-4" />
        <div className="flex flex-col items-center text-center">
          <p className="mb-2 font-bold">آگهی شما با موفقیت ارسال شد</p>
          <p className="text-sm mb-4">
            لطفا منتظر باشید تا فروشندگان با شما تماس برقرار بکنند
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 w-full py-2 text-white font-bold rounded-lg text-sm"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gif;
