import "./Letter.css";

import React from "react";
import { useColor } from "../../hooks/useColor";

function Letter({ letter }) {
  const { handleHover, hover, styleLetter } = useColor();

  return (
    <span
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="letter__titles m-0"
      style={hover ? styleLetter.hover : styleLetter.default}
    >
      {letter}
    </span>
  );
}

export default Letter;
