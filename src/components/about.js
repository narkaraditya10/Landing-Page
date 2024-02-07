import React from "react";

function About() {
  return (
    <div className="about-section">
      <div className="about-section-stats">
        <div className="stat">
          <label>1K+</label>
          <p>ATTENDEE</p>
        </div>
        <div className="stat">
          <label>60+</label>
          <p>speakers</p>
        </div>
        <div className="stat">
          <label>20+</label>
          <p>sessions</p>
        </div>
        <div className="stat">
          <label>2+</label>
          <p>Tracks</p>
        </div>
      </div>

      <div className="flex max-w-[1280px] pt-[160px] ">
        <div className="w-[50%]">
          <h2 className="text-[#ff706b] text-[60px] font-[eina01, sans serif] font-[600]">
            About <br /> The Summit
          </h2>
        </div>
        <div className="w-[50%]  ">
          <label className="text-[18px] font-[arial] text-[#000000]">
            Today, India is at a new juncture – the advent of the{" "}
            <b>financial internet</b>. With 21 new unicorns and over $20 Bn in
            funding, India’s nascent <b>fintech market</b> is already a $75 Bn
            economy, and promises to disrupt India’s $1.3 Tn financial services
            market opportunity.
            <br />
            <br />
            Inc42’s Fintech Summit is India’s premier fintech conference which
            convenes India’s leading fintechs, financial institutions and tech
            firms under one virtual roof for a dialogue on how fintech will
            shape up India’s new economy.
            <br />
            <br /> The summit will examine the most revolutionary,
            industry-changing financial products that are shaping what comes
            next. Hear from India’s fintech leaders breaking new ground and old
            rules. <br />
            <br />
            Join us as we examine how tech is disrupting one of the world’s
            oldest industries.
          </label>
        </div>
      </div>
    </div>
  );
}

export default About;
