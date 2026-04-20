import React, { useState } from "react";
import { yNghiaData } from "../../data/contentData";

export default function YNghia() {
  const [showMain, setShowMain] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start px-2 sm:px-4 lg:px-8 font-sans transition-all duration-700 ease-in-out pb-20 mt-2 sm:mt-4">
      {/* Nút Ý NGHĨA bự */}
      <button
        onClick={() => {
          if (showMain && showDetails) {
            setShowDetails(false);
            setTimeout(() => setShowMain(false), 300);
          } else {
            setShowMain(!showMain);
          }
        }}
        className="w-full max-w-[900px] h-[60px] sm:h-[70px] bg-gradient-to-b from-[#bd0000] to-[#800000] hover:from-[#cc0000] hover:to-[#990000] text-white font-semibold text-lg sm:text-xl rounded-2xl sm:rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] z-20 flex items-center justify-center shrink-0"
      >
        {yNghiaData.title}
      </button>

      {/* 3 Khung ý lớn (Beige Boxes) */}
      <div
        className={`w-full max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 transition-all duration-[600ms] ease-in-out origin-top
        ${showMain ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 h-0 overflow-hidden pointer-events-none mt-0"}`}
      >
        <div className="min-h-[60px] md:min-h-[80px]">
          <div className="bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 shadow-sm text-gray-800 text-[14px] sm:text-[15px] font-bold text-center flex items-center justify-center h-full">
            {yNghiaData.sections[0].title}
          </div>
        </div>
        <div className="min-h-[60px] md:min-h-[80px]">
          <div className="bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 shadow-sm text-gray-800 text-[14px] sm:text-[15px] font-bold text-center flex items-center justify-center h-full">
            {yNghiaData.sections[1].title}
          </div>
        </div>
        <div className="min-h-[60px] md:min-h-[80px]">
          <div className="bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 shadow-sm text-gray-800 text-[14px] sm:text-[15px] font-bold text-center flex items-center justify-center h-full">
            {yNghiaData.sections[2].title}
          </div>
        </div>
      </div>

      {/* Mũi tên Conclusion / Details */}
      <div
        className={`w-full flex justify-center transition-all duration-[600ms] z-10 mt-3
        ${showMain ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none hidden"}`}
      >
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1.5 shadow-sm transition-all hover:scale-110 group"
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
            className={`transition-transform duration-300 ${showDetails ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Chi tiết các ý của từng ý lớn (White Boxes) */}
      <div
        className={`w-full max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 transition-all duration-[800ms] ease-in-out origin-top
        ${showDetails && showMain ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 h-0 overflow-hidden pointer-events-none mt-0"}`}
      >
        {yNghiaData.sections.map((section, idx) => (
          <div key={idx} className="min-h-[100px] flex">
            <div className="bg-white border border-[#b30000] rounded-2xl p-4 sm:p-5 shadow-sm w-full flex flex-col gap-2">
              <ul className="space-y-3">
                {section.content.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-[#b30000] mt-[6px] shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="12" r="8" />
                      </svg>
                    </span>
                    <p className="text-gray-800 font-semibold text-[13px] leading-snug">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
