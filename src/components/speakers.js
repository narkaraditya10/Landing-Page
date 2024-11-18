import React from "react";
import pratap from "../images/Mahavir_Pratap_Sharma-removebg-preview.png";
import arun from "../images/arjun_vaidya-removebg-preview.png";
import ashish from "../images/Ashish_Fafadia-removebg-preview.png";
import meet from "../images/MEET-removebg-preview.png";
import jeet from "../images/JEET__1_-removebg-preview.png";
import unknown from "../images/2922506-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";

function Speakers() {
  return (
    <div
      id="speakers"
      className="bg-[#4C1145] py-[60px] px-[20px] md:py-[80px] md:px-[40px] flex flex-col items-center justify-center"
    >
      <h2 className="text-[60px] text-[#fff] font-[700] font-[Eina01] ">
        Speakers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:max-w-[1280px] w-fit gap-6 gap-y-7 md:gap-8 mt-[80px]">
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            <img src={unknown} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal  flex justify-between">
              Mahavir Pratap Sharma{" "}
              <a>
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Chairman
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px]  md:text-[16px]">
              TiE India Angels and RAIN (Rajasthan Angels)
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px] ">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={unknown} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Arjun Vaidya
              <a>
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Co-Founder
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              V3 Ventures
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={unknown} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Ashish Fafadia
              <a>
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Partner
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Partner at Blume Ventures
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={unknown} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Meet Jain
              <a>
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              CEO
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Bizdateup Technology Pvt Ltd
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={unknown} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Jeet Chandan
              <a>
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Managing Director
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Bizdateup Technology Pvt Ltd
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={unknown} alt="" className="ml-2 h-[90%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Utpal Doshi
              <a>
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Partner
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Partner at 100X.VC
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end relative">
            <img src={unknown} alt="" className="ml-2 h-[90%]" />{" "}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full  bg-opacity-80 backdrop-blur blur-[5px] p-4 rounded-md"></div>
            <div className="absolute w-fit h-fit z-10 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ">
              <label className="text-[24px] text-[#4C1145] font-[600] text-center ">
                Coming
                <br /> Soon...
              </label>
            </div>
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal ">
              -
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              -
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
