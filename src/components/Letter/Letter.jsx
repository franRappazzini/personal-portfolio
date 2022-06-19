import "./Letter.css";

import React, { useState } from "react";

function Letter({ letter }) {
  const [hover, setHover] = useState(false);

  const style = {
    hover: { color: randomColor() },
    default: { color: "#ebebeb" },
  };

  function handleHover() {
    setHover(!hover);
  }

  function randomColor() {
    const colors = [
      "#ff0000",
      "#ff8700",
      "#ffd300",
      "#deff0a",
      "#a1ff0a",
      "#0aff99",
      "#0aefff",
      "#147df5",
      "#580aff",
      "#be0aff",
    ];

    return colors[Math.floor(Math.random() * 10)];
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
