import { useState } from "react";

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

export const useColor = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(!hover);
  const randomColor = () => colors[Math.floor(Math.random() * 10)];

  const styleBall = {
    hover: { border: `2px solid ${randomColor()}` },
    default: { border: "2px solid whitesmoke" },
  };

  const styleLetter = {
    hover: { color: randomColor() },
    default: { color: "#ebebeb" },
  };

  return { handleHover, hover, styleBall, styleLetter };
};
