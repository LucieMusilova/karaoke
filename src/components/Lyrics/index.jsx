import React, { useState, useEffect, useRef } from "react";

const Lyrics = ({ lines, currentLineIndex, sing }) => {
  const lineRef = useRef();

  useEffect(() => {
    lineRef.current.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {lines.map((line, index) => (
        <p
          ref={index === currentLineIndex ? lineRef : null}
          className={index === currentLineIndex && sing ? "current-line" : ""}
          key={index}
        >
          {line.text}
        </p>
      ))}
    </div>
  );
};

export default Lyrics;
