import React, { useState } from "react";
import { yeuToThoiCoData } from "../../data/contentData";

export default function YeuToThoiCo() {
  // Trạng thái phần đang hiển thị (1 hoặc 2)
  const [activePart, setActivePart] = useState<1 | 2>(1);

  // Trạng thái mở của các mục Thiên thời, Địa lợi, Nhân hoà
  const [openP1, setOpenP1] = useState<Record<string, boolean>>({});
  const [openP1Bottom, setOpenP1Bottom] = useState<Record<string, boolean>>({});

  // Trạng thái hiển thị phần nội dung của Nghệ thuật chớp thời cơ
  const [openPart2Middle, setOpenPart2Middle] = useState(false);
  const [openPart2Wide, setOpenPart2Wide] = useState(false);
  const [openPart2BottomRight, setOpenPart2BottomRight] = useState(false);

  const togglePart1 = (id: string) => {
    setOpenP1((prev) => {
      const isOpen = !prev[id];
      if (!isOpen) {
        setOpenP1Bottom((bPrev) => ({ ...bPrev, [id]: false }));
      }
      return { ...prev, [id]: isOpen };
    });
  };

  const togglePart1Bottom = (id: string) => {
    setOpenP1Bottom((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePart2Middle = () => {
    if (openPart2Middle) {
      setOpenPart2Middle(false);
      setOpenPart2Wide(false);
      setOpenPart2BottomRight(false);
    } else {
      setOpenPart2Middle(true);
    }
  };

  const togglePart2Wide = () => {
    if (openPart2Wide) {
      setOpenPart2Wide(false);
      setOpenPart2BottomRight(false);
    } else {
      setOpenPart2Wide(true);
    }
  };

  const togglePart2BottomRight = () => {
    setOpenPart2BottomRight(!openPart2BottomRight);
  };

  const part1Items = [
    { id: "thienThoi", data: yeuToThoiCoData.part1.thienThoi },
    { id: "diaLoi", data: yeuToThoiCoData.part1.diaLoi },
    { id: "nhanHoa", data: yeuToThoiCoData.part1.nhanHoa },
  ];

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start px-2 sm:px-4 lg:px-8 font-sans transition-all duration-700 pb-20 mt-4 sm:mt-8 gap-8 lg:gap-12">
      {/* PHẦN 1 (Tương đương ảnh 1, 2, 3) */}
      {activePart === 1 && (
        <>
          <div className="w-full flex justify-center max-w-[1000px]">
            {/* Khối chính chứa các nút Đỏ dạng cây (Flowchart) trượt ra bên phải */}
            <div className="flex-1 flex flex-col gap-6">
              {part1Items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:gap-8 w-full"
                >
                  {/* Nút Đỏ (Title) - "Thiên thời", "Địa lợi", "Nhân hoà" */}
                  <button
                    onClick={() => togglePart1(item.id)}
                    className="w-[200px] lg:w-[150px] h-full min-h-[60px] lg:min-h-[120px] bg-gradient-to-b from-[#bd0000] to-[#800000] text-white font-bold rounded-[20px] p-4 shadow-[0_4px_15px_rgba(189,0,0,0.3)] transition-all hover:scale-[1.02] shrink-0 flex items-center justify-center text-center text-[16px] sm:text-lg z-20 relative cursor-pointer"
                  >
                    {item.data.title}
                  </button>

                  {/* Nội dung Mở ra dạng Diagram */}
                  <div
                    className={`w-full lg:flex-1 grid transition-all duration-[700ms] ease-[cubic-bezier(0.1,0.9,0.3,1)] origin-top lg:origin-left
                ${
                  openP1[item.id]
                    ? "grid-rows-[1fr] opacity-100 lg:translate-x-0 mt-4 lg:mt-0"
                    : "grid-rows-[0fr] opacity-0 lg:-translate-x-12 pointer-events-none mt-0"
                }`}
                  >
                    <div className="overflow-hidden flex flex-col items-center gap-4 min-h-0 w-full px-2 lg:px-4 py-1">
                      {/* Container cho Top Boxes và Nút mũi tên nằm bên phải */}
                      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 w-full relative">
                        {/* Top Boxes (White) */}
                        <div
                          className={`grid gap-3 w-full flex-1 ${item.data.topBoxes.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}
                        >
                          {item.data.topBoxes.map((text, idx) => (
                            <div
                              key={idx}
                              className="bg-white border border-[#b30000] rounded-[16px] p-3 sm:p-4 shadow-sm min-h-[60px] flex items-center justify-center text-center text-[13px] md:text-[14px] font-semibold text-gray-800"
                            >
                              {text}
                            </div>
                          ))}
                        </div>

                        {/* Nút mũi tên mở Bottom Boxes (nằm bên phải trên Desktop, nằm dưới trên Mobile) */}
                        <button
                          onClick={() => togglePart1Bottom(item.id)}
                          className="w-10 h-10 shrink-0 flex items-center justify-center bg-white text-red-700 border border-red-200 rounded-full shadow-md z-10 hover:bg-red-50 transition-all cursor-pointer"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${openP1Bottom[item.id] ? "-rotate-90 lg:rotate-90" : "rotate-90 lg:rotate-0"}`}
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Boxes */}
                      <div
                        className={`w-full grid transition-all duration-[700ms] ease-[cubic-bezier(0.1,0.9,0.3,1)] origin-top
                    ${
                      openP1Bottom[item.id]
                        ? "grid-rows-[1fr] opacity-100 mt-2"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none mt-0"
                    }`}
                      >
                        <div className="overflow-hidden min-h-0 w-full py-1">
                          <div
                            className={`grid gap-3 w-full ${item.data.bottomBoxes.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}
                          >
                            {item.data.bottomBoxes.map((text, idx) => (
                              <div
                                key={idx}
                                className="bg-[#fff9f0] border border-[#f5cc84] rounded-[16px] p-3 sm:p-4 shadow-sm min-h-[60px] flex items-center justify-center text-center text-[13px] md:text-[14px] font-bold text-gray-800"
                              >
                                {text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nút chuyển sang Phần 2 */}
          <div className="w-full flex justify-center max-w-[1000px] mt-8">
            <button
              onClick={() => {
                setActivePart(2);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#bd0000] border-2 border-[#bd0000] font-bold text-base sm:text-lg rounded-full hover:bg-[#bd0000] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
              Tiếp theo: Nghệ thuật chớp thời cơ
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </>
      )}

      {/* PHẦN 2 (Tương đương ảnh 4, 5, 6, 7, 8) */}
      {activePart === 2 && (
        <div className="w-full flex flex-col items-center max-w-[1000px] mb-12">
          {/* Nút quay lại Phần 1 */}
          <div className="w-full flex justify-start mb-8">
            <button
              onClick={() => {
                setActivePart(1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-700 border border-gray-300 font-semibold text-sm rounded-full hover:bg-gray-100 transition-all duration-300 active:scale-95"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-180 transition-transform group-hover:-translate-x-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              Quay lại: Thiên thời - Địa lợi - Nhân hoà
            </button>
          </div>

          {/* Nút To (Đỏ) - Nghệ thuật chớp thời cơ */}
          <button
            onClick={togglePart2Middle}
            className="w-full min-h-[70px] bg-gradient-to-b from-[#bd0000] to-[#800000] text-white rounded-2xl sm:rounded-[24px] shadow-[0_4px_20px_rgba(189,0,0,0.2)] flex flex-col items-center justify-center py-4 px-6 sm:py-5 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.01] z-20 relative cursor-pointer uppercase"
          >
            <div className="font-bold text-[18px] sm:text-[22px] tracking-wide mb-1">
              {yeuToThoiCoData.part2.title}
            </div>

            <div className="bg-white/10 rounded-full px-4 py-1 mt-2 mb-2 sm:mb-0 hidden sm:block">
              <span className="text-red-100 font-medium text-[13px] sm:text-[15px]">
                {yeuToThoiCoData.part2.subtitle}
              </span>
            </div>
          </button>

          {/* Nội dung Mở ra xuống dưới cho Part 2 (Middle Boxes) */}
          <div
            className={`w-full grid transition-all duration-[800ms] ease-in-out origin-top
          ${openPart2Middle ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"}`}
          >
            <div className="overflow-hidden flex flex-col items-center gap-4 sm:gap-5 w-full min-h-0 pt-2">
              {/* Box Be Nền Tảng (SubTitle cho Mobile) */}
              <div className="sm:hidden w-full bg-[#fff9f0] border border-[#f5cc84] rounded-xl p-4 text-center font-bold text-gray-800 shadow-sm text-[14px]">
                {yeuToThoiCoData.part2.subtitle}
              </div>

              {/* 2 Hộp trắng song song */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {yeuToThoiCoData.part2.middleBoxes.map((text, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#bd0000] rounded-xl p-4 shadow-sm flex items-center justify-center font-semibold text-center text-gray-800 text-[13px] sm:text-sm min-h-[70px]"
                  >
                    {text}
                  </div>
                ))}
              </div>

              {/* Nút mũi tên mở rông WideBox */}
              <button
                onClick={togglePart2Wide}
                className="w-10 h-10 mt-2 flex items-center justify-center bg-white text-red-700 border border-red-200 rounded-full shadow-md z-10 hover:bg-red-50 transition-all cursor-pointer shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${openPart2Wide ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Nội dung Mở ra tiếp: Wide Box & Bottom Left */}
              <div
                className={`w-full grid transition-all duration-[700ms] ease-[cubic-bezier(0.1,0.9,0.3,1)] origin-top
              ${openPart2Wide ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none mt-0"}`}
              >
                <div className="overflow-hidden flex flex-col items-center gap-4 w-full min-h-0 pt-2">
                  {/* 1 Hộp Beige ngang to */}
                  <div className="w-full bg-[#fff9f0] border border-[#f5cc84] rounded-2xl p-4 text-center font-bold text-[#bd0000] text-[15px] sm:text-base border-dashed border-2">
                    {yeuToThoiCoData.part2.wideBox}
                  </div>

                  {/* Khối Minh Chứng Cuối Cùng */}
                  <div className="w-full flex flex-col md:flex-row md:items-stretch gap-4 mt-2">
                    {/* Box Đỏ bên trái (Bấm được để mở BottomRight) */}
                    <button
                      onClick={togglePart2BottomRight}
                      className="w-full md:w-[200px] shrink-0 cursor-pointer outline-none transition-transform hover:scale-[1.02] flex"
                    >
                      <div className="bg-gradient-to-br from-[#bd0000] to-[#800000] text-white rounded-2xl flex items-center justify-center px-4 py-8 font-bold text-[17px] text-center shadow-md w-full h-full min-h-[120px] whitespace-pre-line uppercase tracking-wider relative">
                        {yeuToThoiCoData.part2.bottomLeft}
                        {/* Icon mũi tên xoay ngang */}
                        {/* <div className={`absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 bg-white text-red-700 rounded-full p-1.5 shadow-md transition-transform duration-300 ${openPart2BottomRight ? "rotate-90 md:rotate-180" : "rotate-90 md:rotate-0"}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div> */}
                      </div>
                    </button>

                    {/* 3 Box trắng bên phải xếp dọc */}
                    <div
                      className={`flex-1 w-full grid transition-all duration-[700ms] ease-[cubic-bezier(0.1,0.9,0.3,1)] origin-top md:origin-left
                    ${openPart2BottomRight ? "grid-rows-[1fr] opacity-100 md:opacity-100" : "grid-rows-[0fr] md:opacity-0 opacity-0 pointer-events-none"}`}
                    >
                      <div className="overflow-hidden flex flex-col gap-3 min-h-0 w-full pt-2 md:pt-0">
                        {yeuToThoiCoData.part2.bottomRight.map((text, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-[#bd0000] rounded-[16px] p-3 sm:p-4 shadow-sm w-full flex items-start sm:items-center min-h-[60px] hover:shadow-md transition-shadow cursor-default"
                          >
                            <span className="text-[#b30000] shrink-0 mr-3 mt-1 sm:mt-0">
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
                            <p className="text-gray-800 font-semibold text-[13px] sm:text-sm leading-[1.4]">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
