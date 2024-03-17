import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroOne from "./components/Intro/IntroOne";
import IntroTwo from "./components/Intro/IntroTwo";
import IntroThree from "./components/Intro/IntroThree";
import Instruction from "./components/Instr/Instruction";
import Game2 from "./components/Activity/Game2";
function App() {
  return (
    <div className="bg-[url(/src/assets/bgImage.png)] absolute bg-contain h-screen w-screen bg-center bg-cover">
      <Router>
        <Routes>
          <Route path="/" element={<IntroOne />} />
          <Route path="/introscreen2" element={<IntroTwo />} />
          <Route path="/introscreen3" element={<IntroThree />} />
          <Route path="/instructions" element={<Instruction />} />
          <Route path="/game" element={<Game2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
