import React, { useState } from "react";
import { khaiQuatData } from "../../data/contentData";

export default function KhaiQuat() {
  const [activeMilestones, setActiveMilestones] = useState<number[]>([]);
  const [showGeneral, setShowGeneral] = useState(false);
  const [showGeneralDetails, setShowGeneralDetails] = useState(false);
  const [showConclusions, setShowConclusions] = useState(false);

  const handleMilestoneClick = (index: number) => {
    setActiveMilestones((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center p-2 relative font-sans transition-all duration-700 ease-in-out pb-10">
      <div className="w-full max-w-6xl flex flex-col items-center justify-start gap-4 py-2 flex-1">
        {/* ROW 1: Vùng Tiêu đề & Bullet points */}
        <div
          className={`flex w-full gap-4 transition-all duration-1000 ease-out flex-shrink-0 mt-2
          ${!showGeneral ? "flex-col items-center scale-105" : "flex-col md:flex-row items-center justify-start scale-100"}`}
        >
          {/* Nút Khái Quát tròn */}
          <button
            onClick={() => {
              if (showGeneral && showGeneralDetails) {
                setShowGeneralDetails(false);
                setTimeout(() => setShowGeneral(false), 300);
              } else {
                setShowGeneral(!showGeneral);
              }
            }}
            title={!showGeneral ? "Bấm để xem khái quát" : "Bấm để thu gọn"}
            className={`shrink-0 rounded-full bg-gradient-to-br from-red-700 to-red-900 text-white font-extrabold flex items-center justify-center shadow-[0_10px_30px_rgba(185,28,28,0.4)] border-[6px] border-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(185,28,28,0.5)] z-20 cursor-pointer
            ${!showGeneral ? "w-48 h-48 sm:w-56 sm:h-56 text-2xl sm:text-3xl md:w-64 md:h-64 md:text-4xl" : "w-24 h-24 sm:w-28 sm:h-28 text-lg sm:text-xl"}`}
          >
            <span className="drop-shadow-md">Khái quát</span>
          </button>

          {/* Nội dung Khái Quát (Bullet points) */}
          <div
            className={`flex-1 w-full bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl py-3 px-4 sm:px-5 border border-orange-200/60 shadow-md transition-all duration-[800ms] ease-out md:origin-left origin-top relative flex flex-col justify-center min-h-[112px]
            ${showGeneral ? "opacity-100 scale-100 md:translate-x-0 translate-y-0" : "opacity-0 scale-95 md:-translate-x-16 -translate-y-8 absolute pointer-events-none"}`}
          >
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-1.5 h-2/3 bg-red-600 rounded-r-lg"></div>
            <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] h-1.5 w-2/3 bg-red-600 rounded-b-lg"></div>
            <ul className="space-y-2 text-red-950 font-semibold text-[13px] sm:text-sm md:text-base mt-2 md:mt-0">
              {khaiQuatData.general.map((point, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0 text-base sm:text-lg font-black">
                    •
                  </span>
                  <span className="leading-snug text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nút Arrow cho General Details */}
        <div
          className={`w-full flex justify-center -mt-2 transition-all duration-[600ms] z-10 
          ${showGeneral ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 absolute pointer-events-none"}`}
        >
          <button
            onClick={() => setShowGeneralDetails(!showGeneralDetails)}
            className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1.5 shadow-sm transition-all hover:scale-110 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${showGeneralDetails ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* ROW 2: 3 ô nội dung chi tiết (General Details) */}
        <div
          className={`w-full flex flex-col md:flex-row gap-2 sm:gap-3 transition-all duration-[800ms] ease-out flex-shrink-0 origin-top
          ${showGeneralDetails ? "opacity-100 translate-y-0 h-auto mb-2" : "opacity-0 -translate-y-8 absolute pointer-events-none h-0 overflow-hidden"}`}
        >
          {khaiQuatData.generalDetails.map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-white border border-red-100 text-red-900 rounded-xl p-3 shadow-sm text-[13px] sm:text-sm font-semibold flex items-center justify-center text-center transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        {/* ROW 3: Mốc Thời Gian Container & Conclusion */}
        <div
          className={`w-full flex flex-col items-center transition-all duration-[1000ms] ease-out flex-shrink-0 gap-3 lg:gap-4 
          ${showGeneral ? "mt-4 lg:mt-8" : "-mt-8 sm:-mt-16 lg:-mt-24"}`}
        >
          {/* Heading */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-2">
            <div className="h-px w-8 sm:w-12 bg-red-300"></div>
            <h2 className="text-sm sm:text-base font-black text-red-800 uppercase tracking-widest text-center">
              Mốc thời gian
            </h2>
            <div className="h-px w-8 sm:w-12 bg-red-300"></div>
          </div>

          {/* === BỐ CỤC PC (Grid 4 cột) === */}
          <div className="hidden md:grid grid-cols-4 gap-3 lg:gap-4 w-full relative">
            {/* 4 Mốc thời gian */}
            {khaiQuatData.milestones.map((item, index) => {
              const isActive = activeMilestones.includes(index);
              return (
                <div
                  key={index}
                  className="flex flex-col items-center relative group w-full"
                >
                  <button
                    onClick={() => handleMilestoneClick(index)}
                    className={`w-full h-10 bg-red-700 group-hover:bg-red-600 font-extrabold text-[13px] lg:text-sm flex items-center justify-center shadow transition-all duration-300 z-20 cursor-pointer border border-b-0 border-red-700
                      ${isActive ? "rounded-t-xl text-white" : "rounded-xl text-white "}
                    `}
                  >
                    {item.time}
                  </button>

                  {isActive && (
                    <div
                      className={`w-full bg-gradient-to-b from-white to-orange-50 border border-t-0 border-orange-200 rounded-b-xl shadow-inner flex flex-col text-[12px] lg:text-[13px] text-gray-800 font-medium transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden origin-top
                    ${isActive ? "h-[110px] opacity-100 py-3 px-3" : "h-[30px] opacity-60 blur-[1px]"}`}
                    >
                      <div className="overflow-y-auto custom-scrollbar flex-1 relative pr-1">
                        <div
                          className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                        >
                          {item.content}
                        </div>
                        {!isActive && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-4 h-1.5 bg-red-200 rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Nút Toggle Kết Luận PC */}
            <div className="col-span-4 flex justify-center -mt-1 mb-1 z-10 transition-all duration-500">
              <button
                onClick={() => setShowConclusions(!showConclusions)}
                className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1.5 shadow-sm transition-all hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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

            {/* Kết luận 1 (Dưới 3 mốc đầu) */}
            <div
              className={`col-span-3 flex items-center gap-3 bg-white border-2 border-red-700 rounded-xl p-3 shadow-md transition-all duration-700 origin-top
                ${showConclusions ? "opacity-100 translate-y-0 h-auto" : "opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none"}`}
            >
              <div className="text-red-700 shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <p className="text-gray-800 font-bold text-[13px] leading-snug">
                {khaiQuatData.conclusions[0]}
              </p>
            </div>

            {/* Kết luận 2 (Dưới mốc thứ 4) */}
            <div
              className={`col-span-1 flex items-center gap-3 bg-white border-2 border-red-700 rounded-xl p-3 shadow-md transition-all duration-700 origin-top
                ${showConclusions ? "opacity-100 translate-y-0 h-auto" : "opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none"}`}
            >
              <div className="text-red-700 shrink-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <p className="text-gray-800 font-bold text-[13px] leading-snug">
                {khaiQuatData.conclusions[1]}
              </p>
            </div>
          </div>

          {/* === BỐ CỤC MOBILE (Flex dọc) === */}
          <div className="md:hidden flex flex-col items-center gap-4 w-full">
            {/* Nhóm 4 mốc (Gộp lại) */}
            <div className="flex flex-col items-center gap-2 w-full">
              {khaiQuatData.milestones.map((item, index) => {
                const isActive = activeMilestones.includes(index);
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full max-w-[280px]"
                  >
                    <button
                      onClick={() => handleMilestoneClick(index)}
                      className={`w-full h-10 rounded-t-xl font-extrabold text-sm flex items-center justify-center shadow transition-all duration-300 z-20 border border-b-0 border-red-700 ${isActive ? "bg-red-900 text-white" : "bg-red-700 text-white"}`}
                    >
                      {item.time}
                    </button>
                    <div
                      className={`w-full bg-gradient-to-b from-white to-orange-50 border border-t-0 border-orange-200 rounded-b-xl shadow-inner flex flex-col text-[13px] text-gray-800 font-medium transition-all duration-500 overflow-hidden ${isActive ? "h-[120px] opacity-100 py-3 px-3" : "h-[30px] opacity-60"}`}
                    >
                      <div className="overflow-y-auto custom-scrollbar flex-1 pr-1">
                        <div
                          className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                        >
                          {item.content}
                        </div>
                      </div>
                    </div>
                    {/* Dây nối giữa các mốc, bỏ qua mốc cuối */}
                    {index < 3 && (
                      <div className="w-1 h-4 bg-red-200 rounded-full my-1"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Nút Toggle Kết Luận Mobile */}
            <div className="flex justify-center w-full -mt-2 my-1 z-10 transition-all duration-500">
              <button
                onClick={() => setShowConclusions(!showConclusions)}
                className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1.5 shadow-sm transition-all hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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

            {/* Conclusions Mobile */}
            <div
              className={`flex flex-col gap-3 w-full max-w-[320px] transition-all duration-700 origin-top
              ${showConclusions ? "opacity-100 translate-y-0 h-auto" : "opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none"}`}
            >
              {/* Kết luận 1 */}
              <div className="flex items-start gap-2 bg-white border-2 border-red-700 rounded-xl p-3 shadow-md w-full">
                <div className="text-red-700 shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <p className="text-gray-800 font-bold text-[13px] leading-snug">
                  {khaiQuatData.conclusions[0]}
                </p>
              </div>

              {/* Kết luận 2 */}
              <div className="flex items-start gap-2 bg-white border-2 border-red-700 rounded-xl p-3 shadow-md w-full">
                <div className="text-red-700 shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <p className="text-gray-800 font-bold text-[13px] leading-snug">
                  {khaiQuatData.conclusions[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
