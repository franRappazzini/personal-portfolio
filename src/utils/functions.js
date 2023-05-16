import Letter from "../components/Letter/Letter";

export const titleConvert = (text = "") => {
  return text.split("").map((l, i) => <Letter key={i} letter={l} />);
};
