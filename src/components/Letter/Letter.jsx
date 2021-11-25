import React from "react";
import "./Letter.css";

function Letter({ letter }) {
  return <span className="letter__hover m-0">{letter}</span>;
}

export default Letter;
