import React, { useState, useEffect, useRef } from "react";

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  const currentTime = (e) => {
    onTimeUpdate(e.target.currentTime);
  };

  return (
    <div className="music-player">
      <h1>Fools Garden: Lemon Tree</h1>
      <audio onTimeUpdate={currentTime} ref={audioRef} src={src} />
      <div className="player-controls">
        <button
          className={playing ? "play-button pause" : "play-button play"}
          onClick={handlePlay}
        ></button>
      </div>
    </div>
  );
};

export default Player;
