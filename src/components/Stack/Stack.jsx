import "./Stack.css";

import { Card, Row } from "react-bootstrap";

import ItemStack from "./ItemStack";
import React from "react";
import Tilt from "react-parallax-tilt";
import { stack } from "../../utils/data/stack";
import { titleConvert } from "../../utils/functions";

const title = "Stack";

function Stack() {
  const innerWidth = window.innerWidth;

  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center section__container"
      style={{ minHeight: "100vh" }}
    >
      <section className="d-flex" data-aos="fade-up">
        {titleConvert(title)}
      </section>

      <Tilt
        tiltEnable={innerWidth < 820 ? false : true}
        className="d-flex justify-content-center"
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
      >
        <Card bg="dark" className="mb-2 card-stack__container" data-aos="fade-up">
          <Card.Body>
            <Card.Text>
              <Row>
                {stack.map((s) => (
                  <ItemStack key={s.title} {...s} />
                ))}
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Tilt>
    </section>
  );
}

export default Stack;
