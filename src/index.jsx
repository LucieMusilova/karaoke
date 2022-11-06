import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Player from "./components/Player";
import "./style.css";
import lines from "./lyrics-lines";
import Lyrics from "./components/Lyrics";

const App = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [sing, setSing] = useState(false);

  const handleTimeUpdate = (timeIndex) => {
    if (timeIndex > lines[0].time) {
      setSing(true);
    }
    lines.forEach((element, index) => {
      if (element.time < timeIndex) {
        setCurrentLineIndex(index);
      }
    });
  };

  return (
    <div className="container">
      <Player
        src="fools-garden-lemon-tree.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <Lyrics sing={sing} lines={lines} currentLineIndex={currentLineIndex} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
