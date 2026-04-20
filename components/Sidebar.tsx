import React from "react";
import { sidebarItems } from "../data/contentData";

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ activeId, onSelect }: SidebarProps) {
  return (
    <div className="flex flex-col gap-5 border-r-2 border-red-100 pr-[18px] h-full overflow-y-auto custom-scrollbar pt-4 pb-10 relative">
      {/* Cột mốc ảo phía sau */}
      <div className="absolute left-[38px] top-6 bottom-6 w-1 bg-gradient-to-b from-gray-200 to-transparent -z-10 rounded-full"></div>

      {sidebarItems.map((item, index) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`group relative h-28 px-5 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-[400ms] ease-out font-black text-left flex items-center shrink-0 border-[3px] overflow-hidden
              ${
                isActive
                  ? "bg-white text-red-900 border-red-600 scale-[1.03] translate-x-2"
                  : "bg-white/80 text-gray-500 border-transparent hover:bg-white hover:text-red-700 hover:border-red-200 hover:scale-[1.01]"
              }
            `}
          >
            {/* Hiệu ứng focus background */}
            {isActive && <div className="absolute inset-0 bg-red-50/50"></div>}

            {/* Số thứ tự */}
            <div
              className={`shrink-0 w-12 h-12 rounded-full border-4 flex items-center justify-center text-lg shadow-sm transition-colors duration-300 mr-4 z-10
              ${isActive ? "bg-red-600 border-white text-white" : "bg-gray-100 border-white text-gray-400 group-hover:bg-red-100 group-hover:text-red-600"}
            `}
            >
              {index + 1}
            </div>

            {/* Nội dung */}
            <span className="z-10 leading-snug drop-shadow-sm text-[15px]">
              {item.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
