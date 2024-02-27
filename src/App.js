import "./App.css";
import About from "./components/about";
import Bizznavbar from "./components/bizznavbar";
import Bizzfooter from "./components/bizzfooter";
import Speakers from "./components/speakers";
import Expect from "./components/expect";
import Home from "./components/home";
import Agenda from "./components/agenda";
import Tickets from "./components/tickets";
import Sponsors from "./components/sponsors";
import Faq from "./components/faq";

function App() {
  return (
    <div className="App">
      <Bizznavbar />
      <Home />
      <About />
      <Speakers />
      <Expect />
      {/* <Agenda /> */}
      <Tickets />
      {/* {/* <Sponsors /> */}
      <Faq />
      <Bizzfooter />
    </div>
  );
}

export default App;
