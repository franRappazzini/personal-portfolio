import "./ItemSkill.css";

import { Col } from "react-bootstrap";
import React from "react";

function ItemSkill({ href, img, title }) {
  return (
    <Col
      xs={4}
      md={2}
      className="d-flex align-items-center justify-content-center"
    >
      <a href={href} target="_blank" rel="noopener noreferrer" align="center">
        <img src={img} title={title} alt={title} className="img__skill my-2" />
      </a>
    </Col>
  );
}

export default ItemSkill;
