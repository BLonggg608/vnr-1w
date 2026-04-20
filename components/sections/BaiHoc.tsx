import React, { useState } from "react";
import { baiHocData } from "../../data/contentData";

type QuadrantBoxProps = {
  id: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
  customClass: string;
};

type ContentBoxProps = {
  data: {
    id: number;
    title: string;
    subTitle: string;
    points: string[];
  };
  isActive: boolean;
  align: "left" | "right";
};

export default function BaiHoc() {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setActiveItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center p-2 lg:p-4 relative font-sans transition-all duration-700 ease-in-out">
      {/* Cấu trúc PC (3 Cột) */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-6 xl:gap-8 w-full max-w-[1200px] items-center relative h-full flex-1">
        {/* Left Column (Content 1 & 3) */}
        <div className="flex flex-col gap-6 xl:gap-8 w-full h-full justify-center">
          <ContentBox
            data={baiHocData[0]}
            isActive={activeItems.includes(1)}
            align="right"
          />
          <ContentBox
            data={baiHocData[2]}
            isActive={activeItems.includes(3)}
            align="right"
          />
        </div>

        {/* Center Column (The Circle) */}
        <div className="w-[280px] h-[280px] xl:w-[350px] xl:h-[350px] grid grid-cols-2 grid-rows-2 gap-3 relative z-10 shrink-0 mx-auto">
          <QuadrantBox
            id={1}
            title={baiHocData[0].title}
            isActive={activeItems.includes(1)}
            onClick={() => toggleItem(1)}
            customClass="rounded-tl-full"
          />
          <QuadrantBox
            id={2}
            title={baiHocData[1].title}
            isActive={activeItems.includes(2)}
            onClick={() => toggleItem(2)}
            customClass="rounded-tr-full"
          />
          <QuadrantBox
            id={3}
            title={baiHocData[2].title}
            isActive={activeItems.includes(3)}
            onClick={() => toggleItem(3)}
            customClass="rounded-bl-full"
          />
          <QuadrantBox
            id={4}
            title={baiHocData[3].title}
            isActive={activeItems.includes(4)}
            onClick={() => toggleItem(4)}
            customClass="rounded-br-full"
          />
        </div>

        {/* Right Column (Content 2 & 4) */}
        <div className="flex flex-col gap-6 xl:gap-8 w-full h-full justify-center">
          <ContentBox
            data={baiHocData[1]}
            isActive={activeItems.includes(2)}
            align="right"
          />
          <ContentBox
            data={baiHocData[3]}
            isActive={activeItems.includes(4)}
            align="right"
          />
        </div>
      </div>

      {/* Mobile Layout (Flex Column) */}
      <div className="lg:hidden flex flex-col items-center gap-6 w-full max-w-sm">
        {/* Circle at top for mobile */}
        <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 relative z-10 shrink-0">
          <QuadrantBox
            id={1}
            title={baiHocData[0].title}
            isActive={activeItems.includes(1)}
            onClick={() => toggleItem(1)}
            customClass="rounded-tl-full"
          />
          <QuadrantBox
            id={2}
            title={baiHocData[1].title}
            isActive={activeItems.includes(2)}
            onClick={() => toggleItem(2)}
            customClass="rounded-tr-full"
          />
          <QuadrantBox
            id={3}
            title={baiHocData[2].title}
            isActive={activeItems.includes(3)}
            onClick={() => toggleItem(3)}
            customClass="rounded-bl-full"
          />
          <QuadrantBox
            id={4}
            title={baiHocData[3].title}
            isActive={activeItems.includes(4)}
            onClick={() => toggleItem(4)}
            customClass="rounded-br-full"
          />
        </div>

        {/* Content list below */}
        <div className="flex flex-col gap-4 w-full mt-6">
          {baiHocData.map((data, idx) => (
            <div
              key={data.id}
              className={`transition-all duration-500 overflow-hidden ${activeItems.includes(data.id) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="bg-[#fdf5eb] border border-[#edcdab] rounded-2xl p-5 shadow-[0_10px_30px_-10px_rgba(185,28,28,0.15)] w-full relative overflow-hidden">
                <h3 className="font-extrabold text-[#991b1b] mb-1 tracking-wide uppercase text-[13px]">
                  {data.title}
                </h3>
                <div className="font-bold text-black mb-3 text-[14px]">
                  {data.subTitle}
                </div>
                <ul className="space-y-3 relative z-10">
                  {data.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[13px] text-black font-medium items-start"
                    >
                      <div className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-black"></div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Subcomponents
function QuadrantBox({
  id,
  title,
  isActive,
  onClick,
  customClass,
}: QuadrantBoxProps) {
  let alignClass = "";
  if (id === 1)
    alignClass = "items-end justify-end pb-6 pr-4 xl:pb-10 xl:pr-6 xl:pl-10";
  if (id === 2)
    alignClass = "items-end justify-start pb-6 pl-4 xl:pb-10 xl:pl-6 xl:pr-10";
  if (id === 3)
    alignClass = "items-start justify-end pt-6 pr-4 xl:pt-10 xl:pr-6 xl:pl-10";
  if (id === 4)
    alignClass =
      "items-start justify-start pt-6 pl-4 xl:pt-10 xl:pl-6 xl:pr-10";

  return (
    <button
      onClick={onClick}
      className={`w-full h-full flex ${alignClass} transition-all duration-[400ms] cursor-pointer border-[2px] shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] relative overflow-hidden group
      ${customClass} 
      ${isActive ? "bg-gradient-to-br from-red-600 to-red-800 border-white/30 scale-[1.05] z-20 shadow-[0_10px_30px_rgba(185,28,28,0.5)]" : "bg-gradient-to-br from-red-700 to-red-900 border-transparent hover:border-white/10 hover:from-red-600 hover:to-red-800 z-10"}`}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <span className="text-white font-extrabold text-sm sm:text-base lg:text-[15px] xl:text-lg tracking-[0.15em] drop-shadow-md z-10 text-center">
        {title}
      </span>
    </button>
  );
}

function ContentBox({ data, isActive, align }: ContentBoxProps) {
  // align can be "left" or "right" (for text alignment / direction of animation)
  return (
    <div
      className={`relative w-full h-[230px] xl:h-[250px] transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
      ${isActive ? "opacity-100 scale-100 translate-x-0" : `opacity-0 scale-95 pointer-events-none ${align === "right" ? "translate-x-12" : "-translate-x-12"}`}`}
    >
      <div className="w-full h-full bg-[#fdf5eb] rounded-[2rem] p-4 xl:p-6 shadow-md border border-[#edcdab] flex flex-col relative overflow-hidden group">
        <div className="relative z-10 w-full h-full overflow-y-auto pr-2 overflow-x-hidden [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d6ba9e] [&::-webkit-scrollbar-track]:bg-transparent">
          <div
            className={`font-extrabold text-[#b91c1c] text-[11px] xl:text-[13px] mb-2 ${align === "left" ? "text-right" : "text-left"}`}
          >
            {data.subTitle}
          </div>
          <ul className="space-y-3 xl:space-y-4">
            {data.points.map((point: string, i: number) => (
              <li
                key={i}
                className={`flex gap-3 text-[10px] xl:text-[12px] text-black items-start ${align === "left" ? "flex-row-reverse text-right" : "flex-row text-left"}`}
              >
                <div className="shrink-0 mt-[6px] xl:mt-[7px] w-[5px] h-[5px] xl:w-1.5 xl:h-1.5 rounded-full bg-black"></div>
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
