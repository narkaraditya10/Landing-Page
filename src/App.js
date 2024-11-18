import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Speakers from "./components/speakers";
import Bizznavbar from "./components/bizznavbar";
import Expect from "./components/expect";
import Agenda from "./components/agenda";
import Tickets from "./components/tickets";
import Sponsors from "./components/sponsors";
import Bizzfooter from "./components/bizzfooter";
import Faq from "./components/faq";
import "./App.css"

import Attendee from "./components/attendee";

function Bizzneeti() {
  return (
    <div>
      <Bizznavbar />
      <Home />
      <About />
      <Speakers />
      <Expect />
      <Attendee />
      <Agenda />
      <Tickets />
      <Faq />
      {/* <Sponsors /> */}
      <Bizzfooter />
    </div>
  );
}

export default Bizzneeti;
