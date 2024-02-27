import React, { useState } from "react";

import { GoDotFill } from "react-icons/go";

const Cardflip = () => {
  const [isFlipped, setisflipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setisflipped(!isFlipped);
      setisAnimating(true);
    }
  }

  return (
    <div className=" w-fit   grid grid-cols-1 md:grid-cols-3 relative ">
      <div class="flip-card">
        <div class="flip-card-front">
          <div class="inner">
            <h1>ACTIVE & ASPIRING ANGEL INVESTORS</h1>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="inner">
            <p>
              {" "}
              <GoDotFill size={20} />
              Network with angel investors, VCs, and private equity funds.{" "}
            </p>
            <p>
              {" "}
              <GoDotFill size={20} />
              Learn from the best unicorn <br /> and decacorn founders at our
              engaging speaker sessions.
            </p>
            <p>
              {" "}
              <GoDotFill size={20} />
              Network with angel <br />
              investors, VCs, family offices, and private equity funds.
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-front">
          <div class="inner">
            <h1>VC & FAMILY OFFICES VC & FAMILY OFFICES</h1>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="inner">
            <p>
              {" "}
              <GoDotFill size={20} />
              Join us as a thought leader at the world’s largest investor
              summit.
            </p>
            <p>
              {" "}
              <GoDotFill size={20} />
              Network with 200+ top <br />
              start-ups and global startup ecosystem enablers.
            </p>
            <p>
              {" "}
              <GoDotFill size={20} />
              Enjoy specially curated <br />
              meals with startups, angel investors, and government officials.
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-front">
          <div class="inner">
            <h1>Startups</h1>
          </div>
        </div>
        <div class="flip-card-back">
          <div class="inner">
            <p>
              <GoDotFill size={20} />
              Pitch to top angel <br /> investors, VCs, family offices, and
              governments.
            </p>
            <p>
              {" "}
              <GoDotFill size={20} />
              Meet renowned angel <br />
              investors via AI-powered matchmaking.
            </p>{" "}
            <p>
              {" "}
              <GoDotFill size={20} />
              Get global recognition <br />
              for being part of the biggest angel investing event in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardflip;
