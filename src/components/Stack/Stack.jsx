import { Card, Row } from "react-bootstrap";

import ItemStack from "./ItemStack";
import Letter from "../Letter/Letter";
import React from "react";
import { stack } from "../../utils/data/stack";

function Stack() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center section__container"
      style={{ height: "100vh" }}
    >
      <section className="d-flex" data-aos="fade-up">
        <Letter letter="S" />
        <Letter letter="t" />
        <Letter letter="a" />
        <Letter letter="c" />
        <Letter letter="k" />
      </section>

      <section className="d-flex justify-content-center" data-aos="fade-up">
        <Card bg="dark" style={{ width: "80%" }} className="mb-2">
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
      </section>
    </section>
  );
}

export default Stack;
