import React from "react";

function Bizznavbar() {
  return (
    <nav className="fixed z-10 flex justify-center w-full">
      <div className="flex justify-between w-full max-w-[1280px] h-[60px] rounded-b-[16px] bg-[#4C1145] py-[8px] px-[10px] ">
        <div className="flex gap-3 w-full">
          <div className="bg-[#551D4E] h-fit p-[8px] text-[20px] leading-none rounded-[8px] text-[#fff] font-[600]  ">
            Inssc
          </div>
          <div></div>
          <div className="h-[40px] rounded-[8px] w-[600px] bg-[#0000001a] flex justify-between">
            <label className="text-[#fff] text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              About
            </label>
            <label className="text-[#fff] text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              Benefit
            </label>
            <label className="text-[#fff] text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              Speaker
            </label>
            <label className="text-[#fff] text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              Agenda
            </label>
            <label className="text-[#fff] text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              Our Sponsors
            </label>
            <label className="text-[#fff] text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              FAQ
            </label>
          </div>
        </div>

        <div className="flex gap-2 w-1/2 justify-end ">
          <div className="py-[8px] px-[12px] h-[40px] bg-[#000] text-[15px] text-[#fff] leading-none font-mono  rounded-[8px] ">
            01-02 July 2022. Virtual
          </div>
          <div className="py-[12px] px-[16px] h-[40px] bg-[#ff7068] text-[14px] text-[#fff] leading-none font-mono rounded-[8px] ">
            Register Now
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Bizznavbar;
