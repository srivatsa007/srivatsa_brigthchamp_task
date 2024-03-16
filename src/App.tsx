import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroOne from './components/Intro/IntroOne';

function App() {

  return (
    <div className='bg-[url(/src/assets/bgImage.png)] absolute bg-contain h-screen w-screen bg-center bg-cover'>
      <Router>
      <Routes>
        <Route path="/" element={<IntroOne />} />
        {/* <Route path="/introScreen2" element={<Introductionone />} />
        <Route path="/introScreen3" element={<Introductionone />} />
        <Route path="/instructionScreen" element={<Instruction />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
  </Router>
    </div>
    
  )
}

export default App
