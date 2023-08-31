import React from "react";
import {BsCalendar2WeekFill, BsChevronCompactDown} from "react-icons/bs"
export default function Calender() {
  return (
    <section className="w-full py-2 mr-6 glass-effect">
      <div className="w-full flex items-center justify-center no-scrollbar overflow-x-scroll ">
        <div className="flex items-end">
          <div className="w-16 flex justify-end gap-2 cursor-pointer">{/* Calender Plugin Comes here */}
          
          <span className="text-sm text-neutral-200">
          <BsCalendar2WeekFill />
          </span>

          <span className="text-neutral-500"><BsChevronCompactDown /></span>
          </div>

          <div className="w-16 flex gap-2 flex-col items-center justify-center text-neutral-50">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping text-[10px] font-normal"></span>
            <h4 className="text-[10px] font-bold tracking-wider">LIVE</h4>
          </div>
        </div>





        <main className="w-full flex items-center justify-between ">
          <div className="w-16 flex flex-col items-center justify-center text-green-400 p-1">
            <p className="text-[10px] font-normal">Today</p>
            <h4 className="text-xs font-black">20 OCT</h4>
          </div>

          <div className="w-16 flex flex-col items-center justify-center text-neutral-500 p-1">
            <p className="text-[10px] font-normal">Mon</p>
            <h4 className="text-xs font-black">20 OCT</h4>
          </div>

          <div className="w-16 flex flex-col items-center justify-center text-neutral-500 p-1">
            <p className="text-[10px] font-normal">Tue</p>
            <h4 className="text-xs font-black">20 OCT</h4>
          </div>
          <div className="w-16 flex flex-col items-center justify-center text-neutral-500 p-1">
            <p className="text-[10px] font-normal">Wed</p>
            <h4 className="text-xs font-black">20 OCT</h4>
          </div>
          <div className="w-16 flex flex-col items-center justify-center text-neutral-500 p-1">
            <p className="text-[10px] font-normal">Thur</p>
            <h4 className="text-xs font-black">20 OCT</h4>
          </div>
        </main>
      </div>
    </section>
  );
}
