import "./Letter.css";

import React, { useState } from "react";

function Letter({ letter }) {
  const [hover, setHover] = useState(false);

  const style = {
    hover: { color: randomColor() },
    default: { color: "white" },
  };

  function handleHover() {
    setHover(!hover);
  }

  function randomColor() {
    const colors = [
      "#ffbe0b",
      "#fb5607",
      "#ff006e",
      "#8338ec",
      "#3a86ff",
      "#e41f1f",
    ];
    return colors[Math.floor(Math.random() * 6)];
  }

  return (
    <span
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="letter__titles m-0"
      style={hover ? style.hover : style.default}
    >
      {letter}
    </span>
  );
}

export default Letter;
