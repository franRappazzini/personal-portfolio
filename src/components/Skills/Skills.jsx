import { Card, Row } from "react-bootstrap";

import ItemSkill from "./ItemSkill";
import Letter from "../Letter/Letter";
import React from "react";
import { skills } from "../../utils/data/skills";

function Skills() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center section__container"
      style={{ height: "100vh" }}
    >
      <section className="d-flex" data-aos="fade-up">
        <Letter letter="S" />
        <Letter letter="k" />
        <Letter letter="i" />
        <Letter letter="l" />
        <Letter letter="l" />
        <Letter letter="s" />
      </section>

      <section className="d-flex justify-content-center" data-aos="fade-up">
        <Card bg="dark" style={{ width: "80%" }} className="mb-2">
          <Card.Body>
            <Card.Text>
              <Row>
                {skills.map((s) => (
                  <ItemSkill key={s.title} {...s} />
                ))}
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </section>
  );
}

export default Skills;
