import "./ItemStack.css";

import { Col } from "react-bootstrap";
import React from "react";

function ItemStack({ href, img, title }) {
  return (
    <Col
      xs={4}
      md={2}
      className="d-flex align-items-center justify-content-center"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        align="center"
        className="text__stack d-flex flex-column align-items-center"
      >
        <img src={img} title={title} alt={title} className="img__stack my-3" />
        {title}
      </a>
    </Col>
  );
}

export default ItemStack;
