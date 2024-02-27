import React from "react";
import Cardflip from "./cardflip";

function About() {
  return (
    <div className="about-section">
      <h1 className="text-[48px] text-center font-[700] font-sans text-[#ff706b]  mt-[60px] ">
        A CONCLAVE DESIGNED FOR
      </h1>
      <Cardflip />
      <div className="about-section-stats grid grid-cols-2 md:grid-cols-4 w-full md:max-w-[1280px] md:h-[290px]  gap-[20px]  ">
        <div className="stat">
          <label>300+</label>
          <p>ATTENDEE</p>
        </div>
        <div className="stat">
          <label>10+</label>
          <p>Top 1% Speakers</p>
        </div>
        <div className="stat">
          <label>100+</label>
          <p>Angel Investors</p>
        </div>
        <div className="stat">
          <label>5</label>
          <p>Startup Pitches</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-[1280px] py-[80px] mt-[40px] px-[40px] md:t-[160px] bg-[#F2F0F8] md:bg-[#E7E5F3] ">
        <div className="md:w-[50%]">
          <h2 className="text-[#ff706b] text-[28px] md:text-[60px] font-[eina01, sans serif] font-[600]">
            About <br /> The Summit
          </h2>
        </div>
        <div className="md:w-[50%] mt-4 md:mt-0 ">
          <label className=" text-[14px] md:text-[18px] font-[arial] text-[#000000]">
            Join Angel Investors, Startup Founders, and industry experts for an
            exclusive gathering at the Lalit Mumbai on March 17th, 2024.
            <br />
            Gain valuable insights, network with key players, and discover the
            next generation of innovative startups.
            <br />
            The Startup Investor's Conclave - Mumbai is not just an event; it's
            a catalyst for connection, investment, and innovation. It's your
            chance to be a part of shaping the future of Indian startups and
            propel yourself to the forefront of this exciting ecosystem.weather
            you are a seasoned investor looking for top 1& startups to invest in
            and grow your fortune or you are a startup founder looking for
            funding opportunities, mentorship and the right network you can get
            all in under one roof at this event . <br />
            Limited seats available. Register today!
          </label>
        </div>
      </div>
    </div>
  );
}

export default About;
