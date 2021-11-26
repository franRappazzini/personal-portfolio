import React from "react";
import { Col, Image } from "react-bootstrap";
import "./ItemSkill.css";

function ItemSkill({ href, img, title }) {
  return (
    <Col xs={4} md={2}>
      <a href={href} target="_blank" rel="noopener noreferrer" align="center">
        <Image
          src={img}
          title={title}
          alt={title}
          className="img__skill my-2"
        />
      </a>
    </Col>
  );
}

export default ItemSkill;
