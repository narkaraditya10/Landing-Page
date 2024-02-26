import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Tickets() {
  return (
    <div className="bg-[#fff] md:py-[80px] md:px-[40px] flex flex-col items-center justify-center ">
      <div className="max-w-[1280px] w-full flex justify-center py-[40px] bg-[#4C1145] md:rounded-[16px] ">
        <h2 className="text-[#fff] text-[60px] font-[Eina01] font-[700] uppercase  ">
          tickets
        </h2>{" "}
      </div>
      <div className="bg-[#1A0C18] max-w-[1280px] w-full md:rounded-[16px] overflow-hidden  mt-4 ">
        <div className="w-full h-[60px] bg-[#4C1145]  "></div>
        <div className="p-[20px] flex flex-col items-center md:flex-row justify-center gap-6 ">
          <div className="bg-[#ffffff] max-w-[340px] w-full rounded-[16px] p-[28px] ">
            <div className="flex">
              <div>
                <div className="py-1 px-2 bg-[#333333] text-[10px] font-mono tracking-[2px] w-fit text-white uppercase rounded-[5px] ">
                  On-Demand Session
                </div>
                <div className="text-[28px] font-[Eina01, sans] text-[#1a1725] font-[600] leading-[1.2] py-3">
                  Investor/Attendee Pass
                </div>
                <label className="text-[20px] font-[Eina01, sans] text-[#1a1725] font-[400] leading-[1.2] py-3 ">
                  The perfect plan for those looking to invest funds.
                </label>
                <div className="flex gap-2 items-center mt-4">
                  <div className="text-[48px] text-[#ff706b] font-[arial]  font-[700] ">
                    ₹4999
                  </div>
                  <div className="text-[16px] font-[arial] text-[#81818180]  ">
                    <del>/₹10,000</del>
                  </div>
                </div>
                <ul className=" flex flex-col text-[18px] gap-2">
                  <li className="flex gap-2 items-start w-full">
                    <RxCross2 color="red" size={20} />
                    Direct pitch to Investors
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <RxCross2 color="red" size={20} /> VIP and Speaker Lounge
                    Access
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    {" "}
                    <FaCheck color="#009100" /> Identified as an Individual
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" />
                    Opportunity to Invest in <br />
                    Pitching Startup
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    {" "}
                    <FaCheck color="#009100" />
                    Networking coffee breaks
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> Personal marketing & branding
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    {" "}
                    <FaCheck color="#009100" />5 star arrangements for <br />
                    Lunch & High-Tea
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    {" "}
                    <FaCheck color="#009100" />
                    Networking meet with Startups
                  </li>
                </ul>
                <button className="w-full py-2 mt-2 border-[1px] border-[#000] rounded-[20px]">
                  Book Ticket (50% Discount)
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] max-w-[340px] w-full rounded-[16px] p-[28px] ">
            <div className="flex">
              <div>
                <div className="py-1 px-2 bg-[#333333] text-[10px] font-mono tracking-[2px] w-fit text-white uppercase rounded-[5px] ">
                  On-Demand Session
                </div>
                <div className="text-[28px] font-[Eina01, sans] text-[#1a1725] font-[600] leading-[1.2] py-3">
                  Participate as a Startup
                </div>
                <label className="text-[20px] font-[Eina01, sans] text-[#1a1725] font-[400] leading-[1.2] py-3 ">
                  The perfect plan for those looking to raise investor funds.
                </label>
                <div className="flex gap-2 items-center mt-4">
                  <div className="text-[48px] text-[#ff706b] font-[arial]  font-[700] ">
                    ₹19,999
                  </div>
                  <div className="text-[16px] font-[arial] text-[#81818180]  ">
                    <del>/ ₹34,999</del>
                  </div>
                </div>
                <ul className=" flex flex-col text-[18px] gap-2">
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> Direct pitch to Investors
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    {" "}
                    <FaCheck color="#009100" />
                    VIP and Speaker Lounge Access
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> Identified as an Individual
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    {" "}
                    <FaCheck color="#009100" />
                    Opportunity to Invest in
                    <br /> Pitching Startup
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> Networking coffee breaks
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> Personal marketing & branding
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> 5 star arrangements for
                    <br /> Lunch & High-Tea
                  </li>
                  <li className="flex gap-2 items-start w-full">
                    <FaCheck color="#009100" /> Networking meet with Startups
                  </li>
                </ul>
                <button className="w-full py-2 mt-2 border-[1px] border-[#000] rounded-[20px]">
                  Apply Now (43% Discount)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
