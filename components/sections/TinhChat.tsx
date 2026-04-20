import React, { useState } from "react";
import { tinhChatData } from "../../data/contentData";

export default function TinhChat() {
  const [showTinhChat, setShowTinhChat] = useState(false);
  const [showBanChat, setShowBanChat] = useState(false);
  const [showVaiTro, setShowVaiTro] = useState(false);
  const [showConclusions, setShowConclusions] = useState(false);

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start px-2 sm:px-4 lg:px-8 font-sans transition-all duration-700 ease-in-out pb-20">
      <div className="w-full max-w-[800px] flex flex-col items-center gap-4 sm:gap-6 mt-4 sm:mt-8">
        {/* === 1. TÍNH CHẤT === */}
        <div className="flex w-full justify-center transition-all duration-700">
          <div
            className={`flex flex-col md:flex-row items-center relative z-20 transition-all duration-700 ${showTinhChat ? "w-full justify-start" : "w-[180px] sm:w-[220px] justify-center"}`}
          >
            <button
              onClick={() => setShowTinhChat(!showTinhChat)}
              className="w-[180px] h-[60px] sm:w-[220px] sm:h-[70px] shrink-0 bg-gradient-to-b from-[#bd0000] to-[#800000] hover:from-[#cc0000] hover:to-[#990000] text-white font-semibold text-lg sm:text-xl rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] z-20"
            >
              Tính chất
            </button>

            {/* Content (Expands to the right on Desktop) */}
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hidden md:block origin-left
              ${showTinhChat ? "w-full flex-1 opacity-100 md:-ml-6" : "w-0 max-w-0 opacity-0 ml-0"}`}
            >
              <div className="min-h-[70px] bg-white border border-[#b30000] rounded-r-2xl py-4 pr-5 pl-10 shadow-sm text-gray-800 text-[13px] sm:text-[15px] font-semibold leading-relaxed w-[540px] lg:w-[604px] shrink-0 flex items-center">
                {tinhChatData.tinhChat}
              </div>
            </div>

            {/* Content (Expands down on Mobile) */}
            <div
              className={`md:hidden transition-all duration-500 overflow-hidden w-full ${showTinhChat ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
            >
              <div className="bg-white border border-[#b30000] rounded-2xl p-4 shadow-sm text-gray-800 text-[13px] font-semibold leading-relaxed">
                {tinhChatData.tinhChat}
              </div>
            </div>
          </div>
        </div>

        {/* === 2. BẢN CHẤT === */}
        <div
          className={`relative w-full flex flex-col items-center justify-center transition-all duration-700 min-h-[110px] sm:min-h-[130px]`}
        >
          <button
            onClick={() => setShowBanChat(!showBanChat)}
            className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] shrink-0 bg-gradient-to-b from-[#bd0000] to-[#800000] hover:from-[#cc0000] hover:to-[#990000] text-white font-semibold text-lg sm:text-xl rounded-full shadow-[0_5px_15px_rgba(179,0,0,0.4)] border-[3px] border-white transition-all duration-300 hover:shadow-[0_8px_25px_rgba(179,0,0,0.6)] hover:scale-110 z-20 flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 relative"
          >
            <span className="drop-shadow-md">Bản chất</span>
          </button>

          {/* Desktop version (Left & Right boxes) */}
          <div className="hidden md:flex w-full justify-center items-center gap-[90px] lg:gap-[110px] absolute left-0 right-0 h-[80%] px-0">
            {/* Box 1 (Trái) */}
            <div
              className={`transition-all duration-900 ease-in-out origin-right overflow-hidden flex justify-end
              ${showBanChat ? "w-full flex-1 opacity-100" : "w-0 max-w-0 opacity-0"}`}
            >
              <div className="h-full min-h-[80px] bg-[#fff9f0] border border-[#f5cc84] rounded-l-2xl py-4 pl-5 pr-4 shadow-sm text-gray-800 text-[13px] sm:text-[14px] font-semibold leading-normal w-[350px] shrink-0 flex items-center justify-end text-right">
                {tinhChatData.banChat[0]}
              </div>
            </div>

            {/* Box 2 (Phải) */}
            <div
              className={`transition-all duration-900 ease-in-out origin-left overflow-hidden flex justify-start
              ${showBanChat ? "w-full flex-1 opacity-100" : "w-0 max-w-0 opacity-0"}`}
            >
              <div className="h-full min-h-[80px] bg-[#fff9f0] border border-[#f5cc84] rounded-r-2xl py-4 pr-5 pl-4 shadow-sm text-gray-800 text-[13px] sm:text-[14px] font-semibold leading-normal w-[350px] shrink-0 flex items-center justify-start text-left">
                {tinhChatData.banChat[1]}
              </div>
            </div>
          </div>

          {/* Mobile version (Stacked) */}
          <div className="md:hidden flex flex-col w-full gap-3 mt-4">
            <div
              className={`transition-all duration-500 overflow-hidden w-full ${showBanChat ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 shadow-sm text-gray-800 text-[13px] font-semibold leading-snug">
                {tinhChatData.banChat[0]}
              </div>
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden w-full ${showBanChat ? "max-h-[300px] opacity-100 delay-100" : "max-h-0 opacity-0"}`}
            >
              <div className="bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 shadow-sm text-gray-800 text-[13px] font-semibold leading-snug">
                {tinhChatData.banChat[1]}
              </div>
            </div>
          </div>
        </div>

        {/* === 3. VAI TRÒ === */}
        <div
          className={`flex flex-col items-center w-full gap-3 transition-all duration-700 mt-2`}
        >
          {/* Nút bự Vai trò */}
          <button
            onClick={() => setShowVaiTro(!showVaiTro)}
            className="w-full h-[60px] sm:h-[70px] bg-gradient-to-b from-[#bd0000] to-[#800000] hover:from-[#cc0000] hover:to-[#990000] text-white font-semibold text-lg sm:text-xl rounded-2xl sm:rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] z-10 flex items-center justify-center"
          >
            Vai trò
          </button>

          {/* Hai Cột Box */}
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 transition-all duration-700 ease-out origin-top
            ${showVaiTro ? "grid-rows-[1fr] opacity-100 scale-y-100 mt-0" : "grid-rows-[0fr] opacity-0 scale-y-0 h-0 overflow-hidden pointer-events-none"}`}
          >
            <div className="min-h-0">
              <div className="bg-white border border-[#b30000] rounded-b-2xl rounded-t-sm p-4 sm:p-5 shadow-sm text-gray-800 text-[13px] sm:text-[14px] font-semibold leading-normal h-full">
                {tinhChatData.vaiTro[0]}
              </div>
            </div>
            <div className="min-h-0">
              <div className="bg-white border border-[#b30000] rounded-b-2xl rounded-t-sm p-4 sm:p-5 shadow-sm text-gray-800 text-[13px] sm:text-[14px] font-semibold leading-normal h-full">
                {tinhChatData.vaiTro[1]}
              </div>
            </div>
          </div>

          {/* Mũi tên Conclusion */}
          <div
            className={`w-full flex justify-center transition-all duration-[600ms] z-10 
            ${showVaiTro ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none hidden"}`}
          >
            <button
              onClick={() => setShowConclusions(!showConclusions)}
              className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1.5 shadow-sm transition-all hover:scale-110 group mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showConclusions ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Conclusions Box */}
          <div
            className={`w-full flex flex-col gap-3 transition-all duration-700 origin-top
            ${showConclusions && showVaiTro ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none hidden"}`}
          >
            {tinhChatData.conclusions.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 shadow-sm w-full"
              >
                <div className="text-[#b30000] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-800 font-semibold text-[13px] sm:text-sm leading-snug">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
