import React from "react";

function Tickets() {
  return (
    <div className="bg-[#fff] py-[80px] px-[40px] flex flex-col items-center justify-center ">
      <div className="max-w-[1280px] w-full flex justify-center py-[40px] bg-[#4C1145] rounded-[16px] ">
        <h2 className="text-[#fff] text-[60px] font-[Eina01] font-[700] uppercase  ">
          tickets
        </h2>{" "}
      </div>
      <div className="bg-[#1A0C18] max-w-[1280px] w-full rounded-[16px] overflow-hidden  mt-4 ">
        <div className="w-full h-[60px] bg-[#4C1145]  "></div>
        <div className="p-[20px] flex justify-center">
          <div className="bg-[#ffffff] max-w-[340px] w-full rounded-[16px] p-[28px] ">
            <div className="flex">
              <div>
                <div className="py-1 px-2 bg-[#333333] text-[10px] font-mono tracking-[2px] text-white uppercase rounded-[5px] ">
                  On-Demand Session
                </div>
                <div className="text-[28px] font-[Eina01, sans] text-[#1a1725] font-[600] leading-[1.2] py-3">
                  Inc42 <br /> Academy
                  <br /> Pass
                </div>
                <div className="flex gap-2">
                  <div className="text-[20px] text-[#ff706b] font-[arial]  font-[700] ">
                    <span className="text-[10px]">
                      <sup>INR</sup>
                    </span>{" "}
                    4999
                  </div>
                  <div className="text-[20px] font-[arial] text-[#81818180]  ">
                    <del>9999</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
