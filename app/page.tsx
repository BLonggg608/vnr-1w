"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/ContentArea";

export default function App() {
  const [activeItem, setActiveItem] = useState<string>("1");

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col h-screen overflow-hidden selection:bg-red-200">
      {/* Header */}
      <header className="bg-[#a81c1c] text-white shadow-md flex items-center justify-between px-4 sm:px-10 md:px-20 h-[50px] md:h-[56px] shrink-0 z-50 font-normal text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wide">
        <span className="flex-1 text-l font-black text-left">VNR202</span>
        <span className="flex-1 text-l font-black text-center">
          3W_VNR202_03
        </span>
        <span className="flex-1 text-l font-black text-center">Nhóm 1</span>
        <span className="flex-1 text-l font-black text-right">
          GV: Trần Duy Lâm
        </span>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex px-8 py-5 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        {/* Sidebar (Left) */}
        <div className="w-72 shrink-0">
          <Sidebar activeId={activeItem} onSelect={setActiveItem} />
        </div>

        {/* Content Panel (Right) */}
        <ContentArea activeId={activeItem} />
      </main>
    </div>
  );
}
