import React from "react";
import KhaiQuat from "./sections/KhaiQuat";
import { sidebarItems } from "../data/contentData";

interface ContentAreaProps {
  activeId: string;
}

export default function ContentArea({ activeId }: ContentAreaProps) {
  const activeTitle =
    sidebarItems.find((item) => item.id === activeId)?.title || "";

  const renderContent = () => {
    switch (activeId) {
      case "1":
        return <KhaiQuat />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 opacity-60">
            <svg
              className="w-40 h-40 mb-6 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M14 4v5h5"
              ></path>
            </svg>
            <h2 className="font-extrabold text-3xl">{activeTitle}</h2>
            <p className="mt-4 font-semibold text-lg uppercase tracking-widest text-red-700 bg-red-50 px-6 py-2 rounded-full ring-1 ring-red-200">
              Đang cập nhật...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-white/95 backdrop-blur-xl ml-4 md:ml-8 rounded-[36px] shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-white/50 overflow-hidden h-full relative w-full transition-all duration-700 ease-[cubic-bezier(0.1,0.9,0.3,1)] ring-4 ring-black/5">
      {/* Nền Gradient mờ ở Content */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none px-4"></div>

      {/* Container Render */}
      <div className="relative z-10 w-full h-full p-2 md:p-4 overflow-y-auto overflow-x-hidden custom-scrollbar scroll-smooth">
        {renderContent()}
      </div>
    </div>
  );
}
