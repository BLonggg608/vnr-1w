import React, { useState } from "react";
import { ketLuanData } from "../../data/contentData";

export default function KetLuan() {
  const [showContent, setShowContent] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start px-2 sm:px-4 lg:px-8 font-sans transition-all duration-700 ease-in-out pb-20 mt-4 sm:mt-8">
      {/* Nút KẾT LUẬN */}
      <button
        onClick={() => setShowContent(!showContent)}
        className="w-full max-w-[1000px] h-[60px] sm:h-[70px] bg-gradient-to-b from-[#bd0000] to-[#800000] hover:from-[#cc0000] hover:to-[#990000] text-white font-semibold text-lg sm:text-xl rounded-2xl sm:rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] z-20 flex items-center justify-center shrink-0 uppercase"
      >
        {ketLuanData.title}
      </button>

      {/* Nội dung kết luận */}
      <div
        className={`w-full max-w-[1000px] grid transition-all duration-[800ms] ease-in-out origin-top
        ${showContent ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"}`}
      >
        <div className="overflow-hidden w-full flex flex-col gap-4 sm:gap-6">
          {ketLuanData.items.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div key={idx} className="flex flex-col md:flex-row gap-4 w-full">
                {/* Box Be trái */}
                <div
                  className="md:w-1/3 shrink-0 flex relative cursor-pointer"
                  onClick={() => toggleItem(idx)}
                >
                  <div className="bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 sm:p-5 shadow-sm text-gray-800 text-[14px] sm:text-[15px] font-bold text-center flex items-center justify-center w-full h-full pr-10 hover:shadow-md transition-shadow">
                    {item.title}
                  </div>
                  {/* Nút mũi tên */}
                  <button className="absolute right-3 md:-right-4 top-1/2 -translate-y-1/2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1.5 shadow-sm transition-all hover:scale-110 z-10 hidden md:flex">
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
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                  {/* Mũi tên mobile */}
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full p-1 shadow-sm transition-all hover:scale-110 z-10 md:hidden flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Các Box trắng viền đỏ phải */}
                <div
                  className={`md:w-2/3 grid transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-top md:origin-left
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
                >
                  <div className="overflow-hidden flex flex-col gap-3 justify-center w-full min-h-0">
                    <div className="py-1">
                      {item.content.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-white border border-[#b30000] rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 shadow-[0_2px_10px_rgba(179,0,0,0.06)] flex items-start gap-3 w-full mb-3 last:mb-0"
                        >
                          <span className="text-[#b30000] mt-[5px] shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <p className="text-gray-800 font-semibold text-[13px] sm:text-sm leading-snug">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
