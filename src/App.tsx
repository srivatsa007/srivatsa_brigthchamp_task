import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroOne from "./components/Intro/IntroOne";
import IntroTwo from "./components/Intro/IntroTwo";
import IntroThree from "./components/Intro/IntroThree";
import Instruction from "./components/Instr/Instruction";
import Game from "./components/progressBar/Game";
function App() {
  return (
    <div className="bg-[url(/src/assets/bgImage.png)] absolute bg-contain h-screen w-screen bg-center bg-cover">
      <Router>
        <Routes>
          <Route path="/" element={<IntroOne />} />
          <Route path="/introscreen2" element={<IntroTwo />} />
          <Route path="/introscreen3" element={<IntroThree />} />
          <Route path="/intstructions" element={<Instruction />} />
          <Route path="/game" element={<Game />} />
          {/*  <Route path="/introScreen3" element={<Introductionone />} />
        <Route path="/instructionScreen" element={<Instruction />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
