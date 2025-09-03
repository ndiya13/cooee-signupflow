import React from "react";
import Stepper from "./stepper.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

export default function PageHeader() {
  return (
    <div className="mb-10">
      <div className="mx-auto max-w-[1353px] w-full h-[80px] rounded-[40px] border border-white/10 bg-[#000000]/[0.15] backdrop-blur-md shadow-sm px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="font-poppins font-semibold text-[30px] leading-none tracking-[-1px] text-[#1E1E1E] dark:text-[#22E552] select-none">cooee</div>
          <div className="translate-y-[1px]"><Stepper /></div>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}


