import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Player from "./components/Player";
import "./style.css";
import lines from "./lyrics-lines";
import Lyrics from "./components/Lyrics";

const App = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const handleTimeUpdate = (timeIndex) => {
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
      <Lyrics lines={lines} currentLineIndex={currentLineIndex} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
