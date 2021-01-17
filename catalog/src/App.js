import './App.css';
import React from "react";
import axios from 'axios';

import BreakingBad from "./BreakingBad/BreakingBad";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BreakingBad/>
    </div>
  );
}

export default App;
