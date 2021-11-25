import React from "react";
import { Image } from "react-bootstrap";

function ItemSkill({ href, img, title }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" align="center">
      <Image
        src={img}
        title={title}
        width="100"
        alt={title}
        style={{ width: "100%", margin: "0.5rem 0" }}
      />
    </a>
  );
}

export default ItemSkill;
